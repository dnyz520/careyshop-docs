# 添加一条规则

#### 接口描述：
- 添加一条规则。

#### 请求 URL：
- `http|https://host/api/v1/auth_rule/method/add.auth.rule.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|module |string |是 |in:api,admin,home | |api |所属模块 |
|group_id |integer |是 |gt:0 | |1 |用户组编号 |
|name |string |是 |max:32 | |超级管理员 |规则名称 |
|menu_auth |integer |否 |gt[]:0 | |[1,2,3] |菜单权限 |
|log_auth |integer |否 |gt[]:0 | |[3,6] |记录权限 |
|sort |integer |否 |between:0,255 |50 |50 |规则排序值 |
|status |integer |否 |in:0,1 |1 |1 |规则状态 0=禁用 1=启用 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|module |string |是 |admin |所属模块 |
|group_id |integer |是 |1 |用户组编号 |
|name |string |是 |超级管理员 |规则名称 |
|menu_auth |array |否 |[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;] |菜单权限 |
|log_auth |array |否 |[&quot;3&quot;,&quot;6&quot;] |记录权限 |
|sort |integer |否 |50 |规则排序值 |
|status |integer |否 |1 |规则状态 0=禁用 1=启用 |
|rule_id |integer |是 |5 |规则编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "module": "admin",
    "group_id": 1,
    "name": "超级管理员",
    "menu_auth": ["1","2","3"],
    "log_auth": ["3","6"],
    "sort": 50,
    "status": 1,
    "rule_id": 5
  }
}
```

#### 备注:
1. `module`参数的值是不固定的，可根据模块需求决定，在配置文件`application\extra\CareyShop.php`中可进行配置。

2. `menu_auth`对应菜单编号集合，表示该规则下的角色所拥有的菜单操作权。

3. `log_auth`对应菜单编号集合，表示该规则下的角色请求接口后是否记录操作。