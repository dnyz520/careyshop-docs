# 获取正在进行的促销列表

#### 接口描述：
- 获取正在进行的促销列表。

#### 请求 URL：
- `http|https://host/api/v1/promotion/method/get.promotion.active/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
| | | | | | | | |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|promotion_id |integer |是 |106 |促销编号 |
|name |string |是 |端午订单促销 |促销名称 |
|begin_time |datetime |是 |2018-05-26 15:20:23 |促销开始时间 |
|end_time |datetime |是 |2018-06-26 15:20:23 |促销结束时间 |
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
    "promotion_item": [
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
      },
      {
        "quota": 500,
        "settings": [
          {
            "type": "1",
            "value": "80"
          }
        ]
      }
    ]
  }
}
```

#### 备注:
1. 请参考[「添加一个订单促销」](https://doc.careyshop.cn/docs/admin_api/a-21523337289 "「添加一个订单促销」")中的备注说明。