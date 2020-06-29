# 添加一条配送记录

#### 接口描述：
- 添加一条配送记录。

#### 请求 URL：
- `http|https://host/api/v1/delivery_dist/method/add.delivery.dist.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|client_id |integer |是 |gt:0 | |1 |账号编号(必须是顾客组) |
|order_code |string |是 |max:50 | |PO_I1049550470 |流水号(订单号、售后单号等) |
|delivery_id |integer |是 |gt:0 | |7 |配送方式编号 |
|logistic_code |string |是 |max:50 | |889138951963212863 |快递单号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|delivery_dist_id |integer |是 |5 |配送记录编号 |
|user_id |integer |是 |1 |账号编号 |
|order_code |string |是 |PO_I1049550470 |流水号(订单号、售后单号等) |
|logistic_code |string |是 |889138951963212863 |快递单号 |
|trace |array |是 |[] |配送轨迹 |
|state |integer |否 |0 |配送状态 0=无轨迹 1=已揽收 2=在途中 201=到达派件城市 3=签收 4=问题件 |
|is_sub |integer |是 |0 |是否订阅 0=否 1=是 |
|create_time |datetime |是 |2018-05-12 23:54:38 |创建时间 |
|update_time |datetime |是 |2018-05-12 23:54:38 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "delivery_dist_id": 5,
    "user_id": 1,
    "order_code": "PO_I1049550470",
    "logistic_code": "889138951963212863",
    "trace": [],
    "state": 0,
    "is_sub": 0,
    "create_time": "2018-05-12 23:54:38",
    "update_time": "2018-05-12 23:54:38"
  }
}
```

#### 备注:
1. 单个`流水号`允许添加多个配送记录(订单分多次配送或售后服务多次退换货)。

2. 当启用`订阅`时会主动进行`订阅`，`订阅`后该记录查询时不使用`实时查询`，而是接收第三方`推送`过来的数据。