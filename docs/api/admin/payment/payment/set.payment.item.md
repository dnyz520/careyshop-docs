# 编辑一个支付配置

#### 接口描述：
- 编辑一个支付配置。

#### 请求 URL：
- `http|https://host/api/v1/payment/method/set.payment.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 相关文档：
[[toc]]

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|payment_id |integer |是 |gt:0 | |3 |支付编号 |
|image |string |否 |max:255 | |//image.jpg |支付图片 |
|is_deposit |integer |否 |in:0,1 | |1 |是否用于财务充值 0=否 1=是 |
|is_inpour |integer |否 |in:0,1 | |1 |是否用于账号充值 0=否 1=是 |
|is_payment |integer |否 |in:0,1 | |1 |是否用于订单支付 0=否 1=是 |
|is_refund |integer |否 |in:0,1 | |1 |是否支持原路退款 0=否 1=是 |
|setting |array |否 |min:0 | |[] |支付配置，详见本页中的`相关文档` |
|sort |integer |否 |between:0,255 | |50 |支付排序值 |
|status |integer |否 |in:0,1 | |1 |支付状态 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|payment_id |integer |是 |3 |支付编号 |
|image |string |否 |//image.jpg |支付图片 |
|is_deposit |integer |否 |1 |是否用于财务充值 0=否 1=是 |
|is_inpour |integer |否 |1 |是否用于账号充值 0=否 1=是 |
|is_payment |integer |否 |1 |是否用于订单支付 0=否 1=是 |
|is_refund |integer |否 |1 |是否支持原路退款 0=否 1=是 |
|setting |array |否 |[] |支付配置，详见本页中的`相关文档` |
|sort |integer |否 |50 |支付排序值 |
|status |integer |否 |1 |支付状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "payment_id": 3,
    "image": "//image.jpg",
    "is_deposit": 1,
    "is_inpour": 1,
    "is_payment": 1,
    "is_refund": 1,
    "setting": {},
    "sort": 50,
    "status": 1
  }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。

## 支付宝配置格式

#### 配置结构：
```json
{
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
}
```

#### 备注：
1. 键名对应每个`value`字段的键值，具体的键值可以在微信后台找到，`name`字段只是说明。

2. 使用数组的方式进行提交，并且需注意大小写。

## 微信配置格式

#### 配置结构：
```json
{
    "appid": {
        "name": "绑定支付的APPID",
        "value": ""
    },
    "mchid": {
        "name": "商户号",
        "value": ""
    },
    "key": {
        "name": "商户支付密钥",
        "value": ""
    },
    "appsecret": {
        "name": "公众帐号Secert",
        "value": ""
    },
    "sslcert": {
        "name": "apiclient_cert",
        "value": "/var/www/html/www.careyshop.cn/extend/payment/weixin/cert/apiclient_cert.pem"
    },
    "sslkey": {
        "name": "apiclient_key",
        "value": "/var/www/html/www.careyshop.cn/extend/payment/weixin/cert/apiclient_key.pem"
    }
}
```

#### 备注：
1. 键名对应每个`value`字段的键值，具体的键值可以在支付宝后台找到，`name`字段只是说明。

2. 使用数组的方式进行提交，并且需注意大小写。

3. 请注意`sslcert`和`sslkey`字段，证书的路径必须是绝对路径，斜杠一律使用`/`。

## Code常量(支付方式)

#### 常量值：
支付方式的`code`在框架中进行了固定，具体值的代表含义详见如下：

```php
    /**
     * 账号资金
     * @var int
     */
    const PAYMENT_CODE_USER = 0;

    /**
     * 货到付款
     * @var int
     */
    const PAYMENT_CODE_COD = 1;

    /**
     * 支付宝
     * @var int
     */
    const PAYMENT_CODE_ALIPAY = 2;

    /**
     * 微信支付
     * @var int
     */
    const PAYMENT_CODE_WECHAT = 3;

    /**
     * 银行转账
     * @var int
     */
    const PAYMENT_CODE_BANK = 4;

    /**
     * 购物卡
     * @var int
     */
    const PAYMENT_CODE_CARD = 5;

    /**
     * 其他
     * @var int
     */
    const PAYMENT_CODE_OTHER = 6;
```

#### 使用示例：
`Payment::PAYMENT_CODE_ALIPAY`，其中`Payment`是类名，如果不在框架内使用请另行定义。

## Model模块驱动

#### 目前存在的驱动模块：
```
cod=货到付款
alipay=支付宝
weixin=微信支付
```
