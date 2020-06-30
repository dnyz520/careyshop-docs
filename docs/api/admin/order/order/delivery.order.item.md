# 订单设为发货状态

#### 接口描述：
- 订单设为发货状态。

#### 请求 URL：
- `http|https://host/api/v1/order/method/delivery.order.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_no |string |是 |max:50 | |PO_I1049550... |订单号 |
|order_goods_id |integer |是 |gt[]:0 | |[1,2,3] |订单商品编号 |
|logistic_code |string |否 |max：50 | |123456 |快递单号 |
|delivery_id |integer |否 |egt:0 | |1 |配送方式编号 |

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
1. 允许部分订单商品发货。系统会自动检测发货是否已全部发货，并且给予不同的状态，分别有`0=未发 1=已发 2=部分发`。

2. 如果需要填写快递单号，同一笔订单号下允许添加多个配送信息。

3. 订单发货后，如果该笔订单下存在`售后服务单`将被系统全部取消，买家如有需要可以重新申请。

4. 当`payment_status`值不等于`1`时不允许操作。

5. 当`delivery_status`值等于`1`时不允许操作。

6. 当`trade_status`值不等于`1`并且不等于`2`时不允许操作。