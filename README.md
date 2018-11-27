# vue admin

## 基于 vue+vue-router+vuex 的后台管理系统

- config 中定义顶部和左侧菜单及权限，分别对应顶部菜单/左侧主菜单/左侧子菜单
- router 中定义路由和权限（和 config 下权限一致）
- services 中配置 api，使用 axios 请求接口并自动处理 loading 状态

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
