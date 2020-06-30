# 编辑一个二维码

#### 接口描述：
- 编辑一个二维码。

#### 请求 URL：
- `http|https://host/api/v1/qrcode/method/set.qrcode.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|qrcode_id |integer |是 |gt:0 | |3 |二维码编号 |
|name |string |否 |max:64 | |实体店物料 |二维码名称 |
|text |string |否 |max:255 | |http://careyshop.cn |二维码内容 |
|size |integer |否 |between:0,10 | |3 |二维码图片大小 0=系统默认 |
|logo |string |否 |max:255 | |logo.png |二维码LOGO |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|qrcode_id |integer |是 |3 |二维码编号 |
|name |string |否 |实体店物料 |二维码名称 |
|text |string |否 |http://careyshop.cn |二维码内容 |
|size |integer |否 |3 |二维码图片大小 0=系统默认 |
|logo |string |否 |logo.png |二维码LOGO |

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
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。

2. 参数`text`的值可以是任意内容，例：URL 地址、文本、协议等等。

3. 参数`logo`的值可以是本地上传的资源，例：`static/images/logo.png`。也可以是网络上的任意资源，例：`https://careyshop.cn/image/logo.png`。如不填或为空，则默认使用系统配置的数值，具体参见[「设置系统配置」](https://doc.careyshop.cn/docs/admin_api/a-21523337599 "「设置系统配置」")。