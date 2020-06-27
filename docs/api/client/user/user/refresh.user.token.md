# 刷新Token

#### 接口描述：
- 使用`刷新授权码`增加授权码有效时长。

#### 请求 URL：
- `http|https://host/api/v1/user/method/refresh.user.token/`

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
|token |string |是 |7e414e5208ff3f14a103f3849fc2bdf3 |授权码 |
|token_expires |timestamp |是 |1531930651 |授权码过期时间，时间戳 |
|refresh |string |是 |9ba4bc8110be9beadee242b180a57676 |刷新授权码，可用来刷新 token |
|refresh_expires |timestamp |是 |1532017051 |刷新授权码过期时间，时间戳 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "token": {
      "group_id": 3,
      "token": "7e414e5208ff3f14a103f3849fc2bdf3",
      "token_expires": 1531930651,
      "refresh": "9ba4bc8110be9beadee242b180a57676",
      "refresh_expires": 1532017051
    }
  }
}
```

#### 备注:
1. `token`与`refresh`的值固定为 32 个十六进制字符的长度，并且是小写字母。

2. 刷新授权码成功后，之前的`token`将无效。