# 调整最优状态(正式环境有效)

#### 接口描述：
- 调整最优状态(正式环境有效)。

#### 请求 URL：
- `http|https://host/api/v1/index/method/set.system.optimize/`

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
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|$id |string |否 |autoload:Succeed! |执行结果 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    "autoload:Succeed!",
    "route:Succeed!",
    "config:Succeed!",
    "config_api:Succeed!",
    "schema:Succeed!"
  ]
}
```

#### 备注:
无