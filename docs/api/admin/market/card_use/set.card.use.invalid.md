# 批量设置购物卡是否有效

#### 接口描述：
- 批量设置购物卡是否有效。

#### 请求 URL：
- `http|https://host/api/v1/card_use/method/set.card.use.invalid/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|card_use_id |integer |是 |gt[]:0 | |[1,2,3] |编号 |
|is_invalid |integer |是 |in:0,1 | |0 |是否有效 0=无效 1=有效 |
|remark |string |是 |max:255 | |作废 |备注 |

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