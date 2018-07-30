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
        <test-http v-if="current == 0"></test-http>
        <test-https v-else-if="current == 1"></test-https>
        <div v-else>
          wrong current value.
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import TestHttp from '@/components/test-http'
import TestHttps from '@/components/test-https'
export default {
  name: 'index',
  components: {
    TestHttp, TestHttps
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    nextStep () {
      this.current++;
    },
    prevStep () {
      this.current--;
    }
  }
}
</script>
