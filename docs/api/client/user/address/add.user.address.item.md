# 添加一个收货地址

#### 接口描述：
- 添加一个收货地址。

#### 请求 URL：
- `http|https://host/api/v1/user_address/method/add.user.address.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|client_id |integer |是 |gt:0 | |3 |账号编号 |
|consignee |string |是 |length:1,30 | |周晓 |姓名 |
|country |integer |否 |egt:0 |0 |0 |国家 |
|region_list |array |是 |min[]:0 | |[1,2,3] |省市区编号 |
|address |string |是 |max:255 | |江北区 |详细地址 |
|zipcode |string |否 |max:20 | |315000 |邮编 |
|tel |string |否 |max:20 | |0574-87487585 |电话 |
|mobile |string |是 |length:7,15 | |13071297155 |手机号码 |
|is_default |integer |否 |in:0,1 |0 |1 |是否设为默认收货地址 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|consignee |string |是 |周晓 |姓名 |
|country |integer |否 |0 |国家 |
|region_list |array |否 |[1,2,3] |省市区编号 |
|address |string |是 |江北区 |详细地址 |
|zipcode |string |否 |315000 |邮编 |
|tel |string |否 |0574-87487585 |电话 |
|mobile |string |是 |13071297155 |手机号码 |
|is_default |integer |否 |1 |是否为默认收货地址 0=否 1=是 |
|user_address_id |integer |是 |30 |收货地址编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "consignee": "周晓",
    "country": 0,
    "region_list": [1, 2, 3],
    "address": "江北区",
    "zipcode": "315000",
    "tel": "0574-87487585",
    "mobile": "13071297155",
    "is_default": 1,
    "user_address_id": 30
  }
}
```

#### 备注:
无