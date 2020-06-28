# 获取分类导航数据

#### 接口描述：
- 获取分类导航数据。

#### 请求 URL：
- `http|https://host/api/v1/goods_category/method/get.goods.category.navi/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_category_id |integer |否 |egt:0 | |1 |商品分类编号 |
|is_same_level |integer |否 |in:0,1 |0 |0 |是否返回同级分类 |
|is_layer |integer |否 |in:0,1 |1 |1 |是否返回本级分类 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_category_id |integer |是 |2 |商品分类编号 |
|parent_id |integer |是 |0 |商品分类上级编号 |
|name |string |是 |数码产品 |商品分类名称 |
|alias |string |是 |数码产品 别名 |商品分类别名 |
|same_level |array |否 |[] |同级分类数组 |

|same_level|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|goods_category_id |integer |是 |9 |商品分类编号 |
|name |string |是 |家居家纺 |商品分类名称 |
|alias |string |是 |家居家纺 别名 |商品分类别名 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "goods_category_id": 2,
      "parent_id": 0,
      "name": "数码产品",
      "alias" "数码产品 别名",
      "same_level": [
        {
          "goods_category_id": 9,
          "name": "家居家纺",
          "alias" "家居家纺 别名"
        },
        {
          "goods_category_id": 1,
          "name": "男装、女装",
          "alias" "男装、女装 别名"
        }
      ]
    },
    {
      "goods_category_id": 7,
      "parent_id": 2,
      "name": "网络产品",
      "alias" "网络产品 别名",
      "same_level": [
        {
          "goods_category_id": 8,
          "name": "办公设备",
          "alias" "办公设备 别名"
        },
        {
          "goods_category_id": 10,
          "name": "打印设备",
          "alias" "打印设备 别名"
        }
      ]
    }
  ]
}
```

#### 备注:
1. 该接口不关心`is_navi`字段的值，一般做为点击某个链接后需要的面包屑数据。