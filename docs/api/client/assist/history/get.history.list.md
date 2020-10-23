# 获取我的足迹列表

#### 接口描述：
- 获取我的足迹列表。

#### 请求 URL：
- `http|https://host/api/v1/history/method/get.history.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |update_time |history_id |排序字段 |

> 附属 A：
in:history_id,goods_id,update_time

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
|history_id |integer |是 |7 |收藏夹编号 |
|goods_id |integer |是 |4 |商品编号 |
|update_time |datetime |是 |2017-07-15 13:47:28 |更新时间 |
|get_goods |object |否 |[] |商品对象 |

|get_goods|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_category_id|integer |是 |1 |商品分类编号 |
|name|string |是 |MateBook|商品名称 |
|short_name|string |是 |MateBook|商品短名称 |
|brand_id|integer |是 |1 |商品品牌编号 |
|store_qty |integer |是 |100 |商品库存 |
|comment_sum|integer |是 |0 |评价数量 |
|sales_sum|integer |是 |0 |销售数量 |
|attachment|array |是 |[&#34;//image_1.jpg&#34;] |商品相册 |
|status|integer |是 |1 |上下架状态 0=下架 1=上架 |
|is_delete|integer |是 |0 |商品状态 0=正常 1=回收 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "history_id": 1,
        "goods_id": 1,
        "update_time": "2018-06-20 23:18:33",
        "get_goods": {
          "goods_category_id": 1,
          "name": "不带规格的商品",
          "short_name": "",
          "brand_id": 0,
          "store_qty": 100,
          "comment_sum": 0,
          "sales_sum": 0,
          "attachment": [
            "//image.jpg"
          ],
          "status": 1,
          "is_delete": 1
        }
      },
      {
        "history_id": 2,
        "goods_id": 3,
        "update_time": "2017-07-15 16:25:52",
        "get_goods": {
          "goods_category_id": 1,
          "name": "不带规格的商品",
          "short_name": "",
          "brand_id": 0,
          "store_qty": 0,
          "comment_sum": 0,
          "sales_sum": 0,
          "attachment": [
            "//image.jpg"
          ],
          "status": 1,
          "is_delete": 0
        }
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。