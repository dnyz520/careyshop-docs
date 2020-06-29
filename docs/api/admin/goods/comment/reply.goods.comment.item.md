# 回复或追评一条商品评价

#### 接口描述：
- 顾客对商品的评价管理组成员可对其进行回复，可回复多条（追加评价）。

#### 请求 URL：
- `http|https://host/api/v1/goods_comment/method/reply.goods.comment.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_comment_id |integer |是 |gt:0 | |1 |商品评价编号 |
|content |string |是 |max:200 | |回复主评 |商品评价内容 |
|image |string |否 |min[]:0 | |[&#34;//image_1.jpg&#34;,&#34;//image_2.jpg&#34;] |商品评价图片 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_comment_id |integer |是 |3 |商品评价编号 |
|goods_id |integer |是 |93 |商品编号 |
|order_goods_id |integer |是 |0 |订单商品编号 |
|type |integer |是 |1 |商品评价类型 0=主评 1=主回 2=追评 3=追回 |
|content |string |是 |回复主评 |商品评价内容 |
|image |array |是 |[&#34;//image_1.jpg&#34;,&#34;//image_2.jpg&#34;] |商品评价图片 |
|score |integer |是 |0 |商品评价得分 |
|ip_address |string |是 |127.0.0.1 |评价者ip地址 |
|create_time |datetime |是 |2018-05-10 23:29:42 |创建时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "goods_comment_id": 3,
    "goods_id": 93,
    "order_goods_id": 0,
    "type": 1,
    "content": "回复主评",
    "image": [
      "//image_1.jpg",
      "//image_2.jpg"
    ],
    "score": 0,
    "ip_address": "127.0.0.1",
    "create_time": "2018-05-10 23:29:42"
  }
}
```

#### 备注:
无