# 根据Id获取导航数据

#### 接口描述：
- 根据菜单Id生成导航「面包屑」数据。

#### 请求 URL：
- `http|https://host/api/v1/menu/method/get.menu.id.navi/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|menu_id |integer |否 |egt:0 | |512 |菜单编号 |
|is_layer |integer |否 |in:0,1 |1 |1 |是否返回本级菜单 0=否 1=是 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |array |否 |[] |返回数组 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|menu_id |string |是 |513 |菜单编号 |
|parent_id |integer |是 |0 |菜单上级编号 |
|name |string |是 |添加广告 |菜单名称 |
|alias |string |是 |添加 |菜单别名 |
|icon |string |是 |&amp;amp;#xe61d; |菜单图标 |
|remark |string |是 |添加一个广告 |菜单备注 |
|module |string |是 |admin |所属模块 |
|type |integer |是 |0 |链接类型 0=模块 1=外链 |
|url |string |是 |api/v1/ads/add.ads.item |链接地址 |
|params |string |是 |?id=1&amp;amp;type=1 |链接参数 |
|target |string |是 |&#95;self |打开方式 |
|is_navi |integer |是 |0 |是否属于导航菜单 0=否 1=是 |
|sort |integer |是 |50 |菜单排序值 |
|status |integer |是 |1 |菜单状态 0=禁用 1=启用 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "menu_id": 506,
      "parent_id": 0,
      "name": "提现账号",
      "alias": "",
      "icon": "",
      "remark": "",
      "module": "api",
      "type": 0,
      "url": "",
      "params": "",
      "target": "_self",
      "is_navi": 1,
      "sort": 50,
      "status": 1
    },
    {
      "menu_id": 512,
      "parent_id": 506,
      "name": "检测是否超出最大添加数量",
      "alias": "",
      "icon": "",
      "remark": "",
      "module": "api",
      "type": 0,
      "url": "api/v1/withdraw_user/is.withdraw.user.maximum",
      "params": "",
      "target": "_self",
      "is_navi": 1,
      "sort": 50,
      "status": 1
    }
  ]
}
```

#### 备注:
1. 只有`is_navi`和`status`参数值都为 1 的菜单才会返回。