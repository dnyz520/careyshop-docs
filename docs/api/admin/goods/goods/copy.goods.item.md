# 复制一个商品

#### 接口描述：
- 复制一个商品。

#### 请求 URL：
- `http|https://host/api/v1/goods/method/copy.goods.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt:0 | |5 |商品编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "goods_category_id": 1,
    "name": "MateBook",
    "short_name": "MateBook",
    "product_name": "XXX促销",
    "goods_spu": "123456",
    "goods_sku": "654321",
    "bar_code": "123456",
    "brand_id": 1,
    "store_qty": 200,
    "measure": 3,
    "measure_type": 0,
    "is_postage": 1,
    "market_price": 7000,
    "shop_price": 5400,
    "integral_type": 0,
    "give_integral": 540,
    "is_integral": 1000,
    "least_sum": 1,
    "purchase_sum": 2,
    "keywords": "华为",
    "description": "笔记本",
    "content": "详情页",
    "attachment": [
      "//image_1.jpg"
    ],
    "video": "//video.mp4",
    "unit": "件",
    "is_recommend": 1,
    "is_new": 1,
    "is_hot": 1,
    "goods_type_id": 1,
    "sort": 50,
    "status": 1,
    "goods_attr_item": [
      {
        "goods_attribute_id": 1,
        "parent_id": 0,
        "is_important": 1,
        "attr_value": "I5 I7",
        "sort": 50
      },
      {
        "goods_attribute_id": 2,
        "parent_id": 0,
        "is_important": 1,
        "attr_value": "8G 16G",
        "sort": 40
      }
    ],
    "goods_spec_item": [
      {
        "key_name": "1_3",
        "key_value": "颜色:黑色 CPU:I5",
        "price": 5400,
        "store_qty": 100,
        "bar_code": "",
        "goods_sku": ""
      },
      {
        "key_name": "1_4",
        "key_value": "颜色:黑色 CPU:I7",
        "price": 5900,
        "store_qty": 100,
        "bar_code": "",
        "goods_sku": ""
      }
    ],
    "spec_image": [
      {
        "spec_item_id": 1,
        "image": "//image_1.jpg"
      },
      {
        "spec_item_id": 2,
        "image": "//image_2.jpg"
      }
    ],
    "goods_code": "CS38491916",
    "create_time": "2018-05-23 14:35:41",
    "update_time": "2018-05-23 14:35:41",
    "goods_id": 13
  }
}
```

#### 备注:
1. 返回的数据结构可参见[「添加一个商品」](https://doc.careyshop.cn/docs/admin_api/a-21523327819 "「添加一个商品」")