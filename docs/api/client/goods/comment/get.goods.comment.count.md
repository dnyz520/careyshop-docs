# 获取一个商品"好中差"评的数量

#### 接口描述：
- 获取一个商品"全部"、"晒图"、"追评"、"好评"、"中评"、差评"的数量。

#### 请求 URL：
- `http|https://host/api/v1/goods_comment/method/get.goods.comment.count/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt:0 | |93 |商品编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|all_count |integer |是 |1 |总评价数 |
|image_count |integer |是 |1 |带有图片的评价数量 |
|addition_count |integer |是 |0 |带有追加评价的数量 |
|good_count |integer |是 |1 |好评评价数量 |
|general_count |integer |是 |0 |中评评价数量 |
|poor_count |integer |是 |0 |差评评价数量 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "all_count": 1,
    "image_count": 1,
    "addition_count": 0,
    "good_count": 1,
    "general_count": 0,
    "poor_count": 0
  }
}
```

#### 备注:
无