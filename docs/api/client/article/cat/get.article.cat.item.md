# 获取一个文章分类

#### 接口描述：
- 获取一个文章分类。

#### 请求 URL：
- `http|https://host/api/v1/article_cat/method/get.article.cat.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|article_cat_id |integer |是 |gt:0 | |1 |文章分类编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|article_cat_id |integer |是 |1 |文章分类编号 |
|parent_id |integer |是 |0 |文章分类上级编号 |
|cat_name |string |是 |商城公告 |文章分类名称 |
|cat_type |integer |是 |0 |文章分类类型(自定义) |
|keywords |string |是 |关键词 |文章分类关键词 |
|description |string |是 |描述 |文章分类描述 |
|sort |integer |是 |50 |文章分类排序值 |
|is_navi |integer |是 |0 |是否显示到导航 0=否 1=是 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "article_cat_id": 1,
    "parent_id": 0,
    "cat_name": "商城公告",
    "cat_type": 0,
    "keywords": "关键词",
    "description": "描述",
    "sort": 50,
    "is_navi": 0
  }
}
```

#### 备注:
无