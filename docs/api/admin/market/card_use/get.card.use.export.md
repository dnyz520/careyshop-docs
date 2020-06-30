# 导出生成的购物卡

#### 接口描述：
- 导出生成的购物卡。

#### 请求 URL：
- `http|https://host/api/v1/card_use/method/get.card.use.export/`

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
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|card_use_id |integer |是 |3 |编号 |
|number |string |是 |4351713337675868 |卡号 |
|password |string |是 |AA024520B8650882 |卡密 |
|money |number |是 |500 |金额 |
|is_active |integer |是 |0 |是否激活 0=否 1=是 |
|is_invalid |integer |是 |0 |是否有效 0=无效 1=有效 |
|remark |string |是 |作废 |备注 |
|active_time |datetime |是 |2019-05-30 00:00:00 |激活时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "card_use_id": 3,
      "number": "4351713337675868",
      "password": "AA024520B8650882",
      "money": 500,
      "is_active": 0,
      "is_invalid": 0,
      "remark": "作废",
      "active_time": ""
    },
    {
      "card_use_id": 4,
      "number": "9514677739431425",
      "password": "684921B31A739A7F",
      "money": 500,
      "is_active": 0,
      "is_invalid": 1,
      "remark": "",
      "active_time": ""
    }
  ]
}
```

#### 备注:
无