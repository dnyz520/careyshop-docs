# 获取一个账号

#### 接口描述：
- 获取一个账号。

#### 请求 URL：
- `http|https://host/api/v1/admin/method/get.admin.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|client_id |integer |是 |gt:0 | |1 |账号编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|admin_id |integer |是 |1 |账号编号 |
|username |string |是 |admin |账号 |
|group_id |integer |是 |1 |所属用户组 |
|nickname |string |是 |carey |昵称 |
|head_pic |string |是 |//host/head_pic.jpg |头像 |
|last_login |datetime |是 |2018-04-22 00:23:00 |最后登陆时间 |
|last_ip |string |是 |127.0.0.1 |最后登录ip |
|status |integer |是 |1 |是否启用 0=禁用 1=启用 |
|create_time |datetime |是 |2018-04-22 00:23:00 |创建时间 |
|update_time |datetime |是 |2018-04-22 01:56:55 |更新时间 |
|get_auth_group |object |是 |[] |用户组对象 |

|get_auth_group|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string&#124;null |是 |超级管理员 |名称 |
|status |integer&#124;null |是 |1 |是否启用 0=禁用 1=启用 |

#### 响应示例：
```json
{
    "status": 200,
    "message": "success",
    "data": {
        "admin_id": 1,
        "username": "admin",
        "group_id": 1,
        "nickname": "carey",
        "head_pic": "//host/head_pic.jpg",
        "last_login": "",
        "last_ip": "",
        "status": 1,
        "create_time": "2018-04-22 00:23:00",
        "update_time": "2018-04-22 01:56:55",
        "get_auth_group": {
            "name": "超级管理员",
            "status": 1
        }
    }
}
```

#### 备注:
无