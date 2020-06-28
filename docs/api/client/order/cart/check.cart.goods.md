# 验证是否允许添加或编辑购物车

#### 接口描述：
- 验证是否允许添加或编辑购物车。

#### 请求 URL：
- `http|https://host/api/v1/cart/method/check.cart.goods/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt:0 | |13 |商品编号 |
|goods_num |integer |是 |gt:0 | |1 |购买数量 |
|goods_spec |array |否 |minx[]:0 | |[1,3] |商品规格，详见备注 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_id |integer |是 |13 |商品编号 |
|goods_num |integer |是 |1 |购买数量 |
|key_name |string |是 |1_3 |商品规格键名 |
|key_value |string |是 |颜色:黑色 CPU:I5 |商品规格值 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "goods_id": 13,
    "goods_num": 1,
    "key_name": "1_3",
    "key_value": "颜色:黑色 CPU:I5"
  }
}
```

#### 错误示例：
```json
{
  "status": 500,
  "message": "请选择商品规格"
}
```

#### 备注:
1. 该接口主要作用是当买家以`游客`身份游览商品时对商品进行`加入购物车`操作时需要将数据缓存在本地，在缓存之前进行验证操作。当买家正式`登录`之后可通过接口[「批量添加商品到购物车」](https://doc.careyshop.cn/docs/client_api/a-97383851114 "「批量添加商品到购物车」")来进行实际数据的更新。

2. 不存在规格的商品不需要填写`goods_spec`参数，但对于存在规格的商品来说是**必须**填写的。