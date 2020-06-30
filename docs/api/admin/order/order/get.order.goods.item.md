# 获取一个订单商品明细

#### 接口描述：
- 获取一个订单商品明细。

#### 请求 URL：
- `http|https://host/api/v1/order/method/get.order.goods.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_goods_id |integer |是 |gt:0 | |1 |订单商品编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|order_goods_id |integer |是 |1 |订单商品编号 |
|order_no |string |是 |PO_I10495... |订单号 |
|user_id |integer |是 |1 |账号编号 |
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
|is_comment |integer |是 |0 |评价状态 0=未评 1=已评 2=追评 |
|is_service |integer |是 |0 |售后状态 0=可申请 1=售后中 2=已售后 3=不可申 |
|status |integer |是 |2 |货品状态 0=未发 1=已发 2=收货 3=取消 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "order_goods_id": 1,
    "order_no": "PO_I1049550470892670001",
    "user_id": 1,
    "goods_name": "添加一条数据",
    "goods_id": 89,
    "goods_image": "",
    "goods_code": "CS27981253",
    "goods_sku": "",
    "bar_code": "",
    "key_name": "1_3",
    "key_value": "规格B",
    "market_price": 500,
    "shop_price": 200,
    "qty": 1,
    "is_comment": 0,
    "is_service": 0,
    "status": 2
  }
}
```

#### 备注:
无