# 接口版本号

框架默认占用`v1`版本号，当您对调用的接口需要进行二次开发时，我们建议不要直接修改`公共模块`内的成员函数，   
而是另起一个版本号，将框架与二次开发所修改的内容区分开。

下面将举例如何对`App`控制器进行「新增接口」、「修改接口」。

**[ 新增接口 ]**
1. 在`application\api\controller`目录下新建`v2`目录。

2. 在`v2`目录下创建控制器类`App`，文件名为`App.php`，并且继承于`\app\api\controller\v1\App`。
	```php
    <?php
    namespace app\api\controller\v2;

    class App extends \app\api\controller\v1\App
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
                'test.app.item'    => ['testAppItem', false],
            ];
        }

        public function testAppItem()
        {
            return 'v2新增接口调用成功';
        }
    }
    ```

3. 调用并测试接口：`http://localhost:8080/api/v2/app/method/test.app.item`，返回请求结果。
	```json
    {
        "data": "v2新增接口调用成功",
        "message": "success",
        "status": 200
    }
    ```

4. 如果不是对已有接口进行操作而是新建的话，则应该继承`\app\api\controller\CareyShop`。
	```php
    <?php
    namespace app\api\controller\v2;

    use app\api\controller\CareyShop;

    class NewApi extends CareyShop
    {
        /**
         * 方法路由器
         * @access protected
         * @return array
         */
        protected static function initMethod()
        {
            return [
            ];
        }
    }
    ```

**[ 修改接口 ]**
1. 在`application\api\controller`目录下新建`v2`目录。

2. 在`v2`目录下创建控制器类`App`，文件名为`App.php`，并且继承于`\app\api\controller\CareyShop`。

3. 修改控制器方法路由，以`命名空间`的方式指向待新建的模型。
	```php
    <?php
    namespace app\api\controller\v2;

    use app\api\controller\CareyShop;

    class NewApi extends CareyShop
    {
        /**
         * 方法路由器
         * @access protected
         * @return array
         */
        protected static function initMethod()
        {
            return [
                // 获取应用列表
                'get.app.list' => ['getAppList', 'app\api\model\App']
            ];
        }
    }
    ```

4. 新建一个模型后继承`\app\common\model\CareyShop`，或继承被修改的模型。
    > 之所以新建一个模型是不建议对框架的模型进行改动，用新建或继承模型的方式比较稳妥。
	```php
    <?php
    namespace app\api\model;

    use app\common\model\CareyShop;

    class App extends CareyShop
    {
        /*
         * 获取应用列表
         * @access public
         * @param  array $data 外部数据
         * @return bool
         */
        public function getAppList($data)
        {
            return ['修改后的接口']
        }
    }
    ```

5. 调用并测试接口：`http://localhost:8080/api/v2/app/method/get.app.list`，返回请求结果。
	```json
    {
        "data": [
            "修改后的接口"
        ],
        "message": "success",
        "status": 200
    }
    ```

6. 确认 v1 版本号的接口是否也正常：`http://localhost:8080/api/v1/app/method/get.app.list`，返回请求结果。
	```json
    {
        "data": {
            "app_id": 1,
            "app_name": "admin"
        },
        "message": "success",
        "status": 200
    }
    ```

**备注：**
在示例中`方法路由器`的具体使用可以查阅，[接口控制器](../controller/ "接口控制器")。