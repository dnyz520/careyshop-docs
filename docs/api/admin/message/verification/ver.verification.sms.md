# 验证短信验证码

#### 接口描述：
- 验证短信验证码。

#### 请求 URL：
- `http|https://host/api/v1/verification/method/ver.verification.sms/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|mobile |number |是 |length:7,15 | |13777888888 |手机号 |
|code |integer |是 |max:6 | |666666 |验证码 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示验证通过 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
1. 验证通过后必须主动使用掉验证码，否则短时间内可重复使用。