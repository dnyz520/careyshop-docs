# 编辑一个提现账号

#### 接口描述：
- 编辑一个提现账号。

#### 请求 URL：
- `http|https://host/api/v1/withdraw_user/method/set.withdraw.user.item/`

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
|name |string |否 |max:32 | |carey |收款人姓名 |
|mobile |number |否 |length:7,15 | |13071297155 |收款人手机号 |
|bank_name |string |否 |max:50 | |支付宝 |收款账户 |
|account |string |否 |max:100 | |carey&#64;carey.cn |收款账号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|withdraw_user_id |integer |是 |4 |提现账号编号 |
|client_id |integer |否 |1 |账号编号 |
|name |string |否 |carey |收款人姓名 |
|mobile |string |否 |13071297155 |收款人手机号 |
|bank_name |string |否 |支付宝 |收款账户 |
|account |string |否 |carey&#64;carey.cn |收款账号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "withdraw_user_id": 4,
    "client_id": 1,
    "name": "carey",
    "mobile": "13071297155",
    "bank_name": "支付宝",
    "account": "carey@carey.cn"
  }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。