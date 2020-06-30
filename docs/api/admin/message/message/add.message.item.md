# 添加一条消息

#### 接口描述：
- 添加一条消息。

#### 请求 URL：
- `http|https://host/api/v1/message/method/add.message.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|type |integer |是 |between:0,9 | |0 |消息类型(自定义) |
|member |integer |是 |in:1,2 | |1 |消息成员组 1=顾客组 2=管理组 |
|title |string |是 |max:200 | |活动公告 |消息标题 |
|content |string |是 |min:0 | |活动内容 |消息内容 |
|url |string |否 |max:255 | |http://careyshop.cn |外部链接 |
|target |string |否 |in:_self,_blank |_self |_blank |打开方式 |
|is_top |integer |否 |in:0,1 |0 |0 |是否置顶 0=否 1=是 |
|status |integer |否 |in:0,1 |0 |1 |消息状态 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|type |integer |是 |0 |消息类型(自定义) |
|member |integer |是 |1 |消息成员组 1=顾客组 2=管理组 |
|title |string |是 |活动公告 |消息标题 |
|content |string |是 |活动内容 |消息内容 |
|url |string |否 |http://careyshop.cn |外部链接 |
|target |string |否 |_blank |打开方式 |
|is_top |integer |否 |0 |是否置顶 0=否 1=是 |
|status |integer |否 |1 |消息状态 0=禁用 1=启用 |
|create_time |datetime |是 |2018-06-06 22:49:59 |创建时间 |
|update_time |datetime |是 |2018-06-06 22:49:59 |更新时间 |
|message_id |integer |是 |8 |消息编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "type": 0,
    "member": 1,
    "title": "活动公告",
    "content": "活动内容",
    "url": "http://careyshop.cn",
    "target": "_blank",
    "is_top": 0,
    "status": 1,
    "create_time": "2018-06-06 22:49:59",
    "update_time": "2018-06-06 22:49:59",
    "message_id": 8
  }
}
```

#### 备注:
1. 当`url`存在值表示跳转到某个地址，`target`表示目标打开方式。