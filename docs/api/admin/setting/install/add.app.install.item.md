# 添加一个应用安装包

#### 接口描述：
- 添加一个应用安装包。

#### 请求 URL：
- `http|https://host/api/v1/app_install/method/add.app.install.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|user_agent |string |是 |max:64 | |iphone |系统标识 |
|name |string |是 |max:32 | |IPhone |应用安装包名称 |
|ver |string |是 |max:16 | |1.1.1.0 |应用安装包版本号 |
|url |string |是 |max:255 | |itms-apps://host/id1?mt=8 |应用安装包协议地址 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|user_agent |string |是 |iphone |系统标识 |
|name |string |是 |IPhone |应用安装包名称 |
|ver |string |是 |1.1.1.0 |应用安装包版本号 |
|url |string |是 |itms-apps://host/id1?mt=8 |应用安装包协议地址 |
|create_time |datetime |是 |2018-06-07 13:55:45 |创建时间 |
|update_time |datetime |是 |2018-06-07 13:55:45 |更新时间 |
|app_install_id |integer |是 |1 |应用安装包编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "user_agent": "iphone",
    "name": "IPhone",
    "ver": "1.1.1.0",
    "url": "itms-apps://host/id1?mt=8",
    "create_time": "2018-06-07 13:55:45",
    "update_time": "2018-06-07 13:55:45",
    "app_install_id": 1
  }
}
```

#### 备注:
1. 参数`user_agent`是各个终端系统的标识，比如 Windows 系列可以标识为`windows`，IOS 系列的可以区分为`iphone`、`ipad`等等。

2. 参数`ver`最多允许位数`0.0.0.0`。

3. 参数`url`可以是各种协议或直接下载地址，也可以是某个页面。