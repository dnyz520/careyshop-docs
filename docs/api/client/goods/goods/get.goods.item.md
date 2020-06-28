# 获取一个商品

#### 接口描述：
- 获取一个商品。

#### 请求 URL：
- `http|https://host/api/v1/goods/method/get.goods.item/`

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
|goods_id|integer |是 |5 |商品编号 |
|goods_category_id|integer |是 |1 |商品分类编号 |
|name|string |是 |MateBook|商品名称 |
|short_name|string |是 |MateBook|商品短名称 |
|product_name|string |是 |XXX促销|商品促销名 |
|goods_code|string |是 |CS91785250|商品货号 |
|goods_spu|string |是 |123456|商品SPU |
|goods_sku|string |是 |654321|商品SKU |
|bar_code|string |是 |123456|商品条码 |
|brand_id|integer |是 |1 |商品品牌编号 |
|store_qty|integer |是 |200 |商品库存 |
|comment_sum|integer |是 |0 |评价数量 |
|sales_sum|integer |是 |0 |销售数量 |
|measure|number |是 |3 |商品计量(重量、体积) |
|measure_type|integer |是 |0 |计量方式 0=重量 1=计件 2=体积 |
|is_postage|integer |是 |1 |是否包邮 0=收费 1=包邮 |
|market_price|number |是 |7000 |商品市场价 |
|shop_price|number |是 |5400 |商品本店价 |
|integral_type|integer |否 |0 |赠送积分结算方式 |
|give_integral|number |否 |540 |商品赠送积分 |
|is_integral|integer |是 |1000 |积分可抵扣额 |
|least_sum|integer |是 |1 |最少起订量 |
|purchase_sum|integer |是 |2 |限购数量 |
|keywords|string |是 |华为|商品关键词 |
|description|string |是 |笔记本|商品描述 |
|content|string |是 |详情页|商品详情描述 |
|attachment|array |是 |[&#34;//image_1.jpg&#34;] |商品相册 |
|video|string |是 |//video.mp4|商品短视频 |
|unit|string |是 |件|商品计量单位 |
|is_recommend|integer |是 |1 |是否推荐 0=不推 1=推荐 |
|is_new|integer |是 |1 |是否新品 0=不新 1=新品 |
|is_hot|integer |是 |1 |是否热卖 0=普通 1=热卖 |
|goods_type_id|integer |是 |1 |商品模型编号 |
|sort|integer |是 |50 |排序值 |
|status|integer |是 |1 |上下架状态 0=下架 1=上架 |
|is_delete|integer |是 |0 |商品状态 0=正常 1=回收 |
|create_time|datetime |是 |2018-05-23 00:25:09|创建时间 |
|update_time|datetime |是 |2018-05-23 00:25:09|更新时间 |
|goods_spec_item |array |否 |[] |商品规格列表数组 |
|spec_image |array |否 |[] |商品规格图数组 |
|goods_attr_item |array |否 |[] |商品属性列表数组 |

|goods_spec_item |类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|key_name |string |是 |1_3 |商品规格键名 |
|key_value |string |是 |颜色:黑色 CPU:I5 |商品规格值 |
|price |number |是 |5400 |商品价格 |
|store_qty |integer |是 |100 |商品库存 |
|bar_code |string |是 |123456 |商品条码 |
|goods_sku |string |是 |654321 |商品SKU |

|spec_image |类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|spec_item_id |integer |是 |1 |商品规格项编号 |
|image |string |是 |//image_1.jpg |商品规格图片 |

|goods_attr_item |类型|是否返回|示例值|描述|
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
  "data": {
    "goods_id": 5,
    "goods_category_id": 1,
    "name": "MateBook",
    "short_name": "MateBook",
    "product_name": "XXX促销",
    "goods_code": "CS91785250",
    "goods_spu": "123456",
    "goods_sku": "654321",
    "bar_code": "123456",
    "brand_id": 1,
    "store_qty": 200,
    "comment_sum": 0,
    "sales_sum": 0,
    "measure": 3,
    "measure_type": 0,
    "is_postage": 1,
    "market_price": 7000,
    "shop_price": 5400,
    "integral_type": 0,
    "give_integral": 540,
    "is_integral": 1000,
    "least_sum": 1,
    "purchase_sum": 2,
    "keywords": "华为",
    "description": "笔记本",
    "content": "详情页",
    "attachment": [
      "//image_1.jpg"
    ],
    "video": "//video.mp4",
    "unit": "件",
    "is_recommend": 1,
    "is_new": 1,
    "is_hot": 1,
    "goods_type_id": 1,
    "sort": 50,
    "status": 1,
    "is_delete": 0,
    "create_time": "2018-05-23 00:25:09",
    "update_time": "2018-05-23 00:25:09",
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
    "spec_image": [
      {
        "spec_item_id": 1,
        "image": "//image_1.jpg"
      },
      {
        "spec_item_id": 2,
        "image": "//image_2.jpg"
      }
    ],
    "goods_attr_item": [
      {
        "goods_attribute_id": 1,
        "parent_id": 0,
        "is_important": 1,
        "attr_value": "I5 I7",
        "sort": 50
      },
      {
        "goods_attribute_id": 2,
        "parent_id": 0,
        "is_important": 1,
        "attr_value": "8G 16G",
        "sort": 50
      }
    ]
  }
}
```

#### 备注:
无