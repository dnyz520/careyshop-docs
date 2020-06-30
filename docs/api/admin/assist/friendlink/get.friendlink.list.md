# 获取友情链接列表

#### 接口描述：
- 获取友情链接列表。

#### 请求 URL：
- `http|https://host/api/v1/friend_link/method/get.friendlink.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|name |string |否 |max:50 | |carey |友情链接名称 |
|status |integer |否 |in:0,1 | |1 |友情链接状态 0=禁用 1=启用 |
|order_type |string |否 |in:asc,desc |asc |desc |排序方式 |
|order_field |string |否 |见附属 A |friend_link_id |status |排序字段 |

> 附属 A：
in:friend_link_id,name,sort,status

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|friend_link_id |integer |是 |1 |友情链接编号 |
|name |string |是 |CareyShop |友情链接名称 |
|url |string |是 |http://carey.shop |友情链接Url |
|logo |string |是 |//logo.png |友情链接Logo |
|target |string |是 |_blank |打开方式 |
|sort |integer |是 |0 |友情链接排序值 |
|status |integer |是 |1 |友情链接状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "friend_link_id": 1,
      "name": "CareyShop",
      "url": "http://carey.shop",
      "logo": "//logo.png",
      "target": "_blank",
      "sort": 0,
      "status": 1
    },
    {
      "friend_link_id": 2,
      "name": "ThinkPHP",
      "url": "http://www.thinkphp.cn",
      "logo": "//logo.png",
      "target": "_blank",
      "sort": 50,
      "status": 1
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。