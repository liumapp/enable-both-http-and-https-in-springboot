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


    


