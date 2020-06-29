# 获取基础数据索引列表

#### 接口描述：
- 获取基础数据索引列表。

#### 请求 URL：
- `http|https://host/api/v1/goods_attribute/method/get.goods.attribute.data/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_type_id |integer |是 |gt:0 | |2 |所属商品模型编号 |
|attribute_all |integer |否 |in:0,1 |0 |1 |获取所有(包括已删除) 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|$id |object |是 |1 |`goods_attribute_id`的索引 |

|$id|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_attribute_id |integer |是 |5 |商品属性编号 |
|attr_name |string |是 |内存 |商品属性名称 |
|description |string |是 |描述 |商品属性描述 |
|icon |string |是 |//pc.png |商品属性图标(图片) |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "1": {
      "goods_attribute_id": 1,
      "attr_name": "基本参数",
      "description": "",
      "icon": ""
    },
    "4": {
      "goods_attribute_id": 4,
      "attr_name": "处理器",
      "description": "",
      "icon": ""
    },
    "5": {
      "goods_attribute_id": 5,
      "attr_name": "内存",
      "description": "描述",
      "icon": ""
    }
  }
}
```

#### 备注:
无