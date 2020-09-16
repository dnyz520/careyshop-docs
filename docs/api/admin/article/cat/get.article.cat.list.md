# 获取文章分类列表

#### 接口描述：
- 获取文章分类列表。

#### 请求 URL：
- `http|https://host/api/v1/article_cat/method/get.article.cat.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|article_cat_id |integer |否 |egt:0 |0 |1 |文章分类编号 |
|level |integer |否 |egt:0 | |0 |文章分类深度 |
|is_layer |integer |否 |in:0,1 |0 |1 |是否返回本级分类 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

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
|children_total |integer |是 |0 |该分类下子级分类数的合计 |
|article_total |integer |是 |12 |该分类下关联文章的合计 |
|level |integer |是 |0 |该分类的层级深度 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "article_cat_id": 1,
      "parent_id": 0,
      "cat_name": "商城公告",
      "cat_type": 0,
      "keywords": "关键词",
      "description": "描述",
      "sort": 50,
      "is_navi": 0,
      "children_total": 0,
      "article_total": 12,
      "level": 0
    },
    {
      "article_cat_id": 2,
      "parent_id": 0,
      "cat_name": "最新活动",
      "cat_type": 0,
      "keywords": "关键词",
      "description": "描述",
      "sort": 50,
      "is_navi": 0,
      "children_total": 0,
      "article_total": 0,
      "level": 0
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。

2. `article_cat_id`参数值为 0 表示获取所有分类，如果参数值非 0 表示从指定的编号开始获取。

**参数示例：**
假设某个分类列表：
```
最顶层分类(ID=0)
├─ A1 // (ID=1)
│  └─ A2
│     └─ A3
└─ B1
   └─ B2
      └─ B3
```
1. 不传入`level`参数时表示返回所有层级的分类列表。

2. 当`level`值为 0 时返回`A1 B1`，值为 1 时返回`A1 A2 B1 B2`，值为 2 时返回`A1 A2 A3 B1 B2 B3`；

3. 当`article_cat_id`值为`A1(ID=1)`，并且`level`值为 0 时返回`A1`，值为 1 时返回`A1 A2`，因为`is_layer`参数默认为 1，所以会返回本级。如果将`is_layer`参数值设为 0 并且`level`值为 0 时返回`A2`，值为 1 时返回`A2 A3`。