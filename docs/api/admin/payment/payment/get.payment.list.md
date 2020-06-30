# 获取支付配置列表

#### 接口描述：
- 获取支付配置列表。

#### 请求 URL：
- `http|https://host/api/v1/payment/method/get.payment.list/`

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
|type |string |否 |见附属 A | |deposit |支付类型 |
|is_select |integer |否 |in:0,1 | |0 |是否选择框 0=否 1=是 |
|exclude_code |integer |否 |min[]:0 | |[1,2] |排除支付编码 |

> 附属 A：
in:deposit,inpour,payment,refund
deposit=可用于财务充值
inpour=可用于账号充值
payment=可用于订单支付
refund=支持原路退款

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|payment_id |integer |是 |3 |支付编号 |
|name |string |是 |支付宝 |支付名称 |
|code |integer |是 |2 |支付编码，详见[「Code常量」](https://doc.careyshop.cn/docs/admin_api/a-21528075108 "「Code常量」")|
|image |string |是 |//image.jpg |支付图片 |
|is_deposit |integer |是 |1 |是否用于财务充值 0=否 1=是 |
|is_inpour |integer |是 |1 |是否用于账号充值 0=否 1=是 |
|is_payment |integer |是 |1 |是否用于订单支付 0=否 1=是 |
|is_refund |integer |是 |1 |是否支持原路退款 0=否 1=是 |
|model |string |是 |alipay |支付配置对应模型，详见[「Model模块驱动」](https://doc.careyshop.cn/docs/admin_api/a-21528078802 "「Model模块驱动」") |
|sort |integer |是 |50 |支付排序值 |
|status |integer |是 |1 |支付状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "payment_id": 1,
      "name": "账户资金",
      "code": 0,
      "image": "",
      "is_deposit": 1,
      "is_inpour": 0,
      "is_payment": 0,
      "is_refund": 0,
      "model": "",
      "sort": 50,
      "status": 1
    },
    {
      "payment_id": 2,
      "name": "货到付款",
      "code": 1,
      "image": "",
      "is_deposit": 0,
      "is_inpour": 0,
      "is_payment": 1,
      "is_refund": 0,
      "model": "cod",
      "sort": 50,
      "status": 1
    },
    {
      "payment_id": 3,
      "name": "支付宝",
      "code": 2,
      "image": "//image.jpg",
      "is_deposit": 1,
      "is_inpour": 1,
      "is_payment": 1,
      "is_refund": 1,
      "model": "alipay",
      "sort": 50,
      "status": 1
    },
    {
      "payment_id": 4,
      "name": "微信支付",
      "code": 3,
      "image": "",
      "is_deposit": 1,
      "is_inpour": 1,
      "is_payment": 1,
      "is_refund": 1,
      "model": "weixin",
      "sort": 50,
      "status": 1
    },
    {
      "payment_id": 5,
      "name": "银行转账",
      "code": 4,
      "image": "",
      "is_deposit": 1,
      "is_inpour": 0,
      "is_payment": 0,
      "is_refund": 0,
      "model": "",
      "sort": 50,
      "status": 1
    },
    {
      "payment_id": 6,
      "name": "购物卡",
      "code": 5,
      "image": "",
      "is_deposit": 0,
      "is_inpour": 0,
      "is_payment": 0,
      "is_refund": 0,
      "model": "",
      "sort": 50,
      "status": 1
    },
    {
      "payment_id": 7,
      "name": "其他",
      "code": 6,
      "image": "",
      "is_deposit": 1,
      "is_inpour": 0,
      "is_payment": 0,
      "is_refund": 0,
      "model": "",
      "sort": 50,
      "status": 1
    }
  ]
}
```

#### is_select=1 响应参数：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "name": "账户资金",
      "code": 0,
      "image": ""
    },
    {
      "name": "货到付款",
      "code": 1,
      "image": ""
    },
    {
      "name": "支付宝",
      "code": 2,
      "image": "//image.jpg"
    },
    {
      "name": "微信支付",
      "code": 3,
      "image": ""
    },
    {
      "name": "银行转账",
      "code": 4,
      "image": ""
    },
    {
      "name": "购物卡",
      "code": 5,
      "image": ""
    },
    {
      "name": "其他",
      "code": 6,
      "image": ""
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。