# 闲暇之余做了个基于vue-cli3.x的移动端开发脚手架

### 使用：

```
npm install
npm run  serve
npm run build 
```

装包有问题出门右转 =>  http://npm.taobao.org/

###  适用范围：此脚手架可基于vue 和  vant作为移动端开发基础模板
# 所运用的：
**1.引入 normalize.css 消除浏览器差异**

**2.引入 autoprefixer css 自动添加前缀**

**3.结合淘宝 flexible自适应方案（以750设计稿为准）
使用时引入flexible.js，设计稿多少px，css就写多少px**

**4.模块化支持commonJS和ES6 module规范**

**5.移动端调试支持eurda可视化调试（鸣谢作者，记得给作者点小星星 https://github.com/liriliri/eruda）**

**7.支持sass语法（不管什么css预编译器都完全ok，只要自己顺手）**

**8.移动端ui框架使用的是有赞vant https://youzan.github.io/vant/#/zh-CN/intro**

**9.在publi/api下可以基于axios做数据mock（略拙劣）**

附：关于rem的适配vant文档已有详细说明