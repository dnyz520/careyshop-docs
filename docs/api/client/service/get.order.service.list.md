# 获取售后服务单列表

#### 接口描述：
- 获取售后服务单列表。

#### 请求 URL：
- `http|https://host/api/v1/order_service/method/get.order.service.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|service_no |string |否 |max:50 | |SH_I6130… |售后单号 |
|order_no |string |否 |max:50 | |PO_I1049… |订单号 |
|type |integer |否 |in:0,1,2,3 | |1 |售后类型，详见`附属 A` |
|status |integer |否 |between:0,6 | |0 |售后状态，详见`附属 C` |
|begin_time |datetime |否 |beforeTime:end_time | |2018-06-01 00:00:00 |开始时间 |
|end_time |datetime |否 |afterTime:begin_time | |2018-06-30 00:00:00 |结束时间 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |between:1,40 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 D |order_service_id |update_time |排序字段 |

> 附属 A：
0=仅退款 1=退货退款 2=换货 3=维修

</p>

> 附属 B：
0=未选择 1=未收到货 2=已收到货

</p>

> 附属 C：
0=待处理 1=已同意 2=已拒绝 3=已寄件 4=售后中 5=已撤销 6=已完成

</p>

> 附属 D：
in:order_service_id,create_time,update_time

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |2 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|service_no 		|string 	|是 |SH_I6130... |售后单号 |
|order_no 			|string 	|是 |PO_I1049... |订单号 |
|order_goods_id 	|integer	|是 |1 |订单商品编号 |
|goods_image 		|string 	|是 |//image.jpg |订单商品封面 |
|key_name 			|string 	|是 |1_3 |规格键名 |
|key_value 			|string 	|是 |规格B |规格值 |
|user_id 			|integer 	|是 |1 |账号编号 |
|qty 				|integer 	|是 |0 |数量 |
|type 				|integer 	|是 |0 |售后类型，详见`附属 A` |
|reason 			|string 	|是 |不想要了 |原因 |
|goods_status 		|integer 	|是 |1 |货物状态，详见`附属 B` |
|status 			|integer 	|是 |0 |售后状态，详见`附属 C` |
|refund_fee 		|number 	|是 |0.01 |总退款金额 |
|delivery_fee 		|number 	|是 |0 |运费 |
|user_new 			|integer 	|是 |0 |存在新事件 0=否 1=是 |
|create_time 		|datetime 	|是 |2018-06-13 23:02:17 |创建时间 |
|update_time 		|datetime 	|是 |2018-06-13 23:14:28 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "service_no": "SH_I6130231224060090001",
        "order_no": "PO_I1049550470892670001",
        "order_goods_id": 2,
        "goods_image": "",
        "key_name": "1_2",
        "key_value": "规格A",
        "user_id": 1,
        "qty": 0,
        "type": 1,
        "reason": "七天无理由退货",
        "goods_status": 2,
        "status": 0,
        "refund_fee": 0.01,
        "delivery_fee": 1195,
        "user_new": 1,
        "create_time": "2018-06-13 23:05:12",
        "update_time": "2018-06-13 23:05:12"
      },
      {
        "service_no": "SH_I6130213790784100001",
        "order_no": "PO_I1049550470892670001",
        "order_goods_id": 1,
        "goods_image": "",
        "key_name": "1_3",
        "key_value": "规格B",
        "user_id": 1,
        "qty": 0,
        "type": 0,
        "reason": "不想要了",
        "goods_status": 1,
        "status": 1,
        "refund_fee": 0.01,
        "delivery_fee": 0,
        "user_new": 1,
        "create_time": "2018-06-13 23:02:17",
        "update_time": "2018-06-14 00:41:01"
      }
    ],
    "total_result": 2
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。