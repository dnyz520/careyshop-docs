---
title: 顾客组接口
---
# 序言

CareyShop（简称 CS）是一套基于 ThinkPHP 框架开发的高性能开源商城框架系统，秉承极简、极速、极致的开发理念，采用前后端分离，支持分布式部署。框架内部使用面向对象模块化调用，在多终端、跨平台时采用 REST API 进行数据交互，可直接对接 PC、移动设备、小程序、云部署，构建 Android、IOS 的 APP。

::: warning 注意
该文档主要面向前台<abbr title="前台客户群体，一般指购物顾客、游客等">顾客组</abbr>，<abbr title="后台管理人员，比如超级管理员、财务、客服、运营等">管理组</abbr>请参见[「CareyShop 管理组API 使用手册 」](/api/admin/ "「CareyShop 管理组API 使用手册 」")。
:::

**CareyShop（QQ）交流群：714593455**

## 设计理念
放眼移动热潮、新零售概念、各类<abbr title="泛指各类终端机器或各类平台，终端机有IOS与Android为代表，平台以“微信小程序”为代表">终端</abbr>的增多，服务端会与各类前端进行交互，和第三方相互协作也更加紧密、频繁。出于这样的整体环境，我们摒弃传统开发方向，直接以 REST 架构为基础，将各类业务处理层模块化。

框架所有的业务处理逻辑存放在公共模块目录中，对于框架内的其他模块可通过面向对象的方式调用公共模块，而外部则以 API 接口进行交互，如此真正做到业务处理层的入口路径统一。具体开发使用请参见[「CareyShop 完全开发手册」](/guide/)

## 生态系统

商城框架系统 Git

[Github 仓库](https://github.com/dnyz520/careyshop "Github 仓库") | [码云仓库](https://gitee.com/careyshop/careyshop "码云仓库") | [Coding 仓库](https://e.coding.net/careyshop/careyshop.git "Coding 仓库")

后台管理模板 Git

[Github 仓库](https://github.com/dnyz520/careyshop-admin "Github 仓库") | [码云仓库](https://gitee.com/careyshop/careyshop-admin "码云仓库") | [Coding 仓库](https://e.coding.net/careyshop/careyshop-admin.git "Coding 仓库")

Rest接口调试 Git

[Github 仓库](https://github.com/dnyz520/careyshop-rest "Github 仓库") | [码云仓库](https://gitee.com/careyshop/careyshop-rest "码云仓库") | [Coding 仓库](https://e.coding.net/careyshop/careyshop-rest.git "Coding 仓库")
