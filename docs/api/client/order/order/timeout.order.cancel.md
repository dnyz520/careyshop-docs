# 未付款订单超时自动取消

#### 接口描述：
- 未付款订单超时自动取消。

#### 请求 URL：
- `http|https://host/api/v1/order/method/timeout.order.cancel/`

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

2. 取消订单的业务逻辑与[「取消一个订单」](/api/client/order/order/cancel.order.item.md "「取消一个订单」")相同，区别在于该操作是批量进行，并且由系统执行。
