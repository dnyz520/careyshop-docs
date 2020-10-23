# 获取提现请求列表

#### 接口描述：
- 获取提现请求列表。

#### 请求 URL：
- `http|https://host/api/v1/withdraw/method/get.withdraw.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|withdraw_no |string |否 |max:50 | |TX_H62383... |提现单号 |
|status |integer |否 |in:0,1,2,3,4 | |0 |提现状态 0=待处理 1=处理中 2=已取消 3=已完成 4=已拒绝 |
|account |string |否 |max:80 | |carey |账号或昵称 |
|begin_time |datetime |否 |beforeTime:end_time | |2017-06-07 11:08:10 |开始时间 |
|end_time |datetime |否 |afterTime:begin_time | |2017-07-07 11:08:10 |结束时间 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |asc |desc |排序方式 |
|order_field |string |否 |见附属 A |withdraw_id |status |排序字段 |

> 附属 A：
in:withdraw_id,withdraw_no,create_time,update_time,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |5 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|withdraw_no |string |是 |TX_H6238358225052790001 |提现单号 |
|user_id |integer |是 |1 |账号编号 |
|name |string |是 |carey |收款人姓名 |
|mobile |string |是 |13071297155 |收款人手机 |
|bank_name |string |是 |支付宝 |收款账户 |
|account |string |是 |carey&#64;carey.cn |收款账号 |
|money |number |是 |100 |提现金额 |
|fee |number |是 |0 |手续费(百分比) |
|amount |number |是 |100 |合计金额 |
|remark |string |是 |这是备注 |提现备注 |
|create_time |datetime |是 |2017-06-23 10:06:22 |创建时间 |
|update_time |datetime |是 |2017-06-23 10:09:21 |更新时间 |
|status |integer |是 |2 |提现状态 0=待处理 1=处理中 2=已取消 3=已完成 4=已拒绝 |
|get_user |object |是 |[] |账号对象 |

|get_user|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|username |string |否 |careya |账号 |
|nickname |string |否 |careya |昵称 |
|head_pic |string |否 |//host/head_pic.jpg |头像 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "withdraw_no": "TX_H6238358225052790001",
        "user_id": 1,
        "name": "carey",
        "mobile": "13071297155",
        "bank_name": "支付宝",
        "account": "carey@carey.cn",
        "money": 100,
        "fee": 0,
        "amount": 100,
        "remark": "",
        "create_time": "2017-06-23 10:06:22",
        "update_time": "2017-06-23 10:09:21",
        "status": 2,
        "get_user": {
          "username": "dnyz520",
          "nickname": "careya",
          "head_pic": "//host/head_pic.jpg"
        }
      },
      {
        "withdraw_no": "TX_H6238479678832110001",
        "user_id": 1,
        "name": "carey",
        "mobile": "13071297155",
        "bank_name": "支付宝",
        "account": "carey@carey.cn",
        "money": 99.99,
        "fee": 0,
        "amount": 99.99,
        "remark": "备注",
        "create_time": "2017-06-23 10:26:36",
        "update_time": "2017-06-23 16:28:49",
        "status": 3,
        "get_user": {
          "username": "dnyz520",
          "nickname": "careya",
          "head_pic": "//host/head_pic.jpg"
        }
      },
      {
        "withdraw_no": "TX_H6238547918993630001",
        "user_id": 1,
        "name": "carey",
        "mobile": "13071297155",
        "bank_name": "支付宝",
        "account": "carey@carey.cn",
        "money": 99.99,
        "fee": 6,
        "amount": 105.99,
        "remark": "账号不完整",
        "create_time": "2017-06-23 10:37:59",
        "update_time": "2017-06-23 17:12:04",
        "status": 4,
        "get_user": {
          "username": "dnyz520",
          "nickname": "careya",
          "head_pic": "//host/head_pic.jpg"
        }
      },
      {
        "withdraw_no": "TX_H6300542394601500001",
        "user_id": 1,
        "name": "carey",
        "mobile": "13071297155",
        "bank_name": "支付宝",
        "account": "carey@carey.cn",
        "money": 104.5,
        "fee": 6,
        "amount": 110.77,
        "remark": "",
        "create_time": "2017-06-30 14:50:24",
        "update_time": "2017-06-30 14:50:24",
        "status": 0,
        "get_user": {
          "username": "dnyz520",
          "nickname": "careya",
          "head_pic": "//host/head_pic.jpg"
        }
      },
      {
        "withdraw_no": "TX_H7079689041181850001",
        "user_id": 1,
        "name": "carey",
        "mobile": "13071297155",
        "bank_name": "支付宝",
        "account": "carey@carey.cn",
        "money": 0.03,
        "fee": 6,
        "amount": 0.03,
        "remark": "",
        "create_time": "2017-07-07 11:08:10",
        "update_time": "2017-07-07 11:08:10",
        "status": 0,
        "get_user": {
          "username": "dnyz520",
          "nickname": "careya",
          "head_pic": "//host/head_pic.jpg"
        }
      }
    ],
    "total_result": 5
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。