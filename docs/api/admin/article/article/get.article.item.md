# 获取一篇文章

#### 接口描述：
- 获取一篇文章。

#### 请求 URL：
- `http|https://host/api/v1/article/method/get.article.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|article_id |integer |是 |gt:0 | |22 |文章编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|article_id |integer |是 |22 |文章编号 |
|article_cat_id |integer |是 |1 |文章分类编号 |
|title |string |是 |标题 |文章标题 |
|image |string |是 |//host/image.jpg |文章封面 |
|content |string |是 |正文 |文章内容 |
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

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "article_id": 22,
    "article_cat_id": 1,
    "title": "标题",
    "image": "//host/image.jpg",
    "content": "&amp;正文",
    "source": "网易",
    "source_url": "www.163.com",
    "keywords": "关键词",
    "description": "描述",
    "url": "http://163.com",
    "target": "_self",
    "page_views": 1,
    "is_top": 0,
    "status": 1,
    "create_time": "2018-05-03 23:37:06",
    "update_time": "2018-05-03 23:57:18"
  }
}
```

#### 备注:
1. 当`url`存在值表示跳转到某个地址，`target`表示目标打开方式。