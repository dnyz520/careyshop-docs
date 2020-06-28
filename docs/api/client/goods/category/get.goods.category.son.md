# 获取所有子级分类

#### 接口描述：
- 获取所有子级分类。

#### 请求 URL：
- `http|https://host/api/v1/goods_category/method/get.goods.category.son/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_category_id |integer |是 |gt[]:0 | |1 |商品分类编号 |
|level |integer |否 |egt:0 | |0 |商品分类深度 |
|goods_total |integer |否 |in:0,1 |0 |1 |是否获取关联商品数 0=否 1=是 |
|is_layer |integer |否 |in:0,1 |1 |1 |是否返回本级分类 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_category_id |integer |是 |1 |商品分类编号 |
|parent_id |integer |是 |0 |商品分类上级编号 |
|name |string |是 |男装、女装 |商品分类名称 |
|name_phonetic |string |是 |n |商品分类名称首拼 |
|alias |string |是 |服装 |商品分类别名 |
|alias_phonetic |string |是 |f |商品分类别名首拼 |
|category_pic |string |是 |//image.jpg |商品分类图片 |
|category_ioc |string |是 |&amp;amp;#xe61d; |商品分类图标 |
|keywords |string |是 |关键词 |商品分类关键词 |
|description |string |是 |描述 |商品分类描述 |
|category_type |integer |是 |0 |商品分类类型(自定义) |
|sort |integer |是 |50 |商品分类排序值 |
|is_navi |integer |是 |0 |是否显示到导航 0=否 1=是|
|status |integer |是 |1 |是否显示 0=否 1=是|
|children_total |integer |是 |0 |该分类下关联商品的合计 |
|level |integer |是 |0 |该分类的层级深度 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "goods_category_id": 1,
      "parent_id": 0,
      "name": "男装、女装",
      "name_phonetic": "n",
      "alias": "服装",
      "alias_phonetic": "f",
      "category_pic": "//image.jpg",
      "category_ioc": "&amp;#xe61d;",
      "keywords": "关键词",
      "description": "描述",
      "category_type": 0,
      "sort": 50,
      "is_navi": 0,
      "status": 1,
      "children_total": 2,
      "level": 0
    },
    {
      "goods_category_id": 5,
      "parent_id": 1,
      "name": "手机通讯",
      "name_phonetic": "s",
      "alias": "",
      "alias_phonetic": "",
      "category_pic": "",
      "category_ioc": "",
      "keywords": "",
      "description": "",
      "category_type": 0,
      "sort": 50,
      "is_navi": 0,
      "status": 1,
      "children_total": 0,
      "level": 1
    },
    {
      "goods_category_id": 6,
      "parent_id": 1,
      "name": "手机",
      "name_phonetic": "s",
      "alias": "",
      "alias_phonetic": "",
      "category_pic": "",
      "category_ioc": "",
      "keywords": "",
      "description": "",
      "category_type": 0,
      "sort": 50,
      "is_navi": 0,
      "status": 1,
      "children_total": 0,
      "level": 1
    },
    {
      "goods_category_id": 2,
      "parent_id": 0,
      "name": "数码产品",
      "name_phonetic": "s",
      "alias": "3C",
      "alias_phonetic": "3",
      "category_pic": "//image.jpg",
      "category_ioc": "&amp;#xe61d;",
      "keywords": "关键词",
      "description": "描述",
      "category_type": 0,
      "sort": 50,
      "is_navi": 0,
      "status": 1,
      "children_total": 2,
      "level": 0
    },
    {
      "goods_category_id": 7,
      "parent_id": 2,
      "name": "网络产品",
      "name_phonetic": "w",
      "alias": "",
      "alias_phonetic": "",
      "category_pic": "",
      "category_ioc": "",
      "keywords": "",
      "description": "",
      "category_type": 0,
      "sort": 50,
      "is_navi": 0,
      "status": 1,
      "children_total": 0,
      "level": 1
    },
    {
      "goods_category_id": 8,
      "parent_id": 2,
      "name": "办公设备",
      "name_phonetic": "b",
      "alias": "",
      "alias_phonetic": "",
      "category_pic": "",
      "category_ioc": "",
      "keywords": "",
      "description": "",
      "category_type": 0,
      "sort": 50,
      "is_navi": 0,
      "status": 1,
      "children_total": 0,
      "level": 1
    }
  ]
}
```

#### 备注:
1. 响应参数与 [获取商品分类列表](/api/client/goods/category/get.goods.category.list.md "获取商品分类列表") 相同，区别在于该接口是将`goods_category_id`中指定的编号的结果进行集合并按顺序返回。
