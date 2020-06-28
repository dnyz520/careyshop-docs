# 获取指定Id下的所有子节点(包含本身)

#### 接口描述：
- 获取指定Id下的所有子节点(包含本身)。

#### 请求 URL：
- `http|https://host/api/v1/region/method/get.region.son.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|region_id |integer |是 |gt[]:0 | |[123,125] |区域编号 |
|region_all |integer |否 |in:0,1 |0 |0 |包括已删除区域 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|region_id |integer |是 |123 |区域编号 |
|parent_id |integer |是 |12 |父区域编号 |
|region_name |string |是 |杭州市 |区域名称 |
|sort |integer |是 |50 |区域排序值 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "region_id": 123,
      "parent_id": 12,
      "region_name": "杭州市",
      "sort": 50
    },
    {
      "region_id": 1362,
      "parent_id": 123,
      "region_name": "上城区",
      "sort": 50
    },
    {
      "region_id": 1363,
      "parent_id": 123,
      "region_name": "下城区",
      "sort": 50
    },
    {
      "region_id": 1364,
      "parent_id": 123,
      "region_name": "江干区",
      "sort": 50
    },
    {
      "region_id": 1365,
      "parent_id": 123,
      "region_name": "拱墅区",
      "sort": 50
    },
    {
      "region_id": 1366,
      "parent_id": 123,
      "region_name": "西湖区",
      "sort": 50
    },
    {
      "region_id": 1367,
      "parent_id": 123,
      "region_name": "滨江区",
      "sort": 50
    },
    {
      "region_id": 1368,
      "parent_id": 123,
      "region_name": "萧山区",
      "sort": 50
    },
    {
      "region_id": 1369,
      "parent_id": 123,
      "region_name": "余杭区",
      "sort": 50
    },
    {
      "region_id": 1370,
      "parent_id": 123,
      "region_name": "桐庐县",
      "sort": 50
    },
    {
      "region_id": 1371,
      "parent_id": 123,
      "region_name": "淳安县",
      "sort": 50
    },
    {
      "region_id": 1372,
      "parent_id": 123,
      "region_name": "建德市",
      "sort": 50
    },
    {
      "region_id": 1373,
      "parent_id": 123,
      "region_name": "富阳区",
      "sort": 50
    },
    {
      "region_id": 1374,
      "parent_id": 123,
      "region_name": "临安市",
      "sort": 50
    },
    {
      "region_id": 1375,
      "parent_id": 123,
      "region_name": "其它区",
      "sort": 50
    },
    {
      "region_id": 125,
      "parent_id": 12,
      "region_name": "温州市",
      "sort": 50
    },
    {
      "region_id": 1388,
      "parent_id": 125,
      "region_name": "鹿城区",
      "sort": 50
    },
    {
      "region_id": 1389,
      "parent_id": 125,
      "region_name": "龙湾区",
      "sort": 50
    },
    {
      "region_id": 1390,
      "parent_id": 125,
      "region_name": "瓯海区",
      "sort": 50
    },
    {
      "region_id": 1391,
      "parent_id": 125,
      "region_name": "洞头县",
      "sort": 50
    },
    {
      "region_id": 1392,
      "parent_id": 125,
      "region_name": "永嘉县",
      "sort": 50
    },
    {
      "region_id": 1393,
      "parent_id": 125,
      "region_name": "平阳县",
      "sort": 50
    },
    {
      "region_id": 1394,
      "parent_id": 125,
      "region_name": "苍南县",
      "sort": 50
    },
    {
      "region_id": 1395,
      "parent_id": 125,
      "region_name": "文成县",
      "sort": 50
    },
    {
      "region_id": 1396,
      "parent_id": 125,
      "region_name": "泰顺县",
      "sort": 50
    },
    {
      "region_id": 1397,
      "parent_id": 125,
      "region_name": "瑞安市",
      "sort": 50
    },
    {
      "region_id": 1398,
      "parent_id": 125,
      "region_name": "乐清市",
      "sort": 50
    },
    {
      "region_id": 1399,
      "parent_id": 125,
      "region_name": "其它区",
      "sort": 50
    }
  ]
}
```

#### 备注:
无