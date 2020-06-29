# 获取分类导航数据

#### 接口描述：
- 获取分类导航数据。

#### 请求 URL：
- `http|https://host/api/v1/article_cat/method/get.article.cat.navi/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|article_cat_id |integer |否 |egt:0 | |1 |文章分类编号 |
|is_layer |integer |否 |in:0,1 |1 |1 |是否返回本级分类 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|article_cat_id |integer |是 |10 |文章分类编号 |
|parent_id |integer |是 |1 |文章分类上级编号 |
|cat_name |string |是 |最新活动 |文章分类名称 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "article_cat_id": 1,
      "parent_id": 0,
      "cat_name": "商城公告"
    },
    {
      "article_cat_id": 10,
      "parent_id": 1,
      "cat_name": "最新活动"
    }
  ]
}
```

#### 备注:
1. 该接口不关心`is_navi`字段的值，一般做为点击某个链接后需要的面包屑数据。