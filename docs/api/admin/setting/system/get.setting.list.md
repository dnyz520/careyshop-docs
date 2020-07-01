# 获取某个模块的设置

#### 接口描述：
- 获取某个模块的设置。

#### 请求 URL：
- `http|https://host/api/v1/setting/method/get.setting.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|module |string |是 |见附属 A | |delivery_dist |模块 |

#### 附属 A：

|module   |名称   |
| ------------ | ------------ |
|delivery_dist   |配送轨迹   |
|payment   |支付完成提示页   |
|delivery   |配送优惠   |
|system_shopping   |购物系统   |
|service   |售后服务   |
|system_info   |系统配置   |
|upload   |上传配置   |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|键名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|code |string |是 |... |变量名 |
|value |mixed |是 |... |变量值 |
|module |string |是 |... |所属模块 |
|description |string |是 |... |描述 |

### 响应示例：
## delivery_dist
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "api_id": {
      "code": "api_id",
      "value": 1212210,
      "module": "delivery_dist",
      "description": "快递鸟商户ID"
    },
    "api_key": {
      "code": "api_key",
      "value": "e5257ae3-7ac9-477d-a5d1-54cd7fc93974",
      "module": "delivery_dist",
      "description": "快递鸟ApiKey"
    },
    "is_sub": {
      "code": "is_sub",
      "value": 1,
      "module": "delivery_dist",
      "description": "是否启用订阅"
    }
  }
}
```

## payment
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "success": {
      "code": "success",
      "value": "http://www.careyshop.cn/",
      "module": "payment",
      "description": "支付成功提示页"
    },
    "error": {
      "code": "error",
      "value": "http://www.careyshop.cn/",
      "module": "payment",
      "description": "支付失败提示页"
    }
  }
}
```

## delivery
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "money": {
      "code": "money",
      "value": 88.88,
      "module": "delivery",
      "description": "满额包邮"
    },
    "money_status": {
      "code": "money_status",
      "value": 1,
      "module": "delivery",
      "description": "满额是否启用"
    },
    "money_exclude": {
      "code": "money_exclude",
      "value": [
        "32",
        "27",
        "6",
        "30",
        "33",
        "34",
        "35",
        "36"
      ],
      "module": "delivery",
      "description": "满额不包邮区域"
    },
    "number": {
      "code": "number",
      "value": 21,
      "module": "delivery",
      "description": "满件包邮"
    },
    "number_status": {
      "code": "number_status",
      "value": 1,
      "module": "delivery",
      "description": "满件是否启用"
    },
    "number_exclude": {
      "code": "number_exclude",
      "value": [
        "32",
        "27",
        "6",
        "30",
        "33",
        "34",
        "35",
        "36"
      ],
      "module": "delivery",
      "description": "满件不包邮区域"
    },
    "quota": {
      "code": "quota",
      "value": 200,
      "module": "delivery",
      "description": "满额减运费"
    },
    "dec_money": {
      "code": "dec_money",
      "value": 10,
      "module": "delivery",
      "description": "满额减多少运费"
    },
    "dec_status": {
      "code": "dec_status",
      "value": 1,
      "module": "delivery",
      "description": "满额减是否启用"
    },
    "dec_exclude": {
      "code": "dec_exclude",
      "value": [
        "32",
        "27",
        "11",
        "30",
        "33",
        "34",
        "35",
        "36"
      ],
      "module": "delivery",
      "description": "满额减不减区域"
    }
  }
}
```

## system_shopping
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "integral": {
      "code": "integral",
      "value": 100,
      "module": "system_shopping",
      "description": "积分换算比例"
    },
    "timeout": {
      "code": "timeout",
      "value": 30,
      "module": "system_shopping",
      "description": "下单后未付款自动取消(分)"
    },
    "complete": {
      "code": "complete",
      "value": 10,
      "module": "system_shopping",
      "description": "发货几天后自动确认收货(天)"
    },
    "is_country": {
      "code": "is_country",
      "value": 0,
      "module": "system_shopping",
      "description": "完整地址是否包含国籍"
    },
    "spacer": {
      "code": "spacer",
      "value": " ",
      "module": "system_shopping",
      "description": "完整地址间隔符"
    },
    "invoice": {
      "code": "invoice",
      "value": 3,
      "module": "system_shopping",
      "description": "开票收取多少税率"
    }
  }
}
```

## service
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "days": {
      "code": "days",
      "value": 15,
      "module": "service",
      "description": "有效维权期天数"
    },
    "address": {
      "code": "address",
      "value": "浙江省 宁波市 江北区",
      "module": "service",
      "description": "退换货地址"
    },
    "consignee": {
      "code": "consignee",
      "value": "王五",
      "module": "service",
      "description": "退换货收件人"
    },
    "zipcode": {
      "code": "zipcode",
      "value": 315000,
      "module": "service",
      "description": "退换货邮编"
    },
    "mobile": {
      "code": "mobile",
      "value": 15867431111,
      "module": "service",
      "description": "退换货联系电话"
    }
  }
}
```

## system_info
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "open_index": {
      "code": "open_index",
      "value": 1,
      "module": "system_info",
      "description": "是否开启首页"
    },
    "open_api": {
      "code": "open_api",
      "value": 1,
      "module": "system_info",
      "description": "是否开启API接口"
    },
    "open_mobile": {
      "code": "open_mobile",
      "value": 1,
      "module": "system_info",
      "description": "是否开启移动页"
    },
    "close_reason": {
      "code": "close_reason",
      "value": "系统维护中，请稍后访问！",
      "module": "system_info",
      "description": "关闭原因"
    },
    "name": {
      "code": "name",
      "value": "CarayShop",
      "module": "system_info",
      "description": "商城名称"
    },
    "title": {
      "code": "title",
      "value": null,
      "module": "system_info",
      "description": "商城标题"
    },
    "keywords": {
      "code": "keywords",
      "value": null,
      "module": "system_info",
      "description": "商城关键词"
    },
    "description": {
      "code": "description",
      "value": null,
      "module": "system_info",
      "description": "商城描述"
    },
    "logo": {
      "code": "logo",
      "value": null,
      "module": "system_info",
      "description": "商城LOGO"
    },
    "third_count": {
      "code": "third_count",
      "value": "",
      "module": "system_info",
      "description": "第三方统计代码"
    },
    "withdraw_fee": {
      "code": "withdraw_fee",
      "value": 6.5,
      "module": "system_info",
      "description": "提现手续费"
    },
    "miitbeian": {
      "code": "miitbeian",
      "value": "浙ICP备16046721号-1",
      "module": "system_info",
      "description": "ICP备案许可证号"
    },
    "miitbeian_url": {
      "code": "miitbeian_url",
      "value": "http://www.miitbeian.gov.cn",
      "module": "system_info",
      "description": "ICP备案链接地址"
    },
    "miitbeian_ico": {
      "code": "miitbeian_ico",
      "value": null,
      "module": "system_info",
      "description": "ICP备案图标"
    },
    "beian": {
      "code": "beian",
      "value": null,
      "module": "system_info",
      "description": "公安机关备案号"
    },
    "beian_url": {
      "code": "beian_url",
      "value": "http://www.beian.gov.cn",
      "module": "system_info",
      "description": "公安机关备案链接"
    },
    "beian_ico": {
      "code": "beian_ico",
      "value": null,
      "module": "system_info",
      "description": "公安机关备案图标"
    },
    "weixin_url": {
      "code": "weixin_url",
      "value": "http://www.careyshop.cn/",
      "module": "system_info",
      "description": "安卓安装包微信中间页地址"
    },
    "qrcode_logo": {
      "code": "qrcode_logo",
      "value": "static/api/images/qrcode_logo.png",
      "module": "system_info",
      "description": "二维码LOGO"
    }
  }
}
```

## upload
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "default": {
      "code": "default",
      "value": "qiniu",
      "module": "upload",
      "description": "默认资源上传模块"
    },
    "oss": {
      "code": "oss",
      "value": "careyshop.cn/oss?url=",
      "module": "upload",
      "description": "OSS获取入口"
    },
    "image_ext": {
      "code": "image_ext",
      "value": "jpg,png,gif,jpeg,jpeg,bmp,webp",
      "module": "upload",
      "description": "图片允许上传的后缀"
    },
    "file_ext": {
      "code": "file_ext",
      "value": "doc,docx,xls,xlsx,ppt,pptx,pdf,wps,txt,rar,zip,gz,bz2,7z,pem,mp4",
      "module": "upload",
      "description": "文件允许上传的后缀"
    },
    "file_size": {
      "code": "file_size",
      "value": "2M",
      "module": "upload",
      "description": "本地上传附件大小限制"
    },
    "qiniu_access_key": {
      "code": "qiniu_access_key",
      "value": "-eibVM1dkuOQU9vbuhoMRbiMtw4t_-QUMQJgPPDJ",
      "module": "upload",
      "description": "用于签名的公钥"
    },
    "qiniu_secret_key": {
      "code": "qiniu_secret_key",
      "value": "pcDGWPh8eOvnvcWBklyhAod0R6MiC3_OU-V4hayZ",
      "module": "upload",
      "description": "用于签名的私钥"
    },
    "qiniu_bucket": {
      "code": "qiniu_bucket",
      "value": "careyshop",
      "module": "upload",
      "description": "请保证Bucket为可公共读取的"
    },
    "qiniu_url": {
      "code": "qiniu_url",
      "value": "p2oo9yitf.bkt.clouddn.com",
      "module": "upload",
      "description": "对外访问域名"
    },
    "aliyun_access_key": {
      "code": "aliyun_access_key",
      "value": "LTAIujASEnhdoDWO",
      "module": "upload",
      "description": "AccessKeyID"
    },
    "aliyun_secret_key": {
      "code": "aliyun_secret_key",
      "value": "wpEQEFZRHVW9Ty87MjYy7bFTKBWgXA",
      "module": "upload",
      "description": "AccessKeySecret"
    },
    "aliyun_bucket": {
      "code": "aliyun_bucket",
      "value": "careyshop",
      "module": "upload",
      "description": "请保证Bucket为可公共读取的"
    },
    "aliyun_url": {
      "code": "aliyun_url",
      "value": "careyshop.oss-cn-hangzhou.aliyuncs.com",
      "module": "upload",
      "description": "对外访问域名"
    },
    "aliyun_endpoint": {
      "code": "aliyun_endpoint",
      "value": "oss-cn-hangzhou.aliyuncs.com",
      "module": "upload",
      "description": "EndPoint"
    },
    "aliyun_rolearn": {
      "code": "aliyun_rolearn",
      "value": "acs:ram::1763866218345155:role/aliyunosstokengeneratorrole",
      "module": "upload",
      "description": "RoleArn"
    }
  }
}
```

#### 备注:
1. 不同的模块返回的数据内容会不同，但数据结构都是一样的。