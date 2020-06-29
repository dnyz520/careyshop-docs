# 添加一个品牌

#### 接口描述：
- 添加一个品牌。

#### 请求 URL：
- `http|https://host/api/v1/brand/method/add.brand.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_category_id |integer |否 |egt:0 |0 |0 |商品分类编号 |
|name |string |是 |max:50 | |AOC |品牌名称 |
|phonetic |string |否 |max:10 | |a |品牌首拼 |
|description |string |否 |max:100 | |描述 |品牌描述 |
|logo |string |否 |max:255 | |//logo.jpg |品牌LOGO |
|url |string |否 |max:255 | |//carey.cn |品牌链接地址 |
|target |string |否 |in:&#95;self,&#95;blank |&#95;self |&#95;self |打开方式 |
|sort |integer |否 |between:0,255 |50 |50 |品牌排序值 |
|status |integer |否 |in:0,1 |1 |1 |品牌是否显示 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_category_id |integer |是 |0 |商品分类编号 |
|name |string |是 |AOC |品牌名称 |
|description |string |否 |描述 |品牌描述 |
|logo |string |否 |//logo.jpg |品牌LOGO |
|url |string |否 |//carey.cn |品牌链接地址 |
|target |string |否 |&#95;self |打开方式 |
|sort |integer |否 |50 |品牌排序值 |
|status |integer |否 |1 |品牌是否显示 0=否 1=是 |
|phonetic |string |是 |a |品牌首拼 |
|brand_id |integer |是 |1 |品牌编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "goods_category_id": 0,
    "name": "AOC",
    "description": "描述",
    "logo": "//logo.jpg",
    "url": "//carey.cn",
    "target": "_self",
    "sort": 50,
    "status": 1,
    "phonetic": "a",
    "brand_id": 1
  }
}
```

#### 备注:
1. 不传入`phonetic`参数，则默认取`name`首位字符自动解析成首拼。