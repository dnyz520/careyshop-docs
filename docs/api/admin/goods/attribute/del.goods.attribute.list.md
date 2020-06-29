# 批量删除商品主体或属性

#### 接口描述：
- 批量删除商品主体或属性。

#### 请求 URL：
- `http|https://host/api/v1/goods_attribute/method/del.goods.attribute.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_attribute_id |integer |是 |gt[]:0 | |[7,8,9] |商品属性编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示执行成功 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
1. 当删除的是`商品属性主体`时，如果其下含有`商品属性`那么也将被删除。