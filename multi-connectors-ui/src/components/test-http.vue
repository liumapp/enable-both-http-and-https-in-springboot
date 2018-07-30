/**
 * @file test-http.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 2018/7/30
 */
<template>
  <div>
    <br>
    <Row>
      <Col span="4" offset="8"> 发起GET请求获取响应：</Col>
      <Col span="8">
        <Button type="success" @click="submitGet">点我</Button>
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="4" offset="8">发起POST请求获取响应：</Col>
      <Col span="8">
        <Button type="success" @click="submitPost">再点我呀</Button>
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="4" offset="8">
        <Button type="primary" @click="next">去下一步看看</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'test-http'
}
</script>
