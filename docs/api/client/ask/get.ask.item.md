# 获取一个问答明细

#### 接口描述：
- 获取一个问答明细。

#### 请求 URL：
- `http|https://host/api/v1/ask/method/get.ask.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|ask_id |integer |是 |gt:0 | |1 |问答编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
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
|get_items |array |是 |[] |问答明细项 |

|get_user|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|username |string |否 |carey |账号 |
|nickname |string |否 |carey |昵称 |
|head_pic |string |否 |//host/head_pic.jpg |头像 |

|get_items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|ask_id |integer |否 |2 |问答编号 |
|type |integer |否 |1 |问答类型 0=主题 1=提问 2=回复 |
|ask |string |否 |咨询A |提问内容 |
|answer |string |否 |回复A-1 |回答内容 |
|ask_time |datetime |否 |2018-05-05 13:18:27 |提问时间 |
|answer_time |datetime |否 |2018-05-05 13:18:27 |回答时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
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
    },
    "get_items": [
      {
        "ask_id": 2,
        "type": 1,
        "ask": "咨询A",
        "answer": "",
        "ask_time": "2018-05-05 13:18:27",
        "answer_time": "2018-05-05 13:18:27"
      },
      {
        "ask_id": 3,
        "type": 2,
        "ask": "",
        "answer": "回复A-1",
        "ask_time": "2018-05-05 13:18:27",
        "answer_time": "2018-05-05 13:35:47"
      },
      {
        "ask_id": 4,
        "type": 2,
        "ask": "",
        "answer": "回复A-2",
        "ask_time": "2018-05-05 13:18:27",
        "answer_time": "2018-05-05 13:35:47"
      },
      {
        "ask_id": 5,
        "type": 1,
        "ask": "咨询B",
        "answer": "",
        "ask_time": "2018-05-05 13:18:27",
        "answer_time": "2018-05-05 13:56:55"
      },
      {
        "ask_id": 6,
        "type": 2,
        "ask": "",
        "answer": "回复B-1",
        "ask_time": "2018-05-05 13:18:27",
        "answer_time": "2018-05-05 13:58:14"
      }
    ]
  }
}
```

#### 备注:
无