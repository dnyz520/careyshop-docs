# 编辑一个商品分类

#### 接口描述：
- 编辑一个商品分类。

#### 请求 URL：
- `http|https://host/api/v1/goods_category/method/set.goods.category.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_category_id |integer |是 |gt:0 | |1 |商品分类编号 |
|parent_id |integer |否 |egt:0 | |0 |商品分类上级编号 |
|name |string |否 |max:100 | |男装、女装 |商品分类名称 |
|name_phonetic |string |否 |max:10 | |n |商品分类名称首拼 |
|alias |string |否 |max:50 | |服装 |商品分类别名 |
|alias_phonetic |string |否 |max:10 | |f |商品分类别名首拼 |
|category_pic |string |否 |max:255 | |//image.jpg |商品分类图片 |
|category_ioc |string |否 |max:50 | |&amp;#xe61d; |商品分类图标 |
|keywords |string |否 |max:255 | |关键词 |商品分类关键词 |
|description |string |否 |max:255 | |描述 |商品分类描述 |
|category_type |integer |否 |between:-128,127 | |0 |商品分类类型(自定义) |
|sort |integer |否 |between:0,255 | |50 |商品分类排序值 |
|is_navi |integer |否 |in:0,1 | |0 |是否显示到导航 0=否 1=是|
|status |integer |否 |in:0,1 | |1 |是否显示 0=否 1=是|

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_category_id |integer |是 |1 |商品分类编号 |
|parent_id |integer |否 |0 |商品分类上级编号 |
|name |string |否 |男装、女装 |商品分类名称 |
|name_phonetic |string |否 |n |商品分类名称首拼 |
|alias |string |否 |服装 |商品分类别名 |
|alias_phonetic |string |否 |f |商品分类别名首拼 |
|category_pic |string |否 |//image.jpg |商品分类图片 |
|category_ioc |string |否 |&amp;amp;#xe61d; |商品分类图标 |
|keywords |string |否 |关键词 |商品分类关键词 |
|description |string |否 |描述 |商品分类描述 |
|category_type |integer |否 |0 |商品分类类型(自定义) |
|sort |integer |否 |50 |商品分类排序值 |
|is_navi |integer |否 |0 |是否显示到导航 0=否 1=是|
|status |integer |否 |1 |是否显示 0=否 1=是|

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
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
    "status": 1
  }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。

2. 如果传入`name`参数值而不传入`name_phonetic`参数，则默认取`name`首位字符自动解析成首拼。

3. 如果传入`alias`参数值而不传入`alias_phonetic`参数，则默认取`alias`首位字符自动解析成首拼。