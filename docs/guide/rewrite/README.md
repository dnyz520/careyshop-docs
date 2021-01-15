# URL重写

可以通过 URL 重写隐藏应用的入口文件`index.php`,下面是相关服务器的配置参考：

## Apache
1. httpd.conf 配置文件中加载了 mod_rewrite.so 模块
2. AllowOverride None 将 None 改为 All
3. 把下面的内容保存为 .htaccess 文件放到应用入口文件的同级目录下
4. 配置文件 .htaccess 默认已在目录中存放了一份，可直接使用，所以步骤 3 可以省略。

```
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

## Nginx
在 Nginx.conf 配置中，添加：
```
location ~ \.php(.*)$ {
  fastcgi_pass   127.0.0.1:9000;
  fastcgi_index  index.php;
  fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
  fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
  fastcgi_param  PATH_INFO  $fastcgi_path_info;
  fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
  include        fastcgi_params;
}
```
在 Nginx 低版本中，是不支持 PATHINFO 的，但是可以通过在 Nginx.conf 中配置转发规则实现。
```
  location / { // …..省略部分代码
   if (!-e $request_filename) {
   rewrite  ^(.*)$  /index.php?s=/$1  last;
   break;
    }
 }
```
一个完整的示例：
```
server {
        server_name careyshop.cn www.careyshop.cn *.careyshop.cn;
        access_log  logs/www.careyshop.cn_access.log;
        error_log   logs/www.careyshop.cn_error.log;
        root        /var/www/html/www.careyshop.cn/public;

        if ($host ~ www\.(.*)\.(.*)\.(cn|com|net)$) {
            return 444;
        }

        location / {
            index  index.html index.htm index.php;
            autoindex  off;
            if (-f $request_filename) {
              break;
            }
            if (!-e $request_filename) {
              rewrite ^(.*)$ /index.php/$1 last;
              break;
            }
        }
        location ~ \.php(.*)$ {
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            fastcgi_param  PATH_INFO  $fastcgi_path_info;
            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
            include        fastcgi_params;
        }
        location ~ /\.ht {
            deny  all;
        }
}
```

## IIS
如果你的服务器环境支持 ISAPI_Rewrite 的话，可以配置 httpd.ini 文件，添加下面的内容：
```
RewriteRule (.*)$ /index\.php\?s=$1 [I]
```
在 IIS 的高版本下面可以配置 web.Config，在中间添加 rewrite 节点：
```
<rewrite>
 <rules>
 <rule name="OrgPage" stopProcessing="true">
 <match url="^(.*)$" />
 <conditions logicalGrouping="MatchAll">
 <add input="{HTTP_HOST}" pattern="^(.*)$" />
 <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
 <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
 </conditions>
 <action type="Rewrite" url="index.php/{R:1}" />
 </rule>
 </rules>
</rewrite>
```

## 宝塔面板
如果使用了宝塔面板，在站点管理-设置中，伪静态选择`thinkphp`即可