# 接口控制器

不管是前后台分离，还是 APP 调用接口。所有的入口都是由`api/v1/controller`等同于`api/版本号/控制器`组成。
> 举个例子，比如`http://host/api/v1/order_service/method/get.order.service.list`

所有的控制器都直接或间接的继承于`app\api\controller\CareyShop`做为基类。
文件位置`application/api/controller/CareyShop.php`。

## 控制器
每一个控制器默认都会绑定一个对应的模型，模型的存放目录是`application/common/model`。
比如`App`控制器对应的模型也是`App`，实际导入的文件是`application/common/model/App.php`，您可以通过`static::$model`这样的方式在控制器中完成对模型的调用。注意：完成继承的控制器必须要有对应模型，否则会报错。
```php {16}
    /**
     * 获取所有子级分类
     * @access protected
     * @return array
     */
    protected function getCategorySon()
    {
        $catData = $this->getParams();
        $validate = $this->validate($catData, 'GoodsCategory.son');

        if (true !== $validate) {
            return $this->setError($validate);
        }

        // ↓↓↓ 注意看这一句 ↓↓↓
        return self::$model->getCategorySon($catData);
    }
```

基类主要完成请求参数验证、整理请求参数、数据初始化、验证身份、验证签名、验证权限、调度方法路由、返回数据结果。
控制器中的`调度方法路由`是二次开发必定会接触到的，他的定义如下：
```php
<?php
namespace app\api\controller\v1;

use app\api\controller\CareyShop;

class App extends CareyShop
{
    /**
     * 方法路由器
     * @access protected
     * @return array
     */
    protected static function initMethod()
    {
        return [
            // 添加一个应用
            'add.app.item' => ['addAppItem'],
            // 编辑一个应用
            'set.app.item' => ['setAppItem', false],
            // 获取一个应用
            'get.app.item' => ['getAppItem', 'app\common\model\AppName'],
        ];
    }

    protected function setAppItem()
    {
        return '编辑成功';
    }
}
```

可以看到他是一个数组，`键名`表示业务方法。`键值`也是一个数组，首位表示**成员函数的名称**，第二位是附带参数，含义如下：
* 空：在无值的情况下，首先查找控制器内是否存在成员函数，否则查找与控制器同名的`模型`下是否存在成员函数，如果还找不到则报错。
* false：表示与控制器同名的`模型`不存在，直接在控制器内查找是否存在成员函数，找不到则报错。
* 命名空间：在指定的命名空间类中查找成员函数，找不到则报错。

## 模型
控制器调用模型(或是指定的命名空间类成员函数)后会对函数首位参数进行赋值，值的内容由`请求参数`传递进来。
所以在模型中类的成员函数定义也分多种。

1. 不需要参数的成员函数
```php
/**
 * 添加或编辑购物车商品
 * @access public
 * @return false|array
 * @throws
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
 * @return false|array
 * @throws
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
 * @return false|array
 * @throws
 */
public function setCartItem($data, $isBuyNow = false)
{
    return [];
}
```

只要成员函数带有参数，那么第一个参数必定是属于`请求参数`，他是一个数组。
添加其他参数可以是任意类型，这个特点可以在框架内部调用时十分方便。