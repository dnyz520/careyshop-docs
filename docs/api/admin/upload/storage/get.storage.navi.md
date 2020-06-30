# 获取导航数据

#### 接口描述：
- 获取导航数据。

#### 请求 URL：
- `http|https://host/api/v1/storage/method/get.storage.navi/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|storage_id |integer |否 |egt:0 | |2 |资源编号 |
|is_layer |integer |否 |in:0,1 |1 |1 |是否返回本级 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|storage_id |integer |是 |1 |资源编号 |
|parent_id |integer |是 |0 |所属资源编号 |
|name |string |是 |默认文件夹 |资源名称 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "storage_id": 1,
      "parent_id": 0,
      "name": "默认文件夹"
    },
    {
      "storage_id": 2,
      "parent_id": 1,
      "name": "子文件夹"
    }
  ]
}
```

#### 备注:
无