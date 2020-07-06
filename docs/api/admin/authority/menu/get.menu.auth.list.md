# 根据权限获取菜单列表

#### 接口描述：
- 根据权限获取菜单列表，等同于根据当前账号的权限获取对应的导航菜单数据。

#### 请求 URL：
- `http|https://host/api/v1/menu/method/get.menu.auth.list/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 否

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|menu_id |integer |否 |egt:0 |0 |491 |菜单编号 |
|module |string |是 |in:api,admin,home | |api |所属模块 |
|level |integer |否 |egt:0 | |0 |菜单深度 |
|is_navi |integer |否 |in:0,1 | |1 |是否属于导航菜单 0=否 1=是 |
|is_layer |integer |否 |in:0,1 |1 |1 |是否返回本级菜单 0=否 1=是 |
|status |integer |否 |in:0,1 |1 |1 |菜单状态 0=禁用 1=启用 |

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
|children_total |integer |是 |5 |该菜单下子级菜单数的合计 |
|level |integer |是 |0 |该菜单的层级深度 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "menu_id": 491,
      "parent_id": 0,
      "name": "验证码",
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
      "status": 1,
      "children_total": 2,
      "level": 0
    },
    {
      "menu_id": 492,
      "parent_id": 491,
      "name": "使用验证码",
      "alias": "",
      "icon": "",
      "remark": "",
      "module": "api",
      "type": 0,
      "url": "api/v1/verification/use.verification.item",
      "params": "",
      "target": "_self",
      "is_navi": 1,
      "sort": 50,
      "status": 1,
      "children_total": 0,
      "level": 1
    },
    {
      "menu_id": 493,
      "parent_id": 491,
      "name": "发送短信验证码",
      "alias": "",
      "icon": "",
      "remark": "",
      "module": "api",
      "type": 0,
      "url": "api/v1/verification/send.verification.sms",
      "params": "",
      "target": "_self",
      "is_navi": 1,
      "sort": 50,
      "status": 1,
      "children_total": 0,
      "level": 1
    }
  ]
}
```

#### 备注:
1. 该接口支持条件搜索，如果不带入业务参数则使用默认值。

2. `menu_id`参数值为 0 表示获取所有菜单，如果参数值非 0 表示从指定的编号开始获取。

3. `module`参数的值是不固定的，可根据模块需求决定，在配置文件`application\extra\CareyShop.php`中可进行配置。

**参数示例：**
假设当前账号拥有下列权限菜单列表：
```
最顶层菜单(ID=0)
├─ A1 // (ID=1)
│  └─ A2
│     └─ A3
└─ B1
   └─ B2
      └─ B3
```
1. 不传入`level`参数时表示返回所有层级的菜单列表。

2. 当`level`值为 0 时返回`A1 B1`，值为 1 时返回`A1 A2 B1 B2`，值为 2 时返回`A1 A2 A3 B1 B2 B3`；

3. 当`menu_id`值为`A1(ID=1)`，并且`level`值为 0 时返回`A1`，值为 1 时返回`A1 A2`，因为`is_layer`参数默认为 1，所以会返回本级。如果将`is_layer`参数值设为 0 并且`level`值为 0 时返回`A2`，值为 1 时返回`A2 A3`。