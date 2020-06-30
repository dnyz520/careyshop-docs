# 获取订单促销列表

#### 接口描述：
- 获取订单促销列表。

#### 请求 URL：
- `http|https://host/api/v1/promotion/method/get.promotion.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |否 |max:100 | |店庆 |促销名称 |
|status |integer |否 |in:0,1 | |1 |促销状态 0=禁用 1=启用 |
|begin_time |datetime |否 |beforeTime:end_time | |2018-06-01 00:00:00 |促销开始时间 |
|end_time |datetime |否 |afterTime:begin_time | |2018-06-30 00:00:00 |促销结束时间 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |promotion_id |status |排序字段 |

> 附属 A：
in:discount_id,name,default_dct,begin_time,end_time,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |28 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|promotion_id |integer |是 |106 |促销编号 |
|name |string |是 |端午订单促销 |促销名称 |
|begin_time |datetime |是 |2018-05-26 15:20:23 |促销开始时间 |
|end_time |datetime |是 |2018-06-26 15:20:23 |促销结束时间 |
|status |integer |是 |1 |促销状态 0=禁用 1=启用 |
|promotion_item |array |否 |[] |促销方式 |

|promotion_item|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|quota |number |是 |500 |促销限额 |
|settings |array |是 |[] |促销方式项数组 |

|settings|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|type |integer |是 |1 |促销方式类型，详见`备注` |
|value |number |是 |80 |促销方式数值 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "promotion_id": 107,
        "name": "店庆",
        "begin_time": "2018-06-26 15:20:24",
        "end_time": "2018-06-28 15:20:24",
        "status": 1,
        "promotion_item": [
          {
            "quota": 500,
            "settings": [
              {
                "type": "2",
                "value": "0"
              }
            ]
          }
        ]
      },
      {
        "promotion_id": 106,
        "name": "端午订单促销",
        "begin_time": "2018-05-26 15:20:23",
        "end_time": "2018-06-26 15:20:23",
        "status": 1,
        "promotion_item": [
          {
            "quota": 500,
            "settings": [
              {
                "type": "1",
                "value": "80"
              }
            ]
          },
          {
            "quota": 1000,
            "settings": [
              {
                "type": "1",
                "value": "70"
              },
              {
                "type": "3",
                "value": "1000"
              }
            ]
          }
        ]
      }
    ],
    "total_result": 28
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。

2. 请参考[「添加一个订单促销」](https://doc.careyshop.cn/docs/admin_api/a-21523337289 "「添加一个订单促销」")中的备注说明。