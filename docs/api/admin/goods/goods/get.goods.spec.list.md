# 获取指定商品的规格列表

#### 接口描述：
- 获取指定商品的规格列表。

#### 请求 URL：
- `http|https://host/api/v1/goods/method/get.goods.spec.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt:0 | |5 |商品编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|key_name |string |是 |1_3 |商品规格键名 |
|key_value |string |是 |颜色:黑色 CPU:I5 |商品规格值 |
|price |number |是 |5400 |商品价格 |
|store_qty |integer |是 |100 |商品库存 |
|bar_code |string |是 |123456 |商品条码 |
|goods_sku |string |是 |654321 |商品SKU |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "key_name": "1_3",
      "key_value": "颜色:黑色 CPU:I5",
      "price": 5400,
      "store_qty": 100,
      "bar_code": "",
      "goods_sku": ""
    },
    {
      "key_name": "1_4",
      "key_value": "颜色:黑色 CPU:I7",
      "price": 5900,
      "store_qty": 100,
      "bar_code": "",
      "goods_sku": ""
    }
  ]
}
```

#### 备注:
无