# 获取账号等级列表

#### 接口描述：
- 获取账号等级列表。

#### 请求 URL：
- `http|https://host/api/v1/user_level/method/get.user.level.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
| | | | | | | | |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|user_level_id |integer |是 |5 |等级编号 |
|name |string |是 |钻石会员 |等级名称 |
|amount |number |是 |100000.00 |消费金额 |
|discount |integer |是 |90 |折扣 |
|description |string |是 |钻石会员 |等级描述 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "user_level_id": 1,
      "name": "普通会员",
      "amount": 0,
      "discount": 100,
      "description": "普通会员"
    },
    {
      "user_level_id": 2,
      "name": "铜牌会员",
      "amount": 10000,
      "discount": 98,
      "description": "铜牌会员"
    },
    {
      "user_level_id": 3,
      "name": "白银会员",
      "amount": 30000,
      "discount": 95,
      "description": "白银会员"
    },
    {
      "user_level_id": 4,
      "name": "黄金会员",
      "amount": 50000,
      "discount": 92,
      "description": "黄金会员"
    },
    {
      "user_level_id": 5,
      "name": "钻石会员",
      "amount": 100000,
      "discount": 90,
      "description": "钻石会员"
    },
    {
      "user_level_id": 6,
      "name": "至尊VIP",
      "amount": 200000,
      "discount": 88,
      "description": "至尊VIP"
    }
  ]
}
```

#### 备注:
无