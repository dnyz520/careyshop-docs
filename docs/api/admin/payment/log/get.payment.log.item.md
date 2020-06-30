# 获取一笔充值记录

#### 接口描述：
- 获取一笔充值记录。

#### 请求 URL：
- `http|https://host/api/v1/payment_log/method/get.payment.log.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|payment_no |string |是 |max:50 | |ZF_I10495541... |支付流水号 |
|type |integer |否 |in:0,1 | |0 |支付类型 0=充值 1=订单 |
|status |integer |否 |in:0,1,2 | |1 |支付状态 0=待付款 1=已完成 2=已关闭 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|payment_no |string |是 |ZF_I1049554124677490001 |支付流水号 |
|out_trade_no |string |是 |4200000013201 |交易号 |
|order_no |string |是 |PO_I1049550470892670001 |订单号 |
|user_id |integer |是 |1 |账号编号 |
|amount |number |是 |0.1 |支付金额 |
|payment_time |datetime |是 |2018-01-04 00:06:17 |支付时间 |
|to_payment |integer |是 |3 |支付方式 3=支付宝 4=微信 |
|type |integer |是 |1 |支付类型 0=充值 1=订单 |
|create_time |datetime |是 |2018-01-04 00:05:41 |创建时间 |
|update_time |datetime |是 |2018-01-04 00:06:18 |更新时间 |
|status |integer |是 |1 |支付状态 0=待付款 1=已完成 2=已关闭 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "payment_no": "ZF_I1049554124677490001",
    "out_trade_no": "4200000013201",
    "order_no": "PO_I1049550470892670001",
    "user_id": 1,
    "amount": 0.1,
    "payment_time": "2018-01-04 00:06:17",
    "to_payment": 3,
    "type": 1,
    "create_time": "2018-01-04 00:05:41",
    "update_time": "2018-01-04 00:06:18",
    "status": 1
  }
}
```

#### 备注:
无