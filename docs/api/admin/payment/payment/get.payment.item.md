# 获取一个支付配置

#### 接口描述：
- 获取一个支付配置。

#### 请求 URL：
- `http|https://host/api/v1/payment/method/get.payment.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 相关文档：
- [支付宝配置格式](https://doc.careyshop.cn/docs/admin_api/a-21528074471 "支付宝配置格式")
- [微信配置格式](https://doc.careyshop.cn/docs/admin_api/a-21528074483 "微信配置格式")
- [Code常量(支付方式)](https://doc.careyshop.cn/docs/admin_api/a-21528075108 "Code常量(支付方式)")
- [Model模块驱动](https://doc.careyshop.cn/docs/admin_api/a-21528078802 "Model模块驱动")

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|payment_id |integer |是 |gt:0 | |3 |支付编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|payment_id |integer |是 |3 |支付编号 |
|name |string |是 |支付宝 |支付名称 |
|code |integer |是 |2 |支付编码，详见[「Code常量(支付方式)」](https://doc.careyshop.cn/docs/admin_api/a-21528075108 "「Code常量(支付方式)」")|
|image |string |是 |//image.jpg |支付图片 |
|is_deposit |integer |是 |1 |是否用于财务充值 0=否 1=是 |
|is_inpour |integer |是 |1 |是否用于账号充值 0=否 1=是 |
|is_payment |integer |是 |1 |是否用于订单支付 0=否 1=是 |
|is_refund |integer |是 |1 |是否支持原路退款 0=否 1=是 |
|setting |array |是 |[] |支付配置，详见本页中的`相关文档` |
|model |string |是 |alipay |支付配置对应模型，详见[「Model模块驱动」](https://doc.careyshop.cn/docs/admin_api/a-21528078802 "「Model模块驱动」") |
|sort |integer |是 |50 |支付排序值 |
|status |integer |是 |1 |支付状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "payment_id": 3,
    "name": "支付宝",
    "code": 2,
    "image": "//image.jpg",
    "is_deposit": 1,
    "is_inpour": 1,
    "is_payment": 1,
    "is_refund": 1,
    "setting": {
      "appId": {
        "name": "APPID",
        "value": ""
      },
      "merchantPrivateKey": {
        "name": "商户私钥",
        "value": ""
      },
      "alipayPublicKey": {
        "name": "支付宝公钥",
        "value": ""
      },
      "signType": {
        "name": "签名方式",
        "value": "RSA2"
      },
      "httpMethod": {
        "name": "页面接口方式",
        "value": "post"
      }
    },
    "model": "alipay",
    "sort": 50,
    "status": 1
  }
}
```

#### 备注:
无