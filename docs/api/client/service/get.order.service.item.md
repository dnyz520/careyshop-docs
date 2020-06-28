# 获取一个售后服务单

#### 接口描述：
- 获取一个售后服务单。

#### 请求 URL：
- `http|https://host/api/v1/order_service/method/get.order.service.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|service_no |string |是 |max:50 | |SH_I6130213790784100001 |售后单号 |

> 附属 A：
0=仅退款 1=退货退款 2=换货 3=维修

</p>

> 附属 B：
0=未选择 1=未收到货 2=已收到货

</p>

> 附属 C：
0=待处理 1=已同意 2=已拒绝 3=已寄件 4=售后中 5=已撤销 6=已完成

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:------------------|:----------|:-:|:-----|-----|
|service_no 		|string 	|是 |SH_I6130... |售后单号 |
|order_no 			|string 	|是 |PO_I1049... |订单号 |
|order_goods_id 	|integer	|是 |1 |订单商品编号 |
|goods_image 		|string 	|是 |//image.jpg |订单商品封面 |
|key_name 			|string 	|是 |1_3 |规格键名 |
|key_value 			|string 	|是 |规格B |规格值 |
|user_id 			|integer 	|是 |1 |账号编号 |
|qty 				|integer 	|是 |0 |数量 |
|type 				|integer 	|是 |0 |售后类型，详见`附属 A` |
|reason 			|string 	|是 |不想要了 |原因 |
|description 		|string 	|是 |退款 |说明 |
|goods_status 		|integer 	|是 |1 |货物状态，详见`附属 B` |
|image 				|array 		|是 |[&#34;//image_1.jpg&#34;] |凭证(照片) |
|status 			|integer 	|是 |0 |售后状态，详见`附属 C` |
|is_return 			|integer 	|是 |0 |寄回到商家 0=否 1=是 |
|result 			|string 	|是 |结果 |处理结果 |
|refund_fee 		|number 	|是 |0.01 |总退款金额 |
|refund_detail 		|object 	|是 |[] |退款明细结构 |
|refund_no 			|string 	|是 |TK_I613511... |退款单号 |
|address 			|string 	|是 |浙江省... |返件地址 |
|consignee 			|string 	|是 |carey |委托人 |
|zipcode 			|string 	|是 |315000 |邮编 |
|mobile 			|string 	|是 |15867... |手机号码 |
|logistic_code 		|string 	|是 |999xxx... |快递单号 |
|delivery_fee 		|number 	|是 |0 |运费 |
|user_new 			|integer 	|是 |0 |存在新事件 0=否 1=是 |
|create_time 		|datetime 	|是 |2018-06-13 23:02:17 |创建时间 |
|update_time 		|datetime 	|是 |2018-06-13 23:14:28 |更新时间 |
|get_user 			|object 	|否 |[] |账号对象 |
|get_service_log 	|array 		|否 |[] |售后日志数组 |

|refund_detail|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|money_amount |number |是 |0 |余额退款 |
|integral_amount |number |是 |0 |积分退分 |
|card_amount |number |是 |0.01 |购物卡退款 |
|payment_amount |number |是 |0 |支线支付退款 |

|get_user|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|username |string |否 |carey |账号 |
|nickname |string |否 |carey |昵称 |
|head_pic |string |否 |//host/head_pic.jpg |头像 |

|get_service_log|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|action |string |是 |CareyShop |操作者 |
|client_type |integer |是 |1 |用户组 -1=游客或系统 0=顾客 1=管理组 |
|comment |string |是 |发起申请售后服务 |具体说明 |
|description |string |是 |申请售后 |描述 |
|create_time |datetime |是 |2018-06-13 23:02:18 |创建时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "service_no": "SH_I6130213790784100001",
    "order_no": "PO_I1049550470892670001",
    "order_goods_id": 1,
    "goods_image": "",
    "key_name": "1_3",
    "key_value": "规格B",
    "user_id": 1,
    "qty": 0,
    "type": 0,
    "reason": "不想要了",
    "description": "",
    "goods_status": 1,
    "image": [],
    "status": 0,
    "is_return": 0,
    "result": "",
    "refund_fee": 0.01,
    "refund_detail": {
      "money_amount": 0,
      "integral_amount": 0,
      "card_amount": 0.01,
      "payment_amount": 0
    },
    "refund_no": "",
    "address": "",
    "consignee": "",
    "zipcode": "",
    "mobile": "",
    "logistic_code": "",
    "delivery_fee": 0,
    "user_new": 1,
    "create_time": "2018-06-13 23:02:17",
    "update_time": "2018-06-13 23:14:28",
    "get_user": {
      "username": "dnyz520",
      "nickname": "careya",
      "head_pic": "//host/head_pic.jpg"
    },
    "get_service_log": [
      {
        "action": "CareyShop",
        "client_type": 1,
        "comment": "马上处理",
        "description": "商家留言",
        "create_time": "2018-06-13 23:12:36"
      },
      {
        "action": "CareyShop",
        "client_type": 1,
        "comment": "发起申请售后服务。",
        "description": "申请售后",
        "create_time": "2018-06-13 23:02:18"
      }
    ]
  }
}
```

#### 备注:
无