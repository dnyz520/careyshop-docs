# 获取指定账号的收货地址列表

#### 接口描述：
- 获取指定账号的收货地址列表。

#### 请求 URL：
- `http|https://host/api/v1/user_address/method/get.user.address.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|client_id |integer |是 |gt:0 | |3 |账号编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|user_address_id |integer |是 |3 |收货地址编号 |
|consignee |string |是 |李明 |姓名 |
|country |integer |是 |0 |国家 |
|region_list |array |是 |[1,2,3] |省市区编号 |
|address |string |是 |江北区 |详细地址 |
|zipcode |string |是 |315000 |邮编 |
|tel |string |是 |0574-87487585 |电话 |
|mobile |string |是 |13071297155 |手机号码 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "user_address_id": 3,
      "consignee": "李明",
      "country": 0,
      "region_list": [1, 2, 3],
      "address": "江北区",
      "zipcode": "",
      "tel": "",
      "mobile": ""
    },
    {
      "user_address_id": 8,
      "consignee": "周晓",
      "country": 0,
      "region_list": [1, 2, 3],
      "address": "江北区",
      "zipcode": "",
      "tel": "",
      "mobile": "15867430425"
    }
  ]
}
```

#### 备注:
无