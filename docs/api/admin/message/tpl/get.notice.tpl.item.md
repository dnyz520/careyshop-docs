# 获取一个通知系统模板

#### 接口描述：
- 获取一个通知系统模板。

#### 请求 URL：
- `http|https://host/api/v1/notice_tpl/method/get.notice.tpl.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|notice_tpl_id |integer |是 |gt:0 | |1 |通知系统模板编号 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |否 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|notice_tpl_id |integer |是 |3 |通知系统模板编号 |
|name |string |是 |充值成功 |通知系统模板名称 |
|code |string |是 |sms |通知系统编码 sms=短信 email=邮件 |
|type |integer |是 |2 |通知类型，详见[「Type常量」](https://doc.careyshop.cn/docs/admin_api/a-21528214476 "「Type常量」") |
|sms_code |string |是 |SMS_126357840 |阿里云短信模板编号 |
|title |string |是 |欧瑞 |标题或签名 |
|template |string |是 |{商城名称} |通知系统模板 |
|status |integer |是 |1 |模板是否启用 0=禁用 1=启用 |
|get_notice_item |array |是 |[] |通知系统可用变量数组 |

|get_notice_item|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|item_name |string |是 |{商城名称} |可用变量名称 |
|replace_name |string |是 |code |可用变量 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "notice_tpl_id": 3,
    "name": "充值成功",
    "code": "sms",
    "type": 2,
    "sms_code": "",
    "title": "欧瑞",
    "template": "",
    "status": 1,
    "get_notice_item": [
      {
        "item_name": "{商城名称}",
        "replace_name": "shop_name"
      },
      {
        "item_name": "{用户账号}",
        "replace_name": "user_name"
      },
      {
        "item_name": "{用户昵称}",
        "replace_name": "nick_name"
      },
      {
        "item_name": "{充值金额}",
        "replace_name": "recharge_money"
      }
    ]
  }
}
```

#### 备注:
1. 短信与邮件共用同一个结构，所以返回时存在多余字段则按需索取。

2. 返回字段`code`值为`sms`时，字段`title`表示短信签名，否则表示邮件标题。

## Type常量(通知类型)

#### 常量值：
通知类型的`type`在框架中进行了固定，具体值的代表含义详见如下：

```php
    /**
     * 通用验证
     * @var int
     */
    const CAPTCHA = 0;

    /**
     * 注册成功
     * @var int
     */
    const REGISTER = 1;

    /**
     * 充值成功
     * @var int
     */
    const RECHARGE = 2;

    /**
     * 确认订单
     * @var int
     */
    const CONFIRM_ORDER = 3;

    /**
     * 付款成功
     * @var int
     */
    const PAY_ORDER = 4;

    /**
     * 下单成功
     * @var int
     */
    const PICKING_ORDER = 5;

    /**
     * 订单发货
     * @var int
     */
    const DELIVERY_ORDER = 6;
```

#### 使用示例：
`Notice::CAPTCHA`，其中`Notice`是类名，如果不在框架内使用请另行定义。