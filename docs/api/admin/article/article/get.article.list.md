# 获取文章列表

#### 接口描述：
- 获取文章列表。

#### 请求 URL：
- `http|https://host/api/v1/article/method/get.article.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|article_cat_id |integer |否 |gt:0 | |1 |文章分类编号 |
|title |string |否 |max:200 | |标题 |文章标题 |
|keywords |string |否 |max:255 | |关键词 |文章关键词 |
|is_top |integer |否 |in:0,1 | |1 |是否置顶 0=否 1=是 |
|status |integer |否 |in:0,1 | |1 |文章状态 0=禁用 1=启用 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |article_id |status |排序字段 |

> 附属 A：
in:article_id,article_cat_id,title,source,is_top,status,create_time,update_time

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |17 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|article_id |integer |是 |22 |文章编号 |
|article_cat_id |integer |是 |1 |文章分类编号 |
|title |string |是 |标题 |文章标题 |
|image |string |是 |//host/image.jpg |文章封面 |
|source |string |是 |网易 |文章来源 |
|source_url |string |是 |www.163.com |来源地址 |
|keywords |string |是 |关键词 |文章关键词 |
|description |string |是 |描述 |文章描述 |
|url |string |是 |http&#58;//163.com |外部连接 |
|target |string |是 |&#95;self |打开方式 |
|page_views |integer |是 |1 |游览量 |
|is_top |integer |是 |0 |是否置顶 0=否 1=是 |
|status |integer |是 |1 |文章状态 0=禁用 1=启用 |
|create_time |datetime |是 |2018-05-03 23:37:06 |创建时间 |
|update_time |datetime |是 |2018-05-03 23:37:06 |更新时间 |
|get_article_cat |object |是 |[] |文章分类对象 |

|get_article_cat|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|cat_name |string |是 |公告 |文章分类名称 |
|cat_type |integer |是 |0 |文章分类类型(自定义) |


#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "article_id": 23,
        "article_cat_id": 1,
        "title": "标题",
        "image": "//host/image.jpg",
        "source": "网易",
        "source_url": "www.163.com",
        "keywords": "关键词",
        "description": "描述",
        "url": "http://163.com",
        "target": "_self",
        "page_views": 0,
        "is_top": 0,
        "status": 1,
        "create_time": "2018-05-03 23:42:48",
        "update_time": "2018-05-03 23:42:48",
        "get_article_cat": {
          "cat_name": "A1",
          "cat_type": 0
        }
      },
      {
        "article_id": 22,
        "article_cat_id": 1,
        "title": "标题",
        "image": "//host/image.jpg",
        "source": "网易",
        "source_url": "www.163.com",
        "keywords": "关键词",
        "description": "描述",
        "url": "http://163.com",
        "target": "_self",
        "page_views": 3,
        "is_top": 0,
        "status": 1,
        "create_time": "2018-05-03 23:37:06",
        "update_time": "2018-05-03 23:57:18",
        "get_article_cat": {
          "cat_name": "A1",
          "cat_type": 0
        }
      }
    ],
    "total_result": 17
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。