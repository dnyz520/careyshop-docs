# 添加一个退款退货售后服务单

#### 接口描述：
- 添加一个退款退货售后服务单。

#### 请求 URL：
- `http|https://host/api/v1/order_service/method/add.order.service.refunds/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_goods_id |integer |是 |gt:0 | |12 |订单商品编号 |
|refund_fee |number |是 |egt:0 | |100.98 |退款金额 |
|reason |string |是 |max:100 | |颜色发错 |原因 |
|description |string |否 |max:255 | |详细说明 |说明 |
|image |string |否 |min[]:0 | |[&#34;//image_1.jpg&#34;] |上传图片 |

> 附属 A：
0=仅退款 1=退货退款 2=换货 3=维修

</p>

> 附属 B：
0=未选择 1=未收到货 2=已收到货

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|service_no 		|string 	|是 |SH_I6264728440099760001 |售后单号 |
|order_no 			|string 	|是 |PO_I6245337030479200001 |订单号 |
|order_goods_id 	|integer	|是 |12 |订单商品编号 |
|goods_image 		|string 	|是 |//image.jpg |订单商品封面 |
|key_name 			|string 	|是 |1_3 |规格键名 |
|key_value 			|string 	|是 |颜色:黑色 CPU:I5 |规格值 |
|user_id 			|integer 	|是 |1 |账号编号 |
|type 				|integer 	|是 |0 |售后类型，详见`附属 A` |
|reason 			|string 	|是 |颜色发错 |原因 |
|description 		|string 	|是 |详细说明 |说明 |
|goods_status 		|integer 	|是 |2 |货物状态，详见`附属 B` |
|image 				|array 		|是 |[&#34;//image_1.jpg&#34;] |凭证(照片) |
|refund_fee |number |是 |100.98 |最大可退金额 |
|refund_detail |object |是 |[] |退款明细 |
|delivery_fee |number |是 |8 |包含运费 |
|create_time 		|datetime 	|是 |2018-06-26 01:21:24 |创建时间 |
|update_time 		|datetime 	|是 |2018-06-26 01:21:24 |更新时间 |

|refund_detail|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|money_amount |number |是 |91.78 |可退余额 |
|integral_amount |integer |是 |0 |可退积分 |
|card_amount |number |是 |9.2 |可退购物余额 |
|payment_amount |number |是 |0 |可退在线支付 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "service_no": "SH_I6264728440099760001",
    "order_no": "PO_I6245337030479200001",
    "order_goods_id": 12,
    "goods_image": "//image_1.jpg",
    "key_name": "1_3",
    "key_value": "颜色:黑色 CPU:I5",
    "user_id": 1,
    "type": 0,
    "reason": "颜色发错",
    "description": "详细说明",
    "goods_status": 2,
    "image": [
      "//image_1.jpg"
    ],
    "refund_fee": 100.98,
    "refund_detail": {
      "money_amount": 91.78,
      "integral_amount": 0,
      "card_amount": 9.2,
      "payment_amount": 0
    },
    "delivery_fee": 8,
    "create_time": "2018-06-26 01:21:24",
    "update_time": "2018-06-26 01:21:24"
  }
}
```

#### 备注:
无