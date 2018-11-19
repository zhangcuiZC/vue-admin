# 云对账 admin 前端项目

## 基于 vue+vue-router+vuex 的后台管理系统

- 三级菜单：root/parent/child 分别对应顶部菜单/左侧主菜单/左侧子菜单
- config 文件下定义顶部和左侧菜单及权限
- router 中定义路由和权限（和 config 下权限一致）
- 使用 axios 请求接口，在 services 中配置 api
- store 采用页面粒度

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
