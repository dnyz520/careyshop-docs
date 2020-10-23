# 获取退款记录列表

#### 接口描述：
- 获取退款记录列表。

#### 请求 URL：
- `http|https://host/api/v1/order_refund/method/get.refund.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|refund_no |string |否 |max:50 | |TK_I6135... |退款流水号 |
|order_no |string |否 |max:50 | |PO_I10495... |订单号 |
|out_trade_no |string |否 |max:100 | |420000... |退款交易号 |
|payment_no |string |否 |max:50 | |ZF_I6135... |支付流水号 |
|to_payment |integer |否 |egt:0 | |3 |退款方式 |
|status |integer |否 |in:0,1,2,3 | |1 |退款状态，详见`附属 B` |
|begin_time |datetime |否 |beforeTime:end_time | |2018-06-01 00:00:00 |开始时间 |
|end_time |datetime |否 |afterTime:begin_time | |2018-06-30 00:00:00 |结束时间 |
|account |string |否 |max:80 | |carey |账号或昵称 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |order_refund_id |status |排序字段 |

> 附属 A：
in:order_refund_id,create_time,status

</p>

> 附属 B：
0=待处理 1=已处理 2=失败 3=撤销

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |3 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|refund_no |string |是 |TK_I6135136017166080001 |退款流水号 |
|order_no |string |是 |PO_I1049550470892680001 |订单号 |
|out_trade_no |string |是 |4200000112201806138875935999 |退款交易号 |
|out_trade_msg |string |是 |... |退款返回信息 |
|user_id |integer |是 |1 |账号编号 |
|total_amount |number |是 |0.1 |订单支付总额 |
|amount |number |是 |0.1 |退款金额 |
|payment_no |string |是 |ZF_I6135059629848380001 |支付流水号 |
|to_payment |integer |是 |3 |退款方式 |
|create_time |datetime |是 |2018-06-13 08:56:01 |创建时间 |
|update_time |datetime |是 |2018-06-13 08:56:01 |更新时间 |
|status |integer |是 |1 |退款状态，详见`附属 B` |
|get_user |object |否 |[] |账号对象 |

|get_user|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|username |string |否 |carey |账号 |
|nickname |string |否 |carey |昵称 |
|head_pic |string |否 |//host/head_pic.jpg |头像 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "refund_no": "TK_I6135136017166080001",
        "order_no": "PO_I1049550470892680001",
        "out_trade_no": "4200000112201806138875935999",
        "out_trade_msg": "",
        "user_id": 1,
        "total_amount": 0.1,
        "amount": 0.1,
        "payment_no": "ZF_I6135059629848380001",
        "to_payment": 3,
        "create_time": "2018-06-13 08:56:01",
        "update_time": "2018-06-13 08:56:01",
        "status": 1,
        "get_user": {
          "username": "dnyz520",
          "nickname": "careya",
          "head_pic": "//host/head_pic.jpg"
        }
      },
      {
        "refund_no": "TK_I6135129344929870001",
        "order_no": "PO_I1049550470892680001",
        "out_trade_no": "4200000120201806130827213457",
        "out_trade_msg": "",
        "user_id": 1,
        "total_amount": 0.1,
        "amount": 0.1,
        "payment_no": "ZF_I6135078611653400001",
        "to_payment": 3,
        "create_time": "2018-06-13 08:54:54",
        "update_time": "2018-06-13 08:54:54",
        "status": 1,
        "get_user": {
          "username": "dnyz520",
          "nickname": "careya",
          "head_pic": "//host/head_pic.jpg"
        }
      },
      {
        "refund_no": "TK_I6135119346449680001",
        "order_no": "PO_I1049550470892680001",
        "out_trade_no": "2018061321001004680571090420",
        "out_trade_msg": "",
        "user_id": 1,
        "total_amount": 0.1,
        "amount": 0.1,
        "payment_no": "ZF_I6135096089631500001",
        "to_payment": 2,
        "create_time": "2018-06-13 08:53:14",
        "update_time": "2018-06-13 08:53:14",
        "status": 1,
        "get_user": {
          "username": "dnyz520",
          "nickname": "careya",
          "head_pic": "//host/head_pic.jpg"
        }
      }
    ],
    "total_result": 3
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。