# 将资源目录标设为默认目录

#### 接口描述：
- 将资源目录标设为默认目录。

#### 请求 URL：
- `http|https://host/api/v1/storage/method/set.storage.directory.default/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|storage_id |integer |是 |gt:0 | |55 |资源编号 |

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
1. 设为默认的好处是在获取列表后可以知道需要选中哪个目录。