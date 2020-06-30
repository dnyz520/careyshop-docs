# 添加一个商品折扣

#### 接口描述：
- 添加一个商品折扣。

#### 请求 URL：
- `http|https://host/api/v1/discount/method/add.discount.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |是 |max:100 | |端午促销 |折扣名称 |
|type |integer |是 |in:0,1,2,3 | |0 |折扣方式，详见`附属 A` |
|begin_time |datetime |是 |date | |2018-05-24 23:00:00 |折扣开始时间 |
|end_time |datetime |是 |date | |2018-06-24 23:00:00 |折扣结束时间 |
|status |integer |否 |in:0,1 |1 |1 |折扣状态 0=禁用 1=启用 |
|discount_goods |array |是 |min[]:1 | |见`附属 B` |折扣商品 |

> 附属 A：
0=打折 1=减价 2=固定价格 3=送优惠劵

|附属 B|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt:0 | |13 |折扣商品编号 |
|discount |number |是 |gt:0 | |50 |折扣商品折扣额 |

示例 B:
```json
[
    {
        "goods_id": 13,
        "discount": 50
    },
    {
        "goods_id": 4,
        "discount": 65
    }
]
```

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |端午促销 |折扣名称 |
|type |integer |是 |0 |折扣方式，详见`附属 A` |
|begin_time |datetime |是 |2018-05-24 23:00:00 |折扣开始时间 |
|end_time |datetime |是 |2018-06-24 23:00:00 |折扣结束时间 |
|status |integer |否 |1 |折扣状态 0=禁用 1=启用 |
|discount_goods |array |是 |[] |折扣商品数组 |
|discount_id |integer |是 |38 |折扣编号 |

|discount_goods|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_id |integer |是 |4 |折扣商品编号 |
|discount |number |是 |65 |折扣商品折扣额 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "name": "端午促销",
    "type": 0,
    "begin_time": "2018-05-24 23:00:00",
    "end_time": "2018-06-24 23:00:00",
    "status": 1,
    "discount_goods": [
      {
        "goods_id": 13,
        "discount": 50
      },
      {
        "goods_id": 4,
        "discount": 65
      }
    ],
    "discount_id": 38
  }
}
```

#### 备注:
1. 每一个商品都可以有单独的折扣额。

2. 参数`type`对应不同的值时，其`discount_goods`下的`discount`字段实际作用会有很大不同。
	+ 当`type=0`时表示`discount`的作用是打折额度，比如`65`表示按`6.5`折结算。
	* 当`type=1`时表示`discount`的作用是减多少额度，比如`65`表示在原价的基础上减去`65`。
	* 当`type=2`时表示`discount`的作用是固定价格，比如`65`则按`65`的价格结算。
	* 当`type=3`时表示`discount`的作用是赠送的优惠劵编号，订单完成后送`coupon_id=65`的优惠劵给顾客。