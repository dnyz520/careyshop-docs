# 获取资源目录选择列表

#### 接口描述：
- 获取资源目录选择列表。

#### 请求 URL：
- `http|https://host/api/v1/storage/method/get.storage.directory.select/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_type |string |否 |in:asc,desc |asc |desc |排序方式 |
|order_field |string |否 |见附属 A |storage_id |create_time |排序字段 |

> 附属 A：
in:storage_id,name,type,create_time,update_time

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|storage_id |integer |是 |55 |资源编号 |
|parent_id |integer |是 |0 |所属资源编号(上级资源编号，0=根目录) |
|name |string |是 |XX商品 |资源名称 |
|cover |string |是 |//cover.jpg |资源目录封面 |
|sort |integer |是 |50 |排序值 |
|is_default |integer |是 |0 |默认目录 0=否 1=是 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "storage_id": 1,
      "parent_id": 0,
      "name": "默认文件夹",
      "cover": "",
      "sort": 50,
      "is_default": 1
    },
    {
      "storage_id": 2,
      "parent_id": 1,
      "name": "子文件夹",
      "cover": "",
      "sort": 50,
      "is_default": 0
    },
    {
      "storage_id": 55,
      "parent_id": 0,
      "name": "XX商品",
      "cover": "//cover.jpg",
      "sort": 50,
      "is_default": 0
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。