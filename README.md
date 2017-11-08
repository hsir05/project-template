# statistics

>统计项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
项目使用:

```
vue + vue-router + axios + Element-ui
```
为解决跨域问题，已配置使用代理，如不需要，可以在`config => index.js`

```
proxyTable: {
      '/api/capital/**': {
         target: 'xxxx',
         changeOrigin: true
      }
```
将proxyTable设置为:

```
proxyTable: {}
```
