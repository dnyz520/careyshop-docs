# 订单付款在线支付

#### 接口描述：
- 订单付款在线支付。

#### 请求 URL：
- `http|https://host/api/v1/payment/method/order.payment.pay/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|to_payment |integer |是 |egt:0 | |2 |支付方式，详见[「Code常量」](/api/client/payment/payment/z_documents.md#code常量-支付方式 "「Code常量」") |
|order_no |string |是 |max:50 | |PO_I104955047 |订单号 |
|request_type |string |是 |in:web,app | |web |请求来源 |

> <span style="color:#d9534f">说明：当`request_type=web`时返回的结构是基于表单的，并且会自动识别是属于`PC端`还是`移动端`，不同的支付方式和终端最终返回的表单结构也不同。`request_type=app`时返回的是支付令牌，适用于 SDK 调用方式。</span>

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |string |是 |...(过长,省略) |当`request_type=app`时返回支付令牌 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": "alipay_sdk=alipay-sdk-php-20161101&app_id=2017062407558727&biz_content=%7B%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22body%22%3A%22%22%2C%22subject%22%3A%22%E8%AE%A2%E5%8D%95%E4%BB%98%E6%AC%BE%22%2C%22total_amount%22%3A0.10000000000000001%2C%22out_trade_no%22%3A%22ZF_I6049564866510590001%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fcareyshop.oruei.com%2Fapi%2Fv1%2Fpayment%2Fmethod%2Fput.payment.data%2Fto_payment%2F2%2Ftype%2Fnotify.html&sign_type=RSA2&timestamp=2018-06-04+15%3A00%3A48&version=1.0&sign=YxS7WLT3V5IPUI7b8sJithv5j2PJu5jmRpMqndm6MXqftxUPdu0uDk98sm2s6kKqTgHHkpInmMzC9P11agYGQ3MJNXcCuU6tH9FKDd4YI7IprACHqo%2BEIWfne4fRDdTHeGwcPXUF8pgA0rCENhq3KynNd%2FlJLUhy5YbdWrAFHfhAgLX%2FhbjPcZnvFWFdwvjD%2BQLLCYJco0aK4SG4mI3RcCO52%2BdjfAvgotlFctvxUp4dg%2Fygn5NYLD4HsZNVB6xDdNxLGxnzq%2FNnL%2F%2FQEBoR57ixkPp3YbjWRR7PvG4tuCBFX99ysndzeELopy4QfMZVhv91YDrNNYjrTTJdnfy%2F%2Bg%3D%3D"
}
```

#### 备注:
1. 支付服务需要先去服务商处开通服务后才可使用。
2. 付款之前需要确认订单字段`total_amount`，如果为`0`则表示该笔订单已经使用`账户内的资金(包括余额、购物卡等)`进行了付款，这时候就不需要再让顾客选择在线支付方式，而是直接将`to_payment`设为`PAYMENT_CODE_USER`或`0`进行请求。
