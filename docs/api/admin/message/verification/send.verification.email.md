# 发送邮件验证码

#### 接口描述：
- 发送邮件验证码。

#### 请求 URL：
- `http|https://host/api/v1/verification/method/send.verification.email/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|email |string |是 |max:60 | |admin&#64;careyshop.cn |邮箱地址 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示发送成功 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
1. 发送后验证码在 5 分钟内验证有效，超时将无效。