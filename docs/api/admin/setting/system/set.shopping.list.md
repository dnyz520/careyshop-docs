# 设置购物系统

#### 接口描述：
- 设置购物系统。

#### 请求 URL：
- `http|https://host/api/v1/setting/method/set.shopping.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|integral |integer |否 |egt:0 | | |积分换算比例 |
|timeout |integer |否 |egt:0 | | |下单后未付款自动取消(分) |
|complete |integer |否 |egt:0 | | |发货几天后自动确认收货(天) |
|is_country |integer |否 |in:0,1 | | |完整地址是否包含国籍 0=否 1=是 |
|spacer |string |否 |max:65535 | | |完整地址间隔字符 |
|invoice |number |否 |between:0,100 | | |开票收取多少税率 |

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
1. 提交时未传入的`请求参数`表示该`字段`下的内容不进行更新操作，但不能一个都不传。