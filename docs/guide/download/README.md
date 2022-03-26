# 下载安装

## 下载
1. **直接下载：**
	* 官网下载：
	https://www.careyshop.cn/

3. **composer：**
	* 安装：
	`composer create-project dnyz520/careyshop cs`
	这里的`cs`目录名你可以任意更改，这个目录是应用根目录。
	
	* 更新：
	`composer update dnyz520/careyshop`

## 安装
必须将项目下的`public`目录设为`web访问`目录，第一次访问首页时会进入`安装向导`，务必请通过向导完成安装。

## 测试
切换到项目根目录，在命令行输入`php think run -H 127.0.0.1 -p 8080`，启动 PHP 自带的`webserver`服务，  
按键`Ctrl + C`退出服务。

> 建议使用`IP`启动，避免使用`localhost`，并且此方法只适合调试环境。
