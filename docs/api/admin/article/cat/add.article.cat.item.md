# 添加一个文章分类

#### 接口描述：
- 添加一个文章分类。

#### 请求 URL：
- `http|https://host/api/v1/article_cat/method/add.article.cat.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|parent_id |integer |否 |egt:0 |0 |0 |文章分类上级编号 |
|cat_name |string |是 |max:100 | |商城公告 |文章分类名称 |
|cat_type |integer |否 |between:-128,127 |0 |0 |文章分类类型(自定义) |
|keywords |string |否 |max:255 | |关键词 |文章分类关键词 |
|description |string |否 |max:255 | |描述 |文章分类描述 |
|sort |integer |否 |between:0,255 |50 |50 |文章分类排序值 |
|is_navi |integer |否 |in:0,1 |0 |0 |是否显示到导航 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|parent_id |integer |否 |0 |文章分类上级编号 |
|cat_name |string |是 |商城公告 |文章分类名称 |
|cat_type |integer |否 |0 |文章分类类型(自定义) |
|keywords |string |否 |关键词 |文章分类关键词 |
|description |string |否 |描述 |文章分类描述 |
|sort |integer |否 |50 |文章分类排序值 |
|is_navi |integer |否 |0 |是否显示到导航 0=否 1=是 |
|article_cat_id |integer |是 |1 |文章分类编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "parent_id": 0,
    "cat_name": "商城公告",
    "cat_type": 0,
    "keywords": "关键词",
    "description": "描述",
    "sort": 50,
    "is_navi": 0,
    "article_cat_id": 1
  }
}
```

#### 备注:
1. 接口 [获取分类导航数据](https://doc.careyshop.cn/docs/admin_api/a-21523289121 "获取分类导航数据") 不受参数`is_navi`的影响，这里说的`是否显示到导航`一般指的是前端中面包屑数据的获取。
![](https://doc.careyshop.cn/uploads/201805/admin_api/attach_152ed9f769abb8a5.png)