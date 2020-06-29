# 刷新Token

#### 接口描述：
- 使用`刷新授权码`增加授权码有效时长。

#### 请求 URL：
- `http|https://host/api/v1/admin/method/refresh.admin.token/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|refresh |string |是 |length:32 | |4f2780e64fce73f21e4f2c16adeca7d2 |刷新授权码 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|token |object |是 |[] |授权对象 |

|token|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|group_id |integer |是 |1 |所属用户组 |
|token |string |是 |58db94951b3e1d29d7c037a78aa157aa |授权码 |
|token_expires |timestamp |是 |1527041045 |授权码过期时间，时间戳 |
|refresh |string |是 |f217fd295c10ed6300ed4be03f922d6c |刷新授权码，可用来刷新 token |
|refresh_expires |timestamp |是 |1527127445 |刷新授权码过期时间，时间戳 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "token": {
      "group_id": 1,
      "token": "58db94951b3e1d29d7c037a78aa157aa",
      "token_expires": 1527041045,
      "refresh": "f217fd295c10ed6300ed4be03f922d6c",
      "refresh_expires": 1527127445
    }
  }
}
```

#### 备注:
1. `token`与`refresh`的值固定为 32 个十六进制字符的长度，并且是小写字母。

2. 刷新授权码成功后，之前的`token`将无效。