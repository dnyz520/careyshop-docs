# 获取一个专题

#### 接口描述：
- 获取一个专题。

#### 请求 URL：
- `http|https://host/api/v1/topic/method/get.topic.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|topic_id |integer |是 |gt:0 | |27 |专题编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|topic_id |integer |是 |27 |专题编号 |
|title |string |是 |标题 |专题标题 |
|alias |string |是 |短标题 |专题别名 |
|content |string |是 |正文 |专题内容 |
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
    "topic_id": 27,
    "title": "标题",
    "alias": "短标题",
    "content": "正文",
    "keywords": "关键词",
    "description": "描述",
    "status": 1,
    "create_time": "2018-05-04 09:25:34",
    "update_time": "2018-05-04 09:31:52"
  }
}
```

#### 备注:
无