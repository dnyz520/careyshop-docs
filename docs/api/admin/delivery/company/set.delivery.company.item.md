# 编辑一个快递公司

#### 接口描述：
- 编辑一个快递公司。

#### 请求 URL：
- `http|https://host/api/v1/delivery_item/method/set.delivery.company.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|delivery_item_id |integer |是 |gt:0 | |513 |快递公司编号 |
|name |string |否 |max:50 | |顺丰速运 |快递公司名称 |
|phonetic |string |否 |max:10 | |s |快递公司拼音 |
|code |string |否 |max:30 | |sfsy |快递公司编码 |
|type |integer |否 |between:0,3 | |1 |快递公司类型 0=热门 1=国内 2=国外 3=转运 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

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
  "data": {
    "delivery_item_id": 513,
    "name": "顺丰速运",
    "phonetic": "s",
    "code": "sfsy",
    "type": 1
  }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。

2. 如果传入`name`参数值而不传入`phonetic`参数，则默认取`name`首位字符自动解析成首拼。