# 根据条件查询是否有更新

#### 接口描述：
- 根据条件查询是否有更新。

#### 请求 URL：
- `http|https://host/api/v1/app_install/method/query.app.install.updated/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|user_agent |string |是 |max:64 | |iphone |系统标识 |
|ver |string |是 |max:16 | |1.1.1.0 |应用安装包版本号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示需要更新 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
不需要更新返回示例 1：
```json
{
  "status": 500,
  "message": "不存在标识为 ios 的应用安装包"
}
```

不需要更新返回示例 2：
```json
{
  "status": 500,
  "message": "当前应用版本已是最新"
}
```