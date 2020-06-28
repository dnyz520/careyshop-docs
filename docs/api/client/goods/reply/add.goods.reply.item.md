# 对商品评价添加一个回复

#### 接口描述：
- 对商品评价添加一个回复。

#### 请求 URL：
- `http|https://host/api/v1/goods_reply/method/add.goods.reply.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_comment_id |integer |是 |gt:0 | |78 |商品评价编号 |
|to_name |string |否 |max:50 | |carey |被回复者昵称 |
|content |string |是 |max:200 | |询问内容 |回复内容 |
|is_anon |integer |否 |in:0,1 |0 |1 |是否匿名 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_comment_id |integer |是 |78 |商品评价编号 |
|to_name |string |是 |carey |被回复者昵称 |
|content |string |是 |询问内容 |回复内容 |
|nick_name |string |是 |思&#42;&#42;&#42;间 |回复者昵称 |
|create_time |datetime |是 |2018-06-21 09:52:02 |创建时间 |
|goods_reply_id |integer |是 |34 |商品评价回复编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "goods_comment_id": 78,
    "to_name": "carey",
    "content": "询问内容",
    "nick_name": "思***间",
    "create_time": "2018-06-21 09:52:02",
    "goods_reply_id": 34
  }
}
```

#### 备注:
无