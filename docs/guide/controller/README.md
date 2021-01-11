# 接口控制器

API 接口（内部调用除外）的所有入口 URL 路由都是`api/:version/:controller`组成，   
其分别代表了应用名、版本号、控制器名。比如：`http://host/api/v1/order_service/method/get.order.service.list`

所有的控制器都直接或间接的继承于`\app\api\controller\CareyShop`。

## 控制器
每一个控制器默认都会有一个对应绑定模型，模型的存放目录是`app/careyshop/model`，并且控制器与模型的文件名是一致的。   
比如`App`控制器对应的模型也叫`App`，导入的类文件是`app/careyshop/model/App.php`，可以在控制器中通过`static::$model`调用绑定模型的成员方法。

注意：通过继承所创建的控制器必须要有对应模型，否则会报错。

```php {9}
/**
 * 在控制器类中调用绑定模型的成员方法
 * @access public
 * @return array
 */
public function getCategorySon()
{
    // ↓↓↓ 注意看这一句 ↓↓↓
    return self::$model->getCategorySon($catData);
}
```

基类主要完成请求参数验证、整理请求参数、数据初始化、验证身份、验证签名、验证权限、方法路由、返回数据结果。   
控制器中的`方法路由器`是二次开发必定会接触到的，他的定义如下：
```php
<?php
namespace app\api\controller\v1;

use app\api\controller\CareyShop;
use app\careyshop\service\App as AppService;

class App extends CareyShop
{
    /**
     * 方法路由器
     * @access protected
     * @return void
     */
    protected static function initMethod()
    {
        self::$route = [
            // 添加一个应用
            'add.app.item' => ['addAppItem'],
            // 编辑一个应用
            'set.app.item' => ['setAppItem', false],
            // 获取一个应用
            'get.app.item' => ['getAppItem', AppService::class], // 也支持"'app\careyshop\service\App'"写法，表示命名空间
        ];
    }

    public function setAppItem()
    {
        return '编辑成功';
    }
}
```

可以看到他是一个数组，`键名`表示业务方法。`键值`也是一个数组，首位表示**成员函数的名称**，第二位是附带参数，含义如下：
* 空：在无值的情况下，首先查找控制器内是否存在成员函数，否则查找与控制器同名`模型`是否存在成员函数，如果还找不到则报错。
* false：表示与控制器同名的`模型`不存在，直接在控制器内查找是否存在成员函数，找不到则报错。
* 命名空间：在指定的命名空间类中查找成员函数，找不到则报错。

## 绑定模型
控制器调用模型(或是指定的命名空间类成员函数)后会对函数首位参数进行赋值，值的内容由`请求参数`传递进来。   
所以在模型中类的成员函数定义也分多种。

1. 不需要参数的成员函数
```php
/**
 * 添加或编辑购物车商品
 * @access public
 * @return array
 */
public function setCartItem()
{
    return [];
}
```

2. 只需要`请求参数`的成员函数
```php
/**
 * 添加或编辑购物车商品
 * @access public
 * @param  array $data 外部数据
 * @return array
 */
public function setCartItem($data)
{
    return [];
}
```

3. 带有`请求参数`和自定义参数的成员函数
```php
/**
 * 添加或编辑购物车商品
 * @access public
 * @param  array $data     外部数据
 * @param  bool  $isBuyNow 是否立即购买
 * @return array
 */
public function setCartItem($data, $isBuyNow = false)
{
    return [];
}
```

只要成员函数带有参数，那么第一个参数必定是属于`请求参数`，他是一个数组。   
添加其他参数可以是任意类型，这个特点在框架内部调用时十分方便。
