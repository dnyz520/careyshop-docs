# 获取商品属性列表

#### 接口描述：
- 获取商品属性列表。

#### 请求 URL：
- `http|https://host/api/v1/goods_attribute/method/get.goods.attribute.list/`

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
|goods_attribute_id |integer |是 |3 |商品属性编号(主体) |
|attr_name |string |是 |内存 |商品属性名称(主体) |
|description |string |是 |描述 |商品属性描述(主体) |
|icon |string |是 |//pc.png |商品属性图标(图片) |
|goods_type_id |integer |是 |2 |所属商品模型编号(主体) |
|sort |integer |是 |50 |商品属性排序值(主体) |
|get_attribute |array |否 |[] |属性数组(属性) |

|get_attribute|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_attribute_id |integer |是 |6 |商品属性编号 |
|parent_id |integer |是 |3 |商品属性主体 |
|attr_name |string |是 |内存类型 |商品属性名称 |
|description |string |是 |1024KB=1M |商品属性描述 |
|icon |string |是 |//pc.png |商品属性图标(图片) |
|goods_type_id |integer |是 |2 |所属商品模型编号 |
|attr_index |integer |是 |1 |商品属性检索 0=不检索 1=关键字 2=范围 |
|attr_input_type |integer |是 |1 |商品属性录入方式 0=手工填写 1=单选 2=多选 |
|attr_values |array |是 |[&#34;DDR3&#34;,&#34;DDR4&#34;] |商品属性可选值 |
|is_important |integer |是 |1 |是否属于核心属性 0=普通 1=核心属性 |
|sort |integer |是 |50 |商品属性排序值 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "goods_attribute_id": 4,
      "attr_name": "基本参数",
      "description": "",
      "icon": "",
      "goods_type_id": 2,
      "sort": 30,
      "get_attribute": []
    },
    {
      "goods_attribute_id": 2,
      "attr_name": "处理器",
      "description": "",
      "icon": "//cpu.png",
      "goods_type_id": 2,
      "sort": 40,
      "get_attribute": []
    },
    {
      "goods_attribute_id": 3,
      "attr_name": "内存",
      "description": "描述",
      "icon": "",
      "goods_type_id": 2,
      "sort": 50,
      "get_attribute": [
        {
          "goods_attribute_id": 10,
          "parent_id": 3,
          "attr_name": "最大支持内存",
          "description": "",
          "icon": "//pc.png",
          "goods_type_id": 2,
          "attr_index": 0,
          "attr_input_type": 0,
          "attr_values": [],
          "is_important": 0,
          "sort": 30
        },
        {
          "goods_attribute_id": 6,
          "parent_id": 3,
          "attr_name": "内存类型",
          "description": "1024KB=1M",
          "icon": "",
          "goods_type_id": 2,
          "attr_index": 1,
          "attr_input_type": 1,
          "attr_values": [
            "DDR3",
            "DDR4"
          ],
          "is_important": 1,
          "sort": 50
        },
        {
          "goods_attribute_id": 11,
          "parent_id": 3,
          "attr_name": "内存容量",
          "description": "",
          "icon": "//pc.png",
          "goods_type_id": 2,
          "attr_index": 0,
          "attr_input_type": 2,
          "attr_values": [
            "2G",
            "4G",
            "8G",
            "16G",
            "32G"
          ],
          "is_important": 0,
          "sort": 50
        }
      ]
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。