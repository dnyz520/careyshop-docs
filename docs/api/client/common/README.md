# 公共请求

## 请求头
- 使用`raw`方式请传递`application/json; charset=utf-8`
- 使用`form`方式请传递`application/x-www-form-urlencoded`

|参数名|类型|是否必须|描述|
|:----|:-----|:---:|-----|
|Content-Type|string|是|内容类型|

## 公共参数
- 公共参数是指每个接口都需要使用到的请求参数，在接口文档中注释了「需要授权」则必须传，否则可以不传。
- 文档中注释的「需要授权」并非绝对，而是根据框架默认设置的参数编写，您可以通过`权限`进行调整。
- <span style="color:#f0ad4e">在 API 模块配置文件中有一个`api_debug`参数，当值为`true`时表示是 API 调试模式，此时可以不传。</span>

|参数名|类型|是否必须|默认值|描述|
|:----|:---|:-----:|-----|-----|
|appkey |string |是 | |应用的 appkey，具体请参见`管理组 API`的 [应用列表](https://olddoc.careyshop.cn/docs/admin_api/a-21523288726 "应用列表")|
|token |string |是 | |账号登录授权成功后，颁发给应用的授权信息，具体请参见 [权限](https://olddoc.careyshop.cn/docs/client_api/a-18991782559 "权限")|
|sign |string |是 | |API 输入参数签名结果，签名算法请参见 [签名](https://olddoc.careyshop.cn/docs/client_api/a-44381536327 "签名") |
|timestamp |string |是 | |请求时间戳，时区 GMT+8，例如：1523553249 最大误差为 10 分钟。 |
|format |string |否 |json |响应格式。可选值：json，jsonp，xml|
|method |string |是 | |业务方法，每个接口的业务方法都不同，具体请参考文档。|

> <span style="color:#d9534f">注意：不传入`token`值表示以游客的权限进行接口调用，接口如果支持则会返回数据。</span>

<p />

> 当`format`参数为`jsonp`时，默认处理方式返回`jsonpReturn`，如需自定义处理方式，需要额外添加`callback`参数，参数的值就是返回的处理方式。

<p />

> 参数`method`虽然属于公共参数，但建议包含在 HTTP Body 体中，与`业务参数`一起请求，这样业务逻辑会清楚很多。

## 业务参数
- API 调用除了必须包含公共参数外，如果 API 本身有业务级的参数也必须传入，每个 API 的业务级参数请考文档说明。

## 公共返回
- 客户端发送的每次调用请求，无论成功与否，系统都会返回数据。

`json`示例
```json
{
    "status": 200,
    "message": "success",
    "data": {}
}
```

`jsonp`示例
```javascript
jsonpReturn({"status":200,"message":"success","data":{}});
```

`xml`示例
```xml
<?xml version="1.0" encoding="utf-8"?>
<careyshop>
  <status>200</status>
  <message>success</message>
  <data></data>
</careyshop>
```

- `status`状态码，200 表示成功，其他表示失败。
- `message`消息信息，成功返回`success`，失败将提示失败原因。
- `data`响应的数据，只有在请求成功时会存在该字段。

## 注意事项
+ 所有的请求和响应数据编码皆为`utf-8`格式，URL 里的所有参数名和参数值请做 URL 编码。
	+ 如果是`application/x-www-form-urlencoded`，则 HTTP Body 体里的所有参数值也做 URL 编码；
	+ 如果是`application/json; charset=utf-8`，则无需编码，但`charset`部分需要指定为`utf-8`；
+ 参数名与参数值拼装起来的 URL 长度小于`1024`个字符时，可以用`GET`发起请求，否则必须使用`POST`。
+ 部分接口在请求时对`format`参数设置了值也不会生效，这类接口通常是「异步请求」或「功能接口」，比如第三方支付的异步或二维码的生成，这类接口的返回格式由框架决定。