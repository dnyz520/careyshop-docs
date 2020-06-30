# 设置一个通知系统

## 设置sms通知系统

#### 接口描述：
- 设置sms通知系统。

#### 请求 URL：
- `http|https://host/api/v1/notice/method/set.notice.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|code |string |是 |min:0 | |sms |通知系统编码，值必须填`sms` |
|key_id |string |是 |max:255 | |LTAIS84... |Access Key ID |
|key_secret |string |是 |max:255 | |2vaz6AmNMmgKO... |Access Key Secret |
|status |integer |是 |in:0,1 | |1 |启用状态 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示执行成功 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
无

## 设置email通知系统

#### 接口描述：
- 设置email通知系统。

#### 请求 URL：
- `http|https://host/api/v1/notice/method/set.notice.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|code |string |是 |min:0 | |email |通知系统编码，值必须填`email` |
|email_host |string |是 |max:255 | |smtp.careyshop.cn |SMTP服务器 |
|email_port |string |是 |max:255 | |465 |SMTP端口 |
|email_addr |string |是 |max:255 | |admin&#64;careyshop.cn |发信人邮箱地址 |
|email_id |string |是 |max:255 | |admin |SMTP身份验证用户名 |
|email_pass |string |是 |max:255 | |admin888 |SMTP身份验证码 |
|email_ssl |integer |是 |in:0,1 | |0 |是否使用安全链接 0=否 1=是 |
|status |integer |是 |in:0,1 | |1 |启用状态 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示执行成功 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
无