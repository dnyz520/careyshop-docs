# 获取一个用户组

#### 接口描述：
- 获取一个用户组。

#### 请求 URL：
- `http|https://host/api/v1/auth_group/method/get.auth.group.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|group_id |integer |是 |gt:0 | |1 |用户组编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

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
  "data": {
    "group_id": 1,
    "name": "超级管理员",
    "description": "系统保留，拥有最高权限",
    "system": 1,
    "sort": 50,
    "status": 1
  }
}
```

#### 备注:
无