# 获取购物卡列表

#### 接口描述：
- 获取购物卡列表。

#### 请求 URL：
- `http|https://host/api/v1/card/method/get.card.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |否 |max:50 | |线下 |购物卡名称 |
|status |integer |否 |in:0,1 | |1 |购物卡状态 0=禁用 1=启用 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |card_id |status |排序字段 |

> 附属 A：
in:card_id,name,money,give_num,active_num,create_time,end_time,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |2 |合计计数 |

|items|类型|是否返回|示例值|描述|
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
    "items": [
      {
        "card_id": 2,
        "name": "电子购物卡",
        "description": "线上购买",
        "money": 500,
        "category": [],
        "exclude_category": [],
        "give_num": 50,
        "active_num": 0,
        "create_time": "2018-05-27 01:59:21",
        "end_time": "",
        "status": 1
      },
      {
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
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。