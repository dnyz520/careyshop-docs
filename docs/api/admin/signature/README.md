# 签名算法

为了防止 API 调用过程中被黑客恶意篡改，调用任何一个 API 都需要携带签名，框架会根据请求参数，对签名进行验证，签名不合法的请求将会被拒绝。签名大体过程如下：
- 对所有 API 请求参数（包括公共参数和业务参数，但除去`sign`参数和`byte[]`类型的参数），根据参数名称的 ASCII 码表的顺序排序。如：`foo:1,bar:2,foo_bar:3,foobar:4`排序后的顺序是`bar:2,foo:1,foo_bar:3,foobar:4`。
- 将排序好的参数名和参数值拼装在一起，根据上面的示例得到的结果为：`bar2foo1foo_bar3foobar4`。
- 把拼装好的字符串采用`utf-8`编码，再在拼装的字符串前后加上`app_secret`，之后进行摘要，如：`md5(app_secret+bar2foo1foo_bar3foobar4+app_secret)`。

> <span style="color:#f0ad4e">MD5 是 128 位长度的摘要算法，用 16 进制表示，一个十六进制的字符能表示 4 个位，所以签名后的字符串长度固定为 32 个十六进制字符，并且需转为小写字母</span>

**PHP 签名示例代码**
```php
private function sign()
{
    // 获取app_secret
    $appSecret = "xxx";

    // 获取所有参数
    $params = $this->params;

    // 去除sign参数
    unset($this->params['sign']);

    // 将参数Key按字典顺序排序
    ksort($params);

    // 准备拼装的字符串前加入app_secret值
    $stringToBeSigned = $appSecret;

    // 取出参数名和参数值进行拼装，但过滤掉byte[]类型的参数
    foreach ($params as $k => $v) {
        if (is_string($v) && '@' != substr($v, 0, 1)) {
            $stringToBeSigned.= "$k$v";
        }
    }
    unset($k, $v);

    // 在拼装的字符串尾部加入app_secret值
    $stringToBeSigned.= $appSecret;

    // MD5摘要后返回
    return md5($stringToBeSigned);
}
```

## 调用示例
以`get.app.list`调用为例，具体步骤如下：
1. 设置参数值
	+ 公共参数：
	```
	method    = "get.app.list"
	appkey    = "12345678"
	token     = "test"
	timestamp = "1523553249"
	format    = "json"
	```
	+ 业务参数：
	```
	app_name  = "ios"
	status    = 1
	```

2. 按 ASCII 顺序排序
    ```
    app_name  = "ios"
    appkey    = "12345678"
    format    = "json"
    method    = "get.app.list"
    status    = 1
    timestamp = "1523553249"
    token     = "test"
    ```

3. 拼接参数名与参数值
    ```
    app_nameiosappkey12345678formatjsonmethodget.app.listtimestamp1523553249tokentest
    ```

4. 生成签名
假设`app_secret`的值为`careyshop`，与第 3 步的字符串再进行拼接：
    ```
    md5('careyshop' + 'app_nameiosappkey12345678formatjsonmethodget.app.listtimestamp1523553249tokentest' + 'careyshop');
    ```
    最终的签名字符串是：`694d5cee85def32fac63bd6c1896c41c`

5. 组装 HTTP 请求
将所有参数名和参数值采用`utf-8`进行`URL`编码（参数顺序可随意，但必须要包括签名参数），然后通过`GET`或`POST`（含`byte[]`类型参数）发起请求，如：
    ```
    https://host/api/v1/app/appkey/12345678/token/test/timestamp/1523553249/format/json/method/get.app.list/app_name/ios/status/1/sign/694d5cee85def32fac63bd6c1896c41c/
    ```
