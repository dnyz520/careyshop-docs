# 获取资源样式列表

#### 接口描述：
- 获取资源样式列表。

#### 请求 URL：
- `http|https://host/api/v1/storage_style/method/get.storage.style.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |否 |max:64 | |名称 |资源样式名称 |
|code |string |否 |max:32 | |index |资源样式编码 |
|platform |integer |否 |between:-128,127 | |0 |资源样式平台(自定义) |
|status |integer |否 |in:0,1 | |1 |资源样式状态 0=禁用 1=启用 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |storage_style_id |status |排序字段 |

> 附属 A：
in:storage_style_id,name,code,platform,status

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
|storage_style_id |integer |是 |7 |资源样式编号 |
|name |string |是 |PC商品主图 |资源样式名称 |
|code |string |是 |index_goods_image |资源样式编码 |
|platform |integer |是 |0 |资源样式平台(自定义) |
|quality |integer |是 |100 |资源图片质量 0=系统默认 |
|type |integer |是 |png |资源输出格式，空则原样输出 |
|style |string |是 |demo |第三方OSS样式 |
|status |integer |是 |1 |资源样式状态 0=禁用 1=启用 |
|scale |object |是 |[] |缩略和裁剪数组 |

|scale|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|size |array |是 |[&quot;800&quot;,&quot;800&quot;] |资源缩略尺寸 |
|crop |array |是 |[] |资源裁剪尺寸 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "storage_style_id": 8,
        "name": "后台商品主图",
        "code": "admin_goods_image",
        "platform": 0,
        "scale": {
          "size": [
            "400",
            "400"
          ],
          "crop": []
        },
        "quality": 0,
        "type": "",
        "style": "",
        "status": 1
      },
      {
        "storage_style_id": 7,
        "name": "PC商品主图",
        "code": "index_goods_image",
        "platform": 0,
        "scale": {
          "size": [
            "800",
            "800"
          ],
          "crop": []
        },
        "quality": 100,
        "type": "png",
        "style": "demo",
        "status": 1
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。