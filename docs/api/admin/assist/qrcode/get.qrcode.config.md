# 获取一个二维码

#### 接口描述：
- 获取一个二维码。

#### 请求 URL：
- `http|https://host/api/v1/qrcode/method/get.qrcode.config/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|qrcode_id |integer |是 |gt:0 | |3 |二维码编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|qrcode_id |integer |是 |3 |二维码编号 |
|name |string |是 |实体店物料 |二维码名称 |
|text |string |是 |http://careyshop.cn |二维码内容 |
|size |integer |是 |3 |二维码图片大小 0=系统默认 |
|logo |string |是 |logo.png |二维码LOGO |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "qrcode_id": 3,
    "name": "实体店物料",
    "text": "http://careyshop.cn",
    "size": 3,
    "logo": "logo.png"
  }
}
```

#### 备注:
无