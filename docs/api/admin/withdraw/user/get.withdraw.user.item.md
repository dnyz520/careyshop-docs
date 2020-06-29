# 获取指定账号的一个提现账号

#### 接口描述：
- 获取指定账号的一个提现账号。

#### 请求 URL：
- `http|https://host/api/v1/withdraw_user/method/get.withdraw.user.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|withdraw_user_id |integer |是 |gt:0 | |4 |提现账号编号 |
|client_id |integer |是 |gt:0 | |1 |账号编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|withdraw_user_id |integer |是 |4 |提现账号编号 |
|name |string |是 |carey |收款人姓名 |
|mobile |string |是 |13071297155 |收款人手机号 |
|bank_name |string |是 |支付宝 |收款账户 |
|account |string |是 |carey&#64;carey.cn |收款账号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "withdraw_user_id": 4,
    "name": "carey",
    "mobile": "13071297155",
    "bank_name": "支付宝",
    "account": "carey@carey.cn"
  }
}
```

#### 备注:
无