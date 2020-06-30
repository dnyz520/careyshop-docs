# 获取支付异步URL接口

#### 接口描述：
- 获取支付异步URL接口。

#### 请求 URL：
- `http|https://host/api/v1/payment/method/get.payment.notify/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|to_payment |integer |是 |egt:0 | |3 |支付方式(支付编码)，详见[「Code常量」](https://doc.careyshop.cn/docs/admin_api/a-21528075108 "「Code常量」") |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|notify_url |string |是 |...(过长,省略) |异步 URL 回调地址 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "notify_url": "http://careyshop.oruei.com/api/v1/payment/method/put.payment.data/to_payment/3/type/notify.html"
  }
}
```

#### 备注:
无