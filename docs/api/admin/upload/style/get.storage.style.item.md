# 获取一个资源样式

#### 接口描述：
- 获取一个资源样式。

#### 请求 URL：
- `http|https://host/api/v1/storage_style/method/get.storage.style.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|storage_style_id |integer |是 |gt:0 | |7 |资源样式编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
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
}
```

#### 备注:
无