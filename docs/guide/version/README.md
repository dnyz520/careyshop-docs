# 接口版本号

框架默认占用`v1`版本号，当您对调用的接口需要进行二次开发时，我们建议不要直接修改`公共模块`内的成员函数，   
而是另起一个版本号，将框架与二次开发所修改的内容区分开。

下面将举例说明如何进行新增、修改、删除。

## 管理控制器类

1. 在`app/api/controller`目录下新建`v2`目录，也可以自主设计目录名称，例如叫“ver2.0”，但名称在 URL 访问与命名空间时必须一致（演示讲解时一律使用v2名称）。

2. 之后在`v2`目录下创建控制器类文件，如果是在某个控制器类的基础上进行二次开发，那么二者的文件名称必须一致，并且继承于对应的`v1`控制器类。
如果是一个完全独立、新增的控制器类，那么必须继承于`\app\api\controller\CareyShop`。

## 演示代码片段

完成上面的操作后就可以实际写入代码，演示代码以`v1`版本下的`Index`控制器为例，对各种会运用到的状况都做了解释。

```php
<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    自定义接口版本号v2演示
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/10/10
 */

namespace app\api\controller\v2;

use app\careyshop\service\Index as IndexService;

class Index extends \app\api\controller\v1\Index
{
    /**
     * 方法1:通过方法路由器
     * 重写该成员函数,通过"self::$route"键名对应的值来改变请求方法的重定位
     * 如果需要继承父类"self::$route"的初始值,则需要执行"parent::initMethod()"
     * 不执行状态下,v1与v2属于完全独立的请求接口
     *
     * 如果选择不继承初始值,那么建议当前类从"\app\api\controller\CareyShop.php"继承
     * 而不是从"\app\api\controller\v1\Index"继承
     *
     * @access protected
     * @return void
     */
    protected static function initMethod()
    {
        /**
         * 父类"self::$route"的初始值
         * self::$route = [
         * // API访问测试
         * 'get.index.host'      => ['getIndexHost', false],
         * // 清空所有缓存
         * 'clear.cache.all'     => ['clearCacheAll', IndexService::class],
         * // 调整最优状态(正式环境有效)
         * 'set.system.optimize' => ['setSystemOptimize', IndexService::class],
         * // 获取系统版本号
         * 'get.system.version'  => ['getVersion', IndexService::class],
         * ];
         */
        parent::initMethod();

        // 父方法路由器键名不存在"get.system.v2"方法,表示新增一个接口
        self::$route['get.system.v2'] = ['getMethodV2', false];

        // 父方法路由器键名存在"get.system.version"方法,表示修改一个接口
        self::$route['get.system.version'] = ['getVersion', false];

        // 删除从父方法路由器继承过来的"set.system.optimize"方法
        unset(self::$route['set.system.optimize']);

        /**
         * 假设不执行"parent::initMethod()",那么"Index"控制器最终请求方法结果如下:
         * "get.index.host"与"clear.cache.all" v1、v2都不可请求
         * "set.system.optimize" v1可请求,v2不可请求
         * "get.system.version" v1、v2都可请求,但返回内容不同
         * "get.system.v2" v1不可请求,v2可请求
         * 至于方法路由器中的键值含义请参考 https://doc.careyshop.cn/guide/controller/
         */

        /**
         * 假设执行过"parent::initMethod()",那么"Index"控制器最终请求方法结果如下:
         * "get.index.host"与"clear.cache.all" v1、v2都可请求,且结果相同
         * "set.system.optimize" v1可请求,v2不可请求
         * "get.system.version" v1、v2都可请求,但返回内容不同
         * "get.system.v2" v1不可请求,v2可请求
         * 至于方法路由器中的键值含义请参考 https://doc.careyshop.cn/guide/controller/
         */
    }

    /**
     * 方法2:通过自定义初始化
     * 重写该成员函数,与方法1的区别是重写该成员函数不需要执行"parent::initMethod()"
     * 默认状态下就已经继承父类"self::$route"的初始值
     *
     * @access protected
     * @return void
     */
    protected static function init()
    {
        // 父方法路由器键名不存在"get.system.v2"方法,表示新增一个接口
        // self::$route['get.system.v2'] = ['getMethodV2', false];

        // 父方法路由器键名存在"get.system.version"方法,表示修改一个接口
        // self::$route['get.system.version'] = ['getVersion', false];

        // 删除从父方法路由器继承过来的"set.system.optimize"方法
        // unset(self::$route['set.system.optimize']);

        /**
         * 假设上方注释的代码段完成执行,那么"Index"控制器最终请求方法结果如下:
         * "get.index.host"与"clear.cache.all" v1、v2都可请求,且结果相同
         * "set.system.optimize" v1可请求,v2不可请求
         * "get.system.version" v1、v2都可请求,但返回内容不同
         * "get.system.v2" v1不可请求,v2可请求
         * 至于方法路由器中的键值含义请参考 https://doc.careyshop.cn/guide/controller/
         */
    }

    /**
     * 假设请求条件同为 "method": "get.system.v2"时,
     * 访问 http://{{host}}/v1/index 会提示错误,原因是v1版本下不存在此接口
     * 访问 http://{{host}}/v2/index 会正确返回执行结果
     *
     * @access public
     * @return string
     */
    public function getMethodV2()
    {
        return '基于CareyShop商城框架系统,新增v2接口数据返回';
    }

    /**
     * 假设请求条件同为 "method": "get.system.version"时,
     * 访问 http://{{host}}/v1/index 返回:
     * {"status":200,"message":"success","data":{"version":"1.3.0"}}
     * 访问 http://{{host}}/v2/index 返回:
     * {"status":200,"message":"success","data":{"version":"1.3.0","v2":"基于CareyShop商城框架系统,修改为v2接口后数据返回"}}
     *
     * @access public
     * @return array
     */
    public function getVersion()
    {
        $indexService = new IndexService();
        $data = $indexService->getVersion();
        $data['v2'] = '基于CareyShop商城框架系统,修改为v2接口后数据返回';

        return $data;
    }
}
```

**备注：**
在示例中`方法路由器`的具体使用可以查阅，[接口控制器](../controller/ "接口控制器")。