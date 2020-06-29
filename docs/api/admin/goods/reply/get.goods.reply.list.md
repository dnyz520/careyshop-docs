# 获取商品评价回复列表

#### 接口描述：
- 获取商品评价回复列表。

#### 请求 URL：
- `http|https://host/api/v1/goods_reply/method/get.goods.reply.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_comment_id |integer |是 |gt:0 | |1 |商品评价编号 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |2 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_reply_id |integer |是 |2 |商品评价回复编号 |
|goods_comment_id |integer |是 |1 |商品评价编号 |
|nick_name |string |是 |dxxx0 |回复者昵称 |
|to_name |string |是 |dxxx0 |被回复者昵称 |
|content |string |是 |ISP |回复内容 |
|create_time |datetime |是 |2018-05-21 01:01:35 |创建时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "goods_reply_id": 1,
        "goods_comment_id": 1,
        "nick_name": "d***0",
        "to_name": "",
        "content": "屏幕什么材质?",
        "create_time": "2018-05-21 00:50:59"
      },
      {
        "goods_reply_id": 2,
        "goods_comment_id": 1,
        "nick_name": "d***0",
        "to_name": "d***0",
        "content": "ISP",
        "create_time": "2018-05-21 01:01:35"
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。