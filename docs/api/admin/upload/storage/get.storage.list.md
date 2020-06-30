# 获取资源列表

#### 接口描述：
- 获取资源列表。

#### 请求 URL：
- `http|https://host/api/v1/storage/method/get.storage.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|storage_id |integer |否 |egt:0 |0 |2 |资源编号 0=全部|
|name |string |否 |max:255 | |//cover.jpg |资源名称 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size | integer|否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |asc |desc |排序方式 |
|order_field |string |否 |见附属 A |storage_id |create_time |排序字段 |

> 附属 A：
in:storage_id,name,type,create_time,update_time

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |2 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|storage_id |integer |是 |51 |资源编号 |
|parent_id |integer |是 |0 |所属资源编号 |
|name |string |是 |3a220004b7106964.png |资源名称 |
|mime |string |是 |image/png |资源Mime |
|ext |string |是 |png |资源后缀 |
|size |string |是 |40295 |资源大小 |
|pixel |array |否 |[&quot;width&quot;:855,&quot;height&quot;:419] |资源像素，非图片资源则为空 |
|hash |string |是 |...(太长省略) |资源Hash值 |
|path |string |是 |...(太长省略) |资源内部路径(资源标识) |
|url |string |是 |...(太长省略) |资源外链地址 |
|protocol |string |是 |aliyun |资源协议(模块名) |
|type |integer |是 |0 |资源类型 0=图片 1=附件 2=目录 |
|cover |string |是 |//cover.jpg |资源目录封面(只有目录才会有封面) |
|sort |integer |是 |50 |排序值 |
|create_time |datetime |是 |2018-05-28 23:20:31 |创建时间 |
|update_time |datetime |是 |2018-05-28 23:20:31 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "storage_id": 56,
        "parent_id": 2,
        "name": "子子文件夹",
        "mime": "",
        "ext": "",
        "size": 0,
        "pixel": [],
        "hash": "",
        "path": "",
        "url": "",
        "protocol": "",
        "type": 2,
        "cover": "//cover.jpg",
        "sort": 50,
        "create_time": "2018-03-19 09:04:22",
        "update_time": "2018-05-29 10:40:20"
      },
      {
        "storage_id": 51,
        "parent_id": 2,
        "name": "3a220004b7106964.png",
        "mime": "image/png",
        "ext": "png",
        "size": 40295,
        "pixel": {
          "width": 855,
          "height": 419
        },
        "hash": "4D5336213F769F2FC3D93A57F2E3E4ED",
        "path": "uploads/files/20180528/3a220004b7106964.png",
        "url": "careyshop.oss-cn-hangzhou.aliyuncs.com/uploads/files/20180528/3a220004b7106964.png?type=aliyun",
        "protocol": "aliyun",
        "type": 0,
        "cover": "",
        "sort": 50,
        "create_time": "2018-05-28 23:20:31",
        "update_time": "2018-05-28 23:20:31"
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。

2. 当参数`storage_id`的值大于`0`时表示获取指定资源目录下的列表。

3. 资源目录就像系统文件夹，不会列出所有资源，而是一层一层进入。