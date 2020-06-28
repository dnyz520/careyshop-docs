# 获取品牌选择列表

#### 接口描述：
- 获取品牌选择列表。

#### 请求 URL：
- `http|https://host/api/v1/brand/method/get.brand.select/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_category_id |integer |否 |egt[]:0 | |[1,2] |商品分类编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_category_id |integer |是 |0 |商品分类编号 |
|brand_id |integer |是 |1 |品牌编号 |
|name |string |是 |AOC |品牌名称 |
|phonetic |string |是 |a |品牌首拼 |
|logo |string |是 |//logo.jpg |品牌LOGO |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "goods_category_id": 0,
      "brand_id": 1,
      "name": "AOC",
      "phonetic": "a",
      "logo": "//logo.jpg"
    },
    {
      "goods_category_id": 1,
      "brand_id": 2,
      "name": "Apple",
      "phonetic": "a",
      "logo": ""
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。