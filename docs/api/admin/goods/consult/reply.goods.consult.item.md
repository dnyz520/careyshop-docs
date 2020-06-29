# 回复一个商品咨询

#### 接口描述：
- 回复一个商品咨询。

#### 请求 URL：
- `http|https://host/api/v1/goods_consult/method/reply.goods.consult.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_consult_id |integer |是 |gt:0 | |13 |商品咨询编号 |
|content |string |是 |max:200 | |回复内容 |商品回复内容 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|type |integer |是 |5 |商品咨询类型(自定义) |
|content |string |是 |回复内容 |商品咨询或回复内容 |
|is_show |integer |是 |1 |前台是否显示 0=否 1=是 |
|status |integer |是 |1 |是否回复 0=待回复 1=已回复 |
|create_time |datetime |是 |2017-04-10 16:29:29 |创建时间 |
|goods_consult_id |integer |是 |16 |商品咨询编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "type": 5,
    "content": "回复内容",
    "is_show": 1,
    "status": 1,
    "create_time": "2017-04-10 16:29:29",
    "goods_consult_id": 16
  }
}
```

#### 备注:
无