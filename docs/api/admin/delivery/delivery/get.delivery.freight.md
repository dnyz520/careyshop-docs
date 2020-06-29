# 根据配送方式获取运费

#### 接口描述：
- 根据配送方式获取运费。

#### 请求 URL：
- `http|https://host/api/v1/delivery/method/get.delivery.freight/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|delivery_id |integer |是 |gt:0 | |1 |配送方式编号 |
|region_id |integer |是 |gt:0 | |124 |区域编号 |
|weight_total |number |否 |egt:0 | |10 |重量合计 |
|item_total |number |否 |egt:0 | |0 |计件合计 |
|volume_total |number |否 |egt:0 | |0 |体积量合计 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|delivery_fee |number |是 |77.56 |运费 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "delivery_fee": 77.56
  }
}
```

#### 备注:
无