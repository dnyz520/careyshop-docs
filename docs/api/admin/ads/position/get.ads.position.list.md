# 获取广告位置列表

#### 接口描述：
- 获取广告位置列表。

#### 请求 URL：
- `http|https://host/api/v1/ads_position/method/get.ads.position.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |否 |max:100 | |首页焦点轮播 |广告位置名称 |
|code |string |否 |max:16 | |pc_index |广告位置编码 |
|platform |integer |否 |between:-128,127 | |0 |广告位置平台(自定义) |
|type |integer |否 |in:0,1 | |0 |广告位置类型 0=图片 1=代码 |
|display |integer |否 |in:0,1,2,3 | |0 |广告位置展示方式 0=多个 1=单个 2=随机多个 3=随机单个 |
|status |integer |否 |in:0,1 | |1 |广告位置状态 0=禁用 1=启用 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |ads_position_id |status |排序字段 |

> 附属 A：
in:ads_position_id,name,description,width,height,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |3 |合计计数 |

|items|类型|是否返回|示例值|描述|
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
    "items": [
      {
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
      },
      {
        "ads_position_id": 3,
        "code": "",
        "platform": 0,
        "name": "首页中层",
        "description": "",
        "width": 0,
        "height": 0,
        "content": "",
        "color": "#ffffff",
        "type": 0,
        "display": 0,
        "status": 1
      }
    ],
    "total_result": 3
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。