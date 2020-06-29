# 获取指定区域

#### 接口描述：
- 获取指定区域。

#### 请求 URL：
- `http|https://host/api/v1/region/method/get.region.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|region_id |integer |是 |gt:0 | |4045 |区域编号 |
|region_all |integer |否 |in:0,1 |0 |1 |包括已删除区域 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|region_id |integer |是 |4045 |区域编号 |
|parent_id |integer |是 |12 |父区域编号 |
|region_name |string |是 |宁波市 |区域名称 |
|sort |integer |是 |50 |区域排序值 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "region_id": 4045,
    "parent_id": 12,
    "region_name": "宁波市",
    "sort": 50
  }
}
```

#### 备注:
无