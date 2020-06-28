# 添加或编辑购物车商品

#### 接口描述：
- 添加或编辑购物车商品。

#### 请求 URL：
- `http|https://host/api/v1/cart/method/set.cart.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt:0 | |13 |商品编号 |
|goods_num |integer |是 |gt:0 | |2 |购买数量 |
|goods_spec |array |否 |minx[]:0 | |[1,3] |商品规格 |
|is_selected |integer |否 |in:0,1 | |1 |是否选中 0=否 1=是 |
|former_spec |string |否 |max:50 | |1_4 |原先的商品规格 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_id |integer |是 |13 |商品编号 |
|goods_num |integer |是 |2 |购买数量 |
|key_name |string |是 |1_3 |商品规格键名 |
|key_value |string |是 |颜色:黑色 CPU:I5 |商品规格值 |
|update_time |datetime |是 |2018-06-23 15:58:42 |更新时间 |
|is_selected |integer |否 |1 |是否选中 0=否 1=是 |
|cart_id |integer |是 |42 |购物车编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "goods_id": 13,
    "goods_num": 2,
    "key_name": "1_3",
    "key_value": "颜色:黑色 CPU:I5",
    "update_time": "2018-06-23 15:58:42",
    "is_selected": 1,
    "cart_id": 42
  }
}
```

#### 备注:
1. 如果存在相同规格的商品会进行覆盖，否则表示新增。

2. 填写参数`former_spec`时表示将已存在的购物车商品替换成当前`请求参数`数据，一般使用于更换商品规格时使用。