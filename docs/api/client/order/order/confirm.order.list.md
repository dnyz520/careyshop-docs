# 获取订单确认或提交订单

#### 接口描述：
- 获取订单确认或提交订单。

#### 请求 URL：
- `http|https://host/api/v1/order/method/confirm.order.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|source |integer |是 |between:0,9 | |0 |订单来源(自定义) |
|type |string |是 |in:buynow,cart | |cart |立即购买或购物车结算 |
|is_submit |integer |否 |in:0,1 |0 |1 |是否提交订单 |
|delivery_id |integer |是 |gt:0 | |1 |配送方式编号 |
|consignee |string |是 |max:50 | |张三 |收货人姓名 |
|country |integer |否 |egt:0 |0 |0 |收货国家 |
|region_list |array |是 |min[]:0 | |[1,2,3] |收货省市区编号 |
|address |string|是 |max:255 | |详细地址 |收货详细地址 |
|zipcode |string |否 |max:20 | |315000 |收货邮编 |
|tel |string |否 |max:20 | |87487585 |收货人电话 |
|mobile |string |是 |length:7,15 | |15867430123 |收货人手机号码 |
|buyer_remark |string |否 |max:255 | |发顺丰 |给卖家留言 |
|invoice_type |integer |否 |in:0,1,2 |0 |2 |开票方式 0=不需要 1=个人 2=企业 |
|invoice_title |string |否 |max:255 | |宁波欧瑞... |发票抬头 |
|tax_number |string |否 |max:20 | |xxx123456 |纳税人识别号 |
|coupon_give_id |integer |否 |gt:0 | |1 |优惠劵发放编号 |
|coupon_exchange_code |string |否 |max:10 | |8TxQqQ2T |优惠劵兑换码 |
|use_money |number |否 |egt:0 |0 |99.5 |余额支付 |
|use_integral |integer |否 |egt:0 |0 |1000 |积分支付 |
|use_card |number |否 |egt:0 |0 |66.6 |购物卡支付 |
|card_number |string |否 |length:16 | |951467773 |购物卡卡号 |

#### 响应参数：
* 确认订单时详细请参考[「确认订单时」](https://doc.careyshop.cn/docs/client_api/a-31529855253 "「确认订单时」")

* 提交订单后详细请参考[「提交订单后」](https://doc.careyshop.cn/docs/client_api/a-31529855265 "「提交订单后」")

#### 备注:
1. 参数`type`值为`buynow`时表示单个商品进行立即购买操作，否则表示购买购物车中选中的商品。

2. 参数`is_submit`值为`0`表示确认订单，买家每进行一次调整都需要重新获取返回数据，此时不会创建订单。而值为`1`时表示正式创建订单。

3. 当`invoice_type`值为`2`时，参数`invoice_title`和`tax_number`为`必须`。值为`1`时，默认抬头为`个人`，买家无法自定义填写抬头，如需修改需要管理组成员在后台对订单进行编辑操作。

4. 需要使用优惠劵时参数`coupon_give_id`和`coupon_exchange_code`其中一个`必须`填写。

5. 使用购物卡余额抵扣支付金额时参数`use_card`和`card_number`为`必须`。

6. 提交订单之后需要完成的操作是[「订单付款在线支付」](https://doc.careyshop.cn/docs/client_api/a-61465284393 "「订单付款在线支付」")。

## 确认订单时
#### 接口描述：
- 确认订单时将返回各项数据并且进行各种验证。

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_list |array |是 |[] |订单商品数组 |
|coupon_give_list |array |否 |[] |优惠劵数组 |
|card_use_list |array |否 |[] |购物卡数组 |
|integral |object |是 |[] |积分对象 |
|order_price |object |是 |[] |订单金额对象 |

|goods_list|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|cart_id |integer |是 |43 |购物车编号 |
|goods_id |integer |是 |13 |商品编号 |
|goods_num |integer |是 |1 |购买数量 |
|key_name |string |是 |1_3 |商品规格键名 |
|key_value |string |是 |颜色:黑色 CPU:I5 |商品规格值 |
|goods |object |是 |[] |商品对象 |
|error |integer |是 |0 |商品是否规范 0=有效 1=无效 |
|error_msg |string |是 |商品已失效 |商品不规范的原因 |

|goods|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_id|integer |是 |5 |商品编号 |
|name|string |是 |MateBook|商品名称 |
|goods_code|string |是 |CS91785250|商品货号 |
|goods_sku|string |是 |654321|商品SKU |
|bar_code|string |是 |123456|商品条码 |
|store_qty|integer |是 |200 |商品库存 |
|measure|number |是 |3 |商品计量(重量、体积) |
|measure_type|integer |是 |0 |计量方式 0=重量 1=计件 2=体积 |
|is_postage|integer |是 |1 |是否包邮 0=收费 1=包邮 |
|market_price|number |是 |7000 |商品市场价 |
|shop_price|number |是 |5400 |商品本店价 |
|purchase_sum|integer |是 |2 |限购数量 |
|integral_type|integer |是 |0 |赠送积分结算方式 |
|give_integral|number |是 |540 |商品赠送积分 |
|is_integral|integer |是 |1000 |积分可抵扣额 |
|goods_image |string |是 |//image.jpg |商品封面 |

|coupon_give_list|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|coupon_give_id |integer |是 |106 |优惠劵发放编号 |
|coupon_id |integer |是 |5 |优惠劵编号 |
|user_id |integer |是 |0 |账号编号 0=未领取 |
|order_id |integer |是 |0 |订单编号 0=未使用 |
|exchange_code |string |是 |bq4ZQQr7Ar |优惠劵兑换码 |
|use_time |datetime |是 |2018-05-24 16:00:00 |使用时间 |
|create_time |datetime |是 |2018-05-24 15:07:19 |创建时间 |
|get_coupon |object |是 |[] |优惠劵对象 |
|is_use |integer |是 |0 |是否可使用 0=否 1=是 |
|not_use_error |string |是 |订单金额不足200 |不可用原因 |

|get_coupon|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|coupon_id |integer |是 |11 |优惠劵编号 |
|name |string |是 |六一快乐 |优惠劵名称 |
|description |string |是 |活动描述 |优惠劵描述 |
|guide |string |否 |//careyshop.cn |优惠劵引导地址 |
|type |integer |是 |2 |优惠劵类型 |
|give_code |string |是 |DjEU0GtU9t |优惠劵领取码 |
|money |number |是 |100 |优惠金额 |
|quota |number |是 |1000 |限制使用金额(0则不限) |
|category |array |否 |[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;] |限制商品类目 |
|exclude_category |array |否 |[&quot;5&quot;,&quot;6&quot;,&quot;7&quot;] |排除商品类目 |
|level |array |否 |[] |限制会员等级 |
|frequency |integer |是 |1 |限制领取次数(0则不限) |
|give_num |integer |是 |2000 |发放数量 |
|receive_num |integer |是 |0 |累计领取数量 |
|use_num |integer |是 |0 |累计使用数量 |
|give_begin_time |datetime |是 |2018-05-22 10:11:00 |发放开始时间 |
|give_end_time |datetime |是 |2018-06-05 00:00:00 |发放结束时间 |
|use_begin_time |datetime |是 |2018-06-01 00:00:00 |使用开始时间 |
|use_end_time |datetime |是 |2018-06-02 00:00:00 |使用结束时间 |
|status |integer |是 |1 |优惠劵状态 0=禁用 1=启用 |
|is_invalid |integer |是 |0 |优惠劵是否作废 0=正常 1=作废 |

|card_use_list|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|number |string |是 |9514677739431425 |卡号 |
|money |number |是 |530 |可用余额 |
|name |string |是 |实体购物卡 |购物卡名称 |
|description |string |是 |线下发放 |购物卡描述 |
|is_use |integer |是 |1 |是否可使用 0=否 1=是 |
|not_use_error |string |是 |... |不可用原因 |

|integral|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|usable |integer |是 |2000 |最多可抵扣积分 |
|give |integer |是 |32411 |该笔订单可赠送积分 |

|order_price|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|pay_amount |number |是 |30506.42 |订单金额 |
|goods_amount |number |是 |44500 |商品金额 |
|total_amount |number |是 |31245.51 |应付金额(含运费) |
|invoice_amount |number |是 |915.19 |开票费用 |
|use_money |number |是 |99.5 |余额抵扣 |
|use_level |number |是 |889.4 |会员等级抵扣 |
|use_integral |integer |是 |10 |积分抵扣 |
|use_coupon |number |是 |30 |优惠劵抵扣 |
|use_discount |number |是 |0 |商品折扣抵扣 |
|use_promotion |number |是 |13074.18 |订单促销抵扣 |
|use_card |number |是 |66.6 |购物卡抵扣 |
|delivery_fee |number |是 |0 |运费 |
|delivery_dec |number |是 |0 |费运减免金额 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "goods_list": [
      {
        "cart_id": 44,
        "goods_id": 14,
        "goods_num": 2,
        "key_name": "2_4",
        "key_value": "颜色:白色 CPU:I7",
        "goods": {
          "goods_id": 14,
          "name": "小米笔记本 白色",
          "goods_code": "CS36157358",
          "goods_sku": "",
          "bar_code": "",
          "store_qty": 100,
          "measure": 3,
          "measure_type": 0,
          "is_postage": 1,
          "market_price": 7000,
          "shop_price": 5900,
          "purchase_sum": 2,
          "integral_type": 0,
          "give_integral": 100,
          "is_integral": 1000,
          "goods_image": "//image_1.jpg"
        },
        "error": 0,
        "error_msg": ""
      },
      {
        "cart_id": 43,
        "goods_id": 13,
        "goods_num": 6,
        "key_name": "1_3",
        "key_value": "颜色:黑色 CPU:I5",
        "goods": {
          "goods_id": 13,
          "name": "MateBook 华为 笔记本",
          "goods_code": "CS38491916",
          "goods_sku": "",
          "bar_code": "",
          "store_qty": 98,
          "measure": 3,
          "measure_type": 0,
          "is_postage": 1,
          "market_price": 7000,
          "shop_price": 5400,
          "purchase_sum": 2,
          "integral_type": 0,
          "give_integral": 100,
          "is_integral": 1000,
          "goods_image": "//image_1.jpg"
        },
        "error": 0,
        "error_msg": ""
      },
      {
        "cart_id": 38,
        "goods_id": 1,
        "goods_num": 1,
        "key_name": "",
        "key_value": "",
        "goods": {
          "goods_id": 1,
          "name": "不带规格的商品",
          "goods_code": "CS91785258",
          "goods_sku": "",
          "bar_code": "",
          "store_qty": 100,
          "measure": 0,
          "measure_type": 0,
          "is_postage": 1,
          "market_price": 500,
          "shop_price": 300,
          "purchase_sum": 0,
          "integral_type": 0,
          "give_integral": 0,
          "is_integral": 0,
          "goods_image": "//image.jpg"
        },
        "error": 1,
        "error_msg": "商品已失效"
      }
    ],
    "coupon_give_list": [
      {
        "coupon_give_id": 6,
        "coupon_id": 3,
        "user_id": 1,
        "order_id": 0,
        "exchange_code": "2ImbP95cJ0",
        "use_time": "",
        "create_time": "2018-05-24 15:00:44",
        "get_coupon": {
          "coupon_id": 3,
          "name": "端午节",
          "description": "",
          "guide": "",
          "type": 0,
          "give_code": "",
          "money": 30,
          "quota": 100,
          "category": [],
          "exclude_category": [],
          "level": [],
          "frequency": 1,
          "give_num": 200,
          "receive_num": 2,
          "use_num": 0,
          "give_begin_time": "2018-05-24 02:06:00",
          "give_end_time": "2018-06-24 02:06:00",
          "use_begin_time": "2018-05-24 02:06:00",
          "use_end_time": "2018-08-25 00:27:04",
          "status": 1,
          "is_invalid": 0
        },
        "is_use": 1,
        "not_use_error": ""
      },
      {
        "coupon_give_id": 106,
        "coupon_id": 5,
        "user_id": 1,
        "order_id": 0,
        "exchange_code": "bq4ZQQr7Ar",
        "use_time": "",
        "create_time": "2018-05-24 15:07:19",
        "get_coupon": {
          "coupon_id": 5,
          "name": "端午节(线下)",
          "description": "",
          "guide": "",
          "type": 1,
          "give_code": "",
          "money": 30,
          "quota": 200,
          "category": [],
          "exclude_category": [],
          "level": [],
          "frequency": 1,
          "give_num": 200,
          "receive_num": 100,
          "use_num": 0,
          "give_begin_time": "2018-05-24 02:06:00",
          "give_end_time": "2018-06-24 02:06:00",
          "use_begin_time": "2018-05-24 02:06:00",
          "use_end_time": "2018-06-24 02:06:00",
          "status": 1,
          "is_invalid": 0
        },
        "is_use": 0,
        "not_use_error": "优惠劵使用时间已过期"
      }
    ],
    "card_use_list": [
      {
        "number": "9514677739431425",
        "money": 530,
        "name": "实体购物卡",
        "description": "线下发放",
        "is_use": 1,
        "not_use_error": ""
      },
      {
        "number": "1818337623626955",
        "money": 470,
        "name": "实体购物卡",
        "description": "线下发放",
        "is_use": 1,
        "not_use_error": ""
      }
    ],
    "integral": {
      "usable": 2000,
      "give": 32411
    },
    "order_price": {
      "pay_amount": 30506.42,
      "goods_amount": 44500,
      "total_amount": 31245.51,
      "invoice_amount": 915.19,
      "use_money": 99.5,
      "use_level": 889.4,
      "use_integral": 10,
      "use_coupon": 30,
      "use_discount": 0,
      "use_promotion": 13074.18,
      "use_card": 66.6,
      "delivery_fee": 0,
      "delivery_dec": 0
    }
  }
}
```

## 提交订单后
#### 接口描述：
- 提交订单后将返回的各项数据。

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
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
|card_number 		|string 	|是 |997156... |购物卡号 |
|delivery_fee 		|number 	|是 |1195 |运费 |
|delivery_id 		|integer 	|是 |1 |配送方式 |
|consignee 			|string 	|是 |carey |收货人姓名 |
|country 			|integer 	|是 |0 |国家 |
|region_list 		|array		|是 |[1,2,3] |省市区编号 |
|address 			|string 	|是 |广济街 |详细地址 |
|complete_address	|string 	|是 |浙江省 宁波市 江北区 广济街 |完整地址 |
|zipcode 			|string 	|是 |315000 |邮编 |
|tel 				|string 	|是 |0574-8748... |电话 |
|mobile 			|string 	|是 |15867... |手机号码 |
|buyer_remark 		|string 	|是 |发韵达 |买家备注 |
|integral_pct 		|number 	|是 |100 |记录积分换算比例 |
|give_integral 		|integer 	|是 |100 |赠送积分 |
|give_coupon 		|array 		|是 |[1,2,3] |赠送优惠劵 |
|invoice_amount 	|number 	|是 |10.99 |开票费用 |
|trade_status 		|integer 	|是 |0 |交易状态 0=待处理 1=配货中 2=已发货 3=已完成 4=已取消 |
|delivery_status 	|integer 	|是 |0 |配送状态 0=未发 1=已发 2=部分发 |
|payment_status 	|integer 	|是 |0 |支付状态 0=未付 1=已付 |
|invoice_title 		|string 	|是 |宁波欧瑞网络科技有限公司 |发票抬头 |
|tax_number 		|string 	|是 |xxx0909 |纳税人识别号 |
|create_time 		|datetime 	|是 |2017-01-04 14:04:25 |创建时间 |
|update_time 		|datetime 	|是 |2017-01-04 14:04:25 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "order_no": "PO_I6256034532185680001",
    "user_id": 1,
    "source": "0",
    "pay_amount": 30300.62,
    "goods_amount": 44200,
    "total_amount": 31033.54,
    "use_money": 99.5,
    "use_level": 883.4,
    "use_integral": 10,
    "use_coupon": 30,
    "use_discount": 0,
    "use_promotion": 12985.98,
    "use_card": 66.6,
    "card_number": "9514677739431425",
    "delivery_fee": 0,
    "delivery_id": 1,
    "consignee": "张三",
    "country": 0,
	"region_list": [1, 2, 3],
    "address": "详细地址",
    "complete_address": "浙江省 宁波市 江北区 详细地址",
    "zipcode": "315000",
    "tel": "87487585",
    "mobile": "15867430123",
    "buyer_remark": "发顺丰",
    "integral_pct": 100,
    "give_integral": 32199,
    "give_coupon": [],
    "invoice_amount": 909.02,
    "trade_status": 0,
    "delivery_status": 0,
    "payment_status": 0,
    "invoice_title": "宁波欧瑞网络科技有限公司",
    "tax_number": "xxx123456",
    "create_time": "2018-06-25 01:12:25",
    "update_time": "2018-06-25 01:12:25"
  }
}
```