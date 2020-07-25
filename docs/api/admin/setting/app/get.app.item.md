# 获取一个应用

#### 接口描述：
- 获取一个应用。

#### 请求 URL：
- `http|https://host/api/v1/app/method/get.app.item/`

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
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|app_id |integer |是 |1 |应用编号 |
|app_name |string |是 |IOS |应用名称 |
|app_key |integer |是 |29456296 |钥匙 |
|app_secret |string |是 |c73800b2c9d5ec51bf36e8e5e4e20129 |密钥 |
|status |integer |是 |1 |应用状态 0=禁用 1=启用 |
|captcha |integer |是 |0 |启用验证码 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "app_id": 1,
    "app_name": "IOS",
    "app_key": 29456296,
    "app_secret": "c73800b2c9d5ec51bf36e8e5e4e20129",
    "status": 1,
    "captcha": 0
  }
}
```

#### 备注:
无