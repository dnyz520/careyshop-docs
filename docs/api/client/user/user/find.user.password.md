# 忘记密码

#### 接口描述：
- 忘记密码，可通过手机验证码重设新的密码。

#### 请求 URL：
- `http|https://host/api/v1/user/method/find.user.password/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值| 示例值         |描述|
|:----|:---|:---:|:-----|:-----|:------------|-----|
|code |integer |是 |max:6 | | 908602      |验证码 |
|username |string |是 |length:4,20 | | careyshop   |账号 |
|mobile |number |是 |length:7,15 | | 15867430426 |手机号 |
|password |string |是 |min:6 | | 123456      |密码 |
|password_confirm |string |是 |min:6 | | 123456      |确认密码 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示执行成功 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
1. 发送验证码、验证验证码、使用验证码必须由客户端主动完成，再调用该接口。可以在`控制器`内封装，一条过，切不可分步骤执行。
