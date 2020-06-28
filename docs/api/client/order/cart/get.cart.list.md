# 获取购物车列表

#### 接口描述：
- 获取购物车列表。

#### 请求 URL：
- `http|https://host/api/v1/cart/method/get.cart.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|show_size |integer |否 |egt:0 |0 |6 |显示多少记录，`0`或`不填`表示获取全部 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|cart_id |integer |是 |43 |购物车编号 |
|goods_id |integer |是 |13 |商品编号 |
|goods_num |integer |是 |1 |购买数量 |
|key_name |string |是 |1_3 |商品规格键名 |
|key_value |string |是 |颜色:黑色 CPU:I5 |商品规格值 |
|is_selected |integer |是 |1 |是否选中 0=否 1=是 |
|update_time |datetime |是 |2018-06-23 20:38:12 |更新时间 |
|goods |object |是 |[] |商品对象 |
|goods_spec_item |array |否 |[] |商品可选择规格数组 |
|error |integer |是 |0 |商品是否规范 0=有效 1=无效 |
|error_msg |string |是 |商品已失效 |商品不规范的原因 |

|goods|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_id|integer |是 |5 |商品编号 |
|name|string |是 |MateBook|商品名称 |
|goods_code|string |是 |CS91785250|商品货号 |
|goods_sku|string |是 |654321|商品SKU |
|bar_code|string |是 |123456|商品条码 |
|store_qty|integer |是 |200 |商品库存 |
|measure|number |是 |3 |商品计量(重量、体积) |
|measure_type|integer |是 |0 |计量方式 0=重量 1=计件 2=体积 |
|is_postage|integer |是 |1 |是否包邮 0=收费 1=包邮 |
|market_price|number |是 |7000 |商品市场价 |
|shop_price|number |是 |5400 |商品本店价 |
|purchase_sum|integer |是 |2 |限购数量 |
|status|integer |是 |1 |上下架状态 0=下架 1=上架 |
|is_delete|integer |是 |0 |商品状态 0=正常 1=回收 |
|integral_type|integer |是 |0 |赠送积分结算方式 |
|give_integral|number |是 |540 |商品赠送积分 |
|is_integral|integer |是 |1000 |积分可抵扣额 |
|goods_image |string |是 |//image.jpg |商品封面 |

|goods_spec_item|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|key_name |string |是 |1_3 |商品规格键名 |
|key_value |string |是 |颜色:黑色 CPU:I5 |商品规格值 |
|price |number |是 |5400 |商品价格 |
|store_qty |integer |是 |100 |商品库存 |
|bar_code |string |是 |123456 |商品条码 |
|goods_sku |string |是 |654321 |商品SKU |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "cart_id": 43,
      "goods_id": 13,
      "goods_num": 1,
      "key_name": "1_3",
      "key_value": "颜色:黑色 CPU:I5",
      "is_selected": 1,
      "update_time": "2018-06-23 20:38:12",
      "goods": {
        "goods_id": 13,
        "name": "MateBook 华为 笔记本",
        "goods_code": "CS38491916",
        "goods_sku": "",
        "bar_code": "",
        "store_qty": 100,
        "measure": 3,
        "measure_type": 0,
        "is_postage": 1,
        "market_price": 7000,
        "shop_price": 5400,
        "purchase_sum": 2,
        "status": 1,
        "is_delete": 0,
        "integral_type": 0,
        "give_integral": 100,
        "is_integral": 1000,
        "goods_image": "//image_1.jpg"
      },
      "goods_spec_item": [
        {
          "key_name": "1_3",
          "key_value": "颜色:黑色 CPU:I5",
          "price": 5400,
          "store_qty": 100,
          "bar_code": "",
          "goods_sku": ""
        },
        {
          "key_name": "1_4",
          "key_value": "颜色:黑色 CPU:I7",
          "price": 5900,
          "store_qty": 100,
          "bar_code": "",
          "goods_sku": ""
        }
      ],
      "error": 0,
      "error_msg": ""
    },
    {
      "cart_id": 44,
      "goods_id": 14,
      "goods_num": 2,
      "key_name": "2_4",
      "key_value": "颜色:白色 CPU:I7",
      "is_selected": 1,
      "update_time": "2018-06-23 20:38:12",
      "goods": {
        "goods_id": 14,
        "name": "小米笔记本 白色",
        "goods_code": "CS36157358",
        "goods_sku": "",
        "bar_code": "",
        "store_qty": 100,
        "measure": 3,
        "measure_type": 0,
        "is_postage": 1,
        "market_price": 7000,
        "shop_price": 5900,
        "purchase_sum": 2,
        "status": 1,
        "is_delete": 0,
        "integral_type": 0,
        "give_integral": 100,
        "is_integral": 1000,
        "goods_image": "//image_1.jpg"
      },
      "goods_spec_item": [
        {
          "key_name": "2_3",
          "key_value": "颜色:白色 CPU:I5",
          "price": 5400,
          "store_qty": 100,
          "bar_code": "",
          "goods_sku": ""
        },
        {
          "key_name": "2_4",
          "key_value": "颜色:白色 CPU:I7",
          "price": 5900,
          "store_qty": 100,
          "bar_code": "",
          "goods_sku": ""
        }
      ],
      "error": 0,
      "error_msg": ""
    },
    {
      "cart_id": 38,
      "goods_id": 1,
      "goods_num": 1,
      "key_name": "",
      "key_value": "",
      "is_selected": 1,
      "update_time": "2017-08-09 01:07:05",
      "goods": {
        "goods_id": 1,
        "name": "不带规格的商品",
        "goods_code": "CS91785258",
        "goods_sku": "",
        "bar_code": "",
        "store_qty": 100,
        "measure": 0,
        "measure_type": 0,
        "is_postage": 1,
        "market_price": 500,
        "shop_price": 300,
        "purchase_sum": 0,
        "status": 1,
        "is_delete": 1,
        "integral_type": 0,
        "give_integral": 0,
        "is_integral": 0,
        "goods_image": "//image.jpg"
      },
      "goods_spec_item": [],
      "error": 1,
      "error_msg": "商品已失效"
    }
  ]
}
```

#### 备注:
无