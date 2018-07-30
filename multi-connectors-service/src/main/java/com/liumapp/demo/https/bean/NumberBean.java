package com.liumapp.demo.https.bean;

import org.springframework.stereotype.Component;

/**
 * @author liumapp
 * @file NumberBean.java
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 2018/7/30
 */
@Component
public class NumberBean {

    private Integer number;

    public NumberBean() {
    }

    public NumberBean(Integer number) {
        this.number = number;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }
}
