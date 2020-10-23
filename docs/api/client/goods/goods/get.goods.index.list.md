# 根据商品分类获取前台商品列表页

#### 接口描述：
- 根据商品分类获取前台商品列表页。

#### 请求 URL：
- `http|https://host/api/v1/goods/method/get.goods.index.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_category_id |integer |否 |egt:0 |0 |1 |商品分类编号 |
|keywords |string |否 |max:255 | |华为 |商品关键词搜索 |
|is_postage |integer |否 |in:0,1 | |1 |是否包邮 0=否 1=是 |
|is_integral |integer |否 |in:0,1 | |1 |是否可积分抵扣 0=否 1=是 |
|shop_price |array |否 |length:2 | |[50,100] |商品价格区间 |
|bar_code |string |否 |max:60 | |123456 |商品条码 |
|brand_id |integer |否 |gt[]:0 | |[1,2,3] |商品品牌编号 |
|spec_list |array |否 |min[]:0 | |详见备注 |商品规格列表 |
|attr_list |array |否 |min[]:0 | |详见备注 |商品属性列表 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |goods_id |sales_sum |排序字段 |

> 附属 A：
in:goods_id,sales_sum,comment_sum,shop_price,create_time

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|filter_menu |array |否 |[] |筛选后返回的菜单数据 |
|filter_price |array |否 |[] |当前商品下产生的价格筛选区间 |
|filter_brand |array |否 |[] |当前商品下的所有品牌 |
|filter_spec |array |否 |[] |当前商品下可供筛选的规格数据 |
|filter_attr |array |否 |[] |当前商品下可供筛选的属性数据 |
|filter_cate |array |否 |[] |`关键词`搜索后返回有关联的分类数据 |
|items |array |否 |[] |商品列表项 |
|total_result |integer |是 |2 |合计计数 |

|filter_menu|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|text |string |是 |颜色：黑色、白色 |菜单文本 |
|value |array |是 |[1,&#34;1&#34;,&#34;2&#34;] |已筛选的值 |
|param |string |是 |spec_list |已筛选的参数名 |

|filter_price|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|text |string |是 |5400以内 |筛选价格文本 |
|value |array |是 |[4320,5400] |可筛选的值 |

|filter_brand|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|text |string |是 |小米 |筛选品牌文本 |
|value |object |是 |[] |筛选的品牌对象 |
|`value.`brand_id |integer |是 |24 |品牌编号 |
|`value.`name |string |是 |小米 |品牌名称 |
|`value.`phonetic |string |是 |x |品牌首拼 |
|`value.`logo |string |是 |//logo.jpg |品牌LOGO |

|filter_spec|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|text |string |是 |CPU |筛选规格文本 |
|value |array |是 |[] |可筛选的规格项 |
|`value.`spec_item_id |integer |是 |3 |商品规格项编号 |
|`value.`spec_id |integer |是 |2 |商品规格编号 |
|`value.`item_name |string |是 |I5 |商品规格项名 |

|filter_attr|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|text |string |是 |屏幕尺寸 |筛选属性文本 |
|value |array |是 |[] |可筛选的属性项 |
|`value.`goods_attribute_id |integer |是 |3 |商品属性编号 |
|`value.`attr_value |string |是 |13.3英寸 |属性值 |
|`value.`sort |integer |是 |50 |排序值 |

|filter_cate|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_category_id |integer |是 |1 |商品分类编号 |
|parent_id |integer |是 |0 |商品分类上级编号 |
|name |string |是 |手机 、 数码 、 通信 |商品分类名称 |
|name_phonetic |string |是 |s |商品分类名称首拼 |
|alias |string |是 |数码产品 |商品分类别名 |
|alias_phonetic |string |是 |s |商品分类别名首拼 |
|category_pic |string |是 |//image.jpg |商品分类图片 |
|category_ioc |string |是 |&amp;amp;#xe61d; |商品分类图标 |
|keywords |string |是 |关键词 |商品分类关键词 |
|description |string |是 |描述 |商品分类描述 |
|category_type |integer |是 |0 |商品分类类型(自定义) |
|sort |integer |是 |50 |商品分类排序值 |
|is_navi |integer |是 |0 |是否显示到导航 0=否 1=是|
|status |integer |是 |1 |是否显示 0=否 1=是|
|children_total |integer |是 |8 |该分类下关联商品的合计 |
|level |integer |是 |0 |该分类的层级深度 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_id|integer |是 |5 |商品编号 |
|name|string |是 |MateBook 华为 笔记本|商品名称 |
|short_name|string |是 |MateBook|商品短名称 |
|product_name|string |是 |XXX促销|商品促销名 |
|brand_id|integer |是 |1 |商品品牌编号 |
|store_qty|integer |是 |200 |商品库存 |
|comment_sum|integer |是 |0 |评价数量 |
|sales_sum|integer |是 |0 |销售数量 |
|is_postage|integer |是 |1 |是否包邮 0=收费 1=包邮 |
|market_price|number |是 |7000 |商品市场价 |
|shop_price|number |是 |5400 |商品本店价 |
|least_sum|integer |是 |1 |最少起订量 |
|purchase_sum|integer |是 |2 |限购数量 |
|attachment|array |是 |[&#34;//image_1.jpg&#34;] |商品相册 |
|video|string |是 |//video.mp4|商品短视频 |
|is_recommend|integer |是 |1 |是否推荐 0=不推 1=推荐 |
|is_new|integer |是 |1 |是否新品 0=不新 1=新品 |
|is_hot|integer |是 |1 |是否热卖 0=普通 1=热卖 |
|sort|integer |是 |50 |排序值 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "filter_menu": [
      {
        "text": "颜色：黑色、白色",
        "value": [
          1,
          "1",
          "2"
        ],
        "param": "spec_list"
      },
      {
        "text": "屏幕尺寸：13.3英寸",
        "value": [
          3,
          "13.3英寸"
        ],
        "param": "attr_list"
      }
    ],
    "filter_price": [
      {
        "text": "1080以下",
        "value": [
          0,
          1080
        ]
      },
      {
        "text": "5400以内",
        "value": [
          4320,
          5400
        ]
      }
    ],
    "filter_brand": [
      {
        "text": "小米",
        "value": {
          "brand_id": 24,
          "name": "小米",
          "phonetic": "x",
          "logo": ""
        }
      },
      {
        "text": "华为",
        "value": {
          "brand_id": 23,
          "name": "华为",
          "phonetic": "h",
          "logo": ""
        }
      }
    ],
    "filter_spec": [
      {
        "text": "颜色",
        "value": [
          {
            "spec_item_id": 1,
            "spec_id": 1,
            "item_name": "黑色"
          },
          {
            "spec_item_id": 2,
            "spec_id": 1,
            "item_name": "白色"
          }
        ]
      },
      {
        "text": "CPU",
        "value": [
          {
            "spec_item_id": 3,
            "spec_id": 2,
            "item_name": "I5"
          },
          {
            "spec_item_id": 4,
            "spec_id": 2,
            "item_name": "I7"
          }
        ]
      }
    ],
    "filter_attr": [
      {
        "text": "屏幕尺寸",
        "value": [
          {
            "goods_attribute_id": 3,
            "attr_value": "13.3英寸",
            "sort": 50
          },
          {
            "goods_attribute_id": 3,
            "attr_value": "15.6英寸",
            "sort": 50
          }
        ]
      },
      {
        "text": "显卡类别",
        "value": [
          {
            "goods_attribute_id": 4,
            "attr_value": "独立显卡",
            "sort": 40
          }
        ]
      }
    ],
    "filter_cate": [
      {
        "goods_category_id": 1,
        "parent_id": 0,
        "name": "手机 、 数码 、 通信",
        "name_phonetic": "s",
        "alias": "数码产品",
        "alias_phonetic": "s",
        "category_pic": "",
        "category_ioc": "",
        "keywords": "",
        "description": "",
        "category_type": 0,
        "sort": 50,
        "is_navi": 0,
        "status": 1,
        "children_total": 8,
        "level": 0
      },
      {
        "goods_category_id": 3,
        "parent_id": 0,
        "name": "电脑、办公",
        "name_phonetic": "d",
        "alias": "电脑",
        "alias_phonetic": "d",
        "category_pic": "",
        "category_ioc": "",
        "keywords": "",
        "description": "",
        "category_type": 0,
        "sort": 50,
        "is_navi": 0,
        "status": 1,
        "children_total": 7,
        "level": 0
      }
    ],
    "items": [
      {
        "goods_id": 14,
        "name": "小米笔记本 白色",
        "short_name": "mi",
        "product_name": "",
        "brand_id": 24,
        "store_qty": 200,
        "comment_sum": 0,
        "sales_sum": 0,
        "is_postage": 1,
        "market_price": 7000,
        "shop_price": 5400,
        "least_sum": 1,
        "purchase_sum": 2,
        "attachment": [
          "//image_1.jpg"
        ],
        "video": "//video.mp4",
        "is_recommend": 1,
        "is_new": 1,
        "is_hot": 1,
        "sort": 50
      },
      {
        "goods_id": 13,
        "name": "MateBook 华为 笔记本",
        "short_name": "MateBook",
        "product_name": "XXX促销",
        "brand_id": 23,
        "store_qty": 200,
        "comment_sum": 0,
        "sales_sum": 0,
        "is_postage": 1,
        "market_price": 7000,
        "shop_price": 5400,
        "least_sum": 1,
        "purchase_sum": 2,
        "attachment": [
          "//image_1.jpg"
        ],
        "video": "//video.mp4",
        "is_recommend": 1,
        "is_new": 1,
        "is_hot": 1,
        "sort": 50
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。

2. 参数`keywords`支持多个关键词，但只支持`空格`间隔。如需更高级搜索支持，请自行部署`全文索引`。

3. 参数`filter_brand、filter_spec、filter_attr`允许多选筛选。

4. 参数`filter_brand`进行筛选比较简单，只需要一个数组即可，而`filter_spec、filter_attr`筛选前先了解下概念。
	1. 以`规格`举例，`规格`是一个大的总体，比如『颜色』、『尺寸』、『CPU』，在一个『CPU』下可以有『I5』『I7』等`规格项`，`属性`也是同等道理。
	
	2. 根据`响应示例`返回的值，我们现在进行字段代入。
		1. 以`规格`举例。`规格`等同于字段`spec_id`，`规格项`等同于字段`spec_item_id`。
		2. 以`属性`举例。`属性`等同于字段`goods_attribute_id`，`属性项`等同于字段`attr_value`。
		
	3. 筛选参数`spec_list`：
		* A：假设筛选的内容是『CPU』，型号只要『I5』的商品。
			* 字段代入：[$spec_id, $spec_item_id]
			* 实际参数：[2, 3]
		* B：假设筛选的内容是『CPU』，型号只要『I5』或『I7』的商品。
			* 字段代入：[$spec_id, $spec_item_id, $spec_item_id]
			* 实际参数：[2, 3, 4]
		* C：假设现在需要在之前的基础上再进行筛选『颜色』,并且需要『黑色』和『白色』的商品。
			* 字段代入：[[$spec_id, $spec_item_id, $spec_item_id], [$spec_id, $spec_item_id, $spec_item_id]]
			* 实际参数：[[2, 3, 4], [1, 1, 2]]
		* **参数`$spec_id`的值必须在数组的首位。**
			
		小提示：其实对于举例中的 A 和 B 来说，将实际参数直接组合成多维数组在实际操作中会更加方便，比如实际参数：`[2, 3]`可以改为`[[2, 3]]`。
		
	4. 筛选参数`attr_list`：
		* 假设筛选的内容是『屏幕尺寸』，型号只要『15.6英寸』的商品。
			* 字段代入：[$goods_attribute_id, $attr_value]
			* 实际参数：[3, &#34;15.6英寸&#34;]
			
		* **参数`$goods_attribute_id`的值必须在数组的首位，其他的方法和`spec_list`是一样的。**