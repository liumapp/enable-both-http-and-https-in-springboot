package com.liumapp.demo.https.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author liumapp
 * @file IndexController.java
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 2018/7/30
 */
@RestController
@RequestMapping("")
public class IndexController {

    @RequestMapping("/get")
    public String autoIncreate (@RequestParam Integer number) {
        number = number ++;
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("result", number);
        return JSON.toJSONString(jsonObject);
    }

    @RequestMapping("/post")
    public String autoMulti (@RequestParam Integer number) {
        number = number * 2;
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("result", number);
        return JSON.toJSONString(jsonObject);
    }

}
