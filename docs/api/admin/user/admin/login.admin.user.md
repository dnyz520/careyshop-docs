# 登录账号

#### 接口描述：
- 账号登录，并且获取授权码。

#### 请求 URL：
- `http|https://host/api/v1/admin/method/login.admin.user/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|username |string |是 |length:4,20 | |admin |账号 |
|password |string |是 |min:6 | |admin888 |密码 |
|platform |string |是 |max:50 | |ios |来源平台，该字段值由客户端指定 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|admin |object |是 |[] |账号对象 |
|token |object |是 |[] |授权对象 |

|admin|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|admin_id |integer |是 |1 |账号编号 |
|username |string |是 |admin |账号 |
|group_id |integer |是 |1 |所属用户组 |
|nickname |string |是 |carey |昵称 |
|head_pic |string |是 |//host/head_pic.jpg |头像 |
|last_login |datetime |是 |2018-04-23 00:12:04 |最后登陆时间 |
|last_ip |string |是 |127.0.0.1 |最后登录ip |
|status |integer |是 |1 |是否启用 0=禁用 1=启用 |
|create_time |datetime |是 |2018-04-22 00:23:00 |创建时间 |
|update_time |datetime |是 |2018-04-22 01:56:55 |更新时间 |

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
    "admin": {
      "admin_id": 1,
      "username": "admin",
      "group_id": 1,
      "nickname": "carey",
      "head_pic": "//host/head_pic.jpg",
      "last_login": "",
      "last_ip": "",
      "status": 1,
      "create_time": "2018-04-22 00:23:00",
      "update_time": "2018-04-22 01:56:55"
    },
    "token": {
      "group_id": 1,
      "token": "3147ed7851354e0056c67a1ea1f249e1",
      "token_expires": 1527005172,
      "refresh": "4f2780e64fce73f21e4f2c16adeca7d2",
      "refresh_expires": 1527091572
    }
  }
}
```

#### 备注:
1. `platform`示例说明：假设有二台 IOS 设备，A 设备已登录账号 admin，现在使用账号 admin 再去登录 B 设备，则 A 设备上的授权码将无效，而 Web 或 Android 平台上的账号不会受此影响。

2. 获取到`token`之后，调用`需要授权`的接口时，需要将该值进行传递，与`公共参数`中的`token`对应。

3. `token`与`refresh`都有过期时间，在未过期期间内如果需要增长授权时间可调用接口 [刷新Token](/api/admin/user/admin/refresh.admin.token.md "刷新Token")。

4. `token`与`refresh`的值固定为 32 个十六进制字符的长度，并且是小写字母。

5. 获取到最新的`token`后，之前的`token`将失效。