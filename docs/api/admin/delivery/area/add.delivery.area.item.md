# 添加一个配送区域

#### 接口描述：
- 添加一个配送区域。

#### 请求 URL：
- `http|https://host/api/v1/delivery_area/method/add.delivery.area.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|delivery_id |integer |是 |gt:0 | |9 |配送方式编号 |
|name |string |是 |max:50 | |江浙沪 |配送区域名称 |
|region |integer |否 |gt[]:0 | |[10,11,12] |所辖区域(region_id 区域编号) |
|first_weight_price |number |是 |egt:0 | |8.00 |首重运费 |
|second_weight_price |number |是 |egt:0 | |4.50 |续重运费 |
|first_item_price |number |是 |egt:0 | |0 |首件运费 |
|second_item_price |number |是 |egt:0 | |0 |续件运费 |
|first_volume_price |number |是 |egt:0 | |0 |首体积运费 |
|second_volume_price |number |是 |egt:0 | |0 |续体积运费 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |江浙沪 |配送区域名称 |
|region |array |否 |[] |所辖区域数组 |
|first_weight_price |number |是 |8 |首重运费 |
|second_weight_price |number |是 |4.5 |续重运费 |
|first_item_price |number |是 |0 |首件运费 |
|second_item_price |number |是 |0 |续件运费 |
|first_volume_price |number |是 |0 |首体积运费 |
|second_volume_price |number |是 |0 |续体积运费 |
|delivery_area_id |integer |是 |16 |配送区域编号 |

|region|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |是 |上海 |区域名称 |
|region_id |integer |是 |10 |区域编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
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
    "second_volume_price": 0,
    "delivery_area_id": 16
  }
}
```

#### 备注:
1. `region`参数某个键值如果带有下辖区域，那么该区域的下辖区将继承其所有配置，如果某个下辖区需要单独区分费用可单独添加一个`配送区域`。

2. 在查询运费时，如果查询的区域不在`配送区域`中，那么该区域将使用`配送方式`的配置来计算运费。