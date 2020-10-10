# 调试模式

调试模式的配置文件位于`.env`

应用默认是部署模式，在开发阶段，可以修改环境变量`APP_DEBUG`开启调试模式，上线部署后切换到部署模式。

当环境变量`API_DEBUG`值为`true`时，调用接口不需要授权，并且可以将`method`参数设置为函数名称进行`快捷调用`，

> 更多调试模式说明请参考 [ThinkPHP 官方文档](https://www.kancloud.cn/manual/thinkphp6_0/1037618)

下面分别说明下`模拟授权`和`快捷调用`。

**[ 模拟授权 ]**

在调试模式下不需要授权，但系统依旧需要调用者的身份信息，所以我们通过模拟来进行。

在`app/api/controller/CareyShop.php`大约 390 行开始，找到
```php
// 初始账号数据
$GLOBALS['client'] = [
    'type'        => config('extra.client_group.' . ($this->apiDebug ? 'user' : 'visitor') . '.value'),
    'group_id'    => $this->apiDebug ? AUTH_CLIENT : AUTH_GUEST,
    'client_id'   => $this->apiDebug ? 1 : 0,
    'client_name' => $this->apiDebug ? 'CareyShop' : '游客',
    'token'       => $this->token,
];
```
该状态表示`顾客组`中的一个普通会员，如果需要切换到`超级管理员`则按如下修改：
```php
// 初始账号数据
$GLOBALS['client'] = [
    'type'        => config('extra.client_group.' . ($this->apiDebug ? 'admin' : 'visitor') . '.value'),
    'group_id'    => $this->apiDebug ? AUTH_SUPER_ADMINISTRATOR : AUTH_GUEST,
    'client_id'   => $this->apiDebug ? 1 : 0,
    'client_name' => $this->apiDebug ? 'Admin' : '游客',
    'token'       => $this->token,
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

以上代码片段表示名为`ads`控制器下的`方法路由器`，在部署模式下调用示范：
`http://host/api/v1/ads/method/get.ads.list/`

而在调试模式下也可以直接调用某个函数名作为方法参数，比如：
`http://host/api/v1/ads/method/getAdsList/`
