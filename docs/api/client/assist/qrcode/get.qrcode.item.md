# 动态生成一个二维码

#### 接口描述：
- 动态生成一个二维码。何为动态？通过参数的传递，实时生成。

#### 请求 URL：
- `http|https://host/api/v1/qrcode/method/get.qrcode.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|qrcode_id |integer |否 |gt:0 | |1 |二维码编号 |
|text |string |否 |max:255 | |https://careyshop.cn |二维码内容 |
|size |integer |否 |between:1,10 |3 |5 |二维码图片大小 |
|logo |string |否 |max:255 | |//logo.png |二维码LOGO |

#### 响应示例：
![](../image/attach_153249bab5b38bb4.png)

#### 备注:
1. 参数`text`的值可以是任意内容，例：URL 地址、文本、协议等等。

2. 参数`logo`的值可以是本地上传的资源，例：`static/images/logo.png`。也可以是网络上的任意资源，例：`https://careyshop.cn/image/logo.png`。如不填或为空，则使用系统配置的数值，具体参见`管理组 API`中的[「设置系统配置」](/api/admin/setting/system/set.system.list.md "「设置系统配置」")。

3. 当使用参数`qrcode_id`生成二维码时，其余的参数将不再有效。
