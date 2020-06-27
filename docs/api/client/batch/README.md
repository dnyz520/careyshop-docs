# 批量调用

### 为什么要批量调用

**可以提高应用性能，更快的响应**
比如做一个页面需要调用 7 个不同接口拉取数据，然后渲染页面。这种情况下, 如想加快页面响应，可能会考虑并发发起 7 次调用等到数据都返回来再进行页面渲染。但是这样的编程模型对于调用者来说响应时间会比较长且调用繁琐，如果框架把 7 次调用通过内部并行的方式来完成，1 次调用返回多个数据结果，那则可以大大提高每次请求响应时间，减少网络请求的次数。

**使用更少的流量**
单次 API 调用会传重复的系统或者业务入参，比如：sign、method、timestamp、token 等参数,在很多情况下这些重复参数占用了请求体里面的大部分空间。API 批量调用可以将这些参数在协议层面上进行合并，实现参数的复用。对于移动端调用、服务端高并发调用中优化网络使用是很有帮助的。

### 批量调用特性
+ 支持目前所有安全和业务特性
+ 支持除文件上传外的所有 API 自由组合调用
+ 支持多 session 混合调用
+ 调用结果互不干扰
+ API 响应顺序和请求顺序完全一致，无需排序或按编号查询结果
+ 极速体验，M 次交易 API+N 次商品 API 调用
+ 公共参数和方法名称可进行合并，精简请求报文
+ 简单的调用协议，使用 HTTP 协议快速实现批量 API 调用

## 使用调用
1. 唯一 URL 请求地址入口，支持`GET`与`POST`，建议使用`POST`；
```
http|https://host/api/batch
```

2. 请求参数，建议使用`POST`请求，参数存放在 HTTP Body 体中，与单接口调用对比，需要去除`method`字段，增加`batch`字段，类型为`array`，每一个`object`代表一个单接口；
```json
{
    "appkey": "12345678",
    "token": "test",
    "sign": "694d5cee85def32fac63bd6c1896c41c",
    "timestamp": "1523553249",
    "format": "json",
    "batch": [
        {
            "version": "v1",
            "controller": "Order",
            "method": "timeout.order.cancel"
        },
        {
            "version": "v1",
            "controller": "Order",
            "method": "timeout.order.complete"
        }
    ]
}
```

3. `batch`字段对象参数，除了下列字段外，额外存在的将会被当做业务参数处理；
```
version：    对应单接口调用中的 `API 版本号`
controller： 对应单接口调用中的 `控制器`
method：     对应公共参数中的   `业务方法`
```

## 返回数据
批量调用接口返回的数据结构与单接口一致，需要说明的是结构体最上层的`status`字段代表批量调用状态，只有批量调用成功的状态下才会返回`data`字段。而`data`字段中的每一个`object`可以理解为多个单接口调用的集合，其中`status`字段代表改单接口的状态，每个`object`的状态都是独立的，任何其中一个失败并不会影响其他`object`。

还需要指出`data`字段中的每个`object`都是根据请求（`batch`字段）顺序排序的，并且会将`version` `controller` `method`三个字段原样输出。

```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "status": 200,
      "message": "success",
      "version": "v1",
      "controller": "Order",
      "method": "timeout.order.cancel",
      "data": true
    },
    {
      "status": 200,
      "message": "success",
      "version": "v1",
      "controller": "Order",
      "method": "timeout.order.complete",
      "data": true
    }
  ]
}
```

## 场景演示
假设现在需要将一批商品为设置热卖，并且通过搜索获取一批商品，还故意将一个接口参数设置错误，按照以往操作需要进行三次接口调用、三次签名、三次拼接参数等各种重复的操作，而现在批量调用一次就能完成。

1. 拼接参数
```json
{
    "appkey": "12345678",
    "token": "test",
    "sign": "694d5cee85def32fac63bd6c1896c41c",
    "timestamp": "1523553249",
    "format": "json",
    "batch": [
        {
            "version": "v1",
            "controller": "app",
            "method": "get.app.item"
        },
        {
            "version": "v1",
            "controller": "goods",
            "method": "set.hot.goods.list",
            "goods_id": [1,3,4,6],
            "is_hot": 1
        },
        {
            "version": "v1",
            "controller": "goods",
            "method": "get.goods.admin.list",
            "name": "编辑"
        }
    ]
}
```
2. 向`https://host/api/batch`发送请求

3. 返回数据
```json
{
    "status": 200,
    "message": "success",
    "data": [
        {
            "status": 500,
            "message": "应用编号不能为空",
            "version": "v1",
            "controller": "app",
            "method": "get.app.item",
            "data": false
        },
        {
            "status": 200,
            "message": "success",
            "version": "v1",
            "controller": "goods",
            "method": "set.hot.goods.list",
            "data": true
        },
        {
            "status": 200,
            "message": "success",
            "version": "v1",
            "controller": "goods",
            "method": "get.goods.admin.list",
            "data": {
                "items": [
                    {
                        "goods_id": 1,
                        "goods_category_id": 2,
                        "name": "编辑一个商品",
                        "short_name": "",
                        "product_name": "",
                        "goods_code": "CS73765853",
                        "goods_spu": "",
                        "goods_sku": "",
                        "bar_code": "",
                        "brand_id": 0,
                        "store_qty": 62,
                        "comment_sum": 1,
                        "sales_sum": 24,
                        "measure": 10,
                        "measure_type": 0,
                        "is_postage": 0,
                        "market_price": 150,
                        "shop_price": 10,
                        "give_integral": 150,
                        "is_integral": 1000000,
                        "least_sum": 1,
                        "purchase_sum": 0,
                        "keywords": "",
                        "description": "",
                        "content": "描述",
                        "attachment": [],
                        "video": "",
                        "unit": "",
                        "is_recommend": 0,
                        "is_new": 0,
                        "is_hot": 1,
                        "goods_type_id": 1,
                        "sort": 50,
                        "status": 1,
                        "is_delete": 0,
                        "create_time": "2017-04-20 23:59:41",
                        "update_time": "2018-04-19 00:10:58"
                    }
                ],
                "total_result": 1
            }
        }
    ]
}
```
