# 获取一个账号等级

#### 接口描述：
- 获取一个账号等级。

#### 请求 URL：
- `http|https://host/api/v1/user_level/method/get.user.level.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|user_level_id |integer |是 |gt:0 | |5 |等级编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

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
  "data": {
    "user_level_id": 5,
    "name": "钻石会员",
    "amount": 100000,
    "discount": 90,
    "description": "钻石会员"
  }
}
```

#### 备注:
无