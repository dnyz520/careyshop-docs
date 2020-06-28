# 验证购物卡是否可使用

#### 接口描述：
- 验证购物卡是否可使用。

#### 请求 URL：
- `http|https://host/api/v1/card_use/method/get.card.use.check/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|number |string |是 |length:16 | |9514677739431425 |卡号 |
|goods_id |integer |是 |gt[]:0 | |[1,2,3] |商品编号 |
|money |number |否 |egt:0 |0 |100 |金额 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示可使用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 不可用示例：
```json
{
  "status": 500,
  "message": "卡号 9514677739431425 可用余额不足"
}
```

#### 备注:
无