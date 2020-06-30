# 设置系统配置

#### 接口描述：
- 设置系统配置。

#### 请求 URL：
- `http|https://host/api/v1/setting/method/set.system.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|open_index |integer |否 |in:0,1 | | |是否开启首页 0=否 1=是|
|open_api |integer |否 |in:0,1 | | |是否开启API接口 0=否 1=是|
|open_mobile |integer |否 |in:0,1 | | |是否开启移动页 0=否 1=是|
|close_reason |string |否 |max:65535 | | |关闭原因 |
|name |string |否 |max:65535 | | |商城名称 |
|title |string |否 |max:65535 | | |商城标题 |
|keywords |string |否 |max:65535 | | |商城关键词 |
|description |string |否 |max:65535 | | |网站描述 |
|logo |string |否 |max:65535 | | |网站LOGO |
|third_count |string |否 |max:65535 | | |第三方统计代码 |
|withdraw_fee |number |否 |between:0,100 | | |提现手续费 |
|miitbeian |string |否 |max:65535 | | |ICP备案许可证号 |
|miitbeian_url |string |否 |max:65535 | | |ICP备案链接地址 |
|miitbeian_ico |string |否 |max:65535 | | |ICP备案图标 |
|beian |string |否 |max:65535 | | |公安机关备案号 |
|beian_url |string |否 |max:65535 | | |公安机关备案链接 |
|beian_ico |string |否 |max:65535 | | |公安机关备案图标 |
|weixin_url |string |否 |max:65535 | | |安卓安装包微信中间页地址 |
|qrcode_logo |string |否 |max:65535 | | |二维码LOGO |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示执行成功 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
1. 提交时未传入的`请求参数`表示该`字段`下的内容不进行更新操作，但不能一个都不传。