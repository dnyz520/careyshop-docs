# 调用接口

## 请求方式
调用接口参考 REST API 架构进行设计，但考虑到商城系统的业务模块多和业务接口复杂等情况，也为了减少使用者学习成本与降低理解难度，框架系统并非采用标准的 REST 协议，所以请求方式只支持：
+ GET
+ POST

## 访问入口
URL 地址支持二种访问方式：兼容模式与 PATH_INFO。

1. 兼容模式：
`http|https://host/api/v1/app?参数名=参数值&...`   
例如:
`http|https://host/api/v1/app?method=set.app.item&app_name=IOS`

2. PATH_INFO：
`http|https://host/api/v1/app/[参数名/参数值...]`   
例如:
`http|https://host/api/v1/app/method/set.app.item/app_name/IOS`

**入口规则：**

|规则  |说明    |
| ------------ | ------------ |
|host   |主机地址   |
|api   |模块名   |
|v1   |API 版本号，关于接口版本号参见[「CareyShop 完全开发手册」](/guide/version/ "「CareyShop 完全开发手册」")|
|app   |控制器   |

> 入口规则顺序不可调换，除以上规则外其余都属于请求参数。

## 请求参数
一个完整的接口请求流程：访问入口 -> 请求头 -> 公共参数 -> 业务参数 -> 响应请求；  
除了`访问入口`，其他已在 [公共请求](../common/ "公共请求") 与 [响应请求](../response/ "响应请求") 篇章中说明，此处只做下补充说明。

URL + 参数的各种组合：
1. 所有参数跟在 URL 地址后面；
2. 所有参数放在 HTTP Body 体中；
3. 公共参数跟在 URL 地址中，业务参数放在 HTTP Body 体中；

::: tip 提示
* 如果您使用`raw`方式提交数据，则必须是 JSON 数据格式。   
* 在接口文档中，如果`是否必须`一栏被标注为`是`时，该参数必须填写，否则可填可不填。   
* 参数有被标注为`(自定义)`时说明此参数对框架无意义，值的意义由前端进行协商定义。
:::

## 调用示例
URL 地址使用`PATH_INFO`访问方式，向`AppInstall`控制器`POST`请求，业务方法是`get.app.install.list`，数据如下：

|入口   |   |
| ------------ | ------------ |
|host          |https://api.careyshop.cn/   |
|模块名         |api|
|版本号         |v1|
|控制器         |AppInstall|

|公共参数   |   |
| ------------ | ------------ |
|appkey   |12345678   |
|token   |test   |
|sign   |694d5cee85def32fac63bd6c1896c41c   |
|timestamp   |1523553249   |
|format   |json   |
|method   |get.app.install.list   |

|业务参数   |   |
| ------------ | ------------ |
|user_agent   |iphone   |
|order_field   |create_time   |

组装后最终 URL 地址是
```
https://api.careyshop.cn/api/v1/app_install
```

HTTP Body 体中的数据
```json
{
    "appkey": "12345678",
    "token": "test",
    "sign": "694d5cee85def32fac63bd6c1896c41c",
    "timestamp": "1523553249",
    "format": "json",
    "method": "get.app.install.list",
    "user_agent": "iphone",
    "order_field": "create_time"
}
```

返回数据
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "app_install_id": 5,
        "user_agent": "iphone",
        "name": "IOS安装包",
        "ver": "1.10.10",
        "url": "http://www.baidu.com",
        "count": 0,
        "create_time": "2018-03-10 00:43:38",
        "update_time": "2018-03-10 00:43:38"
      },
      {
        "app_install_id": 2,
        "user_agent": "iphone",
        "name": "IOS安装包",
        "ver": "1.2.0",
        "url": "http://www.baidu.com",
        "count": 0,
        "create_time": "2018-03-10 00:41:19",
        "update_time": "2018-03-10 00:41:19"
      },
      {
        "app_install_id": 1,
        "user_agent": "iphone",
        "name": "IOS安装包",
        "ver": "1.1.0",
        "url": "http://www.baidu.com",
        "count": 0,
        "create_time": "2018-03-10 00:40:50",
        "update_time": "2018-03-10 00:40:50"
      }
    ],
    "total_result": 3
  }
}
```
