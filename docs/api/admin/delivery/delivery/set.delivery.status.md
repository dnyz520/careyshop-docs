# 批量设置配送方式状态

#### 接口描述：
- 批量设置配送方式状态。

#### 请求 URL：
- `http|https://host/api/v1/delivery/method/set.delivery.status/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|delivery_id |integer |是 |gt[]:0 | |[1,2,3] |配送方式编号 |
|status |integer |是 |in:0,1 | |1 |配送方式状态 0=禁用 1=启用 |

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