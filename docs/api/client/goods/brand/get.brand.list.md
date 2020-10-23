# 获取品牌列表

#### 接口描述：
- 获取品牌列表。

#### 请求 URL：
- `http|https://host/api/v1/brand/method/get.brand.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_category_id |integer |否 |egt:0 | |1 |商品分类编号 |
|name |string |否 |max:50 | |aoc |品牌名称 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size | integer|否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string | 否|见附属 A |brand_id |status |排序字段 |

> 附属 A：
in:brand_id,goods_category_id,name,phonetic,logo,description,sort,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |2 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|brand_id |integer |是 |1 |品牌编号 |
|goods_category_id |integer |是 |0 |商品分类编号 |
|name |string |是 |AOC |品牌名称 |
|phonetic |string |是 |a |品牌首拼 |
|description |string |是 |描述 |品牌描述 |
|logo |string |是 |//logo.jpg |品牌LOGO |
|url |string |是 |//carey.cn |品牌链接地址 |
|target |string |是 |&#95;self |打开方式 |
|sort |integer |是 |50 |品牌排序值 |
|status |integer |是 |1 |品牌是否显示 0=否 1=是 |
|category_name |string |是 |数码产品 |商品分类名称 |
|category_alias |string |是 |3C |商品分类别名 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "brand_id": 3,
        "goods_category_id": 2,
        "name": "AOC",
        "phonetic": "a",
        "description": "描述",
        "logo": "//logo.jpg",
        "url": "//carey.cn",
        "target": "_self",
        "sort": 50,
        "status": 1,
        "category_name": "数码产品",
        "category_alias": "3C"
      },
      {
        "brand_id": 2,
        "goods_category_id": 0,
        "name": "Apple",
        "phonetic": "a",
        "description": "",
        "logo": "//logo.jpg",
        "url": "//carey.cn",
        "target": "_self",
        "sort": 50,
        "status": 1,
        "category_name": "",
        "category_alias": ""
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。