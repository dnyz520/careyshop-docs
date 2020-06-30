# 添加或编辑卖家备注

#### 接口描述：
- 添加或编辑卖家备注。

#### 请求 URL：
- `http|https://host/api/v1/order/method/remark.order.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_no |string |是 |max:50 | |PO_I1049550... |订单号 |
|sellers_remark |string |是 |max:255 | |买家要发韵达 |卖家备注 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|sellers_remark |string |是 |买家要发韵达 |卖家备注 |
|update_time |datetime |是 |2018-06-13 01:11:04 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "sellers_remark": "买家要发韵达",
    "update_time": "2018-06-13 01:11:04"
  }
}
```

#### 备注:
1. 备注内容买家不可见。