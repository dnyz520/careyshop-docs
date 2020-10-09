# 系统常量

## 系统常量
```php
APP_PUBLIC_PATH             // 共有静态文件目录
ADMIN_MODULE                // 后台管理入口

AUTH_SUPER_ADMINISTRATOR    // 超级管理员
AUTH_ADMINISTRATOR          // 普通管理员
AUTH_CLIENT                 // 顾客组
AUTH_GUEST                  // 游客组
```

## 类成员常量
```php
Ask::ASK_TYPT_THEME                          // 主题
Ask::ASK_TYPT_ASK                            // 提问
Ask::ASK_TYPT_ANSWER                         // 回答

GoodsComment::COMMENT_TYPE_MAIN              // 主评论
GoodsComment::COMMENT_TYPE_MAIN_REPLY        // 主评论回复
GoodsComment::COMMENT_TYPE_ADDITION          // 追加评论
GoodsComment::COMMENT_TYPE_ADDITION_REPLY    // 追加评论回复

Notice::CAPTCHA                              // 通用验证
Notice::REGISTER                             // 注册成功
Notice::RECHARGE                             // 充值成功
Notice::CONFIRM_ORDER                        // 确认订单
Notice::PAY_ORDER                            // 付款成功
Notice::PICKING_ORDER                        // 下单成功
Notice::DELIVERY_ORDER                       // 订单发货

Payment::PAYMENT_CODE_USER                   // 账号资金
Payment::PAYMENT_CODE_COD                    // 货到付款
Payment::PAYMENT_CODE_ALIPAY                 // 支付宝
Payment::PAYMENT_CODE_WECHAT                 // 微信支付
Payment::PAYMENT_CODE_BANK                   // 银行转账
Payment::PAYMENT_CODE_CARD                   // 购物卡
Payment::PAYMENT_CODE_OTHER                  // 其他

Transaction::TRANSACTION_INCOME              // 收入
Transaction::TRANSACTION_EXPENDITURE         // 支出

UserAddress::ADDRESS_COUNT_MAX               // 最大添加数量

WithdrawUser::WITHDRAWUSER_COUNT_MAX         // 最大添加数量
```