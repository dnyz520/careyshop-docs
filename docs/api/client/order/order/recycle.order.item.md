# 将订单放入回收站、还原或删除

#### 接口描述：
- 将订单放入回收站、还原或删除。

#### 请求 URL：
- `http|https://host/api/v1/order/method/recycle.order.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_no |string |是 |max:50 | |PO_I104955... |订单号 |
|is_recycle |integer |是 |in:0,1,2 | |1 |是否放入回收站，详见`附属 A` |

> 附属 A：
0=从回收站中还原订单
1=将订单放入回收站中
2=永久删除订单，不可还原

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
1. 当`trade_status`值不等于`3`并且不等于`4`时不允许操作。