# 获取上传地址

#### 接口描述：
- 获取上传地址不会返回上传所需要的各个参数值，只是返回上传地址和上传时所需要的数据结构。

#### 请求 URL：
- `http|https://host/api/v1/upload/method/get.upload.url/`

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
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|upload_url |string |是 |http://... |默认上传地址 |
|module |string |是 |careyshop |模块名 |
|param |array |是 |[] |上传时需要用到的参数 |

|param|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |x:parent_id |参数名 |
|type |string |是 |hidden |参数类型(属性) |
|default |string |是 |0 |参数默认值 |

#### CareyShop(本地上传) 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
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
  }
}
```

#### 七牛云 KODO 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
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
  }
}
```

#### 阿里云 OSS 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
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
  }
}
```

#### 备注:
1. 不同的`上传地址`需要用到的`请求参数`也不同，系统会返回需要用到的`请求参数`，并且会存在`默认值`，在没有特殊情况下一般使用`默认值`即可。

2. 众多参数中需要注意`x:*`类型的参数，该参数属于`系统自义定参数`，`参数值`被系统所处理，其余参数是 OOS 运营商所需要使用的，在[「获取上传Token」](/api/client/upload/upload/get.upload.token.md "「获取上传Token」")可获得，只要原样填写即可。
	+ `x:replace`替换上传资源时使用，新上传时无需理会。(默认值为`空字符`)
	+ `x:parent_id`表示该资源`所属资源编号`，就是说这个文件归哪个文件夹所有。(默认值为`0`，根目录下)
	+ `x:filename`上传后的自定义文件名，默认为`空字符`，表示使用原始文件名。(默认值为`空字符`)

3. 上传需要提早渲染好(获取Token之后)模板，`参数`和`参数值`准备完毕后再提交`上传请求`。

4. 返回系统设置中配置的`默认上传模块`。
