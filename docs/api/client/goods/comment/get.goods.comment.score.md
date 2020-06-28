# 获取一个商品评价得分

#### 接口描述：
- 获取一个商品评价得分。

#### 请求 URL：
- `http|https://host/api/v1/goods_comment/method/get.goods.comment.score/`

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
|count |integer |是 |1 |评价总数量 |
|good_count |integer |是 |1 |好评总数 |
|good_rate |integer |是 |100 |好评百分比 |
|general_count |integer |是 |0 |中评总数 |
|general_rate |integer |是 |0 |中评百分比 |
|poor_count |integer |是 |0 |差评总数 |
|poor_rate |integer |是 |0 |差评百分比 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "count": 1,
    "good_count": 1,
    "good_rate": 100,
    "general_count": 0,
    "general_rate": 0,
    "poor_count": 0,
    "poor_rate": 0
  }
}
```

#### 备注:
无