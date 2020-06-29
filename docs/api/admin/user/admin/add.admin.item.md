# 添加一个账号

#### 接口描述：
- 添加一个账号。

#### 请求 URL：
- `http|https://host/api/v1/admin/method/add.admin.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|username |string |是 |length:4,20 | |admin |账号 |
|password |string |是 |min:6 | |admin888 |密码 |
|password_confirm |string |是 |min:6 | |admin888 |确认密码 |
|group_id |integer |是 |gt:0 | |1 |所属用户组 |
|nickname |string |是 |max:50 | |carey |昵称 |
|head_pic |string |否 |max:255 | |//host/head_pic.jpg |头像 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|username |string |是 |admin |账号 |
|group_id |integer |是 |1 |所属用户组 |
|nickname |string |是 |carey |昵称 |
|head_pic |string |否 |//host/head_pic.jpg |头像 |
|create_time |datetime |是 |2018-04-22 00:23:00 |创建时间 |
|update_time |datetime |是 |2018-04-22 00:23:00 |更新时间 |
|admin_id |integer |是 |1 |账号编号 |

#### 响应示例：
```json
{
    "status": 200,
    "message": "success",
    "data": {
        "username": "admin",
        "group_id": 1,
        "nickname": "carey",
        "head_pic": "//host/head_pic.jpg",
        "create_time": "2018-04-22 00:23:00",
        "update_time": "2018-04-22 00:23:00",
        "admin_id": 1
    }
}
```

#### 备注:
无