# 编辑一个通知系统模板

## 编辑sms系统模板

#### 接口描述：
- 编辑sms系统模板。

#### 请求 URL：
- `http|https://host/api/v1/notice_tpl/method/set.notice.tpl.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|notice_tpl_id |integer |是 |gt:0 | |2 |通知系统模板编号 |
|sms_code |string |是 |max:20 | |SMS_126357841 |阿里云短信模板编号 |
|sms_sign |string |是 |length:2,12 | |欧瑞 |阿里云短信签名 |
|template |string |是 |min:0 | |{商城名称}{用户昵称} |通知系统模板 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|notice_tpl_id |integer |是 |2 |通知系统模板编号 |
|name |string |是 |注册成功 |通知系统模板名称 |
|code |string |是 |sms |通知系统编码 sms=短信 email=邮件 |
|type |integer |是 |1 |通知类型，详见[「Type常量」](/api/admin/message/tpl/get.notice.tpl.item.md#type常量-通知类型 "「Type常量」") |
|sms_code |string |是 |SMS_126357841 |阿里云短信模板编号 |
|title |string |是 |欧瑞 |阿里云短信签名 |
|template |string |是 |{商城名称}{用户昵称} |通知系统模板 |
|status |integer |是 |1 |模板是否启用 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "notice_tpl_id": 2,
    "name": "注册成功",
    "code": "sms",
    "type": 1,
    "sms_code": "SMS_126357841",
    "title": "欧瑞",
    "template": "{商城名称}{用户昵称}",
    "status": 1
  }
}
```

#### 使用示例：
假设用户收到完整的内容是`尊敬的carey您好，您在CareyShop注册的账号已生效。`，则参数`template`的值实际只需要填`{用户昵称}{商城名称}`(前后顺序不影响)，而在阿里云的模板内容中需要填写`尊敬的${nick_name}您好，您在${shop_name}注册的账号已生效。`。`${}`是阿里云短信模板内容中变量的格式，至于`nick_name`的来源请参考[「获取一个通知系统模板」](/api/admin/message/tpl/get.notice.tpl.item.md "「获取一个通知系统模板」")。

#### 备注:
1. 短信与邮件共用同一个结构，所以返回时存在多余字段则按需索取。

2. 返回字段`code`值为`sms`时，字段`title`表示短信签名，否则表示邮件标题。

## 编辑email系统模板

#### 接口描述：
- 编辑email系统模板。

#### 请求 URL：
- `http|https://host/api/v1/notice_tpl/method/set.notice.tpl.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|notice_tpl_id |integer |是 |gt:0 | |9 |通知系统模板编号 |
|title |string |是 |max:255 | |账号注册成功 |通知系统标题 |
|template |string |是 |min:0 | |尊敬的{用户昵称}... |通知系统模板 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|notice_tpl_id |integer |是 |9 |通知系统模板编号 |
|name |string |是 |注册成功 |通知系统模板名称 |
|code |string |是 |email |通知系统编码 sms=短信 email=邮件 |
|type |integer |是 |1 |通知类型，详见[「Type常量」](/api/admin/message/tpl/get.notice.tpl.item.md#type常量-通知类型 "「Type常量」") |
|sms_code |string |是 | |阿里云短信模板编号 |
|title |string |是 |账号注册成功 |通知系统标题 |
|template |string |是 |尊敬的{用户昵称}... |通知系统模板 |
|status |integer |是 |1 |模板是否启用 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "notice_tpl_id": 9,
    "name": "注册成功",
    "code": "email",
    "type": 1,
    "sms_code": "",
    "title": "账号注册成功",
    "template": "尊敬的{用户昵称}您好，您在{商城名称}注册的账号已生效",
    "status": 1
  }
}
```
#### 使用示例：
假设用户收到完整的内容是`尊敬的carey您好，您在CareyShop注册的账号已生效。`，则参数`template`的值实际需要填`尊敬的{用户昵称}您好，您在{商城名称}注册的账号已生效`。`{用户昵称}`的来源请参考[「获取一个通知系统模板」](/api/admin/message/tpl/get.notice.tpl.item.md "「获取一个通知系统模板」")。

#### 备注:
1. 短信与邮件共用同一个结构，所以返回时存在多余字段则按需索取。

2. 返回字段`code`值为`sms`时，字段`title`表示短信签名，否则表示邮件标题。