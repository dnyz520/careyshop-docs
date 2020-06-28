# 获取资源缩略图实际路径

#### 接口描述：
- 获取资源缩略图实际路径。

#### 请求 URL：
- `http|https://host/api/v1/storage/method/get.storage.thumb.url/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|url |string |否 |min:0 | |...(过长,省略) |资源外链地址 |
|code |string |否 |max:32 | |index_goods_image |资源样式编码 |
|size |array |否 |max[]:2 | |[800,800] |资源缩略尺寸 |
|crop |array |否 |max[]:2 | |[100,100] |资源裁剪尺寸 |
|quality |integer |否 |between:0,100 | |100 |资源图片质量 |
|type |string |否 |见附属 A | |jpg |资源输出格式，空则原样输出 |
|style |string |否 |max:64 | |demo |第三方OSS样式 |

> 附属 A：
in:jpg,png,svg,gif,bmp,tiff,webp

#### 请求示例：
```json
{
    "url": "careyshop.oruei.com/uploads/files/20180602/a918302cd8f701c0e4f45d16b32fc8e2.jpg?type=careyshop",
    "code": "index_goods_image",
    "size": [0,300],
    "crop": [100,0],
    "quality": 100,
    "type": "png",
    "style": ""
}
```

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|url |string |是 |...(过长,省略) |资源外链地址 |
|url_prefix |string |是 |...(过长,省略) |带前缀的资源外链地址 |

#### 响应示例：
```json
{
    "status": 200,
    "message": "success",
    "data": {
        "url": "careyshop.oruei.com/uploads/files/20180602/4f45d16b32fc8e2/5bd47d3283a40c5272a22443fe02b9ab3c167495.png",
        "url_prefix": "http://careyshop.oruei.com/uploads/files/20180602/4f45d16b32fc8e2/5bd47d3283a40c5272a22443fe02b9ab3c167495.png"
    }
}
```

#### 备注:
1. 参数`style`值不为空时表示启用`第三方OSS样式`功能，所以其余`参数`都被会忽略。

2. 参数`code`所获取的系统设置参数权限小于`请求参数`，如果`请求参数`也存在相同参数则会被覆盖。

3. 部分备注可参考`管理组 API`中的[「添加一个资源样式」](https://doc.careyshop.cn/docs/admin_api/a-21527953475 "「添加一个资源样式」")。