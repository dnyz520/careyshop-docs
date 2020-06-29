# 查询快递公司编码是否已存在

#### 接口描述：
- 查询快递公司编码是否已存在。在填写或修改后对其进行检测，避免在提交全部数据后才错误提示。

#### 请求 URL：
- `http|https://host/api/v1/delivery_item/method/unique.delivery.company.code/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|code |string |是 |max:30 | |sfsy |快递公司编码 |
|type |integer |是 |between:0,3 | |1 |快递公司类型 0=热门 1=国内 2=国外 3=转运 |
|exclude_id |integer |否 |gt:0 | | |快递公司排除Id |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示可用编码 |

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