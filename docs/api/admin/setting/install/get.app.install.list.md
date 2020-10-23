# 获取应用安装包列表

#### 接口描述：
- 获取应用安装包列表。

#### 请求 URL：
- `http|https://host/api/v1/app_install/method/get.app.install.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|user_agent |string |否 |max:64 | |iphone |系统标识 |
|name |string |否 |max:32 | |IPhone |应用安装包名称 |
|page_no |integer |否 |gt:0 |1 |1 |页码 |
|page_size |integer |否 |gt:0 |15 |15 |每页数量 |
|order_type |string |否 |in:asc,desc |desc |asc |排序方式 |
|order_field |string |否 |见附属 A |app_install_id |count |排序字段 |

> 附属 A：
in:app_install_id,name,count,create_time,update_time

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|items |array |否 |[] |列表项 |
|total_result |integer |是 |3 |合计计数 |

|items|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|app_install_id |integer |是 |1 |应用安装包编号 |
|user_agent |string |是 |iphone |系统标识 |
|name |string |是 |IPhone |应用安装包名称 |
|ver |string |是 |1.1.1.0 |应用安装包版本号 |
|url |string |是 |itms-apps://host/id1?mt=8 |应用安装包协议地址 |
|count |integer |是 |0 |访问次数 |
|create_time |datetime |是 |2018-06-07 13:55:45 |创建时间 |
|update_time |datetime |是 |2018-06-07 13:55:45 |更新时间 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "app_install_id": 4,
        "user_agent": "windows",
        "name": "Windows",
        "ver": "1.1.1.0",
        "url": "http://careyshop.cn",
        "count": 0,
        "create_time": "2018-06-07 14:37:44",
        "update_time": "2018-06-07 14:37:44"
      },
      {
        "app_install_id": 2,
        "user_agent": "iphone",
        "name": "IPhone",
        "ver": "1.2.1.0",
        "url": "itms-apps://host/id1?mt=8",
        "count": 0,
        "create_time": "2018-06-07 13:55:45",
        "update_time": "2018-06-07 13:55:45"
      },
      {
        "app_install_id": 1,
        "user_agent": "iphone",
        "name": "IPhone",
        "ver": "1.1.1.0",
        "url": "itms-apps://host/id1?mt=8",
        "count": 0,
        "create_time": "2018-06-07 13:55:41",
        "update_time": "2018-06-07 14:25:23"
      }
    ],
    "total_result": 3
  }
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。