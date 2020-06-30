# 设置配送轨迹

#### 接口描述：
- 设置配送轨迹。

#### 请求 URL：
- `http|https://host/api/v1/setting/method/set.delivery.dist.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|api_id |string |否 |max:65535 | | |快递鸟商户ID |
|api_key |string |否 |max:65535 | | |快递鸟ApiKey |
|is_sub |integer |否 |in:0,1 | | |是否启用订阅 0=否 1=是 |

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