# 获取商品咨询列表

#### 接口描述：
- 获取商品咨询列表。

#### 请求 URL：
- `http|https://host/api/v1/goods_consult/method/get.goods.consult.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |否 |egt:0 |0 |0 |商品编号 |
|content |string |否 |max:200 | |问答搜索 |商品咨询或回复 |
|is_show |integer |否 |in:0,1 | |1 |前台是否显示 0=否 1=是 |
|type |integer |否 |between:-128,127 | |5 |商品咨询类型(自定义) |
|status |integer |否 |in:0,1 | |0 |是否回复 0=待回复 1=已回复 |
|is_answer |integer |否 |in:0,1 |0 |1 |是否显示完整问答列表 0=否 1=是 |
|account |string |否 |max:60 | |carey |账号或昵称 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |goods_consult_id |status |排序字段 |

> 附属 A：
in:goods_consult_id,type,content,is_show,is_anon,status,create_time,username,nickname

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
|goods_consult_id |integer |是 |13 |商品咨询编号 |
|type |integer |是 |5 |商品咨询类型(自定义) |
|content |string |是 |咨询内容 |商品咨询内容 |
|is_show |integer |是 |0 |前台是否显示 0=否 1=是 |
|status |integer |是 |1 |是否回复 0=待回复 1=已回复 |
|create_time |datetime |是 |2017-04-10 16:29:29 |创建时间 |
|get_user |object |否 |[] |账号对象 |
|get_goods |object |否 |[] |商品对象 |
|get_answer |array |否 |[] |回复数组 |

|get_user|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|username |string |否 |carey |账号 |
|nickname |string |否 |careya |昵称 |
|head_pic |string |否 |//head_pic.jpg |头像 |

|get_goods|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_id |integer |否 |1 |商品编号 |
|name |string |否 |编辑一个商品 |商品名称 |
|attachment |array |否 |[] |商品附件(图册) |

|get_answer|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_consult_id |integer |否 |16 |商品咨询编号 |
|type |integer |否 |5 |商品咨询类型(自定义) |
|content |string |否 |回复内容 |商品回复内容 |
|create_time |datetime |否 |2017-04-10 16:29:29 |创建时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "goods_consult_id": 13,
        "type": 5,
        "content": "咨询内容",
        "is_show": 0,
        "status": 1,
        "create_time": "2017-04-10 16:29:29",
        "get_user": {
          "username": "carey",
          "nickname": "careya",
          "head_pic": "//head_pic.jpg"
        },
        "get_goods": {
          "goods_id": 1,
          "name": "编辑一个商品",
          "attachment": []
        },
        "get_answer": [
          {
            "goods_consult_id": 16,
            "type": 5,
            "content": "回复内容",
            "create_time": "2017-04-10 16:29:29"
          },
          {
            "goods_consult_id": 17,
            "type": 5,
            "content": "可以有多个回复",
            "create_time": "2017-04-10 16:29:29"
          }
        ]
      },
      {
        "goods_consult_id": 11,
        "type": 5,
        "content": "咨询",
        "is_show": 1,
        "status": 1,
        "create_time": "2017-04-10 16:19:19",
        "get_user": {
          "username": "carey",
          "nickname": "careya",
          "head_pic": "//head_pic.jpg"
        },
        "get_goods": {
          "goods_id": 1,
          "name": "编辑一个商品",
          "attachment": []
        },
        "get_answer": [
          {
            "goods_consult_id": 18,
            "type": 5,
            "content": "回复",
            "create_time": "2017-04-10 16:19:19"
          }
        ]
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。

2. 参数`goods_id`值为`0`，表示获取所有咨询，否则表示获取指定商品的咨询列表。

3. 参数`goods_id`值不填或为`0`的时候，将返回`get_goods`字段，包含商品对象数据。

4. 参数`is_answer`值为`1`时将返回`get_answer`字段。