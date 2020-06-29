# 获取用户组列表

#### 接口描述：
- 获取用户组列表。

#### 请求 URL：
- `http|https://host/api/v1/auth_group/method/get.auth.group.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|status |integer |否 |in:0,1 | |1 |用户组状态 0=禁用 1=启用 |
|exclude_id |integer |否 |gt[]:0 | |[2,3,4] |用户组排除Id |
|order_type |string |否 |in:asc,desc |asc |desc |排序方式 |
|order_field |string |否 |见附属 A |group_id |status |排序字段 |

> 附属 A：
in:group_id,name,sort,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|group_id |integer |是 |1 |用户组编号 |
|name |string |是 |超级管理员 |用户组名称 |
|description |string |是 |系统保留，拥有最高权限 |用户组描述 |
|system |integer |是 |1 |是否系统保留 0=否 1=是 |
|sort |integer |是 |50 |用户组排序值 |
|status |integer |是 |1 |用户组状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "group_id": 1,
      "name": "超级管理员",
      "description": "系统保留，拥有最高权限",
      "system": 1,
      "sort": 50,
      "status": 1
    },
    {
      "group_id": 2,
      "name": "普通管理员",
      "description": "系统保留，拥有较高权限",
      "system": 1,
      "sort": 50,
      "status": 1
    },
    {
      "group_id": 3,
      "name": "普通顾客",
      "description": "系统保留，前台普通顾客",
      "system": 1,
      "sort": 50,
      "status": 1
    },
    {
      "group_id": 4,
      "name": "游客",
      "description": "系统保留，无需授权即可访问",
      "system": 1,
      "sort": 50,
      "status": 1
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。