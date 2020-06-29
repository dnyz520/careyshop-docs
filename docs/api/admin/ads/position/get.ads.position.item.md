# 获取一个广告位置

#### 接口描述：
- 获取一个广告位置。

#### 请求 URL：
- `http|https://host/api/v1/ads_position/method/get.ads.position.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|ads_position_id |integer |是 |gt:0 | |4 |广告位置编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|ads_position_id |integer |是 |4 |广告位置编号 |
|code |string |是 |pc_index |广告位置编码 |
|platform |integer |是 |0 |广告位置平台(自定义) |
|name |string |是 |首页焦点轮播 |广告位置名称 |
|description |string |是 |简单说明 |广告位置描述 |
|width |integer |是 |0 |广告位置宽度 |
|height |integer |是 |0 |广告位置高度 |
|content |string |是 |image.jpg |广告位置默认内容(图片,代码等) |
|color |string |是 |#ffffff |广告位置背景色 |
|type |integer |是 |0 |广告位置类型 0=图片 1=代码 |
|display |integer |是 |0 |广告位置展示方式 0=多个 1=单个 2=随机多个 3=随机单个 |
|status |integer |是 |1 |广告位置状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "ads_position_id": 4,
    "code": "pc_index",
    "platform": 0,
    "name": "首页焦点轮播",
    "description": "简单说明",
    "width": 0,
    "height": 0,
    "content": "image.jpg",
    "color": "#ffffff",
    "type": 0,
    "display": 0,
    "status": 1
  }
}
```

#### 备注:
无