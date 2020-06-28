# 获取交易结算列表

#### 接口描述：
- 获取交易结算列表。

#### 请求 URL：
- `http|https://host/api/v1/transaction/method/get.transaction.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|type |integer |否 |in:0,1 | |0 |收支类型 0=收入 1=支出|
|source_no |string |否 |max:100 | |PO_I10495504 |交易来源订单号 |
|module |string |否 |in:points,money,card | |money |收支模型 points=积分 money=余额 card=购物卡 |
|begin_time |datetime |否 |beforeTime:end_time | |2018-05-13 10:00:00 |开始时间 |
|end_time |datetime |否 |afterTime:begin_time | |2018-05-30 10:00:00 |结束时间 |
|card_number |string |否 |length:16 | |997156462 |购物卡卡号 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |transaction_id |type |排序字段 |

> 附属 A：
in:transaction_id,type,create_time

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |是 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |4 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|transaction_id |integer |是 |4 |交易编号 |
|user_id |integer |是 |1 |账号编号(顾客组) |
|action |string |是 |Carey |操作人 |
|type |integer |是 |0 |收支类型 0=收入 1=支出 |
|amount |number |是 |100 |收支金额 |
|balance |number |是 |22258482 |剩余余额 |
|source_no |string |是 |PO_I10495504 |交易来源订单号 |
|remark |string |是 |赠送积分 |交易备注 |
|cause |string |是 |原因 |操作原因 |
|module |string |是 |points |收支模型 points=积分 money=余额 card=购物卡 |
|to_payment |integer |是 |0 |交易来源 |
|card_number |string |是 |997156462 |购物卡卡号 |
|create_time |datetime |是 |2018-01-04 15:17:53 |创建时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "transaction_id": 4,
        "user_id": 1,
        "action": "Carey",
        "type": 0,
        "amount": 100,
        "balance": 22258482,
        "source_no": "PO_I1049550470892670001",
        "remark": "赠送积分",
        "cause": "",
        "module": "points",
        "to_payment": 0,
        "card_number": "",
        "create_time": "2018-01-04 15:17:53"
      },
      {
        "transaction_id": 3,
        "user_id": 1,
        "action": "Carey",
        "type": 0,
        "amount": 780,
        "balance": 31367.01,
        "source_no": "PO_I1049550470892680001",
        "remark": "取消订单",
        "cause": "",
        "module": "card",
        "to_payment": 5,
        "card_number": "9971564621172962",
        "create_time": "2018-01-04 15:17:53"
      }
    ],
    "total_result": 4
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。