# 获取导航列表

#### 接口描述：
- 获取导航列表。

#### 请求 URL：
- `http|https://host/api/v1/navigation/method/get.navigation.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|order_type |string |否 |in:asc,desc |asc |desc |排序方式 |
|order_field |string |否 |见附属 A |navigation_id |status |排序字段 |

> 附属 A：
in:navigation_id,name,target,sort,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|navigation_id |integer |是 |10 |导航编号 |
|name |string |是 |团购 |导航名称 |
|url |string |是 |//careyshop.cn |导航链接 |
|target |string |是 |&#95;blank |打开方式 |
|sort |integer |是 |50 |导航排序值 |
|status |integer |是 |1 |导航是否启用 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "navigation_id": 10,
      "name": "团购",
      "url": "//careyshop.cn",
      "target": "_blank",
      "sort": 50,
      "status": 1
    },
    {
      "navigation_id": 11,
      "name": "秒杀",
      "url": "//careyshop.cn",
      "target": "_blank",
      "sort": 50,
      "status": 1
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。