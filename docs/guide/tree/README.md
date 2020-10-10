# 目录结构

```
careyshop
├─ app                                      应用目录
│    ├─ admin                                   后台管理模块目录
│    ├─ api                                     API 模块
│    │    ├─ config                                 独立配置目录
│    │    │    ├─ app.php                               应用设置
│    │    │    └─ route.php                             路由配置
│    │    ├─ controller                             模块控制器目录
│    │    │    ├─ v1                                    控制器目录（框架占用 v1）
│    │    │    ├─ v2                                    控制器目录（接口二次开发预留）
│    │    │    ├─ Batch.php                             接口批量调用
│    │    │    ├─ CareyShop.php                         控制器基类
│    │    │    └─ Index.php                             控制器首页
│    │    ├─ validate                               模块验证器目录
│    │    │    └─ CareyShop.php                         验证器基类
│    │    ├─ view                                   模块视图目录
│    │    │    └─ index                                 视图首页目录
│    │    └─ provider.php                           API 容器绑定定义
│    ├─ common                                  公共模块
│    │    ├─ model                                  模型目录
│    │    ├─ service                                服务层目录
│    │    ├─ validate                               验证器目录
│    │    └─ view                                   视图目录
│    ├─ index                                   首页模块
│    ├─ install                                 安装向导模块
│    ├─ mobile                                  移动端模块
│    ├─ service                                 系统服务目录
│    ├─ .htaccess                               用于 apache 的重写
│    ├─ common.php                              全局公共函数文件
│    ├─ event.php                               全局事件定义文件
│    ├─ function.php                            二次发开全局公共函数
│    ├─ middleware.php                          全局中间件定义文件
│    ├─ provider.php                            全局容器绑定定义文件
│    └─ service.php                             全局系统服务定义文件
├─ config                                   全局配置目录
│    ├─ app.php                                 应用配置
│    ├─ cache.php                               缓存配置
│    ├─ captcha.php                             验证码配置
│    ├─ console.php                             控制台配置
│    ├─ cookie.php                              Cookie 配置
│    ├─ database.php                            数据库配置
│    ├─ extra.php                               扩展数据配置
│    ├─ filesystem.php                          文件磁盘配置
│    ├─ lang.php                                多语言配置
│    ├─ log.php                                 日志配置
│    ├─ middleware.php                          中间件配置
│    ├─ route.php                               路由配置
│    ├─ session.php                             Session 配置
│    └─ view.php                                视图配置
├─ extend                                   扩展类库目录
│    ├─ aliyun                                  阿里云SDK
│    ├─ oss                                     OSS 组件
│    ├─ payment                                 支付组件
│    └─ util                                    工具类组件
├─ public                                   WEB 部署目录（对外访问目录）
│    ├─ static                                  静态资源存放目录
│    ├─ template                                页面模板目录
│    ├─ uploads                                 本地资源上传存放目录
│    ├─ .htaccess                               用于 apache 的重写
│    ├─ favicon.ico                             WEB 小图标文件
│    ├─ index.php                               应用入口文件
│    ├─ robots.txt                              蜘蛛协议文件
│    └─ router.php                              快速测试文件
├─ route                                    路由定义目录
│    └─ app.php                                 全局路由配置文件
├─ runtime                                  应用的运行时目录（可写，可设置）
└─ vendor                                   composer 类库目录
├─ .editorconfig                            编辑器代码格式化规则
├─ .env                                     环境变量文件
├─ .example.env                             环境变量示例文件
├─ .gitattributes                           git 文本对比配置
├─ .gitignore                               git 过滤配置
├─ composer.json                            composer 定义文件
├─ composer.lock                            composer 安装记录
├─ LICENSE                                  许可协议
├─ README.md                                项目说明
└─ think                                    命令行入口文件
```
