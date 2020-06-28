# 查询一笔退款信息

#### 接口描述：
- 查询一笔退款信息。

#### 请求 URL：
- `http|https://host/api/v1/order_refund/method/query.refund.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|refund_no |string |是 |max:50 | |TK_I6135119346449680001 |退款流水号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|refund_amount |number |是 |0.1 |退款金额 |
|refund_status |string |是 |退款成功 |退款状态 |
|refund_recv_accout |string |是 |支付宝原路退回 |退款入账账户 |
|refund_no |string |是 |TK_I6135119346449680001 |退款单号(流水号) |
|payment_no |string |是 |ZF_I6135096089631500001 |支付单号(交易流水号) |
|out_trade_no |string |是 |2018061321001004680571090420 |退款交易号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "refund_amount": 0.1,
    "refund_status": "退款成功",
    "refund_recv_accout": "支付宝原路退回",
    "refund_no": "TK_I6135119346449680001",
    "payment_no": "ZF_I6135096089631500001",
    "out_trade_no": "2018061321001004680571090420"
  }
}
```

```json
{
  "status": 200,
  "message": "success",
  "data": {
    "refund_amount": 0.1,
    "refund_status": "退款成功",
    "refund_recv_accout": "招商银行储蓄卡1035",
    "refund_no": "TK_I6135129344929870001",
    "payment_no": "ZF_I6135078611653400001",
    "out_trade_no": "4200000120201806130827213457"
  }
}
```

#### 备注:
无