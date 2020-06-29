# 添加一个用户组

#### 接口描述：
- 添加一个用户组。

#### 请求 URL：
- `http|https://host/api/v1/auth_group/method/add.auth.group.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |是 |max:32 | |客服人员 |用户组名称 |
|description |string |否 |max:255 | |管理后台客服人员 |用户组描述 |
|sort |integer |否 |between:0,255 |50 |50 |用户组排序值 |
|status |integer |否 |in:0,1 |1 |1 |用户组状态 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |客服人员 |用户组名称 |
|description |string |否 |管理后台客服人员 |用户组描述 |
|sort |integer |否 |50 |用户组排序值 |
|status |integer |否 |1 |用户组状态 0=禁用 1=启用 |
|group_id |integer |是 |5 |用户组编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "name": "客服人员",
    "description": "管理后台客服人员",
    "sort": 50,
    "status": 1,
    "group_id": 5
  }
}
```

#### 备注:
无