# 证书配置

## 1.1 生成自签证书

首先在console下进入multi-connectors-service的resources目录

然后执行以下命令生成自签证书文件：

   keytool -genkey -alias liumapp -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore keystore.p12 -validity 3650
   
稍后会出来一些信息需要我们进行录入：   
    
    Enter keystore password: 123456    
    
    Re-enter new password: 123456
    
    What is your first and last name?
      [Unknown]:  lium
    What is the name of your organizational unit?
      [Unknown]:  full stack developer
    What is the name of your organization?
      [Unknown]:  spring4all
    What is the name of your City or Locality?
      [Unknown]:  Hangzhou
    What is the name of your State or Province?
      [Unknown]:  Zhejiang
    What is the two-letter country code for this unit?
      [Unknown]:  CN
    Is CN=lium, OU=full stack developer, O=spring4all, L=Hangzhou, ST=Zhejiang, C=CN correct?
      [no]:  y

录入结束后，会在当前目录，即resource目录下生成一个名为"keystore.p12"的文件，该文件内包含了一张自签证书

## 1.2 配置后端项目

打开SpringBoot的项目配置文件application.yml，添加以下配置项：

    server:
      port: 2525
      ssl:
        key-store: classpath:keystore.p12
        key-store-password: 123456
        keyStoreType: PKCS12
        keyAlias: liumapp
    
其中ssl配置项的值取决于生成证书时设置的值

## 1.3 配置前端项目

没错，您没有看错标题，前端也是要配置的

因为我们使用的证书为自签证书，是不受浏览器信任的，所以前端跟后端之间的ajax交互将无法被浏览器放行

当然，如果您使用的是数字证书颁发机构发行的SSL证书，那么请无视

具体配置文件的内容为multi-connectors-ui目录下的src/libs/httpsUtil.js

主要的配置内容为:

        var httpAdapter = require('axios/lib/adapters/http');
        
        httpsUtil.http = axios.create({
        
          adapter: httpAdapter,
        
          baseURL: ajaxUrl,
        
          timeout:5000,
        
          headers: {
            'Content-Type':'application/json; charset=UTF-8'
          }
        
        });

随后前端再使用httpsUtil.http去发起https协议的get或者post请求即可

### 1.3.1 配置解析

那么为什么前端这样配置一下，就可以解决axios请求自签证书后台的问题了呢？

因为nodejs默认已经帮我们解决了：ajax调用自签证书接口的问题

只不过默认情况下axios是采用xmlhttprequest来实现http client

而xmlhttprequest是无法调用自签名后台请求的

所以我们强制切换到nodejs的adapter就可以了

到这里，我们的前端项目就可以向后端的https接口发出请求，并获取响应

但，如果我既想要https，又想要http呢？

# 同时支持http/https



    @Value("${server.custom.httpPort}")
    private Integer httpPort;

    @Value("${server.port}")
    private Integer httpsPort;

    @Bean
    public EmbeddedServletContainerFactory servletContainerFactory () {
        TomcatEmbeddedServletContainerFactory tomcat = new TomcatEmbeddedServletContainerFactory() {
            @Override
            protected void postProcessContext(Context context) {
                SecurityConstraint securityConstraint = new SecurityConstraint();
                securityConstraint.setUserConstraint("CONFIDENTIAL");
                SecurityCollection collection = new SecurityCollection();
                collection.addPattern("/*");
                securityConstraint.addCollection(collection);
                context.addConstraint(securityConstraint);
            }
        };

        tomcat.addAdditionalTomcatConnectors(initiateHttpConnector());
        return tomcat;
    }

    private Connector initiateHttpConnector() {
        Connector connector = new Connector("org.apache.coyote.http11.Http11NioProtocol");
        connector.setScheme("http");
        connector.setPort(this.httpPort);
        connector.setSecure(false);
        connector.setRedirectPort(this.httpsPort);

        return connector;
    }




    


