# 未确认收货订单超时自动完成

#### 接口描述：
- 未确认收货订单超时自动完成。

#### 请求 URL：
- `http|https://host/api/v1/order/method/timeout.order.complete/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
| | | | | | | | |

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
1. 一般用于计划任务。

2. 确认收货业务逻辑与[「订单批量确认收货」](/api/client/order/order/complete.order.list.md "「订单批量确认收货」")相同，区别在于由系统执行。
