# 财务对账号进行资金调整

#### 接口描述：
- 财务对账号进行资金调整。

#### 请求 URL：
- `http|https://host/api/v1/payment/method/set.payment.finance/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|username |integer |是 |max:80 | |carey |账号 |
|money |number |否 | | |99.99 |金额 |
|points |integer |否 | | |500 |积分 |
|to_payment |integer |是 |egt:0 | |4 |支付方式，详见[「Code常量」](https://doc.careyshop.cn/docs/admin_api/a-21528075108 "「Code常量」") |
|source_no |string |否 |max:100 | |801047643752535 |来源订单号 |
|cause |string |是 |max:255 | |演示 |操作原因 |

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
1. 参数`money`和`points`允许正数，也允许负数。正数表示增加，负数表示扣除。