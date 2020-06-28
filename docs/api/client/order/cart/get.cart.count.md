# 获取购物车商品数量

#### 接口描述：
- 获取购物车商品数量。

#### 请求 URL：
- `http|https://host/api/v1/cart/method/get.cart.count/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|total_type |string |否 |in:goods,number |goods |number |合计类型，详见备注 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|total_result |integer |是 |9 |合计数量 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "total_result": 9
  }
}
```

#### 备注:
1. 当参数`total_type`值为`goods`时表示获取商品个数的合计，否则表示获取购买数量的合计。