# dataPlatform

### 使用
- npm i
- npm run start (本地开发)
- npm run build (线上打包)

####  目录
```
├── cotainers  页面代码（路由等）
├── services 接口（放在对应index.ts里面）
├── index.html 本地开发 html 入口
```
####  规范
数据返回 {
    errcode:0 //0-成功，1-错误
    data:{}
    message:'' //错误信息
}
