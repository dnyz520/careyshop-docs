# 获取某个评价的明细

#### 接口描述：
- 获取某个评价的明细(`是否已读`不关联变动，关联不代表看完，所以需手动设置)

#### 请求 URL：
- `http|https://host/api/v1/goods_comment/method/get.goods.comment.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_comment_id |integer |是 |gt:0 | |93 |商品评价编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_comment_id |integer |是 |1 |商品评价编号 |
|type |integer |是 |0 |商品评价类型 0=主评 1=主回 2=追评 3=追回 |
|content |string |是 |主评内容 |商品评价内容 |
|image |array |是 |[&#34;//image_1.jpg&#34;,&#34;//image_2.jpg&#34;] |商品评价图片 |
|score |integer |是 |5 |商品评价得分 |
|praise |integer |是 |10 |商品评价点赞数 |
|reply_count |integer |是 |0 |商品评价回复数 |
|ip_address |string |是 |127.0.0.1 |评价者ip地址 |
|create_time |datetime |是 |2018-05-10 23:29:42 |创建时间 |
|get_user |object |是 |[] |账号数组 |
|get_goods |object |是 |[] |订单商品数组 |
|get_main_reply |array |是 |[] |回复主评数组 |
|get_addition |array |是 |[] |追加评价数组 |
|get_addition_reply |array |是 |[] |回复追加评价数组 |

|get_user|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|username |string |否 |carey |账号 |
|nickname |string |否 |careya |昵称 |
|user_level_id |integer |否 |2 |账号等级编号 |
|head_pic |string |否 |//head_pic.jpg |头像 |

|get_goods|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_id |integer |否 |89 |商品编号 |
|goods_name |string |否 |订单商品 |商品名称 |
|goods_image |string |否 |//image.jpg |商品封面 |
|key_value |string |否 |规格A |商品规格 |

|get_main_reply|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_comment_id |integer |是 |3 |商品评价编号 |
|type |integer |是 |1 |商品评价类型 0=主评 1=主回 2=追评 3=追回 |
|content |string |是 |回复主评1次 |商品评价内容 |
|image |array |是 |[&#34;//image_1.jpg&#34;,&#34;//image_2.jpg&#34;] |商品评价图片 |
|praise |integer |是 |0 |商品评价点赞数 |
|create_time |datetime |是 |2018-05-10 23:29:42 |创建时间 |

|get_addition|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_comment_id |integer |是 |2 |商品评价编号 |
|type |integer |是 |2 |商品评价类型 0=主评 1=主回 2=追评 3=追回 |
|content |string |是 |追评内容 |商品评价内容 |
|image |array |是 |[] |商品评价图片 |
|praise |integer |是 |0 |商品评价点赞数 |
|ip_address |string |是 |127.0.0.1 |评价者ip地址 |
|create_time |datetime |是 |2018-05-18 23:29:42 |创建时间 |

|get_addition_reply|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_comment_id |integer |是 |4 |商品评价编号 |
|type |integer |是 |3 |商品评价类型 0=主评 1=主回 2=追评 3=追回 |
|content |string |是 |回复追评1次 |商品评价内容 |
|image |array |是 |[] |商品评价图片 |
|praise |integer |是 |0 |商品评价点赞数 |
|create_time |datetime |是 |2018-05-18 23:29:42 |创建时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "goods_comment_id": 1,
    "type": 0,
    "content": "主评内容",
    "image": [
      "//image_1.jpg",
      "//image_2.jpg"
    ],
    "score": 5,
    "praise": 10,
    "reply_count": 0,
    "ip_address": "127.0.0.1",
    "create_time": "2018-05-10 23:29:42",
    "get_user": {
      "username": "carey",
      "nickname": "careya",
      "user_level_id": 2,
      "head_pic": "//head_pic.jpg"
    },
    "get_goods": {
      "goods_id": 89,
      "goods_name": "订单商品",
      "goods_image": "//image.jpg",
      "key_value": "规格A"
    },
    "get_main_reply": [
      {
        "goods_comment_id": 3,
        "type": 1,
        "content": "回复主评1次",
        "image": [
          "//image_1.jpg",
          "//image_2.jpg"
        ],
        "praise": 0,
        "create_time": "2018-05-10 23:29:42"
      },
      {
        "goods_comment_id": 6,
        "type": 1,
        "content": "回复主评2次",
        "image": [],
        "praise": 0,
        "create_time": "2018-05-10 23:29:42"
      }
    ],
    "get_addition": [
      {
        "goods_comment_id": 2,
        "type": 2,
        "content": "追评内容",
        "image": [],
        "praise": 0,
        "ip_address": "127.0.0.1",
        "create_time": "2018-05-18 23:29:42"
      }
    ],
    "get_addition_reply": [
      {
        "goods_comment_id": 4,
        "type": 3,
        "content": "回复追评1次",
        "image": [],
        "praise": 0,
        "create_time": "2018-05-18 23:29:42"
      },
      {
        "goods_comment_id": 5,
        "type": 3,
        "content": "回复追评2次",
        "image": [],
        "praise": 0,
        "create_time": "2018-05-18 23:29:42"
      }
    ]
  }
}
```

#### 备注:
无