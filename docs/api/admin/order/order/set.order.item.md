# 编辑一个订单

#### 接口描述：
- 编辑一个订单。

#### 请求 URL：
- `http|https://host/api/v1/order/method/set.order.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_no |string |是 |max:50 | |PO_I104955... |订单号 |
|consignee |string |是 |max:50 | |carey |收货人姓名 |
|country |integer |否 |egt:0 | |0 |收货国家 |
|region_list |array |是 |min[]:0 | |[1,2,3] |收货省市区编号 |
|address |string |是 |max:255 | |广济街 |收货详细地址 |
|zipcode |string |否 |max:20 | |315000 |收货邮编 |
|tel |string |否 |max:20 | |0574-87487 |收货人电话 |
|mobile |string |是 |length:7,15 | |158674... |收货人手机号码 |
|invoice_title |string |否 |max:255 | |宁波欧瑞... |发票抬头 |
|tax_number |string |否 |max:20 | |xxx009 |纳税人识别号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

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
|region_list 		|array 		|否 |[1,2,3] |省市区编号 |
|address 			|string 	|是 |广济街 |详细地址 |
|complete_address	|string 	|是 |浙江省 宁波市 江北区 广济街 |完整地址 |
|zipcode 			|string 	|是 |315000 |邮编 |
|tel 				|string 	|是 |0574-8748... |电话 |
|mobile 			|string 	|是 |15867... |手机号码 |
|buyer_remark 		|string 	|是 |发韵达 |买家备注 |
|invoice_title 		|string 	|是 |宁波欧瑞 |发票抬头 |
|tax_number 		|string 	|是 |xxx0909 |纳税人识别号 |
|invoice_amount 	|number 	|是 |10.99 |开票费用 |
|trade_status 		|integer 	|是 |0 |交易状态 0=待处理 1=配货中 2=已发货 3=已完成 4=已取消 |
|delivery_status 	|integer 	|是 |0 |配送状态 0=未发 1=已发 2=部分发 |
|payment_status 	|integer 	|是 |0 |支付状态 0=未付 1=已付 |
|sellers_remark 	|string 	|是 |客户A备注 |卖家备注 |
|adjustment 		|number 	|是 |19.9 |调整价格 |
|integral_pct 		|number 	|是 |100 |记录积分换算比例 |
|give_integral 		|integer 	|是 |100 |赠送积分 |
|give_coupon 		|array 		|是 |[1,2,3] |赠送优惠劵 |
|payment_time 		|datetime 	|是 |2017-01-04 14:04:25 |支付时间 |
|delivery_time 		|datetime 	|是 |2017-01-04 14:04:25 |发货时间 |
|finished_time 		|datetime 	|是 |2017-01-04 14:04:25 |完成时间 |
|create_time 		|datetime 	|是 |2017-01-04 14:04:25 |创建时间 |
|update_time 		|datetime 	|是 |2017-01-04 14:04:25 |更新时间 |

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
    "consignee": "carey",
    "country": 0,
    "region_list": [1, 2, 3],
    "address": "广济街",
    "complete_address": "浙江省 宁波市 江北区 广济街",
    "zipcode": "315000",
    "tel": "0574-87487585",
    "mobile": "15867430425",
    "buyer_remark": "",
    "invoice_title": "宁波欧瑞",
    "tax_number": "xxx009",
    "invoice_amount": 0,
    "trade_status": 0,
    "delivery_status": 0,
    "payment_status": 0,
    "sellers_remark": "",
    "adjustment": 19.9,
    "integral_pct": 100,
    "give_integral": 100,
    "give_coupon": [],
    "payment_time": "",
    "delivery_time": "2017-01-04 14:04:25",
    "finished_time": "2018-01-04 15:17:53",
    "create_time": "2018-01-04 00:05:04",
    "update_time": "2018-06-12 23:43:17"
  }
}
```

#### 备注:
1. 当`delivery_status`值不等于`0`，或`trade_status`值大于`1`时不允许修改。