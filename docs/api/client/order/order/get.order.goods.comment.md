# 获取可评价或可追评的订单商品列表

#### 接口描述：
- 获取可评价或可追评的订单商品列表。

#### 请求 URL：
- `http|https://host/api/v1/order/method/get.order.goods.comment/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_no |string |是 |max:50 | |PO_I6245337030479200001 |订单号 |
|comment_type |string |是 |in:comment,addition | |comment |评价方式 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|order_no |string |是 |PO_I6245337030479200001 |订单号 |
|get_order_goods |array |否 |[] |订单商品数组 |

|get_order_goods|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|order_goods_id |integer |是 |1 |订单商品编号 |
|goods_name |string |是 |一条数据 |商品名称 |
|goods_id |integer |是 |89 |商品编号 |
|goods_image |string |是 |//image.jpg |商品封面 |
|goods_code |string |是 |CS27981253 |商品货号 |
|goods_sku |string |是 |SKY001 |商品SKU |
|bar_code |string |是 |BAR002 |商品条码 |
|key_name |string |是 |1_3 |规格键名 |
|key_value |string |是 |规格B |规格值 |
|market_price |number |是 |500 |市场价 |
|shop_price |number |是 |200 |本店价 |
|qty |integer |是 |2 |购买数量 |
|is_service |integer |是 |0 |售后状态 0=可申请 1=售后中 2=已售后 3=不可申 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "order_no": "PO_I6245337030479200001",
    "get_order_goods": [
      {
        "order_goods_id": 6,
        "goods_name": "MateBook 华为 笔记本",
        "goods_id": 13,
        "goods_image": "//image_1.jpg",
        "goods_code": "CS38491916",
        "goods_sku": "",
        "bar_code": "",
        "key_name": "1_3",
        "key_value": "颜色:黑色 CPU:I5",
        "market_price": 7000,
        "shop_price": 5400,
        "qty": 2,
        "is_service": 0
      },
      {
        "order_goods_id": 12,
        "goods_name": "MateBook 华为 笔记本",
        "goods_id": 13,
        "goods_image": "//image_1.jpg",
        "goods_code": "CS38491916",
        "goods_sku": "",
        "bar_code": "",
        "key_name": "1_3",
        "key_value": "颜色:黑色 CPU:I5",
        "market_price": 7000,
        "shop_price": 5400,
        "qty": 2,
        "is_service": 0
      }
    ]
  }
}
```

#### 备注:
1. 参数`comment_type`中的`comment`表示可进行评价，`addition`表示可进行追加评价。