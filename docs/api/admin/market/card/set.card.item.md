# 编辑一条购物卡

#### 接口描述：
- 编辑一条购物卡。

#### 请求 URL：
- `http|https://host/api/v1/card/method/set.card.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|card_id |integer |是 |gt:0 | |1 |购物卡编号 |
|name |string |否 |max:50 | |实体购物卡 |购物卡名称 |
|description |string |否 |max:255 | |线下发放 |购物卡描述 |
|category |array |否 |gt[]:0 | |[1,2,3] |限制商品类目 |
|exclude_category |array |否 |gt[]:0 | |[4,5,6] |排除商品类目 |
|status |integer |否 |in:0,1 | |1 |购物卡状态 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|card_id |integer |是 |1 |购物卡编号 |
|name |string |否 |实体购物卡 |购物卡名称 |
|description |string |否 |线下发放 |购物卡描述 |
|category |array |否 |[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;] |限制商品类目 |
|exclude_category |array |否 |[&quot;4&quot;,&quot;5&quot;,&quot;6&quot;] |排除商品类目 |
|status |integer |否 |1 |购物卡状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "card_id": 1,
    "name": "实体购物卡",
    "description": "线下发放",
    "category": [
      "1",
      "2",
      "3"
    ],
    "exclude_category": [
      "4",
      "5",
      "6"
    ],
    "status": 1
  }
}
```

#### 备注:
无