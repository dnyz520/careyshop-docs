# 获取广告列表

#### 接口描述：
- 获取广告列表。

#### 请求 URL：
- `http|https://host/api/v1/ads/method/get.ads.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|ads_position_id |integer |否 |gt:0 | |1 |广告位置编号 |
|code |string |否 |max:16 | |index_1 |广告编码 |
|platform |integer |否 |between:-128,127 | |0 |广告平台(自定义) |
|name |string |否 |max:100 | |五一促销 |广告名称 |
|type |integer |否 |in:0,1 | |1 |广告类型 0=图片 1=代码 |
|status |integer |否 |in:0,1 | |1 |是否可见 0=禁用 1=启用 |
|begin_time |datetiem |否 |beforeTime:end_time | |2018-05-01 00:00:00 |开始投放时间 |
|end_time |datetiem |否 |afterTime:begin_time | |2018-05-30 23:59:59 |投放结束时间 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |ads_id |status |排序字段 |

> 附属 A：
in:ads_id,ads_position_id,name,begin_time,end_time,sort,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |5 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|ads_id |integer |是 |5 |广告编号 |
|code |string |是 |index_1 |广告编码 |
|platform |integer |是 |0 |广告平台(自定义) |
|name |string |是 |五一促销 |广告名称 |
|url |string |是 |# |链接地址 |
|target |string |是 |&#95;self |打开方式 |
|color |string |是 |#ffffff |广告背景色 |
|type |integer |是 |1 |广告类型 0=图片 1=代码 |
|begin_time |string |是 |2018-05-01 00:00:00 |开始投放时间 |
|end_time |string |是 |2018-05-03 23:59:59 |投放结束时间 |
|sort |integer |是 |50 |广告排序值 |
|status |integer |是 |1 |是否可见 0=禁用 1=启用 |
|get_ads_position |object |是 |[] |广告位对象 |

|get_ads_position|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|ads_position_id |integer |是 |1 |广告位编号 |
|name |string |是 |PC首页 |广告位名称 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "ads_id": 1,
        "code": "",
        "platform": 0,
        "name": "广告A",
        "url": "#",
        "target": "_self",
        "color": "#ffffff",
        "type": 1,
        "begin_time": "2018-05-08 11:10:00",
        "end_time": "2018-05-09 11:30:00",
        "sort": 20,
        "status": 1,
        "get_ads_position": {
          "ads_position_id": 1,
          "name": "PC首页"
        }
      },
      {
        "ads_id": 5,
        "code": "index_1",
        "platform": 0,
        "name": "五一促销",
        "url": "#",
        "target": "_self",
        "color": "#ffffff",
        "type": 1,
        "begin_time": "2018-05-01 00:00:00",
        "end_time": "2018-05-30 23:59:59",
        "sort": 50,
        "status": 1,
        "get_ads_position": {
          "ads_position_id": 1,
          "name": "PC首页"
        }
      }
    ],
    "total_result": 5
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。