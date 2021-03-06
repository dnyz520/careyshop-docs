# 获取一个商品属性主体

#### 接口描述：
- 获取一个商品属性主体。

#### 请求 URL：
- `http|https://host/api/v1/goods_attribute/method/get.goods.attribute.body.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_attribute_id |integer |是 |gt:0 | |3 |商品属性编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_attribute_id |integer |是 |3 |商品属性编号 |
|attr_name |string |是 |内存 |商品属性名称 |
|description |string |是 |描述 |商品属性描述 |
|icon |string |是 |//pc.png |商品属性图标(图片) |
|goods_type_id |integer |是 |2 |所属商品模型编号 |
|sort |integer |是 |50 |商品属性排序值 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "goods_attribute_id": 3,
    "attr_name": "内存",
    "description": "描述",
    "icon": "//pc.png",
    "goods_type_id": 2,
    "sort": 50
  }
}
```

#### 备注:
无