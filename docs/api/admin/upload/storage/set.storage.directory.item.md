# 编辑一个资源目录

#### 接口描述：
- 编辑一个资源目录。

#### 请求 URL：
- `http|https://host/api/v1/storage/method/set.storage.directory.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|storage_id |integer |是 |gt:0 | |55 |资源编号 |
|name |string |否 |max:255 | |XX商品 |资源名称 |
|sort |integer |否 |between:0,255 | |50 |排序值 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|storage_id |integer |是 |55 |资源编号 |
|name |string |否 |XX商品 |资源名称 |
|sort |integer |否 |50 |排序值 |
|update_time |datetime |否 |2018-05-29 10:16:39 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "storage_id": 55,
    "name": "XX商品",
    "sort": 50,
    "update_time": "2018-05-29 10:16:39"
  }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。