# 根据流水号获取配送记录

#### 接口描述：
- 根据流水号获取配送记录。

#### 请求 URL：
- `http|https://host/api/v1/delivery_dist/method/get.delivery.dist.code/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_code |string |是 |max:50 | |PO_I1049550470 |流水号(订单号、售后单号等) |
|logistic_code |string |否 |max:50 | |484106215266 |获取该流水号下指定的快递单号 |
|exclude_code |array |否 |string[] | |[&quot;123&quot;,&quot;456&quot;] |排除该流水号下的快递单号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|delivery_dist_id |integer |是 |3 |配送记录编号 |
|user_id |integer |是 |1 |账号编号 |
|order_code |string |是 |PO_I1049550470 |流水号(订单号、售后单号等) |
|logistic_code |string |是 |484106215266 |快递单号 |
|trace |array |是 |[] |配送轨迹 |
|accept_station |string |是 |糯米已揽收 |描述 |
|accept_time |string |是 |2018-03-20 20:51:17 |时间 |
|remark |string |否 | |备注 |
|state |integer |是 |3 |配送状态 0=无轨迹 1=已揽收 2=在途中 201=到达派件城市 3=签收 4=问题件 |
|is_sub |integer |是 |0 |是否订阅 0=否 1=是 |
|create_time |datetime |是 |2018-03-09 23:32:11 |创建时间 |
|update_time |datetime |是 |2018-05-13 00:12:11 |更新时间 |
|get_delivery_item |object |是 |[] |快递公司对象 |

|get_delivery_item|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |中通快递 |快递公司名称 |
|code |string |是 |ZTO |快递公司编码 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "delivery_dist_id": 3,
      "user_id": 1,
      "order_code": "PO_I1049550470",
      "logistic_code": "484106215266",
      "trace": [
        {
          "accept_station": "糯米已揽收",
          "accept_time": "2018-03-20 20:51:17"
        }
      ],
      "state": 3,
      "is_sub": 0,
      "create_time": "2018-03-09 23:32:11",
      "update_time": "2018-05-13 00:12:11",
      "get_delivery_item": {
        "name": "中通快递",
        "code": "ZTO"
      }
    },
    {
      "delivery_dist_id": 6,
      "user_id": 1,
      "order_code": "PO_I1049550470",
      "logistic_code": "889138951963212863",
      "trace": [
        {
          "accept_station": "【江苏省盐城市公司】 已收件",
          "accept_time": "2018-04-17 19:38:14"
        }
      ],
      "state": 3,
      "is_sub": 0,
      "create_time": "2018-05-13 00:04:19",
      "update_time": "2018-05-13 00:12:11",
      "get_delivery_item": {
        "name": "圆通速递",
        "code": "YTO"
      }
    }
  ]
}
```

#### 备注:
1. 对于配送记录字段`is_sub = 0`的记录，在查询时将使用`实时查询`，如果`配送状态`已签收则存入数据库，下次查询时将直接从数据库中获得记录。

2. 除非传入`logistic_code`或`exclude_code`，默认将返回该流水号下的所有配送记录。