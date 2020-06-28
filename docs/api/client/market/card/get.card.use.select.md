# 根据商品Id列出可使用的购物卡

#### 接口描述：
- 根据商品Id列出可使用的购物卡。

#### 请求 URL：
- `http|https://host/api/v1/card_use/method/get.card.use.select/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt[]:0 | |[1,2,3] |商品编号 |

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
|is_use |integer |是 |1 |是否可使用 0=否 1=是 |
|not_use_error |string |是 |... |不可用原因 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "number": "9514677739431425",
      "money": 530,
      "name": "实体购物卡",
      "description": "线下发放",
      "is_use": 1,
      "not_use_error": ""
    },
    {
      "number": "1818337623626955",
      "money": 470,
      "name": "实体购物卡",
      "description": "线下发放",
      "is_use": 0,
      "not_use_error": "卡号 1818337623626955 只能在指定商品分类中使用"
    }
  ]
}
```

#### 备注:
无