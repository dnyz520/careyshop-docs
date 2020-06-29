# 获取专题列表

#### 接口描述：
- 获取专题列表。

#### 请求 URL：
- `http|https://host/api/v1/topic/method/get.topic.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|title |string |否 |max:200 | |标题 |专题标题 |
|alias |string |否 |max:100 | |短标题 |专题别名 |
|keywords |string |否 |max:255 | |关键词 |专题关键词 |
|status |integer |否 |in:0,1 | |1 |专题是否显示 0=否 1=是 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |topic_id |status |排序字段 |

> 附属 A：
in:topic_id,title,alias,status,create_time,update_time

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |20 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|topic_id |integer |是 |27 |专题编号 |
|title |string |是 |标题 |专题标题 |
|alias |string |是 |短标题 |专题别名 |
|keywords |string |是 |关键词 |专题关键词 |
|description |string |是 |描述 |专题描述 |
|status |integer |是 |1 |专题是否显示 0=否 1=是 |
|create_time |datetime |是 |2018-05-04 09:25:34 |创建时间 |
|update_time |datetime |是 |2018-05-04 09:31:52 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "topic_id": 27,
        "title": "标题",
        "alias": "短标题",
        "keywords": "关键词",
        "description": "描述",
        "status": 1,
        "create_time": "2018-05-04 09:25:34",
        "update_time": "2018-05-04 09:31:52"
      },
      {
        "topic_id": 26,
        "title": "标题",
        "alias": "",
        "keywords": "",
        "description": "",
        "status": 1,
        "create_time": "2018-05-04 09:23:47",
        "update_time": "2018-05-04 09:23:47"
      }
    ],
    "total_result": 20
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。