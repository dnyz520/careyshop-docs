# 获取一条购物卡

#### 接口描述：
- 获取一条购物卡。

#### 请求 URL：
- `http|https://host/api/v1/card/method/get.card.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|card_id |integer |是 |gt:0 | |1 |购物卡编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|card_id |integer |是 |1 |购物卡编号 |
|name |string |是 |实体购物卡 |购物卡名称 |
|description |string |是 |线下发放 |购物卡描述 |
|money |number |是 |500 |购物卡面额 |
|category |array |否 |[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;] |限制商品类目 |
|exclude_category |array |否 |[&quot;4&quot;,&quot;5&quot;,&quot;6&quot;] |排除商品类目 |
|give_num |integer |是 |100 |发放数量 |
|active_num |integer |是 |0 |激活数量 |
|create_time |string |是 |2018-05-27 00:55:19 |创建时间 |
|end_time |datetime |否 |2019-05-30 00:00:00 |截止有效期 |
|status |integer |是 |1 |购物卡状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "card_id": 1,
    "name": "实体购物卡",
    "description": "线下发放",
    "money": 500,
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
    "give_num": 100,
    "active_num": 0,
    "create_time": "2018-05-27 00:55:19",
    "end_time": "2019-05-30 00:00:00",
    "status": 1
  }
}
```

#### 备注:
1. 参数`end_time`返回`空`表示不限制`截止有效时间`。

2. `category`和`exclude_category`参数中的分类编号，如果该分类下有子分类，则有同样效果。

3. `限制`表示只能在指定范围内使用，`排除`表示指定的商品类目不参与。