# 定时任务

**在整个框架中暂时有二个任务是需要定时执行的，分别是**

1. 未付款订单超时自动取消

2. 未确认收货订单超时自动完成

**执行定时任务的方法多种多样，这里再推荐一个通过「批量接口请求」+ 阿里云「云监控」来完成定时任务。**

1. 进入到云监控，进入到「站点管理」，选择「新建监控点」。
    ![Image from alias](/uploads/attach_153e8a2f1b52449d.png)

2. 「监控地址」填写`https://host/api/batch.html`，其中`host`是您自己的网站地址。

3. 点击「高级设置」，「请求方法」选择`POST`，「请求内容」填写：
    ```json
    {
        "batch": [
            {
                "version": "v1",
                "controller": "Order",
                "method": "timeout.order.cancel"
            },
            {
                "version": "v1",
                "controller": "Order",
                "method": "timeout.order.complete"
            }
        ]
    }
    ```
    ![](/uploads/attach_153e8a6370daf825.png)

4. 「监控频率」根据实际情况来定，一般选择`1分钟`或`5分钟`。

5. 「检测站点」选择***一个***，并且选择离您服务器最近的站点。
    ![](/uploads/attach_153e8a7f63192b21.png)

6. 记得启动检测。
    ![](/uploads/attach_153e8a8ac19434d1.png)