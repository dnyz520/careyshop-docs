# 批量添加商品到购物车

#### 接口描述：
- 批量添加商品到购物车。

#### 请求 URL：
- `http|https://host/api/v1/cart/method/add.cart.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|cart_goods |array |是 |min[]:0 | |[] |购物车商品列表 |
|`cart_goods.`goods_id |integer |是 |gt:0 | |13 |商品编号 |
|`cart_goods.`goods_num |integer |是 |gt:0 | |1 |购买数量 |
|`cart_goods.`key_name |string |否 |max:50 | |1_3 |商品规格键名 |
|`cart_goods.`key_value |string |否 |max:50 | |颜色:黑色 CPU:I5 |商品规格值 |

#### 请求示例：
```json
{
    "cart_goods": [
        {
            "goods_id": 13,
            "goods_num": 1,
            "key_name": "1_3",
            "key_value": "颜色:黑色 CPU:I5"
        },
        {
            "goods_id": 14,
            "goods_num": 2,
            "key_name": "2_4",
            "key_value": "颜色:白色 CPU:I7"
        }
    ]
}
```

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
1. 当买家以`游客`的身份游览商品时进行了`加入购物车`操作，前端客户端首先验证数据是否符合规范，之后将返回的数据缓存在本地。当买家正式登录之后通过该接口进行数据的实际操作。

2. 买家已登录，并且使用此接口，如果已存在相同规格的商品，那么将被当前数据所代替。

**小提示：**当买家以`游客`的身份登录时，需要获取购物车数据，首先判断是否已登录，如果未登录则获取本地缓存的数据，至于数据结构可以完全模拟该模块下的各个接口返回数据。