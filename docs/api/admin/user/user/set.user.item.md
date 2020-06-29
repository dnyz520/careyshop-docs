# 编辑一个账号

#### 接口描述：
- 编辑一个账号。

#### 请求 URL：
- `http|https://host/api/v1/user/method/set.user.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|client_id |integer |是 |gt:0 | |1 |账号编号 |
|password |string |否 |min:6 | |123456 |密码 |
|nickname |string |否 |max:50 | |carey |昵称 |
|head_pic |string |否 |max:255 | |//host/head_pic.jpg |头像 |
|sex |integer |否 |in:0,1,2 | |1 |性别 0=保密 1=男 2=女 |
|birthday |date |否 |dateFormat:Y-m-d | |1997-11-20 |生日 |
|group_id |integer |否 |gt:0 | |3 |所属用户组 |
|status |integer |否 |in:0,1 | |1 |是否启用 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|client_id |integer |是 |17 |账号编号 |
|nickname |string |否 |carey |昵称 |
|head_pic |string |否 |//host/head_pic.jpg |头像 |
|sex |integer |否 |1 |性别 0=保密 1=男 2=女 |
|birthday |date |否 |1997-11-20 |生日 |
|group_id |integer |否 |3 |所属用户组 |
|status |integer |否 |1 |是否启用 0=禁用 1=启用 |
|update_time |datetime |是 |2018-04-23 15:36:22 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "client_id": 17,
    "nickname": "carey",
    "head_pic": "//host/head_pic.jpg",
    "sex": 1,
    "birthday": "1997-11-20",
    "group_id": 3,
    "status": 1,
    "update_time": "2018-04-23 15:36:22"
  }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。

2. `group_id`或`status`修改后对应账号的`token`将失效。