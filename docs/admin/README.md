CareyShop 商城后台管理系统
===============
CareyShop（简称 CS）是一套基于 ThinkPHP5 框架开发的高性能商城框架系统，秉承简洁、快速、极致的开发理念，框架内使用面向对象模块化调用，在多终端、跨平台时采用 REST API 架构来进行数据交互，可直接对接 PC、移动设备、小程序、云部署，构建 Android、IOS 的 APP。

### 设计理念
放眼移动热潮、新零售概念、各类<abbr title="泛指各类终端机器或各类平台，终端机有IOS与Android为代表，平台以“微信小程序”为代表">终端</abbr>的增多，服务端会与各类前端进行交互，和第三方相互协作也更加紧密、频繁。出于这样的整体环境，我们摒弃传统开发方向，直接以 REST 架构为基础，将各类业务处理层模块化。

框架所有的业务处理逻辑存放在公共模块目录中，对于框架内的其他模块可通过面向对象的方式调用公共模块，而外部则以 API 接口进行交互，如此真正做到业务处理层的入口路径统一。具体开发使用请参见[「CareyShop 完全开发手册」](https://doc.careyshop.cn/docs/word/)

### 本项目说
CareyShop 整体的架构理念为前后端分离，这样更容易创建出私有云、微服务、分布式等。商城后台管理系统根据框架所提供的 API 接口而配套的后台管理系统，覆盖了所有管理需要用到的功能模块。

在您使用本项目前，请先安装好 [node](https://nodejs.org "node")。项目技术栈基于 [es2015+](http://es6.ruanyifeng.com/ "es2015+")、[vue](https://cn.vuejs.org/ "vue")、[vuex](https://vuex.vuejs.org/ "vuex")、[vue-router](https://router.vuejs.org/ "vue-router") 、[vue-cli4](https://cli.vuejs.org/ "vue-cli") 、[axios](https://github.com/axios/axios "axios") 和 [element-ui](https://element.eleme.io/ "element-ui")，所有的请求数据都基于 rest 协议。

### 导航向导
> CareyShop 交流一群（QQ）：714593455

[官方网站](https://www.careyshop.cn "CareyShop官方网站") | [Demo 后台预览](https://demo.careyshop.cn/admin "Demo 后台预览") | [Demo API 沙盒](https://demo.careyshop.cn/api "Demo API 沙盒") | [文档中心](https://doc.careyshop.cn "CareyShop文档中心") | [客户组 API 文档](https://doc.careyshop.cn/docs/client_api/a-61295176156 "客户组 API 使用手册") | [管理组 API 文档](https://doc.careyshop.cn/docs/admin_api/a-11523287990 "管理组 API 使用手册") | [数据库词典](https://doc.careyshop.cn/docs/dict "数据库词典")

后端项目 Git

[Github 仓库](https://github.com/dnyz520/careyshop "Github 仓库") | [码云仓库](https://gitee.com/careyshop/careyshop "码云仓库") | [Coding 仓库](https://e.coding.net/careyshop/careyshop.git "Coding 仓库")

后台项目 Git

[Github 仓库](https://github.com/dnyz520/careyshop-admin "Github 仓库") | [码云仓库](https://gitee.com/careyshop/careyshop-admin "码云仓库") | [Coding 仓库](https://e.coding.net/careyshop/careyshop-admin.git "Coding 仓库")

### 安装依赖
> 如果您以前运行过 webpack 项目，并且本机 node 版本 >= 8，可以忽略这一步。

> 以下安装过程基本都使用命令行，请在适合的命令环境下输入。

**安装 node**

在 [node.js](https://nodejs.org/en/download/ "node.js 官网") 官网下载合适您系统的 node.js（推荐 10 以上的版本），安装完毕后可查看版本号。
```shell
node -v
v10.13.0

npm -v
6.12.0
```

**安装 @vue/cli**

此依赖建议全局安装。
```shell
npm install -g @vue/cli
```

**克隆项目**
```shell
git clone https://github.com/dnyz520/careyshop-admin.git
```

**安装依赖**

进入到克隆下来的项目目录中，执行安装依赖命令：
```shell
npm install
# 或
yarn
```

**项目启动**

```shell
# 启动服务
npm run serve

# 正式发布
npm run build

# 检测修复
npm run lint

# 单元测试
npm run test:unit
```

### API 参数配置
接口参数使用动态配置（正式发布后依旧可以修改配置文件），在「public\static\config」路径下存在「development」与「production」js 文件，分别代表`开发环境`与`生产环境`。

之后将配置修改为您的环境，具体配置如下：
```js
const serverConfig = {
  BASE_API: '//careyshop.cn/api',                   // API 接口访问地址
  APP_KEY: '86757125',                              // 后端获取的 App应用 钥匙
  APP_SECRET: 'ea1bd533d001fd73b09944f04c96a6fc'    // 后端获取的 App应用 密钥
}
```

#### 声明
CareyShop 原则上使用 AGPLv3 开源，请遵守 AGPLv3 的相关条款，或者与我们联系获取商业授权，

本项目包含的源码（包括第三方）和二进制文件存在版权信息另行标注的情况。

#### 链接
<a href="https://github.com/d2-projects/d2-admin" target="_blank"><img src="https://raw.githubusercontent.com/FairyEver/d2-admin/master/doc/image/d2-admin@2x.png" width="200"></a>
