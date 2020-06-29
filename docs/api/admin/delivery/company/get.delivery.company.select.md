# 获取快递公司选择列表

#### 接口描述：
- 获取快递公司选择列表。

#### 请求 URL：
- `http|https://host/api/v1/delivery_item/method/get.delivery.company.select/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|type |integer |否 |between:0,3 | |0 |快递公司类型 0=热门 1=国内 2=国外 3=转运 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|delivery_item_id |integer |是 |513 |快递公司编号 |
|name |string |是 |顺丰速运 |快递公司名称 |
|phonetic |string |是 |s |快递公司拼音 |
|code |string |是 |sfsy |快递公司编码 |
|type |integer |是 |1 |快递公司类型 0=热门 1=国内 2=国外 3=转运 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "delivery_item_id": 1,
      "name": "顺丰速运",
      "phonetic": "s",
      "code": "SF",
      "type": 0
    },
    {
      "delivery_item_id": 2,
      "name": "百世快递",
      "phonetic": "b",
      "code": "HTKY",
      "type": 0
    },
    {
      "delivery_item_id": 3,
      "name": "中通快递",
      "phonetic": "z",
      "code": "ZTO",
      "type": 0
    }
  ]
}
```

#### 备注:
无