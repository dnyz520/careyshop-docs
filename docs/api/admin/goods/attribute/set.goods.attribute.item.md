# 编辑一个商品属性

#### 接口描述：
- 编辑一个商品属性。

#### 请求 URL：
- `http|https://host/api/v1/goods_attribute/method/set.goods.attribute.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_attribute_id |integer |是 |gt:0 | |6 |商品属性编号 |
|parent_id |integer |是 |gt:0 | |3 |商品属性主体 |
|attr_name |string |是 |max:60 | |内存类型 |商品属性名称 |
|description |string |否 |max:255 | |1024KB=1M |商品属性描述 |
|icon |string |否 |max:64 | |//pc.png |商品属性图标(图片) |
|goods_type_id |integer |是 |gt:0 | |2 |所属商品模型编号 |
|attr_index |integer |否 |in:0,1,2 | |1 |商品属性检索 0=不检索 1=关键字 2=范围 |
|attr_input_type |integer |是 |requireWith:attr_values | |1 |商品属性录入方式 0=手工填写 1=单选 2=多选 |
|attr_values |string |否 |min[]:0 | |[&#34;DDR3&#34;,&#34;DDR4&#34;] |商品属性可选值 |
|is_important |integer |否 |in:0,1 | |1 |是否属于核心属性 0=普通 1=核心属性 |
|sort |integer |否 |between:0,255 | |50 |商品属性排序值 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_attribute_id |integer |是 |6 |商品属性编号 |
|parent_id |integer |否 |3 |商品属性主体 |
|attr_name |string |否 |内存类型 |商品属性名称 |
|description |string |否 |1024KB=1M |商品属性描述 |
|icon |string |否 |//pc.png |商品属性图标(图片) |
|goods_type_id |integer |否 |2 |所属商品模型编号 |
|attr_index |integer |否 |1 |商品属性检索 0=不检索 1=关键字 2=范围 |
|attr_input_type |integer |否 |1 |商品属性录入方式 0=手工填写 1=单选 2=多选 |
|attr_values |array |否 |[&#34;DDR3&#34;,&#34;DDR4&#34;] |商品属性可选值 |
|is_important |integer |否 |1 |是否属于核心属性 0=普通 1=核心属性 |
|sort |integer |否 |50 |商品属性排序值 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "goods_attribute_id": 6,
    "parent_id": 3,
    "attr_name": "内存类型",
    "description": "1024KB=1M",
    "icon": "//pc.png",
    "goods_type_id": 2,
    "attr_index": 1,
    "attr_input_type": 1,
    "attr_values": ["DDR3","DDR4"],
    "is_important": 1,
    "sort": 50
  }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。