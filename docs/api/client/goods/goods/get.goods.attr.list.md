# 获取指定商品的属性列表

#### 接口描述：
- 获取指定商品的属性列表。

#### 请求 URL：
- `http|https://host/api/v1/goods/method/get.goods.attr.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt:0 | |5 |商品编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_attribute_id |integer |是 |1 |商品属性编号 |
|parent_id |integer |是 |0 |商品属性主体 |
|is_important |integer |是 |1 |是否核心属性 0=普通 1=核心 |
|attr_value |string |是 |I5 I7 |属性值 |
|sort |integer |是 |50 |排序值 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "goods_attribute_id": 2,
      "parent_id": 0,
      "is_important": 1,
      "attr_value": "8G 16G",
      "sort": 40
    },
    {
      "goods_attribute_id": 1,
      "parent_id": 0,
      "is_important": 1,
      "attr_value": "I5 I7",
      "sort": 50
    }
  ]
}
```

#### 备注:
无