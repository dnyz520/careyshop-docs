# 获取商品折扣列表

#### 接口描述：
- 获取商品折扣列表。

#### 请求 URL：
- `http|https://host/api/v1/discount/method/get.discount.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |否 |max:100 | |端午 |折扣名称 |
|status |integer |否 |in:0,1 | |1 |折扣状态 0=禁用 1=启用 |
|type |integer |否 |in:0,1,2,3 | |0 |折扣方式，详见[「附属 A」](https://doc.careyshop.cn/docs/admin_api/a-21523327617 "「附属 A」") |
|begin_time |datetime |否 |date | |2018-05-26 00:00:00 |折扣开始时间 |
|end_time |datetime |否 |date | |2018-06-26 00:00:00 |折扣结束时间 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |discount_id |status |排序字段 |

> 附属 A：
in:promotion_id,name,all_goods,begin_time,end_time,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |102 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |端午促销 |折扣名称 |
|discount_id |integer |是 |38 |折扣编号 |
|type |integer |是 |0 |折扣方式，详见[「附属 A」](https://doc.careyshop.cn/docs/admin_api/a-21523327617 "「附属 A」") |
|begin_time |datetime |是 |2018-05-24 23:00:00 |折扣开始时间 |
|end_time |datetime |是 |2018-06-24 23:00:00 |折扣结束时间 |
|status |integer |是 |1 |折扣状态 0=禁用 1=启用 |
|discount_goods |array |是 |[] |折扣商品数组 |

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
    "items": [
      {
        "discount_id": 38,
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
        ]
      },
      {
        "discount_id": 37,
        "name": "优惠劵赠送",
        "type": 3,
        "begin_time": "2017-12-31 21:47:00",
        "end_time": "2018-02-02 00:00:00",
        "status": 1,
        "discount_goods": [
          {
            "goods_id": 89,
            "discount": 10
          },
          {
            "goods_id": 93,
            "discount": 10
          }
        ]
      }
    ],
    "total_result": 10
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。