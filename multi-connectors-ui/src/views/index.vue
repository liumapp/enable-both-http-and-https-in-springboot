/**
 * @file index.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 2018/7/30
 */
<template>
  <div>
    <Row>
      <Col span="18" offset="3">
      <Card>
        <Steps :current="current">
          <Step title="http协议测试" content="前端以GET/POST发起http请求"></Step>
          <Step title="https协议测试" content="前端以GET/POST发起https请求"></Step>
        </Steps>
        <doc-upload v-if="current == 0" @next="nextStep" @setDocData="setDocData" :convertId="convertId"></doc-upload>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      current: 0
    }
  }
}
</script>
