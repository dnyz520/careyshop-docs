# 修改一个账号密码

#### 接口描述：
- 修改一个账号密码，一般由用户自己修改。

#### 请求 URL：
- `http|https://host/api/v1/admin/method/set.admin.password/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|client_id |integer |是 |gt:0 | |1 |账号编号 |
|password |string |是 |min:6 | |admin666 |密码 |
|password_confirm |string |是 |min:6 | |admin666 |确认密码 |
|password_old |string |是 |min:6 | |admin888 |原始密码 |

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
1. 执行成功后对应账号的`token`将失效。