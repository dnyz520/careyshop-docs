# 添加一张优惠劵

#### 接口描述：
- 添加一张优惠劵。

#### 请求 URL：
- `http|https://host/api/v1/coupon/method/add.coupon.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |是 |max:50 | |六一快乐 |优惠劵名称 |
|description |string |否 |max:255 | |活动描述 |优惠劵描述 |
|guide |string |否 |max:255 | |//careyshop.cn |优惠劵引导地址 |
|type |integer |是 |in:0,1,2,3 | |2 |优惠劵类型，详见`备注1` |
|money |number |是 |gt:0 | |100 |优惠金额 |
|quota |number |是 |egt:0 | |1000 |限制使用金额(0则不限) |
|category |array |否 |gt[]:0 | |[1,2,3] |限制商品类目 |
|exclude_category |array |否 |gt[]:0 | |[5,6,7] |排除商品类目 |
|level |array |否 |gt[]:0 | |[] |限制会员等级 |
|frequency |integer |否 |between:0,255 |0 |1 |限制领取次数(0则不限) |
|give_num |integer |是 |gt:0 | |2000 |发放数量 |
|give_begin_time |datetime |是 |date | |2018-05-22 10:11:00 |发放开始时间 |
|give_end_time |datetime |是 |date | |2018-06-05 00:00:00 |发放结束时间 |
|use_begin_time |datetime |是 |date | |2018-06-01 00:00:00 |使用开始时间 |
|use_end_time |datetime |是 |date | |2018-06-02 00:00:00 |使用结束时间 |
|status |integer |否 |in:0,1 |1 |1 |优惠劵状态 0=禁用 1=启用 |
|is_invalid |integer |否 |in:0,1 |0 |0 |优惠劵是否作废 0=正常 1=作废 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |六一快乐 |优惠劵名称 |
|description |string |否 |活动描述 |优惠劵描述 |
|guide |string |否 |//careyshop.cn |优惠劵引导地址 |
|type |integer |是 |2 |优惠劵类型，详见`备注1` |
|money |number |是 |100 |优惠金额 |
|quota |number |是 |1000 |限制使用金额(0则不限) |
|category |array |否 |[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;] |限制商品类目 |
|exclude_category |array |否 |[&quot;5&quot;,&quot;6&quot;,&quot;7&quot;] |排除商品类目 |
|level |array |否 |[] |限制会员等级 |
|frequency |integer |否 |1 |限制领取次数(0则不限) |
|give_num |integer |是 |2000 |发放数量 |
|give_begin_time |datetime |是 |2018-05-22 10:11:00 |发放开始时间 |
|give_end_time |datetime |是 |2018-06-05 00:00:00 |发放结束时间 |
|use_begin_time |datetime |是 |2018-06-01 00:00:00 |使用开始时间 |
|use_end_time |datetime |是 |2018-06-02 00:00:00 |使用结束时间 |
|status |integer |否 |1 |优惠劵状态 0=禁用 1=启用 |
|is_invalid |integer |否 |0 |优惠劵是否作废 0=正常 1=作废 |
|give_code |string |是 |DjEU0GtU9t |优惠劵领取码 |
|coupon_id |integer |是 |11 |优惠劵编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "name": "六一快乐",
    "description": "活动描述",
    "guide": "//careyshop.cn",
    "type": 2,
    "money": 100,
    "quota": 1000,
    "category": [
      "1",
      "2",
      "3"
    ],
    "exclude_category": [
      "5",
      "6",
      "7"
    ],
    "level": [],
    "frequency": 1,
    "give_num": 2000,
    "give_begin_time": "2018-05-22 10:11:00",
    "give_end_time": "2018-06-05 00:00:00",
    "use_begin_time": "2018-06-01 00:00:00",
    "use_end_time": "2018-06-02 00:00:00",
    "status": 1,
    "is_invalid": 0,
    "give_code": "DjEU0GtU9t",
    "coupon_id": 11
  }
}
```

#### 备注:
1. 0=管理组成员向指定的顾客组发放；
1=批量生成后可以导出，可用于线下或海报；
2=由顾客组成员主动领取；
3=由后台促销活动设置，达到条件后赠送指定的优惠劵；

2. `category`和`exclude_category`参数中的分类编号，如果该分类下有子分类，则有同样效果。

3. `限制`表示只能在指定范围内使用，`排除`表示指定的商品类目不参与。

4. 当参数`status`值为`0`或`is_invalid`值为`1`时(包括被删除)，不可再领取，但已经领取的可以继续使用。

5. 参数`is_invalid`值为`1`时，已领取的优惠劵也不可使用。