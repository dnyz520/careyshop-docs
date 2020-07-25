# 获取应用验证码

#### 接口描述：
- 获取应用验证码。

#### 请求 URL：
- `http|https://host/api/v1/app/method/image.app.captcha/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|session_id |string |否 |min:0 | |5d47ef5ad43b424da3af99252396a2b2 |验证码标识 |
|generate |string |否 |in:base64,image |image |image |数据返回的格式 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|content_type |string |是 |image/png |文件流格式 |
|base64 |string |是 |... |base64编码后 |

#### 响应示例：
```json
{
    "status": 200,
    "message": "success",
    "data": {
        "content_type": "image/png",
        "base64": "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"
    }
}
```

#### 备注:
无
