# 根据商品分类获取指定类型的商品

#### 接口描述：
- 根据商品分类获取指定类型的商品(推荐,热卖,新品,积分,同品牌,同价位)。

#### 请求 URL：
- `http|https://host/api/v1/goods/method/get.goods.index.type/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_category_id |integer |是 |gt:0 | |1 |商品分类编号 |
|goods_type |integer |否 |见附属 A | |hot |商品类型 |
|brand_id |integer |否 |egt:0 | |1 |商品品牌编号 |
|shop_price |array |否 |length:2 | |[50,100] |商品价格区间 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |

> 附属 A：
in:integral,recommend,new,hot
</p>
integral = 积分可抵扣商品
recommend = 推荐商品
new = 新品
hot = 热卖商品

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
|name|string |是 |MateBook|商品名称 |
|short_name|string |是 |MateBook|商品短名称 |
|sales_sum|integer |是 |0 |销售数量 |
|is_postage|integer |是 |1 |是否包邮 0=收费 1=包邮 |
|market_price|number |是 |7000 |商品市场价 |
|shop_price|number |是 |5400 |商品本店价 |
|attachment|array |是 |[&#34;//image_1.jpg&#34;] |商品相册 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "goods_id": 13,
        "name": "MateBook",
        "short_name": "MateBook",
        "sales_sum": 0,
        "is_postage": 1,
        "market_price": 7000,
        "shop_price": 5400,
        "attachment": [
          "//image_1.jpg"
        ]
      },
      {
        "goods_id": 4,
        "name": "不带规格的商品",
        "short_name": "",
        "sales_sum": 0,
        "is_postage": 1,
        "market_price": 500,
        "shop_price": 300,
        "attachment": [
          "//image.jpg"
        ]
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。