/**
 * @file util.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 2018/7/30
 */

import axios from 'axios';
import Cookies from 'js-cookie';
import { Message } from 'iview';

let util = {

};

util.title = function (title) {
  title = title || 'multi connectiors demo';
  window.document.title = title;
};

const ajaxHttpUrl = 'http://localhost:2525/';
const ajaxHttpsUrl = 'https://localhost:2525/';

util.ajaxHttpUrl = ajaxHttpUrl;
util.ajaxHttpsUrl = ajaxHttpsUrl;

util.ajax = axios.create({
  timeout: 30000
});

util.httpPost = function (url, data) {
  return axios({
    method: 'post',
    baseURL: ajaxHttpUrl,
    url,
    data: data,
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }).then(
    (response) => {
      return this.checkStatus(response);
    }
  )
};

util.httpsPost = function (url, data) {
  return axios({
    method: 'post',
    baseURL: ajaxHttpsUrl,
    url,
    data: data,
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }).then(
    (response) => {
      return this.checkStatus(response);
    }
  )
};

util.httpGet = function (url, data) {
  return axios({
    method: 'get',
    baseURL: ajaxHttpUrl,
    url,
    data: data,
    timeout: 5000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }).then (
    (response) => {
      return this.checkStatus(response);
    }
  );
};

util.httpsGet = function (url, data) {
  return axios({
    method: 'get',
    baseURL: ajaxHttpsUrl,
    url,
    data: data,
    timeout: 5000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }).then (
    (response) => {
      return this.checkStatus(response);
    }
  );
};

util.checkStatus = function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  // console.log(response)
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response;
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  Message.warning('网络异常');
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  };
};

util.randNumber = function (n) {
  let rnd = "";
  for (let i = 0 ; i < n ; i++) {
    rnd += Math.floor(Math.random()*10);
  }
  return rnd;
};

export default util;
