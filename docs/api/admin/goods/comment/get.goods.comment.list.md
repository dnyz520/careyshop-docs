# 获取商品评价列表

#### 接口描述：
- 获取商品评价列表。

#### 请求 URL：
- `http|https://host/api/v1/goods_comment/method/get.goods.comment.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |否 |gt:0 | |89 |商品编号 |
|order_no |string |否 |max:50 | |PO_I104955047 |订单号 |
|type |integer |否 |in:0,2 |0 |2 |商品评价类型 0=主评 2=追评 |
|account |string |否 |max:60 | |carey |账号或昵称 |
|content |string |否 |max:200 | |评价内容 |商品评价内容 |
|score |integer |否 |between:0,2 | |2 |商品评价得分 0=好评 1=中评 2=差评 |
|is_show |integer |否 |in:0,1 | |1 |是否显示 0=否 1=是|
|is_top |integer |否 |in:0,1 | |0 |是否置顶 0=否 1=是 |
|is_image |integer |否 |in:0,1 | |1 |是否有图 0=否 1=是 |
|status |integer |否 |in:0,1 | |0 |是否已读 0=否 1=是 |
|goods_spec |array |否 |min[]:0 | |[&#34;1_3&#34;,&#34;1_2&#34;] |商品规格 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |goods_comment_id |status |排序字段 |

> 附属 A：
in:goods_comment_id,is_image,score,is_show,is_top,status,create_time

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |1 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_comment_id |integer |是 |1 |商品评价编号 |
|type |integer |是 |0 |商品评价类型 0=主评 1=主回 2=追评 3=追回 |
|content |string |是 |主评内容 |商品评价内容 |
|image |array |是 |[&#34;//image_1.jpg&#34;] |商品评价图片 |
|score |integer |是 |5 |商品评价得分 |
|praise |integer |是 |10 |商品评价点赞数 |
|reply_count |integer |是 |0 |商品评价回复数 |
|ip_address |string |是 |127.0.0.1 |评价者ip地址 |
|status |integer |是 |1 |是否已读 0=否 1=是 |
|create_time |datetime |是 |2018-05-10 23:29:42 |创建时间 |
|get_user |object |是 |[] |账号数组 |
|get_goods |object |是 |[] |订单商品数组 |

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

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
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
        "status": 0,
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
        }
      }
    ],
    "total_result": 1
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。

2. 如果传入`goods_id`参数，则会返回`get_main_reply` `get_addition` `get_addition_reply`字段，含义可参考 [获取某个评价的明细](/api/admin/goods/comment/get.goods.comment.item.md "获取某个评价的明细")。