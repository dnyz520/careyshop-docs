# 替换上传资源

#### 接口描述：
- 替换上传资源，将新的资源覆盖到源资源上，对`目录`无效。

#### 请求 URL：
- `http|https://host/api/v1/upload/method/replace.upload.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|storage_id |integer |是 |gt:0 | |98 |资源编号 |

#### 响应参数：
结构和[「获取上传Token」](/api/admin/upload/upload/get.upload.token.md "「获取上传Token」")相同，不再做说明。

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "token": {
      "upload_url": {
        "upload_url": "http://upload.qiniup.com/",
        "module": "qiniu",
        "param": [
          {
            "name": "x:replace",
            "type": "hidden",
            "default": "uploads/files/20180602/f39cf82a60c877bf999fbd089d012b75.jpg"
          },
          {
            "name": "x:parent_id",
            "type": "hidden",
            "default": 0
          },
          {
            "name": "x:filename",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "key",
            "type": "hidden",
            "default": "uploads/files/20180602/f39cf82a60c877bf999fbd089d012b75.jpg"
          },
          {
            "name": "token",
            "type": "hidden",
            "default": ""
          },
          {
            "name": "file",
            "type": "file",
            "default": ""
          }
        ]
      },
      "token": "-eibVM1dkuOQU9vbF9oMRbiMtw4t_-QUMQJgPPDJ:NCxC1eQYrSU179MU2M0Olw0jQx8=:eyJmc2l6ZUxpbWl0IjoyMDk3MTUyLCJpc1ByZWZpeGFsU2NvcGUiOjAsImNhbGxiYWNrVXJsIjoiaHR0cDpcL1wvY2FyZXlzaG9wLm9ydWVpLmNvbVwvYXBpXC92MVwvdXBsb2FkXC9tZXRob2RcL3B1dC51cGxvYWQuZGF0YVwvbW9kdWxlXC9xaW5pdS5odG1sIiwiY2FsbGJhY2tCb2R5IjoicmVwbGFjZT0kKHg6cmVwbGFjZSkmcGFyZW50X2lkPSQoeDpwYXJlbnRfaWQpJmZpbGVuYW1lPSQoeDpmaWxlbmFtZSkmbWltZT0kKG1pbWVUeXBlKSZwYXRoPSQoa2V5KSZzaXplPSQoZnNpemUpJm5hbWU9JChmbmFtZSkmd2lkdGg9JChpbWFnZUluZm8ud2lkdGgpJmhlaWdodD0kKGltYWdlSW5mby5oZWlnaHQpJmhhc2g9JChldGFnKSIsImNhbGxiYWNrQm9keVR5cGUiOiJhcHBsaWNhdGlvblwveC13d3ctZm9ybS11cmxlbmNvZGVkIiwic2NvcGUiOiJjYXJleXNob3A6dXBsb2Fkc1wvZmlsZXNcLzIwMTgwNjAyXC9mMzljZjgyYTYwYzg3N2JmOTk5ZmJkMDg5ZDAxMmI3NS5qcGciLCJkZWFkbGluZSI6MTUyNzk2MDA3Mn0=",
      "dir": "uploads/files/20180602/"
    },
    "expires": 1527960072
  }
}
```

#### 备注:
1. 替换资源和上传资源其实都是同一种操作。

2. 图片资源被替换时，源缩略图会被删除。

3. 替换资源时，资源的文件格式必须一致。