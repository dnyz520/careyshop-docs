# 批量设置通知系统模板是否启用

#### 接口描述：
- 批量设置通知系统模板是否启用。

#### 请求 URL：
- `http|https://host/api/v1/notice_tpl/method/set.notice.tpl.status/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|notice_tpl_id |integer |是 |gt[]:0 | |[1,2,3] |通知系统模板编号 |
|status |integer |是 |in:0,1 | |1 |模板是否启用 0=禁用 1=启用 |

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