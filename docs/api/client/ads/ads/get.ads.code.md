# 根据编码获取一个广告

#### 接口描述：
- 根据编码获取一个广告。

#### 请求 URL：
- `http|https://host/api/v1/ads/method/get.ads.code/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|code |string |是 |max:16 | |index_51 |广告编码 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|ads_id |integer |是 |1 |广告编号 |
|platform |integer |是 |0 |广告平台(自定义) |
|name |string |是 |五一促销 |广告名称 |
|url |string |是 |# |链接地址 |
|target |string |否 |&#95;self |打开方式 |
|content |string |否 |//image.jpg |广告内容 |
|color |string |否 |#ffffff |广告背景色 |
|type |integer |是 |0 |广告类型 0=图片 1=代码 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "ads_id": 1,
    "platform": 0,
    "name": "五一促销",
    "url": "#",
    "target": "_self",
    "content": "//image.jpg",
    "color": "#ffffff",
    "type": 0
  }
}
```

#### 备注:
前端调用广告必须使用`广告编码`或`广告位编码`获取。   
广告列表与广告位置的区别在于，广告列表是单条广告，而广告位置是将广告列表进行了集合，如果列表为空则自身也是一条广告。