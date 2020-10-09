# 目录结构

```
careyshop
├─ application
│    ├─ .htaccess                    用于 apache 的重写
│    ├─ admin                        后台管理模块目录
│    ├─ api                          API 模块
│    │    ├─ config.php              模块配置文件
│    │    ├─ controller              模块控制器目录
│    │    │    ├─ Batch.php          批量调用 API 接口
│    │    │    ├─ CareyShop.php      控制器基类
│    │    │    ├─ Index.php          控制器首页
│    │    │    └─ v1                 控制器入口目录(版本号)
│    │    ├─ exception               模块调用结果输出目录
│    │    └─ validate                模块验证器目录
│    ├─ common                       公共模块
│    │    ├─ model                   模块模型目录
│    │    ├─ service                 模块服务层目录
│    │    ├─ validate                模块验证器目录
│    │    └─ view                    模块模板目录
│    ├─ command.php                  命令行工具配置文件
│    ├─ common.php                   应用公共（函数）文件
│    ├─ config.php                   应用（公共）配置文件
│    ├─ database.php                 数据库配置文件
│    ├─ extra                        扩展配置目录
│    ├─ function.php                 二次发开公共（函数）文件
│    ├─ index                        首页模块目录
│    ├─ install                      安装向导模块目录
│    ├─ mobile                       移动端模块目录
│    ├─ route.php                    路由配置文件
│    └─ tags.php                     应用行为扩展定义文件
├─ extend                            扩展类库目录
├─ public                            WEB 部署目录（对外访问目录）
│    ├─ .htaccess                    用于 apache 的重写
│    ├─ config.php                   应用（公共）配置文件
│    ├─ favicon.ico                  WEB 小图标文件
│    ├─ index.php                    应用入口文件
│    ├─ robots.txt                   蜘蛛协议文件
│    ├─ router.php                   快速测试启动文件
│    ├─ static                       静态资源存放目录(css,js,image)
│    └─ uploads                      资源上传存放目录
├─ runtime                           应用的运行时目录（可写，可设置）
├─ thinkphp                          框架系统目录
├─ vendor                            第三方类库目录（Composer）
├─ careyshop                         命令行入口文件
├─ composer.json                     composer 定义文件
├─ composer.lock                     composer 安装记录
├─ .editorconfig                     编辑器代码格式化规则
├─ .gitattributes                    git 定义文件
├─ .gitignore                        git 本地配置
├─ .travis.yml                       CI 定义文件
├─ LICENSE                           安装协议
└─ README.md                         项目说明
```