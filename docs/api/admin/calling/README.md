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

## 接口调试
默认状态下，当接口出现异常或错误时给出的数据结构如下
```json
{
    "status": 500,
    "message": "应用编号不能为空",
    "data": null
}
```

此时如果需要知道错误详情可在`请求参数`中增加字段`is_debug`并且赋值为`1`，系统将给出如下数据结构。

::: tip 提示
版本号 >= v1.3.0，生成环境下无效
:::

```json
{
    "code": 0,
    "message": "应用编号不能为空",
    "traces": [
        {
            "name": "think\\exception\\HttpException",
            "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\helper.php",
            "line": 53,
            "code": 0,
            "message": "应用编号不能为空",
            "trace": [
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\app\\api\\controller\\CareyShop.php",
                    "line": 582,
                    "function": "abort",
                    "args": [
                        500,
                        "应用编号不能为空"
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\app\\api\\controller\\CareyShop.php",
                    "line": 377,
                    "function": "outputError",
                    "class": "app\\api\\controller\\CareyShop",
                    "type": "->",
                    "args": [
                        "应用编号不能为空"
                    ]
                },
                {
                    "function": "index",
                    "class": "app\\api\\controller\\CareyShop",
                    "type": "->",
                    "args": []
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Container.php",
                    "line": 342,
                    "function": "invokeArgs",
                    "class": "ReflectionMethod",
                    "type": "->",
                    "args": [
                        {
                            "error": "应用编号不能为空",
                            "appkey": "76472358",
                            "appSecret": null,
                            "token": "",
                            "sign": "d0a1be55ee9d94d379caa9767d006ee7",
                            "timestamp": 1595674426,
                            "format": "json",
                            "method": "get.app.item",
                            "params": {
                                "is_debug": 1,
                                "sign": "d0a1be55ee9d94d379caa9767d006ee7"
                            },
                            "apiDebug": "1"
                        },
                        []
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\route\\dispatch\\Controller.php",
                    "line": 110,
                    "function": "invokeReflectMethod",
                    "class": "think\\Container",
                    "type": "->",
                    "args": [
                        {
                            "error": "应用编号不能为空",
                            "appkey": "76472358",
                            "appSecret": null,
                            "token": "",
                            "sign": "d0a1be55ee9d94d379caa9767d006ee7",
                            "timestamp": 1595674426,
                            "format": "json",
                            "method": "get.app.item",
                            "params": {
                                "is_debug": 1,
                                "sign": "d0a1be55ee9d94d379caa9767d006ee7"
                            },
                            "apiDebug": "1"
                        },
                        {
                            "name": "index",
                            "class": "app\\api\\controller\\CareyShop"
                        },
                        {
                            "method": "get.app.item",
                            "is_debug": 1,
                            "appkey": "76472358",
                            "timestamp": 1595674426,
                            "sign": "d0a1be55ee9d94d379caa9767d006ee7",
                            "version": "v1",
                            "controller": "app"
                        }
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Pipeline.php",
                    "line": 59,
                    "function": "think\\route\\dispatch\\{closure}",
                    "class": "think\\route\\dispatch\\Controller",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Pipeline.php",
                    "line": 65,
                    "function": "think\\{closure}",
                    "class": "think\\Pipeline",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\route\\dispatch\\Controller.php",
                    "line": 113,
                    "function": "then",
                    "class": "think\\Pipeline",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\route\\Dispatch.php",
                    "line": 89,
                    "function": "exec",
                    "class": "think\\route\\dispatch\\Controller",
                    "type": "->",
                    "args": []
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Route.php",
                    "line": 760,
                    "function": "run",
                    "class": "think\\route\\Dispatch",
                    "type": "->",
                    "args": []
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Pipeline.php",
                    "line": 59,
                    "function": "think\\{closure}",
                    "class": "think\\Route",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Pipeline.php",
                    "line": 65,
                    "function": "think\\{closure}",
                    "class": "think\\Pipeline",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Route.php",
                    "line": 761,
                    "function": "then",
                    "class": "think\\Pipeline",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Http.php",
                    "line": 210,
                    "function": "dispatch",
                    "class": "think\\Route",
                    "type": "->",
                    "args": [
                        {},
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Http.php",
                    "line": 200,
                    "function": "dispatchToRoute",
                    "class": "think\\Http",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Pipeline.php",
                    "line": 59,
                    "function": "think\\{closure}",
                    "class": "think\\Http",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\think-multi-app\\src\\MultiApp.php",
                    "line": 71,
                    "function": "think\\{closure}",
                    "class": "think\\Pipeline",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Pipeline.php",
                    "line": 59,
                    "function": "think\\app\\{closure}",
                    "class": "think\\app\\MultiApp",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Pipeline.php",
                    "line": 65,
                    "function": "think\\{closure}",
                    "class": "think\\Pipeline",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\think-multi-app\\src\\MultiApp.php",
                    "line": 72,
                    "function": "then",
                    "class": "think\\Pipeline",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "function": "handle",
                    "class": "think\\app\\MultiApp",
                    "type": "->",
                    "args": [
                        {},
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Middleware.php",
                    "line": 142,
                    "function": "call_user_func",
                    "args": [
                        [
                            {},
                            "handle"
                        ],
                        {},
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Pipeline.php",
                    "line": 84,
                    "function": "think\\{closure}",
                    "class": "think\\Middleware",
                    "type": "->",
                    "args": [
                        {},
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Pipeline.php",
                    "line": 65,
                    "function": "think\\{closure}",
                    "class": "think\\Pipeline",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Http.php",
                    "line": 201,
                    "function": "then",
                    "class": "think\\Pipeline",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\vendor\\topthink\\framework\\src\\think\\Http.php",
                    "line": 162,
                    "function": "runWithRequest",
                    "class": "think\\Http",
                    "type": "->",
                    "args": [
                        {}
                    ]
                },
                {
                    "file": "E:\\CareyShop Projects\\CareyShop\\trunk\\public\\index.php",
                    "line": 24,
                    "function": "run",
                    "class": "think\\Http",
                    "type": "->",
                    "args": []
                }
            ],
            "source": {
                "first": 44,
                "source": [
                    "     * @param integer|Response $code    状态码 或者 Response对象实例\r\n",
                    "     * @param string           $message 错误信息\r\n",
                    "     * @param array            $header  参数\r\n",
                    "     */\r\n",
                    "    function abort($code, string $message = '', array $header = [])\r\n",
                    "    {\r\n",
                    "        if ($code instanceof Response) {\r\n",
                    "            throw new HttpResponseException($code);\r\n",
                    "        } else {\r\n",
                    "            throw new HttpException($code, $message, null, $header);\r\n",
                    "        }\r\n",
                    "    }\r\n",
                    "}\r\n",
                    "\r\n",
                    "if (!function_exists('app')) {\r\n",
                    "    /**\r\n",
                    "     * 快速获取容器中的实例 支持依赖注入\r\n",
                    "     * @param string $name        类名或标识 默认获取当前应用实例\r\n",
                    "     * @param array  $args        参数\r\n"
                ]
            }
        }
    ],
    "datas": [],
    "tables": {
        "GET Data": [],
        "POST Data": {
            "method": "get.app.item",
            "is_debug": 1,
            "appkey": "76472358",
            "timestamp": 1595674426,
            "sign": "d0a1be55ee9d94d379caa9767d006ee7"
        },
        "Files": null,
        "Cookies": {
            "careyshop-lang": "en",
            "Hm_lvt_e325e60ca4cd358f2b424f5aecb8021a": "1595609487,1595613998,1595673376,1595674041",
            "Hm_lpvt_e325e60ca4cd358f2b424f5aecb8021a": "1595674041"
        },
        "Session": [],
        "Server/Request Data": {
            "PATH": "D:\\NetSarang\\Xftp 6\\;D:\\NetSarang\\Xshell 6\\;C:\\Program Files (x86)\\Intel\\iCLS Client\\;C:\\Program Files\\Intel\\iCLS Client\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files (x86)\\Intel\\Intel(R) Management Engine Components\\DAL;C:\\Program Files\\Intel\\Intel(R) Management Engine Components\\DAL;C:\\Program Files (x86)\\Intel\\Intel(R) Management Engine Components\\IPT;C:\\Program Files\\Intel\\Intel(R) Management Engine Components\\IPT;C:\\Program Files\\Intel\\WiFi\\bin\\;C:\\Program Files\\Common Files\\Intel\\WirelessCommon\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;d:\\Git\\cmd;D:\\phpStudy2018\\PHPTutorial\\php\\php-7.1.13-nts;d:\\Microsoft VS Code\\bin;d:\\UltraCompare;D:\\TortoiseGit\\bin;C:\\ProgramData\\ComposerSetup\\bin;D:\\Yarn\\bin\\;D:\\nodejs\\;C:\\WINDOWS\\system32\\config\\systemprofile\\AppData\\Local\\Microsoft\\WindowsApps",
            "SYSTEMROOT": "C:\\WINDOWS",
            "COMSPEC": "C:\\WINDOWS\\system32\\cmd.exe",
            "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC",
            "WINDIR": "C:\\WINDOWS",
            "PHP_FCGI_MAX_REQUESTS": "1000",
            "PHPRC": "D:/phpStudy2018/PHPTutorial/php/php-7.1.13-nts/",
            "_FCGI_SHUTDOWN_EVENT_": "2260",
            "SCRIPT_NAME": "/index.php",
            "REQUEST_URI": "/api/v1/app",
            "QUERY_STRING": "/api/v1/app",
            "REQUEST_METHOD": "POST",
            "SERVER_PROTOCOL": "HTTP/1.1",
            "GATEWAY_INTERFACE": "CGI/1.1",
            "REDIRECT_QUERY_STRING": "/api/v1/app",
            "REDIRECT_URL": "/api/v1/app",
            "REMOTE_PORT": "51295",
            "SCRIPT_FILENAME": "E:/CareyShop Projects/CareyShop/trunk/public/index.php",
            "SERVER_ADMIN": "admin@php.cn",
            "CONTEXT_DOCUMENT_ROOT": "E:/CareyShop Projects/CareyShop/trunk/public",
            "CONTEXT_PREFIX": "",
            "REQUEST_SCHEME": "http",
            "DOCUMENT_ROOT": "E:/CareyShop Projects/CareyShop/trunk/public",
            "REMOTE_ADDR": "127.0.0.1",
            "SERVER_PORT": "80",
            "SERVER_ADDR": "127.0.0.1",
            "SERVER_NAME": "careyshop.oruei.com",
            "SERVER_SOFTWARE": "Apache/2.4.23 (Win32) OpenSSL/1.0.2j mod_fcgid/2.3.9",
            "SERVER_SIGNATURE": "",
            "SystemRoot": "C:\\WINDOWS",
            "HTTP_COOKIE": "careyshop-lang=en; Hm_lvt_e325e60ca4cd358f2b424f5aecb8021a=1595609487,1595613998,1595673376,1595674041; Hm_lpvt_e325e60ca4cd358f2b424f5aecb8021a=1595674041",
            "HTTP_ACCEPT_LANGUAGE": "zh-CN,zh;q=0.9",
            "HTTP_ACCEPT_ENCODING": "gzip, deflate",
            "HTTP_REFERER": "http://careyshop.oruei.com/api",
            "HTTP_ORIGIN": "http://careyshop.oruei.com",
            "CONTENT_TYPE": "application/json;charset=UTF-8",
            "HTTP_USER_AGENT": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36",
            "HTTP_DNT": "1",
            "HTTP_ACCEPT": "application/json, text/plain, */*",
            "CONTENT_LENGTH": "123",
            "HTTP_CONNECTION": "close",
            "HTTP_HOST": "careyshop.oruei.com",
            "REDIRECT_STATUS": "200",
            "FCGI_ROLE": "RESPONDER",
            "PHP_SELF": "/index.php",
            "REQUEST_TIME_FLOAT": 1595674326.40294,
            "REQUEST_TIME": 1595674326
        }
    }
}
```

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
