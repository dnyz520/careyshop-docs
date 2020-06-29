# 获取配送方式选择列表

#### 接口描述：
- 获取配送方式选择列表。

#### 请求 URL：
- `http|https://host/api/v1/delivery/method/get.delivery.select/`

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
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|delivery_id |integer |是 |4 |配送方式编号 |
|name |string |是 |中通速递 |快递公司名称 |
|code |string |是 |ZTO |快递公司编码 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "delivery_id": 4,
      "name": "中通速递",
      "code": "ZTO"
    },
    {
      "delivery_id": 6,
      "name": "韵达快递",
      "code": "YD"
    },
    {
      "delivery_id": 5,
      "name": "圆通速递",
      "code": "YTO"
    },
    {
      "delivery_id": 1,
      "name": "顺丰快递",
      "code": "SF"
    },
    {
      "delivery_id": 7,
      "name": "申通快递",
      "code": "STO"
    },
    {
      "delivery_id": 8,
      "name": "百世快递",
      "code": "HTKY"
    },
    {
      "delivery_id": 9,
      "name": "EMS",
      "code": "EMS"
    }
  ]
}
```

#### 备注:
无