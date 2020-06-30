# 获取一个通知系统

#### 接口描述：
- 获取一个通知系统。

#### 请求 URL：
- `http|https://host/api/v1/notice/method/get.notice.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|code |string |是 |in:sms,email | |sms |通知系统编码 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|code |string |是 |sms |通知系统编码 |
|value |object |是 |[] |配置对象，详见备注 |
|module |string |是 |notice |对应模块 |
|description |string |是 |短信通知 |简介 |

#### code=sms 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "code": "sms",
    "value": {
      "key_id": {
        "name": "Access Key ID",
        "value": "LTAIS84N5AozgaNj"
      },
      "key_secret": {
        "name": "Access Key Secret",
        "value": "2vaz6AmNMmgKO5oaYUs1bm2B1iYams"
      },
      "status": {
        "name": "启用状态",
        "value": "1"
      }
    },
    "module": "notice",
    "description": "短信通知"
  }
}
```

#### 备注:
1. 参数`code`值为`sms`时返回的配置对象格式参考[「sms配置格式」](https://doc.careyshop.cn/docs/admin_api/a-21528124161 "「sms配置格式」")，值为`email`时的返回请参考[「email配置格式」](https://doc.careyshop.cn/docs/admin_api/a-21528124204 "「email配置格式」")。

## sms配置格式

#### 配置结构：
```json
{
    "key_id": {
        "name": "Access Key ID",
        "value": "LTAIS84N5AozgaNj"
    },
    "key_secret": {
        "name": "Access Key Secret",
        "value": "2vaz6AmNMmgKO5oaYUs1bm2B1iYams"
    },
    "status": {
        "name": "启用状态",
        "value": "1"
    }
}
```

#### 备注：
1. 键名对应每个`value`字段的键值，`name`字段只是说明。

## email配置格式

#### 配置结构：
```json
{
    "email_host": {
        "name": "SMTP服务器",
        "value": "smtp.careyshop.cn"
    },
    "email_port": {
        "name": "SMTP端口",
        "value": 465
    },
    "email_addr": {
        "name": "发信人邮箱地址",
        "value": "admin@careyshop.cn"
    },
    "email_id": {
        "name": "SMTP身份验证用户名",
        "value": "admin"
    },
    "email_pass": {
        "name": "SMTP身份验证码",
        "value": "admin888"
    },
    "email_ssl": {
        "name": "是否使用安全链接",
        "value": 0
    },
    "status": {
        "name": "启用状态",
        "value": "1"
    }
}
```

#### 备注：
1. 键名对应每个`value`字段的键值，`name`字段只是说明。