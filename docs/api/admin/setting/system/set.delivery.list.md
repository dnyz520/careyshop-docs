# 设置配送优惠

#### 接口描述：
- 设置配送优惠。

#### 请求 URL：
- `http|https://host/api/v1/setting/method/set.delivery.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|money |number |否 |egt:0 | | |满额包邮 |
|money_status |integer |否 |in:0,1 | | |满额是否启用 0=禁用 1=启用 |
|money_exclude |integer |否 |egt[]:0 | | |满额不包邮区域 |
|number |integer |否 |egt:0 | | |满件包邮 |
|number_status |integer |否 |in:0,1 | | |满件是否启用 0=禁用 1=启用 |
|number_exclude |integer |否 |egt[]:0 | | |满件不包邮区域 |
|quota |number |否 |egt:0 | | |满额减运费 |
|dec_money |number |否 |egt:0 | | |满额减多少运费 |
|dec_status |integer |否 |in:0,1 | | |满额减是否启用 0=禁用 1=启用 |
|dec_exclude |integer |否 |egt[]:0 | | |满额减不减区域 |

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