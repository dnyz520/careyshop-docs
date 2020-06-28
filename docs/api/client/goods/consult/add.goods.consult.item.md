# 添加一个新的商品咨询

#### 接口描述：
- 添加一个新的商品咨询。

#### 请求 URL：
- `http|https://host/api/v1/goods_consult/method/add.goods.consult.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt:0 | |89 |商品编号 |
|is_anon |integer |否 |in:0,1 |0 |1 |是否匿名 0=否 1=是 |
|type |integer |是 |between:-128,127 | |0 |商品咨询类型(自定义) |
|content |string |是 |max:200 | |咨询内容 |商品咨询内容 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|type |integer |是 |0 |商品咨询类型(自定义) |
|content |string |是 |咨询内容 |商品咨询内容 |
|create_time |datetime |是 |2018-06-21 11:16:06 |创建时间 |
|goods_consult_id |integer |是 |16 |商品咨询编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "type": 0,
    "content": "咨询内容",
    "create_time": "2018-06-21 11:16:06",
    "goods_consult_id": 16
  }
}
```

#### 备注:
无