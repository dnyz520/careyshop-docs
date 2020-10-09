# 调试模式

开发环境与生产环境有 3 处需要进行切换的地方，分别是：

1. `application/config.php`配置中的`app_debug`，当值为`true`时表示应用调试模式。

2. `application/database.php`配置中的`debug`，当值为`true`时表示数据库调试模式。

3. `application/api/config.php`配置中的`api_debug`，当值为`true`时表示API调试模式。

> 以上 3 处不一定要全部修改，而是根据自己的需要进行切换，
app_debug 与 debug 配置含义请参考 ThinkPHP 官方说明。

------------

当`api_debug`值为`true`时调用接口不需要授权，并且可以直接调用 API 控制器中设定的函数，

下面分别说明下`模拟授权`和`快捷调用`。

**[ 模拟授权 ]**
在调试模式下不需要授权，但系统依旧需要调用者的身份信息，所以我们通过模拟来进行。

在`application/api/controller/CareyShop.php`大约 360 行开始，找到
```php
// 初始账号数据
$GLOBALS['client'] = [
    'type'        => config('ClientGroup.' . ($this->apiDebug ? 'user' : 'visitor'))['value'],
    'group_id'    => $this->apiDebug ? AUTH_CLIENT : AUTH_GUEST,
    'client_id'   => $this->apiDebug ? 1 : 0,
    'client_name' => $this->apiDebug ? 'CareyShop' : '游客',
];
```
该状态表示`顾客组`中的一个普通会员，如果需要切换到`超级管理员`则按如下修改：
```php
// 初始账号数据
$GLOBALS['client'] = [
    'type'        => config('ClientGroup.' . ($this->apiDebug ? 'admin' : 'visitor'))['value'],
    'group_id'    => $this->apiDebug ? AUTH_SUPER_ADMINISTRATOR : AUTH_GUEST,
    'client_id'   => $this->apiDebug ? 1 : 0,
    'client_name' => $this->apiDebug ? 'Admin' : '游客',
];
```

**[ 快捷调用 ]**

```php
class Ads extends CareyShop
{
    /**
     * 方法路由器
     * @access protected
     * @return array
     */
    protected static function initMethod()
    {
        return [
            // 添加一个广告
            'add.ads.item'    => ['addAdsItem'],
            // 编辑一个广告
            'set.ads.item'    => ['setAdsItem'],
            // 批量删除广告
            'del.ads.list'    => ['delAdsList'],
            // 设置广告排序
            'set.ads.sort'    => ['setAdsSort'],
            // 根据编号自动排序
            'set.ads.index'   => ['setAdsIndex'],
            // 批量设置是否显示
            'set.ads.status'  => ['setAdsStatus'],
            // 获取一个广告
            'get.ads.item'    => ['getAdsItem'],
            // 获取广告列表
            'get.ads.list'    => ['getAdsList'],
            // 根据编码获取一个广告
            'get.ads.code'    => ['getAdsCode'],
            // 验证广告编码是否唯一
            'unique.ads.code' => ['uniqueAdsCode'],
        ];
    }
}
```

以上代码表示一个 API 调用控制器的`方法路由器`，在非调试模式下，调用接口必须：
`http://host/api/v1/ads/method/get.ads.list/`

而在调试模式下可以直接调用某个函数，比如：
`http://host/api/v1/ads/method/getAdsList/`