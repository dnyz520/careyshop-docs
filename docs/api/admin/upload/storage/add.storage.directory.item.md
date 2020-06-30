# 添加一个资源目录

#### 接口描述：
- 添加一个资源目录。

#### 请求 URL：
- `http|https://host/api/v1/storage/method/add.storage.directory.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |是 |max:255 | |XX商品 |资源名称 |
|parent_id |integer |否 |egt:0 |0 |0 |所属资源编号(上级资源编号，0=根目录) |
|sort |integer |否 |between:0,255 |50 |50 |排序值 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |XX商品 |资源名称 |
|parent_id |integer |否 |0 |所属资源编号(上级资源编号，0=根目录) |
|sort |integer |否 |50 |排序值 |
|type |integer |是 |2 |资源类型 0=图片 1=附件 2=目录 |
|create_time |datetime |是 |2018-05-29 10:05:53 |创建时间 |
|update_time |datetime |是 |2018-05-29 10:05:53 |更新时间 |
|storage_id |integer |是 |55 |资源编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "name": "XX商品",
    "parent_id": 0,
    "sort": 50,
    "type": 2,
    "create_time": "2018-05-29 10:10:51",
    "update_time": "2018-05-29 10:10:51",
    "storage_id": 55
  }
}
```

#### 备注:
无