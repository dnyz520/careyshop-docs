# 向指定用户发放优惠劵

#### 接口描述：
- 向指定用户发放优惠劵。

#### 请求 URL：
- `http|https://host/api/v1/coupon_give/method/give.coupon.user/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|coupon_id |integer |是 |gt:0 | |3 |优惠劵编号 |
|username |string |否 |min[]:0 | |[&quot;carey&quot;, &quot;careyshop&quot;] |账号 |
|user_level_id |integer |否 |egt[]:0 | |[1,2,3] |等级编号 |

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
1. 参数`username`和`user_level_id`必须传入其中一个，但不允许同时传入。
