# 登录账号

#### 接口描述：
- 登录账号。

#### 请求 URL：
- `http|https://host/api/v1/user/method/login.user.user/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|username |string |是 |length:4,20 | |dnyz529 |账号 |
|password |string |是 |min:6 | |111111 |密码 |
|platform |string |是 |max:50 | |iOS |来源平台，该字段值由客户端指定 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|user |object |是 |[] |账号对象 |
|token |object |是 |[] |授权对象 |

|user|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|user_id |integer |是 |18 |账号编号 |
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

|token|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|group_id |integer |是 |1 |所属用户组 |
|token |string |是 |- |授权码 |
|token_expires |timestamp |是 |1527005172 |授权码过期时间，时间戳 |
|refresh |string |是 |- |刷新授权码，可用来刷新 token |
|refresh_expires |timestamp |是 |1527091572 |刷新授权码过期时间，时间戳 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "user": {
      "user_id": 18,
      "username": "dnyz529",
      "mobile": "15867430425",
      "is_mobile": 1,
      "email": "",
      "is_email": 0,
      "nickname": "",
      "head_pic": "",
      "sex": 0,
      "birthday": "",
      "user_level_id": 1,
      "user_address_id": 0,
      "group_id": 3,
      "last_login": "",
      "last_ip": "",
      "status": 1,
      "create_time": "2018-06-18 23:02:44",
      "update_time": "2018-06-18 23:02:44"
    },
    "token": {
      "group_id": 3,
      "token": "d518ba75422b07a28ead3a37ec43f5ec",
      "token_expires": 1531927335,
      "refresh": "f4cd0973451f40bd07d46716b311909f",
      "refresh_expires": 1532013735
    }
  }
}
```

#### 备注:
1. `platform`示例说明：假设有二台 iOS 设备，A 设备已登录账号 dnyz529，现在使用账号 dnyz529 再去登录 B 设备，则 A 设备上的授权码将无效，而 Web 或 Android 平台上的账号不会受此影响。

2. 获取到`token`之后，调用`需要授权`的接口时，需要将该值进行传递，与`公共参数`中的`token`对应。

3. `token`与`refresh`都有过期时间，在未过期期间内如果需要增长授权时间可调用接口 [刷新Token](https://doc.careyshop.cn/docs/client_api/a-21153892899 "刷新Token")。

4. `token`与`refresh`的值固定为 32 个十六进制字符的长度，并且是小写字母。

5. 获取到最新的`token`后，之前的`token`将失效。