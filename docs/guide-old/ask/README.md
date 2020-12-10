# 常见问题

1.本地测试正常，上传到服务器提示找不到模块？

请确认服务器是否开启 PATH_INFO，如果未开启，请先开启。
如果您的服务器不支持 PATH_INFO，那请使用兼容模式访问。如：
?s=/模块/控制器/操作/[参数名/参数值...]
详细请查阅 [ThinkPHP文档](http://www.kancloud.cn/manual/thinkphp5/118012 "ThinkPHP文档")

------------

2.在 lnmp 环境下，首页显示空白？

请查看 php.ini 中的 disable_functions 是否禁用了 scandir 函数。如果是，请删除 scandir，然后重启 php 服务。
检查目录是否可写，扩展是否安装。

------------

3.后台页面响应时间过长？

全新安装框架，打开后台，页面响应过长，要好几秒才能完全加载页面？
尝试将配置文件`\application\database.php`中的`'hostname' => 'localhost'`改为`'hostname' => '127.0.0.1'`

------------

4.微信支付证书路径如何设置？

微信支付证书的路径必须使用绝对路径，否则会报错。

------------

5.使用 oss 组件（七牛云KODO、阿里云OSS）时报错“xxx 模块异常访问!”？

出现此情况的原因是 Apache 将头信息`authorization`进行了隐藏，从而导致 oss 组件对回调源进行验证时缺少必要数据。解决此问题有二种方法：

1、打开项目中的“.htaccess”文件将其修改为如下。
``` {9-11}
<IfModule mod_rewrite.c>
  Options +FollowSymlinks -Multiviews
  RewriteEngine On

  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^(.*)$ index.php?/$1 [QSA,PT,L]

  # Handle Authorization Header
  RewriteCond %{HTTP:Authorization} .
  RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
</IfModule>
```

2、全局或单独对某个站点进行 Apache 配置项修改，修改或增加配置项`CGIPassAuth on`，保存后重启服务，修改后如下。
``` apacheconf{9}
<VirtualHost _default_:80>
DocumentRoot "web/careyshop/public"
  <Directory "web/careyshop/public">
    Options -Indexes +FollowSymLinks +ExecCGI
    AllowOverride All
    Order allow,deny
    Allow from all
    Require all granted
    CGIPassAuth on
  </Directory>
</VirtualHost>
```