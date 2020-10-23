# 获取配送记录列表

#### 接口描述：
- 获取配送记录列表。

#### 请求 URL：
- `http|https://host/api/v1/delivery_dist/method/get.delivery.dist.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_code |string |否 |max:50 | |PO_I1049550470 |流水号(订单号、售后单号等) |
|logistic_code |string |否 |max:50 | |484106215266 |快递单号 |
|is_trace |integer |否 |in:0,1 | |0 |是否获取配送轨迹 0=否 1=是 |
|state |integer |否 |in:0,1,2,3,4,201 | |0 |配送状态 0=无轨迹 1=已揽收 2=在途中 201=到达派件城市 3=签收 4=问题件 |
|is_sub |integer |否 |in:0,1 | |0 |是否订阅 0=否 1=是 |
|account |string |否 |max:80 | |carey |账号或昵称 |
|timeout |integer |否 |egt:0 | |3 |超时配送 单位:天 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |delivery_dist_id |state |排序字段 |

> 附属 A：
in:delivery_dist_id,order_code,delivery_item_id,logistic_code,state,is_sub

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |5 |合计计数 |

|items|类型|是否返回|示例值|描述|
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
|get_user |object |是 |[] |账号对象 |

|get_delivery_item|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |中通快递 |快递公司名称 |
|code |string |是 |ZTO |快递公司编码 |

|get_user|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|username |string |否 |careya |账号 |
|nickname |string |否 |careya |昵称 |
|head_pic |string |否 |//host/head_pic.jpg |头像 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
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
        "update_time": "2018-05-13 00:28:57",
        "get_delivery_item": {
          "name": "圆通速递",
          "code": "YTO"
        },
        "get_user": {
          "username": "careya",
          "nickname": "careya",
          "head_pic": "//host/head_pic.jpg"
        }
      },
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
        "update_time": "2018-05-13 00:28:57",
        "get_delivery_item": {
          "name": "中通快递",
          "code": "ZTO"
        },
        "get_user": {
          "username": "careya",
          "nickname": "careya",
          "head_pic": "//host/head_pic.jpg"
        }
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。