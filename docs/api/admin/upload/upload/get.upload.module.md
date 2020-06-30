# 获取上传模块列表

#### 接口描述：
- 获取上传模块列表。

#### 请求 URL：
- `http|https://host/api/v1/upload/method/get.upload.module/`

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
|data |array |是 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |七牛云 KODO |名称 |
|module |string |是 |qiniu |模块名 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "name": "CareyShop(本地上传)",
      "module": "careyshop"
    },
    {
      "name": "七牛云 KODO",
      "module": "qiniu"
    },
    {
      "name": "阿里云 OSS",
      "module": "aliyun"
    }
  ]
}
```

#### 备注:
1. 该接口用于后台系统设置中的`默认上传模块`的时候进行选择使用。

2. `careyshop`模块是框架自带的上传模块，其他模块都依赖于第三方 OSS。