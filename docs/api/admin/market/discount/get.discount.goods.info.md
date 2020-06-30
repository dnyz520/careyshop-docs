# 根据商品编号获取折扣信息

#### 接口描述：
- 根据商品编号获取折扣信息。

#### 请求 URL：
- `http|https://host/api/v1/discount/method/get.discount.goods.info/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt[]:0 | |[13,4] |商品编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |端午促销 |折扣名称 |
|type |integer |是 |0 |折扣方式，详见[「附属 A」](https://doc.careyshop.cn/docs/admin_api/a-21523327617 "「附属 A」") |
|goods_id |integer |是 |13 |商品编号 |
|discount |string |是 |50 |折扣商品折扣额 |
|begin_time |datetime |是 |2018-05-24 23:00:00 |折扣开始时间 |
|end_time |datetime |是 |2018-06-24 23:00:00 |折扣结束时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "name": "端午促销",
      "type": 0,
      "goods_id": 13,
      "discount": 50,
      "begin_time": "2018-05-24 23:00:00",
      "end_time": "2018-06-24 23:00:00"
    },
    {
      "name": "端午促销",
      "type": 0,
      "goods_id": 4,
      "discount": 65,
      "begin_time": "2018-05-24 23:00:00",
      "end_time": "2018-06-24 23:00:00"
    }
  ]
}
```

#### 备注:
无