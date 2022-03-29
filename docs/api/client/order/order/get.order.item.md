# 获取一个订单

#### 接口描述：
- 获取一个订单。

#### 请求 URL：
- `http|https://host/api/v1/order/method/get.order.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_no |string |是 |max:50 | |PO_I1049550... |订单号 |
|is_get_log |integer |否 |in:0,1 |0 |1 |是否获取订单操作日志 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:------------------|:----------|:-:|:-----|-----|
|order_no 			|string		|是 |PO_I1049550... |订单号 |
|user_id 			|integer	|是 |1 |账号编号 |
|source 			|integer 	|是 |0 |订单来源(自定义) |
|pay_amount 		|number 	|是 |290 |订单金额 |
|goods_amount 		|number 	|是 |300 |商品金额 |
|total_amount 		|number 	|是 |20 |应付金额(含运费) |
|use_money 			|number 	|是 |694.89 |余额抵扣 |
|use_level 			|number 	|是 |0 |会员等级抵扣 |
|use_integral 		|number 	|是 |10.01 |积分抵扣 |
|use_coupon 		|number 	|是 |10 |优惠劵抵扣 |
|use_discount 		|number 	|是 |0 |商品折扣抵扣 |
|use_promotion 		|number 	|是 |0 |订单促销抵扣 |
|use_card 			|number 	|是 |780 |购物卡抵扣 |
|delivery_fee 		|number 	|是 |1195 |运费 |
|payment_no 		|string 	|是 |ZF_I104955... |支付单号(交易流水号) |
|payment_code 		|string 	|是 |3 |支付编码 |
|card_number 		|string 	|是 |997156... |购物卡号 |
|delivery_id 		|integer 	|是 |1 |配送方式 |
|consignee 			|string 	|是 |carey |收货人姓名 |
|country 			|integer 	|是 |0 |国家 |
|region_list 		|array 		|是 |[1,2,3] |省市区编号 |
|address 			|string 	|是 |广济街 |详细地址 |
|complete_address	|string 	|是 |浙江省 宁波市 江北区 广济街 |完整地址 |
|zipcode 			|string 	|是 |315000 |邮编 |
|tel 				|string 	|是 |0574-8748... |电话 |
|mobile 			|string 	|是 |15867... |手机号码 |
|buyer_remark 		|string 	|是 |发韵达 |买家备注 |
|invoice_title 		|string 	|是 |宁波欧瑞网络科技有限公司 |发票抬头 |
|tax_number 		|string 	|是 |xxx0909 |纳税人识别号 |
|invoice_amount 	|number 	|是 |10.99 |开票费用 |
|trade_status 		|integer 	|是 |0 |交易状态 0=待处理 1=配货中 2=已发货 3=已完成 4=已取消 |
|delivery_status 	|integer 	|是 |0 |配送状态 0=未发 1=已发 2=部分发 |
|payment_status 	|integer 	|是 |0 |支付状态 0=未付 1=已付 |
|adjustment 		|number 	|是 |19.9 |调整价格 |
|integral_pct 		|number 	|是 |100 |记录积分换算比例 |
|give_integral 		|integer 	|是 |100 |赠送积分 |
|give_coupon 		|array 		|是 |[1,2,3] |赠送优惠劵 |
|payment_time 		|datetime 	|是 |2017-01-04 14:04:25 |支付时间 |
|delivery_time 		|datetime 	|是 |2017-01-04 14:04:25 |发货时间 |
|finished_time 		|datetime 	|是 |2017-01-04 14:04:25 |完成时间 |
|create_time 		|datetime 	|是 |2017-01-04 14:04:25 |创建时间 |
|update_time 		|datetime 	|是 |2017-01-04 14:04:25 |更新时间 |
|get_user 			|object 	|否 |[] |账号对象 |
|get_order_goods 	|array 		|否 |[] |订单商品数组 |
|get_order_log 		|array 		|否 |[] |订单日志数组 参数`is_get_log=1`时返回|

|get_user|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|username |string |否 |carey |账号 |
|nickname |string |否 |carey |昵称 |
|head_pic |string |否 |//host/head_pic.jpg |头像 |

|get_order_goods|类型|是否返回|示例值|描述|
|:------------------|:----------|:-:|:-----|-----|
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
|is_comment |integer |是 |0 |评价状态 0=未评 1=已评 2=追评 |
|is_service |integer |是 |0 |售后状态 0=可申请 1=售后中 2=已售后 3=不可申 |
|status |integer |是 |2 |货品状态 0=未发 1=已发 2=收货 3=取消 |

|get_order_log|类型|是否返回|示例值|描述|
|:------------------|:----------|:-:|:-----|-----|
|trade_status |integer |是 |3 |交易状态(对应订单) |
|delivery_status |integer |是 |1 |配送状态(对应订单) |
|payment_status |integer |是 |1 |支付状态(对应订单) |
|action |string |是 |Carey |操作者 |
|client_type |integer |是 |1 |用户组 -1=游客或系统 0=顾客 1=管理组 |
|comment |string |是 |交易超时，自动确认收货 |备注 |
|description |string |是 |确认收货 |描述 |
|create_time |datetime |是 |2018-01-04 15:17:53 |创建时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "order_no": "PO_I1049550470892670001",
    "user_id": 1,
    "source": 0,
    "pay_amount": 290,
    "goods_amount": 300,
    "total_amount": 20,
    "use_money": 694.89,
    "use_level": 0,
    "use_integral": 10.01,
    "use_coupon": 10,
    "use_discount": 0,
    "use_promotion": 0,
    "use_card": 780,
    "delivery_fee": 1195,
    "payment_no": "ZF_I1049554124677490001",
    "payment_code": "3",
    "card_number": "9971564621172962",
    "delivery_id": 1,
    "consignee": "consignee",
    "country": 0,
    "region_list": [1, 2, 3],
    "address": "address",
    "complete_address": "浙江省 宁波市 江北区 address",
    "zipcode": "",
    "tel": "",
    "mobile": "15867430425",
    "buyer_remark": "",
    "invoice_title": "",
    "tax_number": "",
    "invoice_amount": 0,
    "trade_status": 0,
    "delivery_status": 0,
    "payment_status": 0,
    "adjustment": 19.9,
    "integral_pct": 100,
    "give_integral": 100,
    "give_coupon": [],
    "payment_time": "",
    "delivery_time": "2017-01-04 14:04:25",
    "finished_time": "2018-01-04 15:17:53",
    "create_time": "2018-01-04 00:05:04",
    "update_time": "2018-06-12 09:33:13",
    "get_user": {
      "username": "careyshop",
      "nickname": "careya",
      "head_pic": "//host/head_pic.jpg"
    },
    "get_order_goods": [
      {
        "order_goods_id": 1,
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
      },
      {
        "order_goods_id": 2,
        "goods_name": "添加一条数据",
        "goods_id": 89,
        "goods_image": "",
        "goods_code": "CS27981253",
        "goods_sku": "",
        "bar_code": "",
        "key_name": "1_2",
        "key_value": "规格A",
        "market_price": 500,
        "shop_price": 100,
        "qty": 1,
        "is_comment": 0,
        "is_service": 1,
        "status": 2
      }
    ],
    "get_order_log": [
      {
        "trade_status": 3,
        "delivery_status": 1,
        "payment_status": 1,
        "action": "Carey",
        "client_type": 1,
        "comment": "交易超时，自动确认收货",
        "description": "确认收货",
        "create_time": "2018-01-04 15:17:53"
      },
      {
        "trade_status": 0,
        "delivery_status": 0,
        "payment_status": 0,
        "action": "CareyShop",
        "client_type": 1,
        "comment": "应付金额调整：+19.90",
        "description": "金额调整",
        "create_time": "2018-06-12 09:33:13"
      }
    ]
  }
}
```

#### 备注:
1. 过长的内容都使用`...`进行的省略。
