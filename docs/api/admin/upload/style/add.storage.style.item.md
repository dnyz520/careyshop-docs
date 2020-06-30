# 添加一个资源样式

#### 接口描述：
- 添加一个资源样式。

#### 请求 URL：
- `http|https://host/api/v1/storage_style/method/add.storage.style.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |是 |max:64 | |PC商品主图 |资源样式名称 |
|code |string |是 |max:32 | |index_goods_image |资源样式编码 |
|platform |integer |是 |between:-128,127 | |0 |资源样式平台(自定义) |
|size |array |否 |max[]:2 | |[800,800] |资源缩略尺寸 |
|crop |array |否 |max[]:2 | |[100,100] |资源裁剪尺寸 |
|quality |integer |否 |between:0,100 |0 |100 |资源图片质量 0=系统默认|
|type |string |否 |见附属 A | |jpg |资源输出格式，空则原样输出|
|style |string |否 |max:64 | |demo |第三方OSS样式 |
|status |integer |否 |in:0,1 |1 |1 |状态 0=禁用 1=启用 |

> 附属 A：
in:jpg,png,svg,gif,bmp,tiff,webp

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |PC商品主图 |资源样式名称 |
|code |string |是 |index_goods_image |资源样式编码 |
|platform |integer |是 |0 |资源样式平台(自定义) |
|quality |integer |否 |100 |资源图片质量 0=系统默认 |
|type |integer |否 |jpg |资源输出格式，空则原样输出 |
|style |string |否 |demo |第三方OSS样式 |
|status |integer |否 |1 |资源样式状态 0=禁用 1=启用 |
|scale |object |是 |[] |缩略和裁剪数组 |
|storage_style_id |integer |是 |7 |资源样式编号 |

|scale|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|size |array |是 |[&quot;800&quot;,&quot;800&quot;] |资源缩略尺寸 |
|crop |array |是 |[&quot;100&quot;,&quot;100&quot;] |资源裁剪尺寸 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "name": "PC商品主图",
    "code": "index_goods_image",
    "platform": 0,
    "quality": 100,
    "type": "jpg",
    "style": "demo",
    "status": 1,
    "scale": {
      "size": [
        "800",
        "800"
      ],
      "crop": [
        "100",
        "100"
      ]
    },
    "storage_style_id": 7
  }
}
```

#### 备注:
1. 参数`size`和`crop`可链式操作，请求时参数的前后顺序决定图片的处理先后顺序不同。

2. 参数`size`和`crop`使用最多2位的数组，第一位表示`宽度`，第二位表示`高度`。

3. 参数`size`和`crop`可以只处理数组中的某一位，例如：`[800]`表示只处理`宽度`，`高度`则自适应，再例如：`[0,800]`表示只处理`高度`，`宽度`则自适应。所以`0`或`空`则表示某位不处理(当然也可以是二位都是`0`)。

4. 参数`quality`值为`0`或`空`时表示系统默认质量输出。

5. 参数`style`值不为空时表示启用`第三方OSS样式`功能，所以其余`参数`都被会忽略。