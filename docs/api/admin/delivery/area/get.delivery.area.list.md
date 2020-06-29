# 获取配送区域列表

#### 接口描述：
- 获取配送区域列表。

#### 请求 URL：
- `http|https://host/api/v1/delivery_area/method/get.delivery.area.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|delivery_id |integer |是 |gt:0 | |9 |配送方式编号 |
|name |string |否 |max:50 | |江浙沪 |配送区域名称 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |是 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|delivery_area_id |integer |是 |16 |配送区域编号 |
|name |string |是 |江浙沪 |配送区域名称 |
|region |array |是 |[] |所辖区域数组 |
|first_weight_price |number |是 |8 |首重运费 |
|second_weight_price |number |是 |4.5 |续重运费 |
|first_item_price |number |是 |0 |首件运费 |
|second_item_price |number |是 |0 |续件运费 |
|first_volume_price |number |是 |0 |首体积运费 |
|second_volume_price |number |是 |0 |续体积运费 |

|region|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |上海 |区域名称 |
|region_id |integer |是 |10 |区域编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "delivery_area_id": 0,
      "name": "默认",
      "region": {
        "name": "配送其他区域",
        "region_id": 0
      },
      "first_weight_price": 8.1,
      "second_weight_price": 5,
      "first_item_price": 8,
      "second_item_price": 5,
      "first_volume_price": 10,
      "second_volume_price": 5
    },
    {
      "delivery_area_id": 16,
      "name": "江浙沪",
      "region": [
        {
          "name": "上海",
          "region_id": 10
        },
        {
          "name": "江苏省",
          "region_id": 11
        },
        {
          "name": "浙江省",
          "region_id": 12
        }
      ],
      "first_weight_price": 8,
      "second_weight_price": 4.5,
      "first_item_price": 0,
      "second_item_price": 0,
      "first_volume_price": 0,
      "second_volume_price": 0
    },
    {
      "delivery_area_id": 21,
      "name": "华北",
      "region": [
        {
          "name": "北京",
          "region_id": 2
        },
        {
          "name": "天津",
          "region_id": 3
        }
      ],
      "first_weight_price": 8,
      "second_weight_price": 4.5,
      "first_item_price": 0,
      "second_item_price": 0,
      "first_volume_price": 0,
      "second_volume_price": 0
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。

2. 每个`配送方式`都存在一个`默认`，查询运费时在`配送区域`中找不到`所辖区域`，那么将使用`配送方式`来计算运费。