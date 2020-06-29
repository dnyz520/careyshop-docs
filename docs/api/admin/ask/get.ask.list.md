# 获取问答主题列表

#### 接口描述：
- 获取问答主题列表。

#### 请求 URL：
- `http|https://host/api/v1/ask/method/get.ask.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|ask_type |integer |否 |in:0,1,2,3 | |0 |提问类型 0=咨询 1=售后 2=投诉 3=求购 |
|status |integer |否 |in:0,1 | |0 |是否回答 0=待回答 1=已回答 |
|account |string |否 |max:80 | |carey |账号或昵称 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |ask_id |status |排序字段 |

> 附属 A：
in:ask_id,ask_type,title,status,ask_time,answer_time,username,nickname

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
|ask_id |integer |是 |1 |问答编号 |
|user_id |integer |是 |1 |账号编号 |
|ask_type |integer |是 |0 |提问类型 0=咨询 1=售后 2=投诉 3=求购 |
|type |integer |是 |0 |问答类型 0=主题 1=提问 2=回复 |
|title |string |是 |主题1 |主题 |
|status |integer |是 |1 |是否回答 0=待回答 1=已回答 |
|ask_time |datetiem |是 |2018-05-05 13:18:27 |提问时间 |
|answer_time |datetiem |是 |2018-05-05 13:58:14 |回答时间 |
|get_user |object |是 |[] |账号对象 |

|get_user|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|username |string |否 |carey |账号 |
|nickname |string |否 |carey |昵称 |
|head_pic |string |否 |//host/head_pic.jpg |头像 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "ask_id": 7,
        "user_id": 1,
        "ask_type": 1,
        "type": 0,
        "title": "主题2",
        "status": 0,
        "ask_time": "2018-05-05 13:59:56",
        "answer_time": "2018-05-05 13:59:56",
        "get_user": {
          "username": "carey",
          "nickname": "carey",
          "head_pic": "//host/head_pic.jpg"
        }
      },
      {
        "ask_id": 1,
        "user_id": 1,
        "ask_type": 0,
        "type": 0,
        "title": "主题1",
        "status": 1,
        "ask_time": "2018-05-05 13:18:27",
        "answer_time": "2018-05-05 13:58:14",
        "get_user": {
          "username": "carey",
          "nickname": "carey",
          "head_pic": "//host/head_pic.jpg"
        }
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。