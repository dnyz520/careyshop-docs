# 获取通知系统模板列表

#### 接口描述：
- 获取通知系统模板列表。

#### 请求 URL：
- `http|https://host/api/v1/notice_tpl/method/get.notice.tpl.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|code |string |是 |in:sms,email | |email |通知系统编码 sms=短信 email=邮件 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|notice_tpl_id |integer |是 |8 |通知系统模板编号 |
|name |string |是 |通用验证 |通知系统模板名称 |
|code |string |是 |email |通知系统编码 sms=短信 email=邮件 |
|type |integer |是 |0 |通知类型，详见[「Type常量」](https://doc.careyshop.cn/docs/admin_api/a-21528214476 "「Type常量」") |
|sms_code |string |是 |SMS_126357840 |阿里云短信模板编号 |
|title |string |是 |欧瑞 |标题或签名 |
|template |string |是 |{验证码} |通知系统模板 |
|status |integer |是 |1 |模板是否启用 0=禁用 1=启用 |
|get_notice_item |array |是 |[] |通知系统可用变量数组 |

|get_notice_item|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|item_name |string |是 |{验证码} |可用变量名称 |
|replace_name |string |是 |number |可用变量 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "notice_tpl_id": 8,
      "name": "通用验证",
      "code": "email",
      "type": 0,
      "sms_code": "",
      "title": "收取验证码",
      "template": "您的验证码是{验证码}，在5分钟内有效。如非本人操作请忽略本信息。",
      "status": 1,
      "get_notice_item": [
        {
          "item_name": "{验证码}",
          "replace_name": "number"
        }
      ]
    },
    {
      "notice_tpl_id": 9,
      "name": "注册成功",
      "code": "email",
      "type": 1,
      "sms_code": "",
      "title": "",
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
        }
      ]
    },
    {
      "notice_tpl_id": 10,
      "name": "充值成功",
      "code": "email",
      "type": 2,
      "sms_code": "",
      "title": "",
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
    },
    {
      "notice_tpl_id": 11,
      "name": "确认订单",
      "code": "email",
      "type": 3,
      "sms_code": "",
      "title": "",
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
          "item_name": "{主订单号}",
          "replace_name": "order_no"
        },
        {
          "item_name": "{订单金额}",
          "replace_name": "order_money"
        }
      ]
    },
    {
      "notice_tpl_id": 12,
      "name": "付款成功",
      "code": "email",
      "type": 4,
      "sms_code": "",
      "title": "",
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
          "item_name": "{主订单号}",
          "replace_name": "order_no"
        },
        {
          "item_name": "{订单金额}",
          "replace_name": "order_money"
        },
        {
          "item_name": "{商品金额}",
          "replace_name": "goods_money"
        }
      ]
    },
    {
      "notice_tpl_id": 13,
      "name": "下单成功",
      "code": "email",
      "type": 5,
      "sms_code": "",
      "title": "",
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
          "item_name": "{主订单号}",
          "replace_name": "order_no"
        },
        {
          "item_name": "{订单金额}",
          "replace_name": "order_money"
        },
        {
          "item_name": "{商品金额}",
          "replace_name": "goods_money"
        }
      ]
    },
    {
      "notice_tpl_id": 14,
      "name": "订单发货",
      "code": "email",
      "type": 6,
      "sms_code": "",
      "title": "",
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
          "item_name": "{主订单号}",
          "replace_name": "order_no"
        },
        {
          "item_name": "{订单金额}",
          "replace_name": "order_money"
        },
        {
          "item_name": "{商品金额}",
          "replace_name": "goods_money"
        },
        {
          "item_name": "{商品名称}",
          "replace_name": "goods_name"
        },
        {
          "item_name": "{快递公司}",
          "replace_name": "delivery_name"
        },
        {
          "item_name": "{快递单号}",
          "replace_name": "logistic_code"
        }
      ]
    }
  ]
}
```

#### 备注:
1. 短信与邮件共用同一个结构，所以返回时存在多余字段则按需索取。

2. 返回字段`code`值为`sms`时，字段`title`表示短信签名，否则表示邮件标题。