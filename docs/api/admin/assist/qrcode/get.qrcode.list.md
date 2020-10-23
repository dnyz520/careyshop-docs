# 获取二维码列表

#### 接口描述：
- 获取二维码列表。

#### 请求 URL：
- `http|https://host/api/v1/qrcode/method/get.qrcode.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |否 |max:64 | |物料 |二维码名称 |
|size |integer |否 |between:0,10 | |3 |二维码图片大小 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |in:qrcode_id,size |qrcode_id |size |排序字段 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |3 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|qrcode_id |integer |是 |3 |二维码编号 |
|name |string |是 |实体店物料 |二维码名称 |
|text |string |是 |http://careyshop.cn |二维码内容 |
|size |integer |是 |3 |二维码图片大小 0=系统默认 |
|logo |string |是 |logo.png |二维码LOGO |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "qrcode_id": 3,
        "name": "实体店物料",
        "text": "http://careyshop.cn",
        "size": 3,
        "logo": "logo.png"
      },
      {
        "qrcode_id": 2,
        "name": "线下物料",
        "text": "http://www.careyshop.cn",
        "size": 0,
        "logo": ""
      },
      {
        "qrcode_id": 1,
        "name": "微信物料",
        "text": "纯文本内容",
        "size": 4,
        "logo": "http://careyshop.oruei.com/uploads/files/20180607/81ec85d0fcffd6229e130f3c475fa2e4.jpg?type=careyshop"
      }
    ],
    "total_result": 3
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。