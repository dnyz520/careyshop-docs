# 注册一个新账号

#### 接口描述：
- 注册一个新账号。

#### 请求 URL：
- `http|https://host/api/v1/user/method/add.user.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|username |string |是 |length:4,20 | |carey |账号 |
|password |string |是 |min:6 | |123456 |密码 |
|password_confirm |string |是 |min:6 | |123456 |确认密码 |
|mobile |number |是 |length:7,15 | |13071297155 |手机号 |
|nickname |string |否 |max:50 | |carey |昵称 |
|head_pic |string |否 |max:255 | |//head.jpg |头像 |
|sex |integer |否 |in:0,1,2 |0 |1 |性别 0=保密 1=男 2=女 |
|birthday |date |否 |dateFormat:Y-m-d | |1997-11-20 |生日 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示注册成功 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
无