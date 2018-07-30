package com.liumapp.demo.https.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.liumapp.demo.https.bean.NumberBean;
import org.springframework.web.bind.annotation.*;

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
        number += 1;
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("result", number);
        return JSON.toJSONString(jsonObject);
    }

    @RequestMapping("/post")
    public String autoMulti (@RequestBody NumberBean bean) {
        Integer number = bean.getNumber();
        number *=  2;
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("result", number);
        return JSON.toJSONString(jsonObject);
    }

}
