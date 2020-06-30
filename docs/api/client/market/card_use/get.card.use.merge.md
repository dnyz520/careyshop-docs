# 获取可合并的购物卡列表

#### 接口描述：
- 获取可合并的购物卡列表。

#### 请求 URL：
- `http|https://host/api/v1/card_use/method/get.card.use.merge/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|exclude_number |string |是 |length:16 | |1818337623626955 |排除卡号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|number |string |是 |9514677739431425 |卡号 |
|money |number |是 |500 |可用余额 |
|name |string |是 |实体购物卡 |购物卡名称 |
|description |string |是 |线下发放 |购物卡描述 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "number": "9514677739431425",
      "money": 500,
      "name": "实体购物卡",
      "description": "线下发放"
    },
    {
      "number": "1818337623626955",
      "money": 500,
      "name": "实体购物卡",
      "description": "线下发放"
    }
  ]
}
```

#### 备注:
无