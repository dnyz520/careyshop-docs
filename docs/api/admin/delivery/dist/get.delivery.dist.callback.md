# 获取配送回调URL接口

#### 接口描述：
- 获取配送回调URL接口。

#### 请求 URL：
- `http|https://host/api/v1/delivery_dist/method/get.delivery.dist.callback/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
| | | | | | | | |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|callback_url |string |是 | |回调URL接口地址 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "callback_url": "http://host/api/v1/delivery_dist/method/put.delivery.dist.data.html"
  }
}
```

#### 备注:
无