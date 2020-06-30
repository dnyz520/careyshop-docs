# 获取一个资源或资源目录

#### 接口描述：
- 获取一个资源或资源目录。

#### 请求 URL：
- `http|https://host/api/v1/storage/method/get.storage.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|storage_id |integer |是 |gt:0 | |51 |资源编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|参数名|类型|是否返回|示例值|描述|
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
|cover |string |是 | |资源目录封面(只有目录才会有封面) |
|sort |integer |是 |50 |排序值 |
|is_default |integer |是 |0 |默认目录 0=否 1=是 |
|create_time |datetime |是 |2018-05-28 23:20:31 |创建时间 |
|update_time |datetime |是 |2018-05-28 23:20:31 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "storage_id": 51,
    "parent_id": 0,
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
    "is_default": 0,
    "create_time": "2018-05-28 23:20:31",
    "update_time": "2018-05-28 23:20:31"
  }
}
```

#### 备注:
1. 资源和资源目录的结构是相同的，区别无非就是有的字段不一定有内容而已。可以通过`type`字段判断。