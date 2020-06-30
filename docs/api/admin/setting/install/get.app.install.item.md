# 获取一个应用安装包

#### 接口描述：
- 获取一个应用安装包。

#### 请求 URL：
- `http|https://host/api/v1/app_install/method/get.app.install.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|app_install_id |integer |是 |gt:0 | |1 |应用安装包编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|app_install_id |integer |是 |1 |应用安装包编号 |
|user_agent |string |是 |iphone |系统标识 |
|name |string |是 |IPhone |应用安装包名称 |
|ver |string |是 |1.1.1.0 |应用安装包版本号 |
|url |string |是 |itms-apps://host/id1?mt=8 |应用安装包协议地址 |
|count |integer |是 |0 |访问次数 |
|create_time |datetime |是 |2018-06-07 13:55:41 |创建时间 |
|update_time |datetime |是 |2018-06-07 14:25:23 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "app_install_id": 1,
    "user_agent": "iphone",
    "name": "IPhone",
    "ver": "1.1.1.0",
    "url": "itms-apps://host/id1?mt=8",
    "count": 0,
    "create_time": "2018-06-07 13:55:41",
    "update_time": "2018-06-07 14:25:23"
  }
}
```

#### 备注:
无