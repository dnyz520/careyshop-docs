# 添加一个订单促销

#### 接口描述：
- 添加一个订单促销。

#### 请求 URL：
- `http|https://host/api/v1/promotion/method/add.promotion.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |是 |max:100 | |端午订单促销 |促销名称 |
|begin_time |datetime |是 |date | |2018-05-26 15:20:23 |促销开始时间 |
|end_time |datetime |是 |date | |2018-06-26 15:20:23 |促销结束时间 |
|status |integer |否 |in:0,1 |1 |1 |促销状态 0=禁用 1=启用 |
|promotion_item |array |是 |min[]:1 |[] |详见`promotion_item` |促销方式 |

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
|name |string |是 |端午订单促销 |促销名称 |
|begin_time |datetime |是 |2018-05-26 15:20:23 |促销开始时间 |
|end_time |datetime |是 |2018-06-26 15:20:23 |促销结束时间 |
|status |integer |否 |1 |促销状态 0=禁用 1=启用 |
|promotion_item |array |是 |[] |促销方式 |
|promotion_id |integer |是 |98 |促销编号 |

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
    ],
    "promotion_id": 98
  }
}
```

#### 备注:
1. 一个订单促销活动可以有多个`促销方式`，并且每个`促销方式`下面可以有多个`促销方式项`。

2. 参数`type`值的不同，对应参数`value`的作用就不同。
	+ 当`type=0`时，`value`的作用是在原价的基础上减去`value`值。
	+ 当`type=1`时，`value`的作用是按`value`的值进行打折(80表示8折)计算。
	+ 当`type=2`时，`value`的作用是该笔订单免邮，此时`value`的值可以填`0`。
	+ 当`type=3`时，`value`的作用是订单完成后额外赠送`value`值的积分。
	+ 当`type=4`时，`value`的作用是订单完成后赠送`value`值的优惠劵(等同于`coupon_id=65`)。