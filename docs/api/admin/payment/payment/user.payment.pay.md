# 账号在线充值余额

#### 接口描述：
- 账号在线充值余额。

#### 请求 URL：
- `http|https://host/api/v1/payment/method/user.payment.pay/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|money |number |是 |egt:0.01 | |0.01 |金额 |
|to_payment |integer |是 |egt:0 | |2 |支付方式，详见[「Code常量」](https://doc.careyshop.cn/docs/admin_api/a-21528075108 "「Code常量」") |
|payment_no |string |否 |max:50 | |801047643752535 |交易流水号 |
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
  "data": "alipay_sdk=alipay-sdk-php-20161101&app_id=2017062407558727&biz_content=%7B%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22body%22%3A%22%22%2C%22subject%22%3A%22%E8%B4%A6%E5%8F%B7%E5%85%85%E5%80%BC%22%2C%22total_amount%22%3A0.01%2C%22out_trade_no%22%3A%22ZF_I6049447479650480001%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fcareyshop.oruei.com%2Fapi%2Fv1%2Fpayment%2Fmethod%2Fput.payment.data%2Fto_payment%2F2%2Ftype%2Fnotify.html&sign_type=RSA2&timestamp=2018-06-04+14%3A41%3A14&version=1.0&sign=H7gLlu6KJofEisd7hkoQz%2F7lsQt%2BtT5E6g6AfrjzYoRN4%2B%2BqXQkERH2Usr6nY6JOywcCeSvrqhGNaqu8hKYiuYAg%2FFju2ZOhacpSqzZ8QKGal76FM9ShJBbgbQZ1VBfAue2mrGQph2TQMQ6gokQZQFG%2FTsu%2FCQgWWpg8y5T6ssvLQUPgqpLtjwJKRYnZSgSbgz%2FcAFa1985EeCNvC2n2pWTmOgld%2BJ3y2MplP5AMwgKpDnNaPRxBjU8sFCcBzAKthOwNjaw1A7B%2BRpqKGvRBqLOhOoo2kfZn%2BLIMqqA29dgeffymK1m%2BMn6nX6DeQ1jRPi5Gi9Ci5aZMshuKTVdCYQ%3D%3D"
}
```

#### 备注:
1. 支付服务需要先去服务商处开通服务后才可使用。

2. 如果是新建一个支付可以不填参数`payment_no`或为`空`，但需要去完成之前未付款完成的支付时可以填写参数`payment_no`，表示恢复之前未完成的支付继续完成支付。

3. 如果使用了参数`payment_no`，但`money`与源金额不同，则系统会自动更新该笔支付订单。