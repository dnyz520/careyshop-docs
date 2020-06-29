---
sidebar: auto
---
# 数据库词典
::: tip
搜索时请把表的前缀去除，并且将表名中的下划线`_`替换为`-`
:::

## action-log
表注释： 操作日志
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|action_log_id (主键)|int(11)|否| ||
|client_type|tinyint(1)|是|-1 |-1=游客 0=顾客组 1=管理组|
|user_id|int(11)|否|0 |账号编号|
|username|varchar(80)|否| |用户名|
|path|varchar(255)|否| |访问路径|
|module|varchar(150)|否| |模型|
|header|text|否| |请求头部|
|params|text|否| |请求参数|
|result|longtext|是|NULL |处理结果|
|ip|varchar(15)|否| |IP地址|
|status|tinyint(1)|否|0 |0=成功 1=错误|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|action_log_id|0|A|否||
|client_type|BTREE|否|否|client_type|0|A|是||
|path|BTREE|否|否|path (191)|0|A|否||
|status|BTREE|否|否|status|0|A|否|||

#### 备注
无

## admin
表注释： 管理组账号
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|admin_id (主键)|int(11)|否| ||
|username|varchar(80)|否| |账号|
|password|varchar(60)|否| |密码|
|group_id|mediumint(8)|否| |用户组Id|
|nickname|varchar(50)|否| |昵称|
|head_pic|varchar(512)|否| |头像|
|last_login|int(11)|否|0 |最后登录日期|
|last_ip|varchar(15)|否| |最后登录ip|
|status|tinyint(1)|否|1 |0=禁用 1=启用|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删 |
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|admin_id|1|A|否||
|username|BTREE|否|否|username|1|A|否||
|status|BTREE|否|否|status|1|A|否||
|is_delete|BTREE|否|否|is_delete|1|A|否||
|nickname|BTREE|否|否|nickname|1|A|否||
|group_id|BTREE|否|否|group_id|1|A|否|||

#### 备注
无

## ads
表注释： 广告列表
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|ads_id (主键)|int(11)|否| ||
|ads_position_id|smallint(5)|否| |对应ads_position表|
|code|varchar(16)|否| |编码|
|platform|tinyint(3)|否| |对应ads_position表|
|name|varchar(100)|否| |名称|
|url|varchar(255)|否| |链接|
|target|enum('_self', '_blank')|否|_self |_self _blank|
|content|text|否| |内容(图片,代码等)|
|color|varchar(10)|否|#ffffff |背景色|
|type|tinyint(1)|否| |0=图片 1=代码|
|begin_time|int(11)|否|0 |投放日期|
|end_time|int(11)|否|0 |结束日期|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|ads_id|0|A|否||
|ads_position_id|BTREE|否|否|ads_position_id|0|A|否||
|start_time|BTREE|否|否|begin_time|0|A|否||
|end_time|BTREE|否|否|end_time|0|A|否||
|sort|BTREE|否|否|sort|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|code|BTREE|否|否|code|0|A|否||
|platform|BTREE|否|否|platform|0|A|否|||

#### 备注
无

## ads-position
表注释： 广告位
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|ads_position_id (主键)|smallint(5)|否| ||
|code|varchar(16)|否| |编码|
|platform|tinyint(3)|否| |平台(自定义)|
|name|varchar(100)|否| |位置名称|
|description|varchar(255)|否| |描述|
|width|smallint(5)|否|0 |位置宽度|
|height|smallint(5)|否|0 |位置高度|
|content|text|否| |默认内容(图片,代码等)|
|color|varchar(10)|否|#ffffff |背景色|
|type|tinyint(1)|否| |0=图片 1=代码|
|display|tinyint(1)|否|0 |0=多个 1=单个 2=随机多个 3=随机单个|
|status|tinyint(1)|否|1 |0=禁用 1=启用 |

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|ads_position_id|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|name|BTREE|否|否|name|0|A|否||
|code|BTREE|否|否|code|0|A|否||
|platform|BTREE|否|否|platform|0|A|否|||

#### 备注
无

## app
表注释： 应用列表
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|app_id (主键)|smallint(5)|否| ||
|app_name|varchar(30)|否| |名称|
|app_key|int(8)|否| |钥匙|
|app_secret|varchar(32)|否| |密钥|
|captcha|tinyint(1)|否|0 |启用验证码 0=否 1=是|
|status|tinyint(1)|否|1 |0=禁用 1=启用 |
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|app_id|1|A|否||
|app_key|BTREE|否|否|app_key|1|A|否||
|status|BTREE|否|否|status|1|A|否||
|is_delete|BTREE|否|否|is_delete|1|A|否|||

#### 备注
无

## app-install
表注释： 应用安装包
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|app_install_id (主键)|smallint(5)|否| ||
|user_agent|varchar(64)|否| |系统标识|
|name|varchar(32)|否| |应用名称|
|ver|varchar(16)|否| |版本号|
|url|varchar(255)|否| |地址|
|count|int(11)|否|0 |访问次数|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|app_install_id|0|A|否||
|user_agent|BTREE|否|否|user_agent|0|A|否||
|name|BTREE|否|否|name|0|A|否|||

#### 备注
无

## article
表注释： 文章管理
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|article_id (主键)|int(11)|否| ||
|article_cat_id|smallint(5)|否| |对应article_cat表|
|title|varchar(200)|否| |标题|
|image|varchar(512)|否| |封面|
|content|mediumtext|否| |内容|
|source|varchar(60)|否| |来源|
|source_url|varchar(255)|否| |来源地址|
|keywords|varchar(255)|否| |关键词|
|description|varchar(255)|否| |描述|
|url|varchar(255)|否| |外部链接|
|target|enum('_self', '_blank')|否|_self |_self _blank|
|page_views|int(11)|否|0 |游览量|
|is_top|tinyint(1)|否|0 |是否置顶 0=否 1=是|
|status|tinyint(1)|否|1 |0=禁用 1=启用|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|article_id|0|A|否||
|article_cat_id|BTREE|否|否|article_cat_id|0|A|否||
|is_top|BTREE|否|否|is_top|0|A|否||
|status|BTREE|否|否|status|0|A|否|||

#### 备注
无

## article-cat
表注释： 文章分类
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|article_cat_id (主键)|smallint(5)|否| ||
|parent_id|smallint(5)|否|0 |父id|
|cat_name|varchar(100)|否| |分类名称|
|cat_type|tinyint(3)|否|0 |类型(自定义)|
|keywords|varchar(255)|否| |关键词|
|description|varchar(255)|否| |分类描述|
|sort|tinyint(3)|否|50 |排序|
|is_navi|tinyint(1)|否|0 |导航 0=否 1=是|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|article_cat_id|28|A|否||
|parent_id|BTREE|否|否|parent_id|14|A|否||
|cat_type|BTREE|否|否|cat_type|2|A|否||
|sort|BTREE|否|否|sort|2|A|否||
|is_navi|BTREE|否|否|is_navi|2|A|否|||

#### 备注
无

## ask
表注释： 咨询问答
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|ask_id (主键)|int(11)|否| ||
|parent_id|int(11)|否|0 |父id|
|user_id|int(11)|否| |对应user表|
|ask_type|tinyint(1)|否|0 |0=咨询 1=售后 2=投诉 3=求购|
|type|tinyint(1)|否|0 |0=主题 1=提问 2=回答|
|title|varchar(120)|否| |主题|
|ask|varchar(200)|否| |提问内容|
|answer|varchar(200)|否| |回答内容|
|status|tinyint(1)|否|0 |0=待回答 1=已回答|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|ask_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|parent_id|BTREE|否|否|parent_id|0|A|否||
|ask_type|BTREE|否|否|ask_type|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否|||

#### 备注
无

## auth-group
表注释： 用户组
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|group_id (主键)|mediumint(9)|否| ||
|name|varchar(32)|否| |名称|
|description|varchar(255)|否| |描述|
|module|varchar(16)|否| |所属模块|
|system|tinyint(1)|否|0 |系统保留|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|group_id|9|A|否||
|module|BTREE|否|否|module|9|A|否||
|sort|BTREE|否|否|sort|2|A|否||
|status|BTREE|否|否|status|2|A|否|||

#### 备注
无

## auth-rule
表注释： 权限规则
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|rule_id (主键)|mediumint(8)|否| ||
|module|varchar(16)|否| |所属模块|
|group_id|mediumint(8)|否| |用户组Id|
|name|varchar(32)|否| |规则名称|
|menu_auth|text|否| |菜单权限|
|log_auth|text|否| |记录权限|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|rule_id|17|A|否||
|module|BTREE|否|否|module|8|A|否||
|status|BTREE|否|否|status|4|A|否||
|group_id|BTREE|否|否|group_id|17|A|否||
|sort|BTREE|否|否|sort|2|A|否|||

#### 备注
无

## brand
表注释： 商品品牌
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|brand_id (主键)|smallint(5)|否| ||
|goods_category_id|smallint(5)|否|0 |对应goods_category表|
|name|varchar(50)|否| |品牌名称|
|phonetic|varchar(10)|否| |品牌首拼|
|description|varchar(100)|否| |品牌描述|
|logo|varchar(512)|否| |品牌LOGO|
|url|varchar(255)|否| |品牌url|
|target|enum('_self', '_blank')|否|_self |_self _blank|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|brand_id|0|A|否||
|is_show|BTREE|否|否|status|0|A|否||
|name|BTREE|否|否|name|0|A|否||
|goods_category_id|BTREE|否|否|goods_category_id|0|A|否||
|sort|BTREE|否|否|sort|0|A|否|||

#### 备注
无

## card
表注释： 购物卡
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|card_id (主键)|int(11)|否| ||
|name|varchar(50)|否| |卡名|
|description|varchar(255)|否| |描述|
|money|decimal(10,2)|否| |面额|
|category|text|否| |限制商品分类|
|exclude_category|text|否| |排除商品分类|
|give_num|int(11)|否| |发放量|
|active_num|int(11)|否|0 |激活量|
|create_time|int(11)|否|0 |创建日期|
|end_time|int(11)|否|0 |截止日期(有效期)|
|status|tinyint(1)|否|1 |0=禁用 1=启用|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|card_id|0|A|否||
|name|BTREE|否|否|name|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否|||

#### 备注
无

## card-use
表注释： 购物卡使用
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|card_use_id (主键)|int(11)|否| ||
|card_id|int(11)|否|0 |对应card表|
|user_id|int(11)|否|0 |对应user表|
|number|varchar(11)|否| |卡号|
|password|varchar(16)|否| |卡密|
|money|decimal(10,2)|否| |可用余额|
|is_active|tinyint(1)|否|0 |是否激活 0=否 1=是|
|is_invalid|tinyint(1)|否|1 |是否有效 0=无效 1=有效|
|remark|varchar(255)|否| |备注|
|active_time|int(11)|否|0 |激活日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|card_use_id|0|A|否||
|card_id|BTREE|否|否|card_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|number|BTREE|否|否|number|0|A|否||
|money|BTREE|否|否|money|0|A|否||
|is_invalid|BTREE|否|否|is_invalid|0|A|否|||

#### 备注
无

## cart
表注释： 购物车
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|cart_id (主键)|int(11)|否| ||
|user_id|int(11)|否|0 |对应user表|
|goods_id|int(11)|否|0 |对应goods表|
|goods_num|smallint(5)|否| |购买数量|
|key_name|varchar(100)|否| |规格键名|
|key_value|varchar(60)|否| |规格值|
|is_selected|tinyint(1)|否|1 |选中 0=否 1=是|
|is_show|tinyint(1)|否|1 |0=隐藏 1=显示|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|cart_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|goods_id|BTREE|否|否|goods_id|0|A|否||
|key_name|BTREE|否|否|key_name|0|A|否||
|update_time|BTREE|否|否|update_time|0|A|否||
|is_show|BTREE|否|否|is_show|0|A|否|||

#### 备注
无

## collect
表注释： 商品收藏夹
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|collect_id (主键)|int(11)|否| ||
|user_id|int(11)|否|0 |对应user表|
|goods_id|int(11)|否|0 |对应goods表|
|is_top|tinyint(1)|否|0 |是否置顶 0=否 1=是|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|collect_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|is_top|BTREE|否|否|is_top|0|A|否||
|goods_id|BTREE|否|否|goods_id|0|A|否|||

#### 备注
无

## coupon
表注释： 优惠劵
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|coupon_id (主键)|smallint(5)|否| ||
|name|varchar(50)|否| |优惠劵名称|
|description|varchar(255)|否| |描述|
|guide|varchar(255)|否| |引导地址|
|type|tinyint(1)|否| |0=用户 1=生成 2=领取 3=赠送|
|give_code|varchar(10)|否| |领取码|
|money|decimal(10,2)|否| |优惠金额|
|quota|decimal(10,2)|否| |使用门槛|
|category|text|否| |限制商品分类|
|exclude_category|text|否| |排除商品分类|
|level|varchar(100)|否| |限制会员等级|
|frequency|tinyint(3)|否|1 |限制领取次数|
|give_num|int(11)|否|0 |发放量|
|receive_num|int(11)|否|0 |领取量|
|use_num|int(11)|否|0 |使用量|
|give_begin_time|int(11)|否| |发放开始日期|
|give_end_time|int(11)|否| |发放结束日期|
|use_begin_time|int(11)|否| |使用开始日期|
|use_end_time|int(11)|否| |使用截止日期|
|status|tinyint(1)|否|1 |0=禁用 1=启用|
|is_invalid|tinyint(1)|否|0 |0=正常 1=作废|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删 |

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|coupon_id|0|A|否||
|name|BTREE|否|否|name|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否||
|type|BTREE|否|否|type|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|is_invalid|BTREE|否|否|is_invalid|0|A|否||
|use_end_time|BTREE|否|否|use_end_time|0|A|否||
|give_code|BTREE|否|否|give_code|0|A|否|||

#### 备注
无

## coupon-give
表注释： 优惠劵发放
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|coupon_give_id (主键)|int(11)|否| ||
|coupon_id|smallint(5)|否|0 |对应coupon表|
|user_id|int(11)|否|0 |对应user表|
|order_id|int(11)|否|0 |对应order表|
|order_no|varchar(50)|否| |订单号|
|exchange_code|varchar(10)|否| |兑换码|
|use_time|int(11)|否|0 |使用日期|
|create_time|int(11)|否|0 |创建日期|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删 |

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|coupon_give_id|0|A|否||
|coupon_id|BTREE|否|否|coupon_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|use_time|BTREE|否|否|use_time|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否||
|exchange_code|BTREE|否|否|exchange_code|0|A|否|||

#### 备注
无

## delivery
表注释： 配送方式
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|delivery_id (主键)|smallint(5)|否| ||
|delivery_item_id|smallint(5)|否|0 |对应delivery_item表|
|alias|varchar(32)|否| |别名|
|content|varchar(150)|否| |描述|
|first_weight|decimal(10,2)|否| |首重|
|first_weight_price|decimal(10,2)|否| |首重运费|
|second_weight|decimal(10,2)|否| |续重|
|second_weight_price|decimal(10,2)|否| |续重运费|
|first_item|tinyint(3)|否| |首件|
|first_item_price|decimal(10,2)|否| |首件运费|
|second_item|tinyint(3)|否| |续件|
|second_item_price|decimal(10,2)|否| |续件运费|
|first_volume|decimal(10,2)|否| |首体积量|
|first_volume_price|decimal(10,2)|否| |首体积运费|
|second_volume|decimal(10,2)|否| |续体积量|
|second_volume_price|decimal(10,2)|否| |续体积运费|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|delivery_id|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|sort|BTREE|否|否|sort|0|A|否||
|delivery_item_id|BTREE|否|否|delivery_item_id|0|A|否|||

#### 备注
无

## delivery-area
表注释： 配送区域
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|delivery_area_id (主键)|smallint(5)|否| ||
|delivery_id|smallint(5)|否| |对应delivery表|
|name|varchar(50)|否| |区域名称|
|region|text|否| |所辖区域|
|first_weight_price|decimal(10,2)|否| |首重运费|
|second_weight_price|decimal(10,2)|否| |续重运费|
|first_item_price|decimal(10,2)|否| |首件运费|
|second_item_price|decimal(10,2)|否| |续件运费|
|first_volume_price|decimal(10,2)|否| |首体积运费|
|second_volume_price|decimal(10,2)|否| |续体积运费|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|delivery_area_id|0|A|否||
|delivery_id|BTREE|否|否|delivery_id|0|A|否|||

#### 备注
无

## delivery-dist
表注释： 配送轨迹
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|delivery_dist_id (主键)|int(11)|否| ||
|user_id|int(11)|否| |对应user表|
|order_code|varchar(50)|否| |流水号|
|delivery_item_id|smallint(5)|否| |对应delivery_item表|
|delivery_code|varchar(30)|否| |快递编码|
|logistic_code|varchar(50)|否| |快递单号|
|trace|text|否| |轨迹|
|state|tinyint(3)|否|0 |0=无轨迹 1=已揽收 2=在途中 201=到达派件城市 3=签收 4=问题件|
|is_sub|tinyint(1)|否| |是否订阅 0=否 1=是|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|delivery_dist_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|state|BTREE|否|否|state|0|A|否||
|delivery_code|BTREE|否|否|delivery_code|0|A|否||
|logistic_code|BTREE|否|否|logistic_code|0|A|否||
|order_code|BTREE|否|否|order_code|0|A|否||
|is_sub|BTREE|否|否|is_sub|0|A|否|||

#### 备注
无

## delivery-item
表注释： 快递公司列表
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|delivery_item_id (主键)|smallint(5)|否| ||
|name|varchar(50)|否| |快递公司|
|phonetic|varchar(10)|否| |首拼|
|code|varchar(30)|否| |快递编码|
|type|tinyint(1)|否| |0=热门 1=国内 2=国外 3=转运|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|delivery_item_id|144|A|否||
|type|BTREE|否|否|type|1|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否|||

#### 备注
无

## discount
表注释： 商品折扣
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|discount_id (主键)|int(11)|否| ||
|name|varchar(100)|否| |折扣名称|
|type|tinyint(1)|否| |0=打折 1=减价 2=固定价格 3=送优惠劵|
|begin_time|int(11)|否| |开始日期|
|end_time|int(11)|否| |结束日期|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|discount_id|0|A|否||
|begin_time|BTREE|否|否|begin_time|0|A|否||
|end_time|BTREE|否|否|end_time|0|A|否||
|status|BTREE|否|否|status|0|A|否|||

#### 备注
无

## discount-goods
表注释： 折扣商品
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|discount_id|int(11)|否|0 |对应discount表|
|goods_id|int(11)|否| |对应goods表|
|discount|decimal(10,2)|否| |折扣额|
|description|varchar(255)|是| |描述|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|discount_id|BTREE|否|否|discount_id|0|A|否||
|goods_id|BTREE|否|否|goods_id|0|A|否|||

#### 备注
无

## friend-link
表注释： 友情链接
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|friend_link_id (主键)|smallint(5)|否| ||
|name|varchar(50)|否| |链接名称|
|url|varchar(255)|否| |链接地址|
|logo|varchar(512)|否| |logo|
|target|enum('_self', '_blank')|否|_self |_self _blank|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|friend_link_id|0|A|否||
|sort|BTREE|否|否|sort|0|A|否||
|status|BTREE|否|否|status|0|A|否|||

#### 备注
无

## goods
表注释： 商品表
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_id (主键)|int(11)|否| ||
|goods_category_id|smallint(5)|否| |对应goods_category表|
|name|varchar(200)|否| |商品名称|
|short_name|varchar(50)|否| |短名称|
|product_name|varchar(100)|否| |促销语|
|goods_code|varchar(50)|否| |商品货号|
|goods_spu|varchar(50)|否| |商品SPU|
|goods_sku|varchar(50)|否| |商品SKU|
|bar_code|varchar(60)|否| |商品条码|
|brand_id|smallint(5)|否|0 |对应brand表|
|store_qty|int(11)|否|0 |库存数量|
|comment_sum|int(11)|否|0 |评价数量|
|sales_sum|int(11)|否|0 |销售数量|
|measure|decimal(10,2)|否|0.00 |商品计量(重量、体积)|
|measure_type|tinyint(1)|否|0 |0=重量 1=计件 2=体积|
|is_postage|tinyint(1)|否|0 |0=收费 1=包邮|
|market_price|decimal(10,2)|否| |市场价|
|shop_price|decimal(10,2)|否| |本店价|
|integral_type|tinyint(1)|否|0 |0=按百分比 1=按固定值|
|give_integral|decimal(10,2)|否|0.00 |赠送积分|
|is_integral|int(11)|否|0 |积分可抵扣额|
|least_sum|smallint(5)|否|0 |最少起订|
|purchase_sum|smallint(5)|否|0 |限购数量 0=不限|
|keywords|varchar(255)|否| |关键词|
|description|varchar(255)|否| |描述|
|content|mediumtext|否| |内容|
|attachment|text|否| |附件|
|video|varchar(512)|否| |短视频|
|unit|varchar(10)|否| |计量单位|
|is_recommend|tinyint(1)|否|0 |0=不推 1=推荐|
|is_new|tinyint(1)|否|0 |0=不新 1=新品|
|is_hot|tinyint(1)|否|0 |0=普通 1=热卖|
|goods_type_id|smallint(5)|否| |对应goods_type表|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=下架 1=上架|
|is_delete|tinyint(1)|否|0 |0=正常 1=回收 2=软删除|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|goods_id|0|A|否||
|goods_code|BTREE|否|否|goods_code|0|A|否||
|name|BTREE|否|否|name (191)|0|A|否||
|goods_category_id|BTREE|否|否|goods_category_id|0|A|否||
|brand_id|BTREE|否|否|brand_id|0|A|否||
|is_integral|BTREE|否|否|is_integral|0|A|否||
|is_recommend|BTREE|否|否|is_recommend|0|A|否||
|is_new|BTREE|否|否|is_new|0|A|否||
|is_hot|BTREE|否|否|is_hot|0|A|否||
|sort|BTREE|否|否|sort|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|shop_price|BTREE|否|否|shop_price|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否||
|store_qty|BTREE|否|否|store_qty|0|A|否||
|is_postage|BTREE|否|否|is_postage|0|A|否||
|bar_code|BTREE|否|否|bar_code|0|A|否|||

#### 备注
无

## goods-attr
表注释： 商品属性列表
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_id|int(11)|否| |对应goods表|
|goods_attribute_id|int(11)|否| |对应goods_attribute表|
|parent_id|int(11)|否| |父id|
|is_important|tinyint(1)|否|0 |0=普通 1=核心属性|
|attr_value|varchar(512)|否| |属性值|
|sort|tinyint(3)|否|50 |排序|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|goods_id|BTREE|否|否|goods_id|0|A|否||
|is_important|BTREE|否|否|is_important|0|A|否||
|parent_id|BTREE|否|否|parent_id|0|A|否||
|attr_value|BTREE|否|否|attr_value (191)|0|A|否||
|goods_attribute_id|BTREE|否|否|goods_attribute_id|0|A|否||
|sort|BTREE|否|否|sort|0|A|否|||

#### 备注
无

## goods-attr-config
表注释： 商品属性配置
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_attr_config_id (主键)|int(11)|否| ||
|goods_id|int(11)|否| |对应goods表|
|config_data|text|否| |配置数据|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|goods_attr_config_id|0|A|否||
|goods_id|BTREE|否|否|goods_id|0|A|否|||

#### 备注
无

## goods-attribute
表注释： 商品属性
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_attribute_id (主键)|int(11)|否| ||
|parent_id|int(11)|否|0 |父id|
|attr_name|varchar(60)|否| |属性名称|
|description|varchar(255)|否| |属性描述|
|icon|varchar(512)|否| |图标|
|goods_type_id|smallint(5)|否| |对应goods_type表|
|attr_index|tinyint(1)|否|0 |0=不检索 1=关键字 2=范围|
|attr_input_type|tinyint(1)|否|0 |0=手工填写 1=单选 2=多选|
|attr_values|text|是|NULL |可选值列表|
|is_important|tinyint(1)|否|0 |0=普通 1=核心属性|
|sort|tinyint(3)|否|50 |排序|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|goods_attribute_id|0|A|否||
|goods_type_id|BTREE|否|否|goods_type_id|0|A|否||
|sort|BTREE|否|否|sort|0|A|否||
|parent_id|BTREE|否|否|parent_id|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否||
|attr_index|BTREE|否|否|attr_index|0|A|否|||

#### 备注
无

## goods-category
表注释： 商品分类
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_category_id (主键)|smallint(5)|否| ||
|parent_id|smallint(5)|否|0 |父id|
|name|varchar(100)|否| |名称|
|name_phonetic|varchar(10)|否| |名称首拼|
|alias|varchar(50)|否| |别名|
|alias_phonetic|varchar(10)|否| |别名首拼|
|category_pic|varchar(512)|否| |图片|
|category_ico|varchar(50)|否| |图标|
|keywords|varchar(255)|否| |关键词|
|description|varchar(255)|否| |描述|
|category_type|tinyint(3)|否|0 |类型(自定义)|
|sort|tinyint(3)|否|50 |排序|
|is_navi|tinyint(1)|否|0 |导航 0=否 1=是|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|goods_category_id|852|A|否||
|parent_id|BTREE|否|否|parent_id|213|A|否||
|category_type|BTREE|否|否|category_type|1|A|否||
|status|BTREE|否|否|status|1|A|否||
|sort|BTREE|否|否|sort|1|A|否||
|is_navi|BTREE|否|否|is_navi|1|A|否|||

#### 备注
无

## goods-comment
表注释： 商品评价
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_comment_id (主键)|int(11)|否| ||
|parent_id|int(11)|否|0 |父id(回复) |
|goods_id|int(11)|否| |对应goods表|
|order_goods_id|int(11)|否| |对应order_goods表|
|order_no|varchar(50)|否| |对应order表|
|user_id|int(11)|否| |对应user表|
|is_anon|tinyint(1)|否|0 |是否匿名 0=否 1=是|
|type|tinyint(1)|否|0 |0=主评 1=主回 2=追评 3=追回|
|content|varchar(200)|否| |内容|
|image|text|否| |晒图|
|is_image|tinyint(1)|否|0 |0=无图 1=有图|
|is_append|tinyint(1)|否|0 |0=无追评 1=有追评|
|score|tinyint(1)|否|1 |评分 1~5|
|praise|smallint(5)|否|0 |点赞|
|reply_count|smallint(5)|否|0 |回复数|
|ip_address|varchar(20)|否| |ip地址|
|is_show|tinyint(1)|否|1 |0=否 1=是|
|is_top|tinyint(1)|否|0 |是否置顶 0=否 1=是|
|status|tinyint(1)|否|0 |0=未读 1=已读|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|goods_comment_id|0|A|否||
|type|BTREE|否|否|type|0|A|否||
|parent_id|BTREE|否|否|parent_id|0|A|否||
|goods_id|BTREE|否|否|goods_id|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否||
|is_top|BTREE|否|否|is_top|0|A|否||
|score|BTREE|否|否|score|0|A|否||
|is_show|BTREE|否|否|is_show|0|A|否||
|is_image|BTREE|否|否|is_image|0|A|否||
|order_no|BTREE|否|否|order_no|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|order_goods_id|BTREE|否|否|order_goods_id|0|A|否||
|is_append|BTREE|否|否|is_append|0|A|否|||

#### 备注
无

## goods-consult
表注释： 商品咨询
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_consult_id (主键)|int(11)|否| ||
|parent_id|int(11)|否|0 |父id(回复)|
|goods_id|int(11)|否| |对应goods表|
|user_id|int(11)|否|0 |对应user表 0=游客|
|is_anon|tinyint(1)|否|0 |是否匿名 0=否 1=是|
|type|tinyint(3)|否| |类型(自定义)|
|content|varchar(200)|否| |内容|
|is_show|tinyint(1)|否|1 |是否显示 0=否 1=是|
|status|tinyint(1)|否|0 |0=待回复 1=已回复|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|goods_consult_id|0|A|否||
|parent_id|BTREE|否|否|parent_id|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否||
|is_show|BTREE|否|否|is_show|0|A|否||
|status|BTREE|否|否|status|0|A|否|||

#### 备注
无

## goods-reply
表注释： 商品评价回复
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_reply_id (主键)|int(11)|否| ||
|goods_comment_id|int(11)|否| |对应goods_comment表|
|user_id|int(11)|否| |对应user表|
|nick_name|varchar(50)|否| |回复者昵称|
|to_name|varchar(50)|否| |回复谁|
|content|varchar(200)|否| |内容|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|goods_reply_id|0|A|否||
|goods_comment_id|BTREE|否|否|goods_comment_id|0|A|否|||

#### 备注
无

## goods-type
表注释： 商品模型
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_type_id (主键)|smallint(5)|否| ||
|type_name|varchar(60)|否| |类型名称|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|goods_type_id|0|A|否|||

#### 备注
无

## help
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|help_id (主键)|int(11)|否| ||
|router|varchar(100)|否| |路由|
|ver|char(16)|否| |版本号|
|module|char(16)|否| |所属模块|
|content|text|否| |内容|
|url|varchar(255)|否| |外部链接|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|help_id|9|A|否||
|router|BTREE|否|否|router|9|A|否||
|module|BTREE|否|否|module|2|A|否|||

#### 备注
无

## history
表注释： 浏览历史
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|history_id (主键)|int(11)|否| ||
|user_id|int(11)|否|0 |对应user表|
|goods_id|int(11)|否|0 |对应goods表|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|history_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|goods_id|BTREE|否|否|goods_id|0|A|否||
|update_time|BTREE|否|否|update_time|0|A|否|||

#### 备注
无

## menu
表注释： 菜单管理
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|menu_id (主键)|smallint(5)|否| ||
|parent_id|smallint(5)|否|0 |父id|
|name|varchar(32)|否| |名称|
|alias|varchar(16)|否| |别名|
|icon|varchar(64)|否| |图标|
|remark|varchar(255)|否| |备注|
|module|char(16)|否| |所属模块|
|type|tinyint(1)|否| |0=模块 1=外链|
|url|varchar(255)|否| |链接|
|params|varchar(255)|否| |参数|
|target|enum('_self', '_blank')|否|_self |_self _blank|
|is_navi|tinyint(1)|否|0 |导航 0=否 1=是|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|menu_id|1049|A|否||
|parent_id|BTREE|否|否|parent_id|349|A|否||
|sort|BTREE|否|否|sort|131|A|否||
|status|BTREE|否|否|status|4|A|否||
|module|BTREE|否|否|module|4|A|否||
|is_navi|BTREE|否|否|is_navi|4|A|否|||

#### 备注
无

## message
表注释： 消息管理
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|message_id (主键)|int(11)|否| ||
|type|tinyint(1)|否| |消息类型(自定义)|
|member|tinyint(1)|否|0 |0=私有函 1=顾客组 2=管理组|
|title|varchar(200)|否| |标题|
|content|mediumtext|否| |内容|
|url|varchar(255)|否| |外部链接|
|target|enum('_self', '_blank')|否|_self |_self _blank|
|page_views|int(11)|否|0 |游览量|
|is_top|tinyint(1)|否|0 |是否置顶 0=否 1=是|
|status|tinyint(1)|否|0 |0=禁用 1=启用|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|message_id|0|A|否||
|type|BTREE|否|否|type|0|A|否||
|is_top|BTREE|否|否|is_top|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否||
|member|BTREE|否|否|member|0|A|否||
|create_time|BTREE|否|否|create_time|0|A|否|||

#### 备注
无

## message-user
表注释： 用户消息通知
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|message_user_id (主键)|int(11)|否| ||
|message_id|int(11)|否|0 |对应message表|
|user_id|int(11)|是|NULL |对应user表|
|admin_id|int(11)|是|NULL |对应admin表|
|is_read|tinyint(1)|否|0 |0=未读 1=已读|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|message_user_id|0|A|否||
|message_id|BTREE|否|否|message_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|是||
|is_delete|BTREE|否|否|is_delete|0|A|否||
|is_read|BTREE|否|否|is_read|0|A|否||
|admin_id|BTREE|否|否|admin_id|0|A|是|||

#### 备注
无

## navigation
表注释： 导航
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|navigation_id (主键)|smallint(5)|否| ||
|name|varchar(100)|否| |名称|
|url|varchar(255)|否| |链接|
|target|enum('_self', '_blank')|否|_self |_self _blank|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|navigation_id|0|A|否|||

#### 备注
无

## notice-item
表注释： 通知系统可用变量
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|notice_item_id (主键)|smallint(5)|否| ||
|item_name|varchar(30)|否| |名称|
|replace_name|varchar(50)|否| |替换变量|
|type|tinyint(1)|否| |通知类型|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|notice_item_id|34|A|否||
|type|BTREE|否|否|type|17|A|否|||

#### 备注
无

## notice-tpl
表注释： 通知系统模板
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|notice_tpl_id (主键)|smallint(5)|否| ||
|name|varchar(30)|否| |模板名称|
|code|varchar(10)|否| |通知系统编码|
|type|tinyint(1)|否| |通知类型|
|sms_code|varchar(20)|否| |阿里云短信模板编号|
|title|varchar(255)|否| |标题或签名|
|template|text|否| |模板|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|notice_tpl_id|14|A|否||
|status|BTREE|否|否|status|2|A|否||
|code|BTREE|否|否|code|4|A|否||
|type|BTREE|否|否|type|14|A|否|||

#### 备注
无

## order
表注释： 订单管理
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|order_id (主键)|int(11)|否| ||
|parent_id|int(11)|否|0 |父订单Id|
|order_no|varchar(50)|否| |订单号|
|user_id|int(11)|否| |对应user表|
|source|tinyint(3)|否| |订单来源(自定义)|
|pay_amount|decimal(10,2)|否|0.00 |订单金额|
|goods_amount|decimal(10,2)|否|0.00 |商品金额|
|total_amount|decimal(10,2)|否|0.00 |应付金额(含运费)|
|use_money|decimal(10,2)|否|0.00 |余额抵扣|
|use_level|decimal(10,2)|否|0.00 |会员抵扣|
|use_integral|decimal(10,2)|否|0.00 |积分抵扣|
|use_coupon|decimal(10,2)|否|0.00 |优惠劵抵扣|
|use_discount|decimal(10,2)|否|0.00 |商品折扣抵扣|
|use_promotion|decimal(10,2)|否|0.00 |订单促销抵扣|
|use_card|decimal(10,2)|否|0.00 |购物卡抵扣|
|delivery_fee|decimal(10,2)|否|0.00 |运费|
|payment_no|varchar(50)|否| |支付单号(交易流水号)|
|payment_code|varchar(1)|否| |支付编码|
|card_number|varchar(16)|否| |购物卡号|
|delivery_id|smallint(5)|否|0 |配送方式 对应delivery表|
|consignee|varchar(50)|否| |收货人姓名|
|country|int(11)|否|0 |国家|
|region_list|varchar(255)|否| |区域列表|
|address|varchar(255)|否| |详细地址|
|complete_address|varchar(255)|否| |完整地址|
|zipcode|varchar(20)|否| |邮编|
|tel|varchar(15)|否| |电话|
|mobile|varchar(15)|否| |手机号码|
|buyer_remark|varchar(255)|否| |买家备注|
|invoice_type|tinyint(1)|否|0 |是否开票 0=否 1=个人 2=企业|
|invoice_title|varchar(255)|否| |发票抬头|
|tax_number|varchar(20)|否| |纳税人识别号|
|invoice_amount|decimal(10,2)|否|0.00 |开票费用|
|trade_status|tinyint(1)|否|0 |交易状态 0=待处理 1=配货中 2=已发货 3=已完成 4=已取消|
|delivery_status|tinyint(1)|否|0 |配送状态 0=未发 1=已发 2=部分发|
|payment_status|tinyint(1)|否|0 |支付状态 0=未付 1=已付|
|create_user_id|int(11)|否|0 |订单创建者(管理组)|
|is_give|tinyint(1)|否|1 |收货增 0=否 1=是|
|sellers_remark|varchar(255)|否| |卖家备注|
|adjustment|decimal(10,2)|否|0.00 |调整价格|
|integral_pct|decimal(10,2)|否|0.00 |积分换算比例|
|give_integral|int(11)|否|0 |赠送积分|
|give_coupon|varchar(255)|否| |赠送优惠劵|
|payment_time|int(11)|否|0 |支付日期|
|picking_time|int(11)|否|0 |配货日期|
|delivery_time|int(11)|否|0 |发货日期|
|finished_time|int(11)|否|0 |完成日期|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|
|is_delete|tinyint(1)|否|0 |0=未删 1=回收站 2=删除|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|order_id|0|A|否||
|parent_id|BTREE|否|否|parent_id|0|A|否||
|order_no|BTREE|否|否|order_no|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|trade_status|BTREE|否|否|trade_status|0|A|否||
|delivery_status|BTREE|否|否|delivery_status|0|A|否||
|payment_status|BTREE|否|否|payment_status|0|A|否||
|create_user_id|BTREE|否|否|create_user_id|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否||
|create_time|BTREE|否|否|create_time|0|A|否||
|delivery_time|BTREE|否|否|delivery_time|0|A|否|||

#### 备注
无

## order-goods
表注释： 订单商品
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|order_goods_id (主键)|int(11)|否| ||
|order_id|int(11)|否|0 |对应order表|
|order_no|varchar(50)|否| |订单号|
|user_id|int(11)|否| |对应user表|
|goods_name|varchar(200)|否| |商品名称|
|goods_id|int(11)|否|0 |对应goods表|
|goods_image|varchar(512)|否| |商品封面|
|goods_code|varchar(50)|否| |商品货号|
|goods_sku|varchar(50)|否| |商品SKU|
|bar_code|varchar(60)|否| |商品条码|
|key_name|varchar(100)|否| |规格键名|
|key_value|varchar(60)|否| |规格值|
|market_price|decimal(10,2)|否| |市场价|
|shop_price|decimal(10,2)|否| |本店价|
|qty|int(11)|否|0 |购买数量|
|is_comment|tinyint(1)|否|0 |0=未评 1=已评 2=追评|
|is_service|tinyint(1)|否|0 |0=可申请 1=售后中 2=已售后 3=不可申|
|status|tinyint(1)|否|0 |0=未发 1=已发 2=收货 3=取消|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|order_goods_id|0|A|否||
|order_id|BTREE|否|否|order_id|0|A|否||
|order_no|BTREE|否|否|order_no|0|A|否||
|goods_name|BTREE|否|否|goods_name (191)|0|A|否||
|goods_id|BTREE|否|否|goods_id|0|A|否||
|key_name|BTREE|否|否|key_name|0|A|否||
|is_comment|BTREE|否|否|is_comment|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|is_service|BTREE|否|否|is_service|0|A|否|||

#### 备注
无

## order-log
表注释： 订单日志
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|order_log_id (主键)|int(11)|否| ||
|order_id|int(11)|否|0 |对应order表|
|order_no|varchar(50)|否| |订单号|
|trade_status|tinyint(1)|否| |交易状态|
|delivery_status|tinyint(1)|否| |配送状态|
|payment_status|tinyint(1)|否| |支付状态|
|action|varchar(80)|否| |操作者|
|client_type|tinyint(1)|否| |-1=游客 0=顾客 1=管理组|
|comment|varchar(200)|否| |备注|
|description|varchar(100)|否| |描述|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|order_log_id|0|A|否||
|order_id|BTREE|否|否|order_id|0|A|否||
|order_no|BTREE|否|否|order_no|0|A|否|||

#### 备注
无

## order-refund
表注释： 订单退款
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|order_refund_id (主键)|int(11)|否| ||
|refund_no|varchar(50)|否| |退款单号(流水号)|
|order_no|varchar(50)|否| |订单号|
|out_trade_no|varchar(100)|否| |退款交易号|
|out_trade_msg|varchar(200)|否| |退款返回信息|
|user_id|int(11)|否|0 |对应user表|
|total_amount|decimal(10,2)|否| |订单支付总额|
|amount|decimal(10,2)|否| |退款金额|
|payment_no|varchar(50)|否| |支付单号(交易流水号)|
|to_payment|varchar(1)|否| |支付方式|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|
|status|tinyint(1)|否|0 |0=待处理 1=已处理 2=失败 3=撤销|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|order_refund_id|0|A|否||
|refund_no|BTREE|否|否|refund_no|0|A|否||
|order_no|BTREE|否|否|order_no|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|status|BTREE|否|否|status|0|A|否|||

#### 备注
无

## order-service
表注释： 售后服务
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|order_service_id (主键)|int(11)|否| ||
|service_no|varchar(50)|否| |售后单号(流水号)|
|order_no|varchar(50)|否| |订单号|
|order_goods_id|int(11)|否|0 |对应order_goods表|
|user_id|int(11)|否|0 |对应user表|
|admin_id|int(11)|否|0 |对应admin表|
|qty|int(11)|否|0 |数量|
|type|tinyint(1)|否| |0=仅退款 1=退货退款 2=换货 3=维修|
|reason|varchar(100)|否| |原因|
|description|varchar(255)|否| |说明|
|goods_status|tinyint(1)|否|0 |货物状态 0=未选择 1=未收到货 2=已收到货|
|image|text|否| |凭证(照片)|
|status|tinyint(1)|否|0 |0=待处理 1=已同意 2=已拒绝 3=已寄件 4=售后中 5=已撤销 6=已完成|
|is_return|tinyint(1)|否|0 |寄回到商家 0=否 1=是|
|result|varchar(100)|否| |处理结果|
|remark|varchar(255)|否| |客服备注|
|refund_fee|decimal(10,2)|否|0.00 |退款金额|
|refund_detail|varchar(255)|否| |退款结构|
|refund_no|varchar(50)|否| |退款单号|
|address|varchar(255)|否| |返件地址|
|consignee|varchar(30)|否| |委托人|
|zipcode|varchar(20)|否| |邮编|
|mobile|varchar(15)|否| |手机号码|
|logistic_code|varchar(50)|否| |快递单号|
|delivery_fee|decimal(10,2)|否|0.00 |运费|
|admin_event|tinyint(1)|否|1 |是否有新事件|
|user_event|tinyint(1)|否|0 |是否有新事件|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|order_service_id|0|A|否||
|service_no|BTREE|否|否|service_no|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|order_no|BTREE|否|否|order_no|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|type|BTREE|否|否|type|0|A|否||
|order_goods_id|BTREE|否|否|order_goods_id|0|A|否||
|admin_event|BTREE|否|否|admin_event|0|A|否||
|user_event|BTREE|否|否|user_event|0|A|否||
|admin_id|BTREE|否|否|admin_id|0|A|否|||

#### 备注
无

## payment
表注释： 支付配置
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|payment_id (主键)|smallint(5)|否| ||
|name|varchar(50)|否| |支付名称|
|code|tinyint(1)|否| |支付编码|
|image|varchar(512)|否| |图片|
|is_deposit|tinyint(1)|否| |财务充值 0=否 1=是|
|is_inpour|tinyint(1)|否| |账号充值 0=否 1=是|
|is_payment|tinyint(1)|否| |订单支付 0=否 1=是|
|is_refund|tinyint(1)|否| |原路返回 0=否 1=是|
|setting|text|否| |配置|
|model|varchar(50)|否| |对应模型|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|payment_id|7|A|否||
|code|BTREE|否|否|code|7|A|否||
|sort|BTREE|否|否|sort|2|A|否||
|status|BTREE|否|否|status|2|A|否|||

#### 备注
无

## payment-log
表注释： 支付日志
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|payment_log_id (主键)|int(11)|否| ||
|payment_no|varchar(50)|否| |流水号|
|out_trade_no|varchar(100)|否| |交易号|
|order_no|varchar(50)|否| |订单号|
|user_id|int(11)|否|0 |对应user表|
|amount|decimal(10,2)|否| |支付金额|
|payment_time|varchar(20)|否| |支付日期|
|to_payment|varchar(1)|否| |支付方式|
|type|tinyint(1)|否| |0=充值 1=订单|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|
|status|tinyint(1)|否|0 |0=待付款 1=已完成 2=已关闭|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|payment_log_id|0|A|否||
|payment_no|BTREE|否|否|payment_no|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|order_no|BTREE|否|否|order_no|0|A|否||
|type|BTREE|否|否|type|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|trade_no|BTREE|否|否|out_trade_no|0|A|否|||

#### 备注
无

## praise
表注释： 点赞记录
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|praise_id (主键)|int(11)|否| ||
|user_id|int(11)|否| |对应user表|
|goods_comment_id|int(11)|否| |对应goods_comment表|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|praise_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|goods_comment_id|BTREE|否|否|goods_comment_id|0|A|否|||

#### 备注
无

## promotion
表注释： 订单促销
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|promotion_id (主键)|int(11)|否| ||
|name|varchar(100)|否| |促销名称|
|begin_time|int(11)|否|0 |开始日期|
|end_time|int(11)|否|0 |结束日期|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|promotion_id|0|A|否||
|begin_time|BTREE|否|否|begin_time|0|A|否||
|end_time|BTREE|否|否|end_time|0|A|否||
|status|BTREE|否|否|status|0|A|否|||

#### 备注
无

## promotion-item
表注释： 订单促销项
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|promotion_id|int(11)|否|0 |对应promotion表|
|quota|decimal(10,2)|否| |限额|
|settings|text|否| |0=减价 1=打折 2=免邮 3=送积分 4=送优惠劵|
|description|varchar(255)|否| |描述|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|promotion_id|BTREE|否|否|promotion_id|0|A|否||
|quota|BTREE|否|否|quota|0|A|否|||

#### 备注
无

## qrcode
表注释： 二维码管理
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|qrcode_id (主键)|mediumint(8)|否| ||
|name|varchar(64)|否| |名称|
|text|varchar(255)|否| |内容|
|size|smallint(5)|否|75 |大小|
|suffix|enum('png', 'jpg', 'gif')|否|png |后缀|
|logo|varchar(512)|否| |logo|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|qrcode_id|0|A|否|||

#### 备注
无

## region
表注释： 区域
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|region_id (主键)|smallint(5)|否| ||
|parent_id|smallint(5)|否|0 |父节点id|
|region_name|varchar(120)|否| |区域名称|
|sort|tinyint(3)|否|50 |排序|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|region_id|4022|A|否||
|parent_id|BTREE|否|否|parent_id|670|A|否||
|is_delete|BTREE|否|否|is_delete|4|A|否||
|sort|BTREE|否|否|sort|201|A|否|||

#### 备注
无

## service-log
表注释： 售后日志
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|service_log_id (主键)|int(11)|否| ||
|order_service_id|int(11)|否|0 |对应order_service表|
|service_no|varchar(50)|否| |售后单号|
|action|varchar(80)|否| |操作者|
|client_type|tinyint(1)|否| |-1=游客 0=顾客 1=管理组|
|comment|varchar(255)|否| |具体说明|
|description|varchar(100)|否| |描述|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|service_log_id|0|A|否||
|order_service_id|BTREE|否|否|order_service_id|0|A|否||
|service_no|BTREE|否|否|service_no|0|A|否|||

#### 备注
无

## setting
表注释： 系统配置
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|setting_id (主键)|smallint(5)|否| ||
|code|varchar(30)|否| |变量名|
|value|text|否| |变量值|
|module|varchar(30)|否| |模块(作用域)|
|description|varchar(100)|否| |描述|
|help_text|varchar(255)|否| |帮助|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|setting_id|70|A|否||
|code|BTREE|否|否|code|70|A|否||
|module|BTREE|否|否|module|17|A|否|||

#### 备注
无

## spec
表注释： 商品规格
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|spec_id (主键)|int(11)|否| ||
|goods_type_id|smallint(5)|否|0 |对应goods_type表 0=自定义|
|name|varchar(60)|否| |规格名称|
|spec_index|tinyint(1)|否|0 |是否检索 0=否 1=是|
|spec_type|tinyint(1)|否|0 |0=文字 1=图片 2=颜色|
|sort|tinyint(3)|否|50 |排序|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|spec_id|0|A|否||
|goods_type_id|BTREE|否|否|goods_type_id|0|A|否||
|sort|BTREE|否|否|sort|0|A|否||
|spec_index|BTREE|否|否|spec_index|0|A|否|||

#### 备注
无

## spec-config
表注释： 商品规格配置
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|spec_config_id (主键)|int(11)|否| ||
|goods_id|int(11)|否| |对应goods表|
|config_data|text|否| |配置数据|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|spec_config_id|0|A|否||
|goods_id|BTREE|否|否|goods_id|0|A|否|||

#### 备注
无

## spec-goods
表注释： 商品规格列表
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_id|int(11)|否|0 |对应goods表|
|key_name|varchar(200)|否| |规格键名|
|key_value|varchar(100)|否| |规格值|
|price|decimal(10,2)|否| |商品价格|
|store_qty|int(11)|否|0 |库存数量|
|bar_code|varchar(60)|否| |商品条码|
|goods_sku|varchar(50)|否| |商品SKU|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|goods_id|BTREE|否|否|goods_id|0|A|否||
|key_name|BTREE|否|否|key_name (191)|0|A|否|||

#### 备注
无

## spec-image
表注释： 商品规格图片
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|goods_id|int(11)|否|0 |对应goods表|
|spec_item_id|int(11)|否|0 |对应spec_item表|
|spec_type|tinyint(1)|否| |1=图片 2=颜色|
|image|text|否| |商品规格图片|
|color|varchar(50)|否| |商品规格颜色|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|goods_id|BTREE|否|否|goods_id|0|A|否||
|spec_item_id|BTREE|否|否|spec_item_id|0|A|否|||

#### 备注
无

## spec-item
表注释： 商品规格项
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|spec_item_id (主键)|int(11)|否| ||
|spec_id|int(11)|否| |对应spec表|
|item_name|varchar(60)|否| |项名|
|is_contact|tinyint(1)|否|0 |是否关联 0=否 1=是|
|sort|tinyint(3)|否|50 |排序|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|spec_item_id|0|A|否||
|spec_id|BTREE|否|否|spec_id|0|A|否||
|is_contact|BTREE|否|否|is_contact|0|A|否||
|sort|BTREE|否|否|sort|0|A|否|||

#### 备注
无

## storage
表注释： 资源管理器
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|storage_id (主键)|int(11)|否| ||
|parent_id|int(11)|否|0 |父id|
|name|varchar(255)|否| |名称|
|mime|varchar(100)|否| |mime|
|ext|varchar(6)|否| |后缀|
|size|int(11)|否|0 |大小|
|pixel|varchar(50)|否| |像素|
|hash|char(40)|否| |哈希值|
|path|varchar(255)|否| |路径|
|url|varchar(255)|否| |外链|
|protocol|varchar(10)|否| |协议|
|type|tinyint(1)|否| |0=图片 1=附件 2=目录 3=视频|
|priority|tinyint(1)|否|1 |优先权 0>1|
|cover|varchar(512)|否| |封面|
|sort|tinyint(3)|否|50 |排序|
|is_default|tinyint(1)|否|0 |默认目录 0=否 1=是|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|storage_id|23|A|否||
|parent_id|BTREE|否|否|parent_id|7|A|否||
|type|BTREE|否|否|type|4|A|否||
|sort|BTREE|否|否|sort|2|A|否||
|hash|BTREE|否|否|hash|23|A|否||
|path|BTREE|否|否|path (191)|23|A|否||
|name|BTREE|否|否|name (191)|23|A|否||
|protocol|BTREE|否|否|protocol|4|A|否||
|priority|BTREE|否|否|priority|4|A|否|||

#### 备注
无

## storage-style
表注释： 资源样式
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|storage_style_id (主键)|int(11)|否| ||
|name|varchar(64)|否| |名称|
|code|varchar(32)|否| |编码|
|platform|tinyint(3)|否| |平台(自定义)|
|scale|varchar(255)|否| |缩放规格|
|resize|varchar(10)|否| |缩放方式|
|quality|tinyint(3)|否|0 |图片质量|
|suffix|varchar(8)|否| |输出格式|
|style|varchar(64)|否| |第三方样式|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|storage_style_id|12|A|否||
|code|BTREE|否|否|code|12|A|否||
|platform|BTREE|否|否|platform|2|A|否||
|status|BTREE|否|否|status|2|A|否|||

#### 备注
无

## support
表注释： 客服
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|support_id (主键)|smallint(5)|否| ||
|type_name|varchar(50)|否| |客服组名称|
|nick_name|varchar(50)|否| |昵称|
|code|varchar(150)|否| |联系方式|
|sort|tinyint(3)|否|50 |排序|
|status|tinyint(1)|否|1 |0=禁用 1=启用|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|support_id|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|sort|BTREE|否|否|sort|0|A|否|||

#### 备注
无

## token
表注释： token
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|token_id (主键)|int(11)|否| ||
|client_id|int(11)|否| |编号|
|group_id|mediumint(8)|否| |用户组Id|
|username|varchar(80)|否| |账号|
|client_type|tinyint(1)|否| |0=顾客 1=管理组|
|platform|varchar(50)|否| |来源终端|
|code|varchar(32)|否| |随机密钥|
|token|varchar(32)|否| |授权码|
|token_expires|int(11)|否| |授权码过期时间|
|refresh|varchar(32)|否| |刷新授权码|
|refresh_expires|int(11)|否| |刷新授权码过期时间|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|token_id|0|A|否||
|user_id|BTREE|否|否|client_id|0|A|否||
|admin_id|BTREE|否|否|platform|0|A|否||
|client_type|BTREE|否|否|client_type|0|A|否||
|token|BTREE|否|否|token|0|A|否|||

#### 备注
无

## topic
表注释： 专题
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|topic_id (主键)|int(11)|否| ||
|title|varchar(200)|否| |标题|
|alias|varchar(100)|否| |别名|
|content|mediumtext|否| |内容|
|keywords|varchar(255)|否| |关键词|
|description|varchar(255)|否| |描述|
|status|tinyint(1)|否|1 |0=禁用 1=启用|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|topic_id|0|A|否||
|is_show|BTREE|否|否|status|0|A|否|||

#### 备注
无

## transaction
表注释： 交易结算日志
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|transaction_id (主键)|int(11)|否| ||
|user_id|int(11)|是|0 |对应user表|
|action|varchar(80)|否| |操作者|
|type|tinyint(1)|否| |0=收入 1=支出|
|amount|decimal(10,2)|否| |交易金额|
|balance|decimal(10,2)|否| |剩余余额|
|source_no|varchar(100)|否| |来源订单号|
|remark|varchar(255)|否| |备注|
|cause|varchar(255)|否| |原因|
|module|varchar(30)|否| |points=积分 money=余额 card=购物卡|
|to_payment|tinyint(1)|否| |支付方式|
|card_number|varchar(16)|否| |购物卡卡号|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|transaction_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|是||
|type|BTREE|否|否|type|0|A|否||
|order_no|BTREE|否|否|source_no|0|A|否||
|module|BTREE|否|否|module|0|A|否||
|create_time|BTREE|否|否|create_time|0|A|否||
|card_number|BTREE|否|否|card_number|0|A|否|||

#### 备注
无

## user
表注释： 顾客组账号
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|user_id (主键)|int(11)|否| ||
|username|varchar(80)|否| |账号|
|password|varchar(60)|否| |密码|
|mobile|varchar(15)|否| |手机|
|is_mobile|tinyint(1)|否|0 |是否验证 0=否 1=是|
|email|varchar(60)|否| |邮箱|
|is_email|tinyint(1)|否|0 |是否验证 0=否 1=是|
|nickname|varchar(50)|否| |昵称|
|head_pic|varchar(512)|否| |头像|
|sex|tinyint(1)|否|0 |0=保密 1=男 2=女|
|birthday|varchar(10)|否| |生日|
|level_icon|varchar(512)|否| |等级图标|
|user_level_id|int(11)|否|1 |对应user_level表|
|user_address_id|int(11)|否|0 |对应user_address表|
|group_id|mediumint(8)|否| |用户组Id|
|last_login|int(11)|否|0 |最后登录日期|
|last_ip|varchar(15)|否| |最后登录ip|
|status|tinyint(1)|否|1 |0=禁用 1=启用|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|user_id|0|A|否||
|username|BTREE|否|否|username|0|A|否||
|mobile|BTREE|否|否|mobile|0|A|否||
|email|BTREE|否|否|email|0|A|否||
|nickname|BTREE|否|否|nickname|0|A|否||
|user_level_id|BTREE|否|否|user_level_id|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否|||

#### 备注
无

## user-address
表注释： 账号收货地址
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|user_address_id (主键)|int(11)|否| ||
|user_id|int(11)|否|0 |对应user表|
|consignee|varchar(30)|否| |姓名|
|country|smallint(5)|否|0 |国家|
|region_list|varchar(255)|否| |区域列表|
|region|varchar(255)|否| |所在地区|
|address|varchar(255)|否| |详细地址|
|zipcode|varchar(20)|是| |邮编|
|tel|varchar(15)|否| |电话|
|mobile|varchar(15)|否| |手机号码|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|user_address_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否|||

#### 备注
无

## user-level
表注释： 账号等级
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|user_level_id (主键)|smallint(5)|否| ||
|name|varchar(30)|否| |等级名称|
|icon|varchar(512)|否| |图标|
|amount|decimal(10,2)|否| |消费金额|
|discount|tinyint(3)|否| |折扣|
|description|varchar(200)|是| |等级描述|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|user_level_id|6|A|否||
|amount|BTREE|否|否|amount|6|A|否|||

#### 备注
无

## user-money
表注释： 账号资金表
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|user_money_id (主键)|int(11)|否| ||
|user_id|int(11)|否|0 |对应user表|
|total_money|decimal(10,2)|否|0.00 |累计消费|
|balance|decimal(10,2)|否|0.00 |可用余额|
|lock_balance|decimal(10,2)|否|0.00 |锁定余额|
|points|int(11)|否|0 |账号积分|
|lock_points|int(11)|否|0 |锁定积分|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|user_money_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否|||

#### 备注
无

## verification
表注释： 验证码
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|verification_id (主键)|int(11)|否| ||
|number|varchar(60)|否| |号码|
|code|varchar(6)|否| |验证码|
|status|tinyint(1)|否|1 |0=无效 1=有效|
|type|enum('sms', 'email')|否| |类型|
|create_time|int(11)|否|0 |创建日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|verification_id|0|A|否||
|number|BTREE|否|否|number|0|A|否||
|code|BTREE|否|否|code|0|A|否|||

#### 备注
无

## withdraw
表注释： 提现申请
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|withdraw_id (主键)|int(11)|否| ||
|withdraw_no|varchar(50)|否| |提现单号|
|user_id|int(11)|否|0 |对应user表|
|name|varchar(32)|否| |收款人姓名|
|mobile|varchar(12)|否| |收款人手机|
|bank_name|varchar(50)|否| |收款账户|
|account|varchar(100)|否| |收款账号|
|money|decimal(10,2)|否| |提现金额|
|fee|decimal(10,2)|否|0.00 |手续费(百分比)|
|amount|decimal(10,2)|否| |合计金额|
|remark|varchar(255)|否| |备注|
|status|tinyint(1)|否|0 |0=待处理 1=处理中 2=已取消 3=已完成 4=已拒绝|
|create_time|int(11)|否|0 |创建日期|
|update_time|int(11)|否|0 |更新日期|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|withdraw_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|status|BTREE|否|否|status|0|A|否||
|withdraw_no|BTREE|否|否|withdraw_no|0|A|否||
|create_time|BTREE|否|否|create_time|0|A|否|||

#### 备注
无

## withdraw-user
表注释： 提现账号
|字段|类型|空|默认|注释|
|:---- |:------- |:--- |:----|:------ |
|withdraw_user_id (主键)|int(11)|否| ||
|user_id|int(11)|否|0 |对应user表|
|name|varchar(32)|否| |收款人姓名|
|mobile|varchar(15)|否| |收款人手机|
|bank_name|varchar(50)|否| |收款账户|
|account|varchar(100)|否| |收款账号|
|is_delete|tinyint(1)|否|0 |0=未删 1=已删|

#### 索引
|键名|类型|唯一|紧凑|字段|基数|排序规则|空|注释|
|:---|:--|:---|:---|:--|:--|:-------|:-|:--|
|PRIMARY|BTREE|是|否|withdraw_user_id|0|A|否||
|user_id|BTREE|否|否|user_id|0|A|否||
|is_delete|BTREE|否|否|is_delete|0|A|否|||

#### 备注
无
