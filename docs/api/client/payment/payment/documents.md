# 相关文档

## Code常量(支付方式)

#### 常量值：
支付方式的`code`在框架中进行了固定，具体值的代表含义详见如下：

```php
    /**
     * 账号资金
     * @var int
     */
    const PAYMENT_CODE_USER = 0;

    /**
     * 货到付款
     * @var int
     */
    const PAYMENT_CODE_COD = 1;

    /**
     * 支付宝
     * @var int
     */
    const PAYMENT_CODE_ALIPAY = 2;

    /**
     * 微信支付
     * @var int
     */
    const PAYMENT_CODE_WECHAT = 3;

    /**
     * 银行转账
     * @var int
     */
    const PAYMENT_CODE_BANK = 4;

    /**
     * 购物卡
     * @var int
     */
    const PAYMENT_CODE_CARD = 5;

    /**
     * 其他
     * @var int
     */
    const PAYMENT_CODE_OTHER = 6;
```

#### 使用示例：
`Payment::PAYMENT_CODE_ALIPAY`，其中`Payment`是类名，如果不在框架内使用请另行定义。

## Model模块驱动

#### 目前存在的驱动模块：
```
cod=货到付款
alipay=支付宝
weixin=微信支付
```
