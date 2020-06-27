# 添加一个提问

#### 接口描述：
- 添加一个提问。

#### 请求 URL：
- `http|https://host/api/v1/ask/method/add.ask.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|ask_type |integer |是 |in:0,1,2,3 | |0 |提问类型 0=咨询 1=售后 2=投诉 3=求购 |
|title |string |是 |max:120 | |主题 |主题 |
|ask |string |是 |max:200 | |正文 |提问内容 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|ask_type |integer |是 |0 |提问类型 0=咨询 1=售后 2=投诉 3=求购 |
|title |string |是 |主题 |主题 |
|ask |string |是 |正文 |提问内容 |
|user_id |integer |是 |1 |账号编号 |
|type |integer |是 |1 |问答类型 0=主题 1=提问 2=回复 |
|ask_time |datetiem |是 |2018-06-20 00:47:38 |提问时间 |
|answer_time |datetiem |是 |2018-06-20 00:47:38 |回答时间 |
|ask_id |integer |是 |9 |问答编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "ask_type": 0,
    "title": "主题",
    "ask": "正文",
    "user_id": 1,
    "type": 1,
    "ask_time": "2018-06-20 00:47:38",
    "answer_time": "2018-06-20 00:47:38",
    "ask_id": 9
  }
}
```

#### 备注:
无