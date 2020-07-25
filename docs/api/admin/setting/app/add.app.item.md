# 添加一个应用

#### 接口描述：
- 添加一个应用。

#### 请求 URL：
- `http|https://host/api/v1/app/method/add.app.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|app_name |string |是 |max:30 | |IOS |应用名称 |
|status |integer |否 |in:0,1 |1 |1 |应用状态 0=禁用 1=启用 |
|captcha |integer |否 |in:0,1 |0 |0 |启用验证码 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|app_name |string |是 |IOS |应用名称 |
|status |integer |否 |1 |应用状态 0=禁用 1=启用 |
|captcha |integer |否 |0 |启用验证码 0=禁用 1=启用 |
|app_key |integer |是 |29456296 |钥匙 |
|app_secret |string |是 |c73800b2c9d5ec51bf36e8e5e4e20129 |密钥 |
|app_id |integer |是 |1 |应用编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "app_name": "IOS",
    "status": 1,
    "captcha": 0,
    "app_key": 29456296,
    "app_secret": "c73800b2c9d5ec51bf36e8e5e4e20129",
    "app_id": 1
  }
}
```

#### 备注:
无