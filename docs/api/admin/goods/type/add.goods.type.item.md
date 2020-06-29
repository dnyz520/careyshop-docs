# 添加一个商品模型

#### 接口描述：
- 添加一个商品模型。

#### 请求 URL：
- `http|https://host/api/v1/goods_type/method/add.goods.type.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|type_name |string |是 |max:60 | |笔记本 |商品模型名称 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|type_name |string |是 |笔记本 |商品模型名称 |
|goods_type_id |integer |是 |2 |商品模型编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "type_name": "笔记本",
    "goods_type_id": 2
  }
}
```

#### 备注:
无