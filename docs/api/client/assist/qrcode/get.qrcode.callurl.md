# 获取二维码调用地址

#### 接口描述：
- 获取二维码调用地址。

#### 请求 URL：
- `http|https://host/api/v1/qrcode/method/get.qrcode.callurl/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
| | | | | | | | |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|call_url |string |是 |http://host/api/v1/qrcode/method/get.qrcode.item.html |调用地址 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "call_url": "http://host/api/v1/qrcode/method/get.qrcode.item.html"
  }
}
```

#### 备注:
无