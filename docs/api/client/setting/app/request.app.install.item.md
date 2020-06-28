# 根据请求获取一个应用安装包

#### 接口描述：
- 根据请求获取一个应用安装包。

#### 请求 URL：
- `http|https://host/api/v1/app_install/method/request.app.install.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

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
|app_install_id |integer |是 |1 |应用安装包编号 |
|user_agent |string |是 |iphone |系统标识 |
|ver |string |是 |1.1.1.0 |应用安装包版本号 |
|url |string |是 |itms-apps://host/cn/app/id1?mt=8 |应用安装包协议地址 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "app_install_id": 5,
    "user_agent": "windows",
    "ver": "1.2.1.0",
    "url": "http://careyshop.cn"
  }
}
```

#### 备注:
1. 字段`data`返回空值的时候识别出的标识没有可用的安装包。

2. 如果成功识别出标识，并且同个标识下有多个安装包存在只返回版本号最新的那个。

3. 系统是根据`HTTP_USER_AGENT`的值进行标识识别，`web`访问方式是自动识别，如果使用`组件(比如curl等)`请求方式，那么请准备好标识头。