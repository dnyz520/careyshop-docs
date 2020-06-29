# 入口地址

* 默认的应用入口文件位于`public/index.php`，入口文件位置的设计是为了让应用部署更安全，但在部分环境下需要将入口文件部署到根目录`/index.php`下，此时需要做以下几个步骤。

	1. 复制`public`目录下的所有文件(不包括任何文件夹)到根目录下。
	::: danger 注意
	`public`目录下只要文件，而不要包括任何文件夹。
	:::

	2. 打开`index.php`文件，将部分代码：
	```php
	// 定义应用目录
	define('APP_PATH', __DIR__ . '/../application/');

	// 加载框架引导文件
	require __DIR__ . '/../thinkphp/start.php';
	```
	修改为：
	```php
	// 定义应用目录
	define('APP_PATH', __DIR__ . '/application/');

	// 加载框架引导文件
	require __DIR__ . '/thinkphp/start.php';
	```

* 系统默认分配好的模块分别是`index、admin、api、mobile、install`，但在特殊情况下需要修改入口地址，以`admin`为例，将他修改为`admin_carey`。

	打开`config.php`文件，将`define('ADMIN_MODULE', 'admin');`中的`admin`修改`admin_carey`，此时通过`http://host/admin/`访问已无效，必须使用`http://host/admin_carey/`才可正确访问。