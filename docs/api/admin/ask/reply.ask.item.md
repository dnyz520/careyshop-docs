# 回答一个提问

#### 接口描述：
- 回答一个提问。

#### 请求 URL：
- `http|https://host/api/v1/ask/method/reply.ask.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|ask_id |integer |是 |gt:0 | |1 |问答编号 |
|answer |string |是 |max:200 | |回复 |回答内容 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|user_id |integer |是 |1 |账号编号 |
|ask_type |integer |是 |0 |提问类型 0=咨询 1=售后 2=投诉 3=求购 |
|type |integer |是 |2 |问答类型 0=主题 1=提问 2=回复 |
|ask |string |是 | |提问内容 |
|answer |string |是 |回复A-1 |回答内容 |
|ask_time |datetime |是 |2018-05-05 13:18:27 |提问时间 |
|answer_time |datetime |是 |2018-05-05 13:35:47 |回答时间 |
|ask_id |integer |是 |3 |问答编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "user_id": 1,
    "ask_type": 0,
    "type": 2,
    "ask": "",
    "answer": "回复A-1",
    "ask_time": "2018-05-05 13:18:27",
    "answer_time": "2018-05-05 13:35:47",
    "ask_id": 3
  }
}
```

#### 备注:
1. 一个咨询上可以有多个回复。

2. 回复时业务参数中的`ask_id`值需要对应`主题(type==0)`所属的编号。