# 编辑一个账号等级

#### 接口描述：
- 编辑一个账号等级。

#### 请求 URL：
- `http|https://host/api/v1/user_level/method/set.user.level.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|user_level_id |integer |是 |gt:0 | |9 |等级编号 |
|name |string |否 |length:1,30 | |铜牌会员 |等级名称 |
|amount |number |否 |egt:0 | |999.99 |消费金额 |
|discount |integer |否 |between:0,100 | |98 |折扣 |
|description |string |否 |max:200 | |铜牌会员 |等级描述 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|user_level_id |integer |是 |9 |等级编号 |
|name |string |否 |铜牌会员 |等级名称 |
|amount |number |否 |999.99 |消费金额 |
|discount |integer |否 |98 |折扣 |
|description |string |否 |铜牌会员 |等级描述 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "user_level_id": 9,
    "name": "铜牌会员",
    "amount": 999.99,
    "discount": 98,
    "description": "铜牌会员"
  }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。