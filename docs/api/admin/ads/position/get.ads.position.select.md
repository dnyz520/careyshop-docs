# 获取广告位置选择列表

#### 接口描述：
- 获取广告位置选择列表。

#### 请求 URL：
- `http|https://host/api/v1/ads_position/method/get.ads.position.select/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|platform |integer |否 |between:-128,127 | |0 |广告位置平台(自定义) |
|type |integer |否 |in:0,1 | |0 |广告位置类型 0=图片 1=代码 |
|display |integer |否 |in:0,1,2,3 | |0 |广告位置展示方式 0=多个 1=单个 2=随机多个 3=随机单个 |
|status |integer |否 |in:0,1 | |1 |广告位置状态 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|ads_position_id |integer |是 |4 |广告位置编号 |
|code |string |是 |pc_index |广告位置编码 |
|platform |integer |是 |0 |广告位置平台(自定义) |
|name |string |是 |首页焦点轮播 |广告位置名称 |
|type |integer |是 |0 |广告位置类型 0=图片 1=代码 |
|display |integer |是 |0 |广告位置展示方式 0=多个 1=单个 2=随机多个 3=随机单个 |
|status |integer |是 |1 |广告位置状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "ads_position_id": 2,
      "code": "index_1",
      "platform": 1,
      "name": "首页左侧",
      "type": 1,
      "display": 0,
      "status": 1
    },
    {
      "ads_position_id": 3,
      "code": "",
      "platform": 0,
      "name": "首页中层",
      "type": 0,
      "display": 0,
      "status": 1
    },
    {
      "ads_position_id": 4,
      "code": "pc_index",
      "platform": 0,
      "name": "首页焦点轮播",
      "type": 0,
      "display": 0,
      "status": 1
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。