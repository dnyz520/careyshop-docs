# 获取上传Token

#### 接口描述：
- 获取上传Token，同时会返回上传地址，各个具体的参数值，用于实际上传所用。

#### 请求 URL：
- `http|https://host/api/v1/upload/method/get.upload.token/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|module |string |否 |见附属 A | |aliyun |模块名 |
|type |string |否 |in:web,app |web |app |终端类型，详见[「SDK或APP调用」](/api/admin/upload/upload/get.upload.token.md#sdk或app调用 "「SDK或APP调用」") |

> 附属 A：
参数`module`的值可从[「获取上传模块列表」](/api/admin/upload/upload/get.upload.module.md "「获取上传模块列表」")中获取，当`参数值`为`空或不传入`则默认取系统设置中配置的`默认上传模块`。

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|token |array |是 |[] |Token对象，附带上传地址 |
|expires |integer |是 |0 |Token截止有效时间戳 0=无限制 |

|token|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|upload_url |object |是 |[] |上传地址对象，详见[「获取上传地址」](/api/admin/upload/upload/get.upload.url.md "「获取上传地址」") |
|token |string |是 |... |上传令牌，`aliyun`模块稍有不同 |
|N... |string |是 |... |其余参数，见`备注`|

|upload_url|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|upload_url |string |是 |... |实际上传请求地址 |
|module |string |是 |careyshop |模块名 |
|param |array |是 |[] |上传时需要用到的参数 |

#### CareyShop(本地上传) 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "token": {
      "upload_url": {
        "upload_url": "http://host/api/v1/upload/method/add.upload.list.html",
        "module": "careyshop",
        "param": [
          {
            "name": "x:replace",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "x:parent_id",
            "type": "hidden",
            "default": 0
          },
          {
            "name": "x:filename",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "token",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "file",
            "type": "file",
            "default": ""
          }
        ]
      },
      "token": "careyshop"
    },
    "expires": 0
  }
}
```

#### 七牛云 KODO 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "token": {
      "upload_url": {
        "upload_url": "http://upload-jjh.qiniup.com/",
        "module": "qiniu",
        "param": [
          {
            "name": "x:replace",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "x:parent_id",
            "type": "hidden",
            "default": 0
          },
          {
            "name": "x:filename",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "key",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "token",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "file",
            "type": "file",
            "default": ""
          }
        ]
      },
      "token": "-eibVM1dkuOQU9vbF9oMRbiMtw4t_-QUMQJgPPDJ:cLUJRYNYzrFsNvC1l7lv1UBNlJw=:eyJmc2l6ZUxpbWl0IjoyMDk3MTUyLCJpc1ByZWZpeGFsU2NvcGUiOjEsImNhbGxiYWNrVXJsIjoiaHR0cDpcL1wvY2FyZXlzaG9wLm9ydWVpLmNvbVwvYXBpXC92MVwvdXBsb2FkXC9tZXRob2RcL3B1dC51cGxvYWQuZGF0YVwvbW9kdWxlXC9xaW5pdS5odG1sIiwiY2FsbGJhY2tCb2R5IjoicmVwbGFjZT0kKHg6cmVwbGFjZSkmcGFyZW50X2lkPSQoeDpwYXJlbnRfaWQpJmZpbGVuYW1lPSQoeDpmaWxlbmFtZSkmbWltZT0kKG1pbWVUeXBlKSZwYXRoPSQoa2V5KSZzaXplPSQoZnNpemUpJm5hbWU9JChmbmFtZSkmd2lkdGg9JChpbWFnZUluZm8ud2lkdGgpJmhlaWdodD0kKGltYWdlSW5mby5oZWlnaHQpJmhhc2g9JChldGFnKSIsImNhbGxiYWNrQm9keVR5cGUiOiJhcHBsaWNhdGlvblwveC13d3ctZm9ybS11cmxlbmNvZGVkIiwic2NvcGUiOiJjYXJleXNob3A6dXBsb2Fkc1wvZmlsZXNcLzIwMTgwNTI4XC8iLCJkZWFkbGluZSI6MTUyNzQ0NDgxNX0=",
      "dir": "uploads/files/20180528/"
    },
    "expires": 1527444816
  }
}
```

#### 阿里云 OSS 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "token": {
      "upload_url": {
        "upload_url": "http://careyshop.oss-cn-hangzhou.aliyuncs.com/",
        "module": "aliyun",
        "param": [
          {
            "name": "x:replace",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "x:parent_id",
            "type": "hidden",
            "default": 0
          },
          {
            "name": "x:filename",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "OSSAccessKeyId",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "policy",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "Signature",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "callback",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "key",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "success_action_status",
            "type": "hidden",
            "default": 200
          },
          {
            "name": "file",
            "type": "file",
            "default": ""
          }
        ]
      },
      "OSSAccessKeyId": "LTAIiZASEn",
      "policy": "eyJleHBpcmF0aW9uIjoiMjAxOC0wNS0yOFQwMjowNzo1M1oiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwyMDk3MTUyXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInVwbG9hZHNcL2ZpbGVzXC8yMDE4MDUyOFwvIl1dfQ==",
      "Signature": "do5qa+GW1veeOVejMjlB2qRG/Wg=",
      "callback": "eyJjYWxsYmFja1VybCI6Imh0dHA6XC9cL2NhcmV5c2hvcC5vcnVlaS5jb21cL2FwaVwvdjFcL3VwbG9hZFwvbWV0aG9kXC9wdXQudXBsb2FkLmRhdGFcL21vZHVsZVwvYWxpeXVuLmh0bWwiLCJjYWxsYmFja0JvZHkiOiJyZXBsYWNlPSR7eDpyZXBsYWNlfSZwYXJlbnRfaWQ9JHt4OnBhcmVudF9pZH0mZmlsZW5hbWU9JHt4OmZpbGVuYW1lfSZtaW1lPSR7bWltZVR5cGV9JnNpemU9JHtzaXplfSZ3aWR0aD0ke2ltYWdlSW5mby53aWR0aH0maGVpZ2h0PSR7aW1hZ2VJbmZvLmhlaWdodH0mcGF0aD0ke29iamVjdH0maGFzaD0ke2V0YWd9IiwiY2FsbGJhY2tCb2R5VHlwZSI6ImFwcGxpY2F0aW9uXC94LXd3dy1mb3JtLXVybGVuY29kZWQifQ==",
      "dir": "uploads/files/20180528/"
    },
    "expires": 1527444473
  }
}
```

#### 备注:
1. 除了`x:*`自定义参数外，其余需要用到的`请求参数`都已经由系统给出，只要原样填写上去即可。

2. 需要额外注意系统给出的参数`dir`和请求参数`key`，使用`careyshop`模块可以忽略。
	+ 返回参数`dir`由框架系统给出，表示 OSS 资源上传目录路径，路径名不可修改。
	+ 请求参数`key`是 OSS 所需要的资源标识，最终完整的标识应该是`dir + 随机文件名 + 文件后缀`。
		+ 假设返回参数`dir`值为`uploads/files/20180528/`。
		+ 那么完整`key`示例(文件名随机) `uploads/files/20180528/dff3c7542c7ea.jpg`。
	+ 请求参数`key`中的文件名建议随机产生，可以使用`GUID`，否则容易出现以下情况。
		1. OSS 返回报错。
		2. 原资源被新的资源所替换。
		3. 总之就是难以维护，爱随不随，不随别哭。

3. 在`expires`有效期内`Token(包括其他返回参数)`可以重复使用。

## SDK或APP调用

默认上传都是以`表单`的形式进行，但`阿里云 OSS`对`APP`应用提供的`SDK`与`表单`上传需要的参数完全不同，所以`type`参数值只对`aliyun`模块有效，其他模块返回的还是`表单`所需要的参数。

> 又称「获取STS临时授权Token(SDK或APP使用)」

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "assumed_role_user": {
      "assumed_role_id": "343070050315638201:temp_user",
      "arn": "acs:ram::1763866338345155:role/aliyunosstokengeneratorrole/temp_user"
    },
    "credentials": {
      "access_key_id": "STS.NKE6hsxakTcnYYLrfSDxMsvry",
      "access_key_secret": "CQLwj8inzfXza9P2ZPPuRdK5JLzxvgDE7nJGSqziugSh",
      "security_token": "CAISmwJ1q6Ft5B2yfSjIr4jwfdLHlb5K46GFW3/9lmYGSPdhnLPZmzz2IHxPfHZoAe0etf0ymmtY7P4blqBvRppdclHfYNEobzzZINHlMeT7oMWQweEugv/MQBqmaXPS2MvVfJ+2Lrf0ceusbFbpjzJ6xaCAGxypQ12iN+/u6/tgdc9FZhSkSjBECdxKXEgAzvUXLnzML/2gHwf3i27LdipStxF7lHl05NbYoKiV4QGMi0bhmK1H5dazAOD9MJc3bMkhCIzlh7ArL/ec6kMKtUgWrpURpbdf5DLKsuuaB1Rs+BicO4LWiIYzd1cmPvBnQ/Ud8aanxacg4/agnoD22gtLOvpOTyPcSYavzc3JAuq1McwjcrL2K98kJyxF2WCeGoABOnD8DnBDeRlSnQbT2Xer3svxDOeyyQO2mJ6CIYDuwUDVnIQTVukoN2A54BAXBTzWiJcxTktKW3LPeJ0OzSRfzdMIu+wB4Ftoi4LnaPOPl9h//QZanP5nCLzR5LjkXg7ERU+omEDQwz5G97M0E7i+i+MTMrNA4Tiy4XoUxNw2RCQ=",
      "expiration": "2018-05-28T14:49:21Z"
    },
    "policy": "{\"Version\":\"1\",\"Statement\":[{\"Effect\":\"Allow\",\"Action\":[\"oss:PutObject\"],\"Resource\":[\"acs:oss:*:*:*\"]}]}",
    "bucket": "careyshop",
    "callback": "{\"callbackUrl\":\"http:\\/\\/careyshop.oruei.com\\/api\\/v1\\/upload\\/method\\/put.upload.data\\/module\\/aliyun.html\",\"callbackBody\":\"replace=${x:replace}&parent_id=${x:parent_id}&filename=${x:filename}&mime=${mimeType}&size=${size}&width=${imageInfo.width}&height=${imageInfo.height}&path=${object}&hash=${etag}\",\"callbackBodyType\":\"application\\/x-www-form-urlencoded\"}",
    "callback_url": "http://careyshop.oruei.com/api/v1/upload/method/put.upload.data/module/aliyun.html",
    "expires": 1527518962
  }
}
```

#### 备注:
1. [阿里云对象存储 OSS 详细说明](https://help.aliyun.com/document_detail/31827.html "阿里云对象存储 OSS 详细说明")

2. [创建授权策略](http://gosspublic.alicdn.com/ram-policy-editor/index.html "创建授权策略")