# 获取订单各个状态合计数

#### 接口描述：
- 获取订单各个状态合计数。

#### 请求 URL：
- `http|https://host/api/v1/order/method/get.order.status.total/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
| | | | | | | | |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|all |integer |是 |2 |所有 |
|not_paid |integer |是 |2 |未付款/待付款 |
|paid |integer |是 |0 |已付款 |
|not_shipped |integer |是 |0 |待发货/配货中 |
|shipped |integer |是 |0 |已发货/待收货 |
|complete |integer |是 |0 |已完成/已收货 |
|cancel |integer |是 |0 |已取消 |
|not_comment |integer |是 |0 |待评价 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "all": 2,
    "not_paid": 2,
    "paid": 0,
    "not_shipped": 0,
    "shipped": 0,
    "complete": 0,
    "cancel": 0,
    "not_comment": 0
  }
}
```

#### 备注:
无