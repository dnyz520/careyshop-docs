# 拒绝一个提现请求

#### 接口描述：
- 拒绝一个提现请求。

#### 请求 URL：
- `http|https://host/api/v1/withdraw/method/refuse.withdraw.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|withdraw_no |string |是 |max:50 | |TX_H7079689041181850001 |提现单号 |
|remark |string |是 |max:255 | |提醒账户不完整 |提现备注 |

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