# 获取客服列表

#### 接口描述：
- 获取客服列表。

#### 请求 URL：
- `http|https://host/api/v1/support/method/get.support.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|type_name |string |否 |max:50 | |售后 |客服组名称 |
|nick_name |string |否 |max:50 | |李 |客服昵称 |
|status |integer |否 |in:0,1 | |1 |客服状态 0=禁用 1=启用 |
|order_type |string |否 |in:asc,desc |asc |desc |排序方式 |
|order_field |string |否 |见附属 A |support_id |status |排序字段 |

> 附属 A：
in:support_id,type_name,nick_name,sort,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|support_id |integer |是 |1 |客服编号 |
|type_name |string |是 |售前客服 |客服组名称 |
|nick_name |string |是 |张三 |客服昵称 |
|code |string |是 |javascript:; |联系方式(自定义特征码) |
|sort |integer |是 |50 |客服排序值 |
|status |integer |是 |1 |客服状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "support_id": 1,
      "type_name": "售前客服",
      "nick_name": "张三",
      "code": "javascript:;",
      "sort": 50,
      "status": 1
    },
    {
      "support_id": 2,
      "type_name": "售前客服",
      "nick_name": "李四",
      "code": "javascript:;",
      "sort": 50,
      "status": 1
    },
    {
      "support_id": 3,
      "type_name": "售后经理",
      "nick_name": "王五",
      "code": "javascript:;",
      "sort": 100,
      "status": 1
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。