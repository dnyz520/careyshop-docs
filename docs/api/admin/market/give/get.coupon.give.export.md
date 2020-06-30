# 导出线下生成的优惠劵

#### 接口描述：
- 导出线下生成的优惠劵。

#### 请求 URL：
- `http|https://host/api/v1/coupon_give/method/get.coupon.give.export/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|coupon_id |integer |是 |gt:0 | |5 |优惠劵编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|coupon_give_id |integer |是 |8 |优惠劵发放编号 |
|exchange_code |string |是 |oAPZPx64kG |优惠劵兑换码 |
|use_time |datetime |是 |2018-05-24 17:00:00 |使用时间 |
|create_time |datetime |是 |2018-05-24 15:07:19 |创建时间 |
|is_delete |integer |是 |0 |是否在回收站 0=否 1=是 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "coupon_give_id": 8,
      "exchange_code": "oAPZPx64kG",
      "use_time": "",
      "create_time": "2018-05-24 15:07:19",
      "is_delete": 0
    },
    {
      "coupon_give_id": 9,
      "exchange_code": "8TxQqQ2TUV",
      "use_time": "",
      "create_time": "2018-05-24 15:07:19",
      "is_delete": 0
    }
  ]
}
```

#### 备注:
无