# 获取指定账号资金信息

#### 接口描述：
- 获取指定账号资金信息。

#### 请求 URL：
- `http|https://host/api/v1/user_money/method/get.user.money.info/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|client_id |integer |是 |gt:0 | |17 |账号编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|total_money |number |是 |99.99 |累计消费 |
|balance |number |是 |66.66 |可用余额 |
|lock_balance |number |是 |10 |锁定余额 |
|points |number |是 |100 |账号积分 |
|lock_points |number |是 |0 |锁定积分 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "total_money": 0,
    "balance": 1,
    "lock_balance": 0,
    "points": 0,
    "lock_points": 0
  }
}
```

#### 备注:
无