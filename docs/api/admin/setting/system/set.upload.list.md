# 设置上传配置

#### 接口描述：
- 设置上传配置。

#### 请求 URL：
- `http|https://host/api/v1/setting/method/set.upload.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|default |string |否 |in:careyshop,aliyun,qiniu | | |默认资源上传模块 |
|oss |string |否 |max:65535 | | |OSS获取入口 |
|image_ext |string |否 |max:65535 | | |图片允许上传的后缀 |
|file_ext |string |否 |max:65535 | | |文件允许上传的后缀 |
|file_size |string |否 |max:65535 | | |本地上传附件大小限制(2M) |
|qiniu_access_key |string |否 |max:65535 | | |用于签名的公钥 |
|qiniu_secret_key |string |否 |max:65535 | | |用于签名的私钥 |
|qiniu_bucket |string |否 |max:65535 | | |请保证Bucket为可公共读取 |
|qiniu_url |string |否 |max:65535 | | |对外访问域名 |
|aliyun_access_key |string |否 |max:65535 | | |AccessKeyID |
|aliyun_secret_key |string |否 |max:65535 | | |AccessKeySecret |
|aliyun_bucket |string |否 |max:65535 | | |请保证Bucket为可公共读取 |
|aliyun_url |string |否 |max:65535 | | |对外访问域名 |
|aliyun_endpoint |string |否 |max:65535 | | |EndPoint |
|aliyun_rolearn |string |否 |max:65535 | | |RoleArn |

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
1. 提交时未传入的`请求参数`表示该`字段`下的内容不进行更新操作，但不能一个都不传。