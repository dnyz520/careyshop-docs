# 添加一个菜单

#### 接口描述：
- 添加一个菜单。

#### 请求 URL：
- `http|https://host/api/v1/menu/method/add.menu.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|parent_id |integer |否 |egt:0 |0 |0 |菜单上级编号 |
|name |string |是 |max:32 | |添加广告 |菜单名称 |
|alias |string |否 |max:16 | |添加 |菜单别名 |
|icon |string |否 |max:64 | |&amp;#xe61d; |菜单图标 |
|remark |string |否 |max:255 | |添加一个广告 |菜单备注 |
|module |string |是 |in:api,admin,home | |admin |所属模块 |
|type |integer |是 |in:0,1 | |0 |链接类型 0=模块 1=外链 |
|url |string |否 |max:255 | |api/v1/ads/... |链接地址 |
|params |string |否 |max:255 | |?id=1&amp;type=1 |链接参数 |
|target |string |否 |in:_self,_blank |&#95;self |&#95;self |打开方式 |
|is_navi |integer |否 |in:0,1 |0 |0 |是否属于导航菜单 0=否 1=是 |
|sort |integer |否 |between:0,255 |50 |50 |菜单排序值 |
|status |integer |否 |in:0,1 |1 |1 |菜单状态 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|parent_id |integer |否 |0 |菜单上级编号 |
|name |string |是 |添加广告 |菜单名称 |
|alias |string |否 |添加 |菜单别名 |
|icon |string |否 |&amp;amp;#xe61d; |菜单图标 |
|remark |string |否 |添加一个广告 |菜单备注 |
|module |string |是 |admin |所属模块 |
|type |integer |是 |0 |链接类型 0=模块 1=外链 |
|url |string |否 |api/v1/ads/add.ads.item |链接地址 |
|params |string |否 |?id=1&amp;amp;type=1 |链接参数 |
|target |string |否 |&#95;self |打开方式 |
|is_navi |integer |否 |0 |是否属于导航菜单 0=否 1=是 |
|sort |integer |否 |50 |菜单排序值 |
|status |integer |否 |1 |菜单状态 0=禁用 1=启用 |
|menu_id |string |是 |513 |菜单编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "parent_id": 0,
    "name": "添加广告",
    "alias": "添加",
    "icon": "&amp;#xe61d;",
    "remark": "添加一个广告",
    "module": "admin",
    "type": 0,
    "url": "api/v1/ads/add.ads.item",
    "params": "?id=1&amp;type=1",
    "target": "_self",
    "is_navi": 0,
    "sort": 50,
    "status": 1,
    "menu_id": 513
  }
}
```

#### 备注:
1. `module`参数的值是不固定的，可根据模块需求决定，在配置文件`application\extra\CareyShop.php`中可进行配置。