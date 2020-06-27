# 获取一个账号

#### 接口描述：
- 获取一个账号。

#### 请求 URL：
- `http|https://host/api/v1/user/method/get.user.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|client_id |integer |是 |gt:0 | |17 |账号编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|user_id |integer |是 |17 |账号编号 |
|username |string |是 |carey |账号 |
|mobile |number |是 |888888 |手机号 |
|is_mobile |integer |是 |0 |手机号是否验证 0=否 1=是 |
|email |string |是 |admin&#64;admin.cn |邮箱 |
|is_email |integer |是 |0 |邮箱是否验证 0=否 1=是 |
|nickname |string |是 |carey |昵称 |
|head_pic |string |是 |//host/head_pic.jpg |头像 |
|sex |integer |是 |0 |性别 0=保密 1=男 2=女  |
|birthday |date |是 |1997-11-20 |生日 |
|user_level_id |integer |是 |1 |账号等级编号 |
|user_address_id |integer |是 |1 |默认收货地址编号 |
|group_id |integer |是 |3 |所属用户组 |
|last_login |datetime |是 |2018-04-22 00:23:00 |最后登陆时间 |
|last_ip |string |是 |127.0.0.1 |最后登录ip |
|status |integer |是 |1 |是否启用 0=禁用 1=启用 |
|create_time |datetime |是 |2018-04-23 13:12:22 |创建时间 |
|update_time |datetime |是 |2018-04-23 16:28:45 |更新时间 |
|get_user_level |object |是 |[] |账号等级对象 |
|get_user_money |object |是 |[] |账号资金对象 |

|get_user_level|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string&#124;null |是 |普通会员 |账号等级名称 |
|discount |integer&#124;null |是 |90 |账号折扣 |

|get_user_money|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|total_money |number |是 |100.05 |累计消费 |
|balance |number |是 |99.9 |可用余额 |
|lock_balance |number |是 |0.1 |锁定余额 |
|points |number |是 |100 |账号积分 |
|lock_points |number |是 |0 |锁定积分 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "user_id": 17,
    "username": "carey",
    "mobile": "13071297155",
    "is_mobile": 1,
    "email": "",
    "is_email": 0,
    "nickname": "carey",
    "head_pic": "//host/head_pic.jpg",
    "sex": 1,
    "birthday": "1997-11-20",
    "user_level_id": 1,
    "user_address_id": 0,
    "group_id": 3,
    "last_login": "",
    "last_ip": "",
    "status": 1,
    "create_time": "2018-04-23 13:12:22",
    "update_time": "2018-04-23 16:28:45",
    "get_user_level": {
      "name": "普通会员",
      "discount": 100
    },
    "get_user_money": {
      "total_money": 0,
      "balance": 1,
      "lock_balance": 0,
      "points": 0,
      "lock_points": 0
    }
  }
}
```

#### 备注:
无