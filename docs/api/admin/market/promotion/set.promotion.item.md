# 编辑一个订单促销

#### 接口描述：
- 编辑一个订单促销。

#### 请求 URL：
- `http|https://host/api/v1/promotion/method/set.promotion.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|promotion_id |integer |是 |gt:0 | |106 |促销编号 |
|name |string |否 |max:100 | |端午订单促销 |促销名称 |
|begin_time |datetime |否 |date | |2018-05-26 15:20:23 |促销开始时间 |
|end_time |datetime |否 |date | |2018-06-26 15:20:23 |促销结束时间 |
|status |integer |否 |in:0,1 | |1 |促销状态 0=禁用 1=启用 |
|promotion_item |array |否 |min[]:1 | |详见`promotion_item` |促销方式 |

|promotion_item|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|quota |number |是 |gt:0 | |500 |促销限额 |
|settings |array |是 |array | |详见`settings` |促销方式项 |

|settings|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|type |integer |是 |in:0,1,2,3,4 | |1 |促销方式类型，见附属 A，注意`备注`|
|value |number |是 |gt:0 | |80 |促销方式数值 |

> 附属 A：
0=减价 1=打折 2=免邮 3=送积分 4=送优惠劵

> `promotion_item`完整示例：
```json
[
    {
        "quota": 500,
        "settings": [
            {
                "type": 1,
                "value": 80
            }
        ]
    },
    {
        "quota": 1000,
        "settings": [
            {
                "type": 1,
                "value": 70
            },
            {
                "type": 3,
                "value": 1000
            }
        ]
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
|name |string |否 |端午订单促销 |促销名称 |
|promotion_id |integer |是 |106 |促销编号 |
|begin_time |datetime |否 |2018-05-26 15:20:23 |促销开始时间 |
|end_time |datetime |否 |2018-06-26 15:20:23 |促销结束时间 |
|status |integer |否 |1 |促销状态 0=禁用 1=启用 |
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
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。

2. 请参考[「添加一个订单促销」](https://doc.careyshop.cn/docs/admin_api/a-21523337289 "「添加一个订单促销」")中的备注说明。