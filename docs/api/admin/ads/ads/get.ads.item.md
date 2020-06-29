# 获取一个广告

#### 接口描述：
- 获取一个广告。

#### 请求 URL：
- `http|https://host/api/v1/ads/method/get.ads.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|ads_id |integer |是 |gt:0 | |5 |广告编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|ads_id |integer |是 |5 |广告编号 |
|ads_position_id |integer |是 |1 |广告位置编号 |
|code |string |否 |index_1 |广告编码 |
|platform |integer |是 |0 |广告平台(自定义) |
|name |string |是 |五一促销 |广告名称 |
|url |string |是 |# |链接地址 |
|target |string |否 |&#95;self |打开方式 |
|content |string |否 |image.jpg |广告内容 |
|color |string |否 |#ffffff |广告背景色 |
|type |integer |是 |1 |广告类型 0=图片 1=代码 |
|begin_time |string |是 |2018-05-01 00:00:00 |开始投放时间 |
|end_time |string |是 |2018-05-03 23:59:59 |投放结束时间 |
|sort |integer |否 |50 |广告排序值 |
|status |integer |否 |1 |是否可见 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "ads_id": 5,
    "ads_position_id": 1,
    "code": "index_1",
    "platform": 0,
    "name": "五一促销",
    "url": "#",
    "target": "_self",
    "content": "image.jpg",
    "color": "#ffffff",
    "type": 1,
    "begin_time": "2018-05-01 00:00:00",
    "end_time": "2018-05-03 23:59:59",
    "sort": 50,
    "status": 1
  }
}
```

#### 备注:
无