# 获取管理后台商品列表

#### 接口描述：
- 获取管理后台商品列表。

#### 请求 URL：
- `http|https://host/api/v1/goods/method/get.goods.admin.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |array |否 |egt[]:0 | |[1,2,3] |商品编号 |
|exclude_id |array |否 |gt[]:0 | |[4,5,6] |商品排除Id |
|goods_category_id |integer |否 |gt:0 | |1 |商品分类编号 |
|keywords |string |否 |max:200 | |笔记本 |商品关键词搜索 |
|goods_code |string |否 |max:60 | |CS&#42;&#42;&#42; |商品code、spu、sku、bar编码 |
|brand_id |integer |否 |egt:0 | |1 |商品品牌编号 |
|store_qty |array |否 |length:2 | |[0,10] |商品库存 |
|is_postage |integer |否 |in:0,1 | |1 |是否包邮 0=收费 1=包邮 |
|is_integral |integer |否 |in:0,1 | |1 |是否可积分抵扣 0=否 1=是 |
|is_recommend |integer |否 |in:0,1 | |1 |是否推荐 0=不推 1=推荐 |
|is_new |integer |否 |in:0,1 | |1 |是否新品 0=不新 1=新品 |
|is_hot |integer |否 |in:0,1 | |1 |是否热卖 0=普通 1=热卖 |
|status |integer |否 |in:0,1 | |1 |上下架状态 0=下架 1=上架 |
|is_delete |integer |否 |in:0,1 |0 |1 |回收站商品 0=否 1=是 |
|is_goods_spec |integer |否 |in:0,1 |0 |1 |是否返回规格 0=否 1=是 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |goods_id |store_qty |排序字段 |

> 附属 A:
in:goods_id,goods_code,name,shop_price,store_qty,is_integral,is_recommend,is_new,is_hot

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |4 |合计计数 |

|items|类型|是否返回|示例值|描述|
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

|goods_spec_item |类型|是否返回|示例值|描述|
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
  "data": {
    "items": [
      {
        "goods_id": 13,
        "goods_category_id": 1,
        "name": "MateBook",
        "short_name": "MateBook",
        "product_name": "XXX促销",
        "goods_code": "CS38491916",
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
        "create_time": "2018-05-23 14:35:41",
        "update_time": "2018-05-23 14:35:41",
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
        ]
      },
      {
        "goods_id": 4,
        "goods_category_id": 1,
        "name": "不带规格的商品",
        "short_name": "",
        "product_name": "",
        "goods_code": "CS99427315",
        "goods_spu": "",
        "goods_sku": "",
        "bar_code": "",
        "brand_id": 0,
        "store_qty": 0,
        "comment_sum": 0,
        "sales_sum": 0,
        "measure": 0,
        "measure_type": 0,
        "is_postage": 1,
        "market_price": 500,
        "shop_price": 300,
        "integral_type": 0,
        "give_integral": 0,
        "is_integral": 0,
        "least_sum": 0,
        "purchase_sum": 0,
        "keywords": "",
        "description": "",
        "content": "商品详情页",
        "attachment": [
          "//image.jpg"
        ],
        "video": "",
        "unit": "",
        "is_recommend": 0,
        "is_new": 0,
        "is_hot": 0,
        "goods_type_id": 1,
        "sort": 50,
        "status": 1,
        "is_delete": 0,
        "create_time": "2018-05-22 00:48:30",
        "update_time": "2018-05-22 00:48:30",
        "goods_spec_item": []
      }
    ],
    "total_result": 4
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。

2. 参数`keywords`支持多个关键词，但只支持`空格`间隔。如需更高级搜索支持，请自行部署`全文索引`。

3. 参数`store_qty`采用区间查询，使用数组第一位表示起始库存，第二位表示结束库存。

4. 参数`is_delete`值为`1`时，参数`status`将无效。