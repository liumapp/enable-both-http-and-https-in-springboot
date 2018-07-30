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
      <Col span="4" offset="8">鼠标移动到<Icon type="help-circled"></Icon>来查看参数</Col>
    </Row>
    <br>
    <Row class="keep-center">
      <Col span="4" offset="8"> 发起GET请求获取响应：</Col>
      <Col span="2">
        <Button type="success" @click="submitGet">点我</Button>
      </Col>
      <Col span="2">
        <Tooltip :content="getParamDesc" placement="right">
          <Icon type="help-circled" size="25"></Icon>
        </Tooltip>
      </Col>
    </Row>
    <br>
    <Row class="keep-center">
      <Col span="4" offset="8">发起POST请求获取响应：</Col>
      <Col span="2">
        <Button type="success" @click="submitPost">点我</Button>
      </Col>
      <Col span="2">
        <Tooltip :content="postParamDesc" placement="right">
          <Icon type="help-circled" size="25"></Icon>
        </Tooltip>
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="4" offset="8">
        <Button type="primary" @click="goNext">去下一步看看</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
import util from '@/libs/util'

export default {
  name: 'test-http',
  data () {
    return {
      getParamDesc: '向后端传一个number=1，后端进行自增后获取返回结果',
      postParamDesc: '向后端传一个number=2，后端进行乘2操作后获取返回结果'
    }
  },
  methods: {
    submitGet () {
      util.httpGet('/get?number=' + 1).then(res => {
        this.$Message.success('get result from backend:' + res.data.result);
      });
    },
    submitPost () {
      util.httpPost('/post', {number: 2}).then(res => {
        this.$Message.success('get result from backend:' +res.data.result);
      })
    },
    goNext () {
      this.$emit('next');
    }
  }
}

</script>
<style lang="less">
.keep-center {

  .ivu-col {
    height: 50px;
    line-height: 50px;

    .ivu-icon {
      padding-top: 11px;
    }

  }

}
</style>
