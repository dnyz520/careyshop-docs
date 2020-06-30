# 重命名一个资源

#### 接口描述：
- 描述

#### 请求 URL：
- `http|https://host/api/v1/storage/method/rename.storage.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|storage_id |integer |是 |gt:0 | |55 |资源编号 |
|name |string |是 |max:255 | |XX商品 |资源名称 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |默认文件夹 |资源名称 |
|update_time |datetime |是|2018-05-29 15:04:28 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "name": "XX商品.png",
    "update_time": "2018-05-29 15:04:28"
  }
}
```

#### 备注:
无