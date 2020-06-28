# 获取指定商品的规格图

#### 接口描述：
- 获取指定商品的规格图。

#### 请求 URL：
- `http|https://host/api/v1/goods/method/get.goods.spec.image/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

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

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|spec_item_id |integer |是 |1 |商品规格项编号 |
|image |string |是 |//image_1.jpg |商品规格图片 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "spec_item_id": 1,
      "image": "//image_1.jpg"
    },
    {
      "spec_item_id": 2,
      "image": "//image_2.jpg"
    }
  ]
}
```

#### 备注:
无