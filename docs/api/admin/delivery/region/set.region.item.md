# 编辑一个区域

#### 接口描述：
- 编辑一个区域。

#### 请求 URL：
- `http|https://host/api/v1/region/method/set.region.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|region_id |integer |是 |gt:0 | |4045 |区域编号 |
|region_name |string |否 |max:120 | |宁波市 |区域名称 |
|sort |integer |否 |between:0,255 | |50 |区域排序值 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|region_id |integer |是 |4045 |区域编号 |
|region_name |string |否 |宁波市 |区域名称 |
|sort |integer |否 |50 |区域排序值 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "region_id": 4045,
    "region_name": "宁波市",
    "sort": 50
  }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。