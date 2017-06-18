# PersonalDemo
## 分享自己仿做的一些小项目

1.  仿乐乎app界面

![lofter](images/lofter.jpg)

```js
 利用了一些css3属性和弹性布局搭建的整个页面布局，
 内部嵌套了多层swiper插件提供的结构，
 滑动逻辑主要用swiper插件实现
```






2. 仿百度外卖宣传页

![waimai](images/waimai.jpg)

```js
逻辑实现主要用到的插件有 zepto.js  css布局用的sass工具，
整个页面用了大量CSS3的动画去实现，整个案例的难点在踢三块牌子那里，
踢完之后要恢复成原来的样子，具体实现请看源代码；

```
  





3. 仿嘀嘀打车app

![didi](images/didi.jpg)

```js
前面的宣传页也是用了大量的css3动画实现的，
ajax请求那里，调用的是百度的地图接口，
百度的接口一般要用jsonp跨域请求，
信息验证是调用的图灵机器人里的一个接口

```





4. 飞行的小鸟（pc端）

![flyBird](images/flybird.jpg)

```js
用面向对象的思想把天空，小鸟，陆地，管道分成了一个个模块，各个模块之间进行很好的隔离，
实现了高复用，低耦合，整个案例最难的地方在小鸟下落的地方，
因为小鸟的下落不是匀速的，并且脑袋的旋转速度要跟下落的速度成正比，
这里面需要用到物理知识，具体实现过程请看源代码；
```



5. 珠海蛋糕网（pc端）

![zhcake](images/zhcake.jpg)

```js
该项目是一家以珠海地区为主，辐射全国各地的在线蛋糕销售平台，
平台通过与珠海各大蛋糕品牌实体店联盟合作，
进行“线上线下”相结合的运营模式，
取消表单的默认同步提交并使用ajax异步请求和后端的数据进行交互，
使用artTemplate（引擎模板）对返回的数据进行渲染生成相应的商品列表并加载到页面上；

网站地址：http://www.getbcity.com 
```





6. 多多付（移动端+PC端）

![](iamges/vipduoduo.jpg)

```js
多多付钱包是一个为年轻人倾力打造的移动端的购物信用消费平台，
网站运用了大量H5、C3动画,使页面风格更倾向于80,90后的审美，
主题趋于年轻化,使用bootstrap构架整个网站框架；
 使用HTML5+CSS3实现网站动画功能；使用jQuery库编写网站常用的功能；
 使用fullPage插件实现移动端的各种滑动特效；
 使用owl.carousel插件实现图片延迟加载的功能，减少服务器的压力；
```



7. 御膳养生食品（移动端+PC端）

![ysysfood](images/ysysmarket.jpg)

```js
万福超市是一个主营水果蔬菜、食品饮料、家庭生活用品的综合性购物电商网站，
一共有一个首页 和商品分类、商品详情等多个二级分类，
分析项目中需要被拆分的模块并使用requireJS对这些模块进行管理；
使用jquery库和jquery.mobile和swiper等插件实现页面的特效功能；
使用ajax完成表单提交部分，使用jquery.lazyload懒加载插件来延迟加载长页面中的图片，
在一定程度赏降低了服务器压力；跟踪产品的用户反馈，提出改善方案，不断优化用户体验；
```
