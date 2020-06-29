# 获取一个提现请求

#### 接口描述：
- 获取一个提现请求。

#### 请求 URL：
- `http|https://host/api/v1/withdraw/method/get.withdraw.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|withdraw_no |string |是 |max:50 | |TX_H6238358225052790001 |提现单号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
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
      "username": "careya",
      "nickname": "careya",
      "head_pic": "//host/head_pic.jpg"
    }
  }
}
```

#### 备注:
无
