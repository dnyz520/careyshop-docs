# 复制一个快递公司为"热门类型"

#### 接口描述：
- 复制一个快递公司为「热门类型」。

#### 请求 URL：
- `http|https://host/api/v1/delivery_item/method/copy.delivery.company.hot/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|delivery_item_id |integer |是 |gt:0 | |513 |快递公司编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|delivery_item_id |integer |是 |515 |快递公司编号 |
|name |string |是 |顺丰速运 |快递公司名称 |
|phonetic |string |是 |s |快递公司拼音 |
|code |string |是 |sfsy |快递公司编码 |
|type |integer |是 |0 |快递公司类型 0=热门 1=国内 2=国外 3=转运 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "delivery_item_id": 515,
    "name": "顺丰速运",
    "phonetic": "s",
    "code": "sfsy",
    "type": 0
  }
}
```

#### 备注:
1. 复制一个快递公司的数据，将复制出来的`type`值设为`0`后进行插入数据操作，并且返回插入后的数据。