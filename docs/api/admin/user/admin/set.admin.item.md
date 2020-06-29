# 编辑一个账号

#### 接口描述：
- 编辑一个账号

#### 请求 URL：
- `http|https://host/api/v1/admin/method/set.admin.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|client_id |integer |是 |gt:0 | |1 |账号编号 |
|nickname |string |否 |max:50 | |carey |昵称 |
|group_id |integer |否 |gt:0 | |1 |所属用户组 |
|head_pic |string |否 |max:255 | |//host/head_pic.jpg |头像 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|client_id |integer |是 |1 |账号编号 |
|nickname |string |否 |carey |昵称 |
|group_id |integer |否 |1 |所属用户组 |
|head_pic |string |否 |//host/head_pic.jpg |头像 |
|update_time |datetime |是 |2018-04-22 01:21:17 |更新时间 |

#### 响应示例：
```json
{
    "status": 200,
    "message": "success",
    "data": {
        "client_id": 1,
        "nickname": "carey",
        "group_id": 1,
        "head_pic": "//host/head_pic.jpg",
        "update_time": "2018-04-22 01:21:17"
    }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。

2. `group_id`修改后对应账号的`token`将失效。