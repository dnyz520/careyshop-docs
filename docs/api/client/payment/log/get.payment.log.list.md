# 获取充值记录列表

#### 接口描述：
- 获取充值记录列表。

#### 请求 URL：
- `http|https://host/api/v1/payment_log/method/get.payment.log.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|payment_no |string |否 |max:50 | |ZF_I4031954... |支付流水号 |
|order_no |string |否 |max:50 | |PO_I10495504... |订单号 |
|out_trade_no |string |否 |max:100 | |4200000013201... |交易号 |
|begin_time |datetime |否 |date | |2018-06-01 00:00:00 |开始时间 |
|end_time |datetime |否 |date | |2018-06-30 00:00:00 |结束时间 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |payment_log_id |status |排序字段 |

> 附属 A：
in:payment_log_id,payment_time,create_time,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |2 |合计计数 |

|items|类型|是否返回|示例值|描述|
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
    "items": [
      {
        "payment_no": "ZF_I4031954971632090001",
        "out_trade_no": "",
        "order_no": "",
        "user_id": 1,
        "amount": 0.01,
        "payment_time": "",
        "to_payment": 0,
        "type": 0,
        "create_time": "2018-04-03 09:39:09",
        "update_time": "2018-04-03 09:39:09",
        "status": 1
      },
      {
        "payment_no": "ZF_I1049554124677490001",
        "out_trade_no": "4200000013201801047643752535",
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
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。