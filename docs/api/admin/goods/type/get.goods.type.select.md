# 获取商品模型选择列表

#### 接口描述：
- 获取商品模型选择列表。

#### 请求 URL：
- `http|https://host/api/v1/goods_type/method/get.goods.type.select/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
| | | | | | | | |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_type_id |integer |是 |2 |商品模型编号 |
|type_name |string |是 |笔记本 |商品模型名称 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "goods_type_id": 1,
      "type_name": "手机"
    },
    {
      "goods_type_id": 2,
      "type_name": "笔记本"
    }
  ]
}
```

#### 备注:
无