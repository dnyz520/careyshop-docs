# 获取配送方式列表

#### 接口描述：
- 获取配送方式列表。

#### 请求 URL：
- `http|https://host/api/v1/delivery/method/get.delivery.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |否 |max:50 | |EMS |快递公司名称 |
|status |integer |否 |in:0,1 | |1 |配送方式状态 0=禁用 1=启用 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |delivery_id |status |排序字段 |

> 附属 A：
in:delivery_id,name,content,sort,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|delivery_id |integer |是 |9 |配送方式编号 |
|content |string |是 |EMS |配送方式描述 |
|first_weight |number |是 |1 |首重 |
|first_weight_price |number |是 |8 |续重费运 |
|second_weight |number |是 |1 |续重 |
|second_weight_price |number |是 |5 |续重运费 |
|first_item |integer |是 |1 |首件 |
|first_item_price |number |是 |8 |首件运费 |
|second_item |integer |是 |1 |续件 |
|second_item_price |number |是 |5 |续件运费 |
|first_volume |number |是 |2 |首体积量 |
|first_volume_price |number |是 |10 |首体积运费 |
|second_volume |number |是 |1 |续体积量 |
|second_volume_price |number |是 |5 |续体积运费 |
|sort |integer |是 |50 |配送方式排序值 |
|status |integer |是 |1 |配送方式状态 0=禁用 1=启用 |
|get_delivery_item |object |是 |[] |快递公司对象 |

|get_delivery_item|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|delivery_item_id |integer |是 |7 |快递公司编号 |
|name |string |是 |EMS |快递公司名称 |
|phonetic |string |是 |e |快递公司拼音 |
|code |string |是 |EMS |快递公司编码 |
|type |integer |是 |0 |快递公司类型 0=热门 1=国内 2=国外 3=转运 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "delivery_id": 7,
      "content": "",
      "first_weight": 8,
      "first_weight_price": 10,
      "second_weight": 5,
      "second_weight_price": 3,
      "first_item": 0,
      "first_item_price": 0,
      "second_item": 0,
      "second_item_price": 0,
      "first_volume": 0,
      "first_volume_price": 0,
      "second_volume": 0,
      "second_volume_price": 0,
      "sort": 50,
      "status": 1,
      "get_delivery_item": {
        "delivery_item_id": 5,
        "name": "申通快递",
        "phonetic": "s",
        "code": "STO",
        "type": 0
      }
    },
    {
      "delivery_id": 9,
      "content": "EMS",
      "first_weight": 1,
      "first_weight_price": 8.1,
      "second_weight": 1,
      "second_weight_price": 5,
      "first_item": 1,
      "first_item_price": 8,
      "second_item": 1,
      "second_item_price": 5,
      "first_volume": 2,
      "first_volume_price": 10,
      "second_volume": 1,
      "second_volume_price": 5,
      "sort": 50,
      "status": 1,
      "get_delivery_item": {
        "delivery_item_id": 7,
        "name": "EMS",
        "phonetic": "e",
        "code": "EMS",
        "type": 0
      }
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。