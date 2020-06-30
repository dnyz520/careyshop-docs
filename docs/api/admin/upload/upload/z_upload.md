# 资源上传请求

## 直传方式上传
在 OSS 中有二种上传方式，`本地上传`和`直传`，但在正式业务中还有客户端，所以会存在三个终端，分别是`客户端`、`服务端`、`OSS 端`。部分技术服务商为了省事采用了客户端传资源到服务端，再由服务端上传资源给 OSS 端，这样做能减少很多的工作量，但对服务器来说浪费了大量的宽带资源，因为服务端接收了一波数据又上传了一波数据。

所以在我们的框架系统中 OSS 都是采用`直传`的方式进行，`直传`的运行方式是客户端直接传资源给 OSS 端，上传成功后 OSS 端会推送资源基础数据给服务端，再由服务端对数据进行消化。这样做服务端只承担了很少量的数据接收，而宽带的压力完全交给了 OSS 服务商，并且还有快速的上行宽带可享用。

## CareyShop(本地上传)

#### 接口描述：
- `careyshop`模块，CareyShop(本地上传)。

#### 请求 URL：
- 可通过[「获取上传地址」](https://doc.careyshop.cn/docs/admin_api/a-21523337928 "「获取上传地址」")或[「获取上传Token」](https://doc.careyshop.cn/docs/admin_api/a-21523337935 "「获取上传Token」")获取。
- 示例地址 `https://careyshop.cn/api/v1/upload/method/add.upload.list.html`

#### 请求方式：
- POST

#### 是否授权：
- 需要授权

#### 请求参数：
**单文件上传**
![](https://doc.careyshop.cn/uploads/201805/admin_api/attach_1532d5eb4d64b9ce.png)

**多文件上传**
![](https://doc.careyshop.cn/uploads/201805/admin_api/attach_1532d5ec6027f51d.png)

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|描述|
|:-----|:-----|:---:|-----|
|parent_id |integer |是 |所属资源编号 |
|name |string |是 |资源名称(来自于参数`x:filename`) |
|ext |string |是 |资源后缀 |
|size |string |是 |资源大小 |
|pixel |array |否 |资源像素，非图片资源则为空 |
|hash |string |是 |资源Hash值 |
|path |string |是 |资源内部路径(资源标识) |
|url |string |是 |资源外链地址 |
|protocol |string |是 |资源协议(模块名) |
|type |integer |是 |资源类型 0=图片 1=附件 2=目录 |
|create_time |datetime |是 |创建时间 |
|update_time |datetime |是 |更新时间 |
|storage_id |integer |是 |资源编号 |
|status |integer |是 |是否上传成功 200=成功 其他=失败 |
|oss |string |是 |OSS调用地址 |

#### 单文件 响应示例：
```json
{
    "status": 200,
    "message": "success",
    "data": [
        {
            "parent_id": 0,
            "name": "about.jpg",
            "ext": "jpg",
            "size": 813156,
            "pixel": {
                "width": 600,
                "height": 2005
            },
            "hash": "26c675651a5fe87a130f81faf815e02d94d0080b",
            "path": "\\uploads\\files\\20180528\\6d2f73ced2549b266f4ad3a0b2e33e43.png",
            "url": "careyshop.cn/uploads/files/20180528/6d2f73ced2549b266f4ad3a0b2e33e43.jpg?type=careyshop",
            "protocol": "careyshop",
            "type": 0,
            "create_time": "2018-05-28 22:36:39",
            "update_time": "2018-05-28 22:36:39",
            "storage_id": 36,
            "status": 200,
            "oss": "careyshop.cn/oss?url="
        }
    ]
}
```

#### 多文件 响应示例：
```json
{
    "status": 200,
    "message": "success",
    "data": [
        {
            "parent_id": 0,
            "name": "1.png",
            "ext": "png",
            "size": 36027,
            "pixel": {
                "width": 855,
                "height": 386
            },
            "hash": "c4dbfd5898f341da05c5102853fa8b0019cd6cb7",
            "path": "\\uploads\\files\\20180528\\83fe3f3fa64aacbb6cbad5d820c7f57d.png",
            "url": "careyshop.oruei.com/uploads/files/20180528/83fe3f3fa64aacbb6cbad5d820c7f57d.png?type=careyshop",
            "protocol": "careyshop",
            "type": 0,
            "create_time": "2018-05-28 23:00:11",
            "update_time": "2018-05-28 23:00:11",
            "storage_id": 47,
            "status": 200,
            "oss": "careyshop.cn/oss?url="
        },
        {
            "parent_id": 0,
            "name": "2.png",
            "ext": "png",
            "size": 40295,
            "pixel": {
                "width": 855,
                "height": 419
            },
            "hash": "7fe2550223abf0d4619e4d5ef39b8dbdd36cc068",
            "path": "\\uploads\\files\\20180528\\1781d6963ec8e1ead76afa976cebfd3c.png",
            "url": "careyshop.oruei.com/uploads/files/20180528/1781d6963ec8e1ead76afa976cebfd3c.png?type=careyshop",
            "protocol": "careyshop",
            "type": 0,
            "create_time": "2018-05-28 23:00:11",
            "update_time": "2018-05-28 23:00:11",
            "storage_id": 48,
            "status": 200,
            "oss": "careyshop.cn/oss?url="
        },
        {
            "status": 500,
            "message": "上传文件后缀不允许"
        }
    ]
}
```

#### 备注:
1. 除`careyshop`模块外，其他模块只支持单文件上传，如果需要批量上传请自行循环处理。

2. 请务必判断数组中的对象`status`字段是否为`200`，否则有可能上传失败，返回错误(`message`字段)信息。

3. 在 OSS 的概念中`path`字段即是存放资源的路径，也是资源的`系统标识`，所以不要直接拿`path`做链接。

4. 直接通过 API 接口获取OSS资源时链接会过长，这时候就可以对方法进行封装再通过参数`oss`的地址调用。

## 七牛云 KODO

#### 接口描述：
- `qiniu`模块，七牛云 KODO 直传方式上传。

#### 请求 URL：
- 可通过[「获取上传地址」](https://doc.careyshop.cn/docs/admin_api/a-21523337928 "「获取上传地址」")或[「获取上传Token」](https://doc.careyshop.cn/docs/admin_api/a-21523337935 "「获取上传Token」")获取。
- 示例地址 `https://upload-jjh.qiniup.com`

#### 请求方式：
- POST

#### 是否授权：
- 需要授权

#### 请求参数：
![](https://doc.careyshop.cn/uploads/201805/admin_api/attach_1532d7f1f324de8b.png)

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|描述|
|:-----|:-----|:---:|-----|
|parent_id |integer |是 |所属资源编号 |
|name |string |是 |资源名称(来自于参数`x:filename`) |
|ext |string |是 |资源后缀 |
|size |string |是 |资源大小 |
|pixel |array |否 |资源像素，非图片资源则为空 |
|hash |string |是 |资源Hash值 |
|path |string |是 |资源内部路径(资源标识) |
|url |string |是 |资源外链地址 |
|protocol |string |是 |资源协议(模块名) |
|type |integer |是 |资源类型 0=图片 1=附件 2=目录 |
|create_time |datetime |是 |创建时间 |
|update_time |datetime |是 |更新时间 |
|storage_id |integer |是 |资源编号 |
|status |integer |是 |是否上传成功 200=成功 其他=失败 |
|oss |string |是 |OSS调用地址 |

#### 响应示例：
```json
{
    "data": [
        {
            "create_time": "2018-05-28 23:16:23",
            "ext": "png",
            "hash": "FsTb_ViY80HaBcUQKFP6iwAZzWy3",
            "name": "1.png",
            "parent_id": 0,
            "pixel": {
                "height": 386,
                "width": 855
            },
            "protocol": "qiniu",
            "size": 36027,
            "status": 200,
            "storage_id": 50,
            "type": 0,
            "update_time": "2018-05-28 23:16:23",
            "path": "uploads/files/20180528/6e60853dedfcfdf0.png",
            "url": "p2oo9yitf.bkt.clouddn.com/uploads/files/20180528/6e60853dedfcfdf0.png?type=qiniu",
            "oss": "careyshop.cn/oss?url="
        }
    ],
    "message": "success",
    "status": 200
}
```

#### 错误响应：
```json
{
    "error": "bad token"
}
```

#### 备注:
1. 只支持单文件上传，如果需要批量上传请自行循环处理。

2. 请务必判断数组中的对象`status`字段是否为`200`，否则有可能上传失败。

3. 如上传失败，错误响应是由 OSS 服务商给出，所以和框架的结构会不同。

4. 在 OSS 的概念中`path`字段即是存放资源的路径，也是资源的`系统标识`，所以不要直接拿`path`做链接。

5. 直接通过 API 接口获取OSS资源时链接会过长，这时候就可以对方法进行封装再通过参数`oss`的地址调用。

6. 技术文档请参阅 https://developer.qiniu.com/kodo

7. 错误响应明细请参阅 https://developer.qiniu.com/kodo/api/3928/error-responses

## 阿里云 OSS

#### 接口描述：
- `aliyun`模块，阿里云 OSS 直传方式上传。

#### 请求 URL：
- 可通过[「获取上传地址」](https://doc.careyshop.cn/docs/admin_api/a-21523337928 "「获取上传地址」")或[「获取上传Token」](https://doc.careyshop.cn/docs/admin_api/a-21523337935 "「获取上传Token」")获取。
- 示例地址 `http://careyshop.oss-cn-hangzhou.aliyuncs.com/`

#### 请求方式：
- POST

#### 是否授权：
- 需要授权

#### 请求参数：
![](https://doc.careyshop.cn/uploads/201805/admin_api/attach_1532d81ddd47adbd.png)

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|描述|
|:-----|:-----|:---:|-----|
|parent_id |integer |是 |所属资源编号 |
|name |string |是 |资源名称(来自于参数`x:filename`) |
|ext |string |是 |资源后缀 |
|size |string |是 |资源大小 |
|pixel |array |否 |资源像素，非图片资源则为空 |
|hash |string |是 |资源Hash值 |
|path |string |是 |资源内部路径(资源标识) |
|url |string |是 |资源外链地址 |
|protocol |string |是 |资源协议(模块名) |
|type |integer |是 |资源类型 0=图片 1=附件 2=目录 |
|create_time |datetime |是 |创建时间 |
|update_time |datetime |是 |更新时间 |
|storage_id |integer |是 |资源编号 |
|status |integer |是 |是否上传成功 200=成功 其他=失败 |
|oss |string |是 |OSS调用地址 |

#### 响应示例：
```json
{
    "status": 200,
    "message": "success",
    "data": [
        {
            "parent_id": 0,
            "name": "3a220004b7106964.png",
            "ext": "png",
            "size": 40295,
            "pixel": {
                "width": 855,
                "height": 419
            },
            "hash": "4D5336213F769F2FC3D93A57F2E3E4ED",
            "path": "uploads/files/20180528/3a220004b7106964.png",
            "url": "careyshop.oss-cn-hangzhou.aliyuncs.com/uploads/files/20180528/3a220004b7106964.png?type=aliyun",
            "protocol": "aliyun",
            "type": 0,
            "create_time": "2018-05-28 23:20:31",
            "update_time": "2018-05-28 23:20:31",
            "storage_id": 51,
            "status": 200,
            "oss": "careyshop.cn/oss?url="
        }
    ]
}
```

#### 错误响应：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Error>
  <Code>InvalidArgument</Code>
  <Message>The callback configuration is not base64 encoded.</Message>
  <RequestId>5B0C2EABB47FB8B8E56FF451</RequestId>
  <HostId>careyshop.oss-cn-hangzhou.aliyuncs.com</HostId>
  <ArgumentName>callback</ArgumentName>
 <ArgumentValue>eyJjYWxsYmFja1VybCI6Imh0dHBzOlC9jYXJleXNob3AuY25cL2FwaVwvdjFcL3VwbG9hZFwvbWV0aG9kXC9wdXQudXBsb2FkLmRhdGFcL21vZHVsZVwvYWxpeXVuLmh0bWwiLCJjYWxsYmFja0JvZHkiOiJyZXBsYWNlPSR7eDpyZXBsYWNlfSZwYXJlbnRfaWQ9JHt4OnBhcmVudF9pZH0mZmlsZW5hbWU9JHt4OmZpbGVuYW1lfSZtaW1lPSR7bWltZVR5cGV9JnNpemU9JHtzaXplfSZ3aWR0aD0ke2ltYWdlSW5mby53aWR0aH0maGVpZ2h0PSR7aW1hZ2VJbmZvLmhlaWdodH0mcGF0aD0ke29iamVjdH0maGFzaD0ke2V0YWd9IiwiY2FsbGJhY2tCb2R5VHlwZSI6ImFwcGxpY2F0aW9uXC94LXd3dy1mb3JtLXVybGVuY29kZWQifQ==</ArgumentValue>
</Error>
```

#### 备注:
1. 只支持单文件上传，如果需要批量上传请自行循环处理。

2. 请务必判断数组中的对象`status`字段是否为`200`，否则有可能上传失败。

3. 如上传失败，错误响应是由 OSS 服务商给出，所以和框架的结构会不同。

4. 在 OSS 的概念中`path`字段即是存放资源的路径，也是资源的`系统标识`，所以不要直接拿`path`做链接。

5. 直接通过 API 接口获取OSS资源时链接会过长，这时候就可以对方法进行封装再通过参数`oss`的地址调用。

6. 技术文档请参阅 https://help.aliyun.com/document_detail/31827.html

7. 错误响应明细请参阅 https://help.aliyun.com/document_detail/32005.html