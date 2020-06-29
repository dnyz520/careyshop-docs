# 批量删除或恢复商品(回收站)

#### 接口描述：
- 批量删除或恢复商品(回收站)。

#### 请求 URL：
- `http|https://host/api/v1/goods/method/del.goods.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|goods_id |integer |是 |gt[]:0 | |[1,2,3] |商品编号 |
|is_delete |integer |是 |in:0,1 | |0 |商品状态 0=正常 1=回收 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |boolean |是 |true |返回 true 表示执行成功 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": true
}
```

#### 备注:
无