# 再次购买与订单相同的商品

#### 接口描述：
- 再次购买与订单相同的商品。

#### 请求 URL：
- `http|https://host/api/v1/order/method/buyagain.order.goods/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_no |string |是 |max:50 | |PO_I6245337030479200001 |订单号 |

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
1. 执行成功后商品会被添加到购物车。