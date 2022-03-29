---
sidebar: auto
title: 后台管理模板
---
<p align="center">
    <img src="https://aliyun.oss.careyshop.cn/poster/banner.png"  alt="careyshop_banner"/>
</p>

<h1 align="center">CareyShop 后台管理模板</h1>

## 介绍
CareyShop（简称 CS）是一套基于 ThinkPHP 框架开发的高性能开源商城框架系统，秉承极简、极速、极致的开发理念，采用前后端分离，支持分布式部署。框架内部使用面向对象模块化调用，在多终端、跨平台时采用 REST API 进行数据交互，可直接对接 PC、移动设备、小程序、云部署，构建 Android、IOS 的 APP。

**严正声明：**   
**为配合国家打击跨境赌博、电信诈骗、断卡等行动，本源码仅限中国大陆地区使用，且！使用站点必须有ICP备案与网安备案，否则一律上报至公安机关！**

**CareyShop（QQ）交流1群：714593455 交流2群：817814861**

## 前言
放眼移动热潮、新零售概念、各类<abbr title="泛指各类终端机器或各类平台，终端机有IOS与Android为代表，平台以“微信小程序”为代表">终端</abbr>的增多，服务端会与各类前端进行交互，和第三方相互协作也更加紧密、频繁。出于这样的整体环境，我们摒弃传统开发方向，直接以 REST API 架构为基础，将各类业务处理层模块化。

框架所有的业务处理逻辑存放在公共模块目录中，对于框架内的其他模块可通过面向对象的方式调用公共模块，而外部则以 API 接口进行交互，如此真正做到业务处理层的入口路径统一。具体开发使用请参见[「CareyShop 完全开发手册」](/guide/)

## 预览
[后台 Demo 预览](https://demo.careyshop.cn/admin "后台 Demo 预览") | [RestAPI 接口调试](https://demo.careyshop.cn/api "RestAPI 接口调试") | [经典配套款](/guide/white/) | [深灰商务款](/guide/gray/)

## 文档
[文档中心](https://doc.careyshop.cn "CareyShop文档中心")

## 准备
在您使用本项目前，请先安装好 [node](https://nodejs.org "node")。项目技术栈基于 [es2015+](http://es6.ruanyifeng.com/ "es2015+")、[vue](https://cn.vuejs.org/ "vue")、[vuex](https://vuex.vuejs.org/ "vuex")、[vue-router](https://router.vuejs.org/ "vue-router") 、[vue-cli4](https://cli.vuejs.org/ "vue-cli") 、[axios](https://github.com/axios/axios "axios") 和 [element-ui](https://element.eleme.io/ "element-ui")，所有的请求数据都基于 rest 协议。

## 安装
> 如果您以前运行过 webpack 项目，并且本机 node 版本 >= 8，可以忽略这一步。

> 以下安装过程基本都使用命令行，请在适合的命令环境下输入。

### 安装 node
在 [node.js](https://nodejs.org/en/download/ "node.js 官网") 官网下载合适您系统的 node.js（推荐 10 以上的版本），安装完毕后可查看版本号。
```shell
node -v
v10.13.0

npm -v
6.12.0
```

### 安装 @vue/cli
此依赖建议全局安装。
```shell
npm install -g @vue/cli
```

### 克隆项目
```shell
git clone xxx(xxx替换成第三方git镜像地址)
```

### 安装依赖
进入到克隆下来的项目目录中，执行安装依赖命令：
```shell
npm install
# 或
yarn
```

## 启动
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

## 配置
接口参数使用动态配置（正式发布后依旧可以修改配置文件），在「public\static\config」路径下存在「development」与「production」js 文件，分别代表`开发环境`与`生产环境`。

之后将配置修改为您的环境，具体配置如下：
```js
const serverConfig = {
  BASE_API: '/api',                   // API 接口访问地址
  APP_KEY: '86757125',                              // 后端获取的 App应用 钥匙
  APP_SECRET: 'ea1bd533d001fd73b09944f04c96a6fc'    // 后端获取的 App应用 密钥
}
```

## 内置调试
![](https://aliyun.oss.careyshop.cn/poster/rest_api.png)

## 后台预览
![](https://aliyun.oss.careyshop.cn/poster/gray/%E5%95%86%E5%93%81%E5%88%97%E8%A1%A8-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E5%95%86%E5%93%81%E8%A7%84%E6%A0%BC-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E5%AA%92%E4%BD%93%E8%AE%BE%E7%BD%AE-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E5%95%86%E5%93%81%E9%A2%84%E8%A7%88-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E5%95%86%E5%93%81%E5%88%86%E7%B1%BB-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E5%95%86%E5%93%81%E8%AF%84%E4%BB%B7-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E8%AF%84%E4%BB%B7%E6%98%8E%E7%BB%86-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E8%AE%A2%E5%8D%95%E5%88%97%E8%A1%A8-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E8%AE%A2%E5%8D%95%E8%AF%A6%E6%83%85-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E8%AE%A2%E5%8D%95%E6%89%93%E5%8D%B0-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E5%94%AE%E5%90%8E%E5%88%97%E8%A1%A8-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E5%94%AE%E5%90%8E%E8%AF%A6%E6%83%85-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E8%B5%84%E6%BA%90%E9%80%89%E6%8B%A9-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E7%89%A9%E6%B5%81%E8%BD%A8%E8%BF%B9-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E8%B5%84%E6%BA%90%E9%A2%84%E8%A7%88-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE-%E7%81%B0.png)
![](https://aliyun.oss.careyshop.cn/poster/gray/%E7%BC%A9%E7%95%A5%E5%9B%BE%E8%AE%BE%E8%AE%A1-%E7%81%B0.png)

#### 声明
CareyShop® 商标和著作权所有者为宁波互明科技有限公司。

#### 感谢
<a href="https://github.com/d2-projects/d2-admin" target="_blank"><img src="/assets/img/d2-admin@2x.png" width="200"></a>
