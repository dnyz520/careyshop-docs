# 客服对售后服务单添加备注(顾客不可见)

#### 接口描述：
- 客服对售后服务单添加备注(顾客不可见)。

#### 请求 URL：
- `http|https://host/api/v1/order_service/method/set.order.service.remark/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|service_no |string |是 |max:50 | |SH_I6130213790784100001 |售后单号 |
|remark |string |否 |max:255 | |记录一下 |备注 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示执行成功 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
无