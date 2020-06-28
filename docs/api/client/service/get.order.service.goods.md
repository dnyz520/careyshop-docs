# 获取订单商品可申请的售后服务

#### 接口描述：
- 获取订单商品可申请的售后服务。

#### 请求 URL：
- `http|https://host/api/v1/order_service/method/get.order.service.goods/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_goods_id |integer |是 |gt:0 | |12 |订单商品编号 |
|is_refund_fee |integer |否 |in:0,1 |0 |1 |是否获取可退金额 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|is_refund |integer |是 |1 |是否可申请退款 0=否 1=是 |
|is_refund_refunds |integer |是 |1 |是否可申请退款退货 0=否 1=是 |
|is_exchange |integer |是 |1 |是否可申请换货 0=否 1=是 |
|is_maintain |integer |是 |1 |是否可申请维修 0=否 1=是 |
|order_goods |object |是 |[] |订单商品数据对象 |

|order_goods|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|order_no |string |是 |PO_I6245337030479200001 |订单号 |
|goods_name |string |是 |MateBook 华为 笔记本 |商品名称 |
|goods_id |integer |是 |13 |商品编号 |
|goods_image |string |是 |//image_1.jpg |商品封面 |
|key_name |string |是 |1_3 |规格键名 |
|key_value |string |是 |颜色:黑色 CPU:I5 |规格值 |
|qty |integer |是 |2 |购买数量 |
|refund_fee |number |是 |3292.59 |最大可退金额 |
|refund_detail |object |否 |[] |退款明细 |
|delivery_fee |number |是 |0 |包含运费 |

|refund_detail|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|money_amount |number |是 |2992.73 |可退余额 |
|integral_amount |integer |是 |0 |可退积分 |
|card_amount |number |是 |299.86 |可退购物余额 |
|payment_amount |number |是 |0 |可退在线支付 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "is_refund": 1,
    "is_refund_refunds": 1,
    "is_exchange": 1,
    "is_maintain": 1,
    "order_goods": {
      "order_no": "PO_I6245337030479200001",
      "goods_name": "MateBook 华为 笔记本",
      "goods_id": 13,
      "goods_image": "//image_1.jpg",
      "key_name": "1_3",
      "key_value": "颜色:黑色 CPU:I5",
      "qty": 2,
      "refund_fee": 3292.59,
      "refund_detail": {
        "money_amount": 2992.73,
        "integral_amount": 0,
        "card_amount": 299.86,
        "payment_amount": 0
      },
      "delivery_fee": 0
    }
  }
}
```

#### 备注:
1. 当参数`is_refund_fee`值为`1`时字段`refund_fee、refund_detail、delivery_fee`才会返回具体的值。

2. 当一个订单下存在多个订单商品，`退款明细`明细下的各个退款项将根据比例给予可退金额。

3. 当一个订单下存在多个订单商品，退款时`运费`在最后一个商品上进行返回。