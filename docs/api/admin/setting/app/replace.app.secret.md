# 更换应用Secret

#### 接口描述：
- 更换应用Secret。

#### 请求 URL：
- `http|https://host/api/v1/app/method/replace.app.secret/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|app_id |integer |是 |gt:0 | |1 |应用编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|app_secret |string |是 |c73800b2c9d5ec51bf36e8e5e4e20129 |密钥 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "app_secret": "852db024d87e64977d9d78e04f20174e"
  }
}
```

#### 备注:
1. 更换`app_secret`后之前的将无效。