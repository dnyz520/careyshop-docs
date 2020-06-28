# 获取一个品牌

#### 接口描述：
- 获取一个品牌。

#### 请求 URL：
- `http|https://host/api/v1/brand/method/get.brand.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|brand_id |integer |是 |gt:0 | |1 |品牌编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
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

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "brand_id": 1,
    "goods_category_id": 0,
    "name": "AOC",
    "phonetic": "a",
    "description": "描述",
    "logo": "//logo.jpg",
    "url": "//carey.cn",
    "target": "_self",
    "sort": 50,
    "status": 1
  }
}
```

#### 备注:
无