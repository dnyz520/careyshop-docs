# 申请一个提现请求

#### 接口描述：
- 申请一个提现请求。

#### 请求 URL：
- `http|https://host/api/v1/withdraw/method/add.withdraw.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|withdraw_user_id |integer |是 |gt:0 | |1 |提现账号编号 |
|money |number |是 |gt:0 | |99.99 |提现金额 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|money |number |是 |99.99 |提现金额 |
|fee |number |是 |6.5 |手续费(百分比) |
|withdraw_no |string |是 |TX_I6192120209436030001 |提现单号 |
|user_id |integer |是 |1 |账号编号 |
|amount |number |是 |106.49 |合计金额 |
|status |integer |是 |0 |提现状态 0=待处理 1=处理中 2=已取消 3=已完成 4=已拒绝 |
|name |string |是 |欧瑞网络科技 |收款人姓名 |
|mobile |string |是 |13777090315 |收款人手机 |
|bank_name |string |是 |支付宝 |收款账户 |
|account |string |是 |dnyz520&#64;163.com |收款账号 |
|create_time |datetime |是 |2018-06-19 23:13:22 |创建时间 |
|update_time |datetime |是 |2018-06-19 23:13:22 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "money": 99.99,
    "fee": 6.5,
    "withdraw_no": "TX_I6192120209436030001",
    "user_id": 1,
    "amount": 106.49,
    "status": 0,
    "name": "欧瑞网络科技",
    "mobile": "13777090315",
    "bank_name": "支付宝",
    "account": "dnyz520@163.com",
    "create_time": "2018-06-19 23:13:22",
    "update_time": "2018-06-19 23:13:22"
  }
}
```

#### 备注:
无