# 获取快递公司列表

#### 接口描述：
- 获取快递公司列表。

#### 请求 URL：
- `http|https://host/api/v1/delivery_item/method/get.delivery.company.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |否 |max:50 | |顺丰 |快递公司名称 |
|code |string |否 |max:30 | |sfsy |快递公司编码 |
|type |integer |否 |between:0,3 | |0 |快递公司类型 0=热门 1=国内 2=国外 3=转运 |
|company_all |integer |否 |in:0,1 |0 |0 |是否获取已删除 0=否 1=是 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |asc |desc |排序方式 |
|order_field |string |否 |见附属 A |delivery_item_id |phonetic |排序字段 |

> 附属 A：
in:delivery_item_id,name,phonetic,code,type

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |509 |合计计数 |

|items|类型|是否返回|示例值|描述|
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
  "data": {
    "items": [
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
    ],
    "total_result": 509
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。