# 安全相关

- 资源上传默认只允许文件类`doc,docx,xls,xlsx,ppt,pptx,pdf,wps,txt,rar,zip,gz,bz2,7z,pem,mp4`，图片类`jpg,png,gif,jpeg,jpeg,bmp,webp`为后缀的附件，并且对于图片会检测是否为合法图片。允许上传的类型可通过后台，在`设置->系统管理->上传配置`中进行设置。

- 应用入口文件位于`public/index.php`，入口文件位置的设计是为了让应用部署更安全，`public`目录为 web 可访问目录，其他的文件都可以放到非 web 访问目录下面。

- 数据入库系统默认采用的是 PDO 绑定参数的方式，在您二次开发的时候不要使用外部输入的参数直接拼接成字符串执行 SQL 语句，而应该遵循 ThinkPHP 官方的指导的方式。

- 更多的安全相关说明请参考 [ThinkPHP官方安全指导](https://www.kancloud.cn/manual/thinkphp5/268461 "ThinkPHP官方安全指导")。