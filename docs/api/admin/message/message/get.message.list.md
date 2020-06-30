# 获取消息列表(后台)

#### 接口描述：
- 获取消息列表(后台)。

#### 请求 URL：
- `http|https://host/api/v1/message/method/get.message.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|type |integer |否 |between:0,9 | |0 |消息类型(自定义) |
|member |integer |否 |in:1,2 | |1 |消息成员组 1=顾客组 2=管理组 |
|title |string |否 |max:200 | |活动公告 |消息标题 |
|is_top |integer |否 |in:0,1 | |0 |是否置顶 0=否 1=是 |
|status |integer |否 |in:0,1 | |1 |消息状态 0=禁用 1=启用 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |message_id |status |排序字段 |

> 附属 A：
in:message_id,type,page_views,is_top,status,create_time,update_time

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
|message_id |integer |是 |8 |消息编号 |
|type |integer |是 |0 |消息类型(自定义) |
|member |integer |是 |1 |消息成员组 1=顾客组 2=管理组 |
|title |string |是 |活动公告 |消息标题 |
|content |string |是 |活动内容 |消息内容 |
|url |string |是 |http://careyshop.cn |外部链接 |
|target |string |是 |_blank |打开方式 |
|page_views |integer |是 |0 |游览量 |
|is_top |integer |是 |0 |是否置顶 0=否 1=是 |
|status |integer |是 |1 |消息状态 0=禁用 1=启用 |
|create_time |datetime |是 |2018-06-06 22:49:59 |创建时间 |
|update_time |datetime |是 |2018-06-06 22:49:59 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "message_id": 8,
        "type": 0,
        "member": 1,
        "title": "活动公告",
        "content": "活动内容",
        "url": "http://careyshop.cn",
        "target": "_blank",
        "page_views": 0,
        "is_top": 0,
        "status": 1,
        "create_time": "2018-06-06 22:49:59",
        "update_time": "2018-06-06 23:16:52"
      },
      {
        "message_id": 5,
        "type": 0,
        "member": 2,
        "title": "title-5",
        "content": "content",
        "url": "",
        "target": "_self",
        "page_views": 15,
        "is_top": 0,
        "status": 1,
        "create_time": "2017-11-27 14:16:52",
        "update_time": "2017-11-27 14:16:52"
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。