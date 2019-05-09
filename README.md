# Vue-cli-todolist

Vue-cli-todolist，是一个用vue-cli3工具初始化项目，然后在此基础上完成todolist的案例，通过这个案例达到简单熟悉和了解Vue，Vue-cli3的目的。相关的技术栈：Vue-cli3， Vue，VueRouter。

对于前端方面我是一个初学者，目前在一家创业公司担任前端开发的岗位，主要业务是面向互联网支付相关。没在什么大厂呆过，从事过多个行业如银行、餐饮、金融、游戏、建筑等等，各方面业务都了解一点，但并不深入，也时常感叹当时在学习技术的时候为什么不多关注点业务知识。没有什么牛逼的技术经验可分享，就最近学习Vue过程中一些心得分享一下，由于水平有限，分享仅供参考。

先看一下我们完成的效果：

- [vue-cli-todolist](https://jikeytang.github.io/vue-cli-todolist/index.html#/all)
- 参考自：[所有前端技术实现的todomvc.com](http://todomvc.com/)
- [尤大vue-totolist](https://github.com/tastejs/todomvc/tree/master/examples/vue)

### 1. 安装Vue-cli
分享前的约定: 以下大部分命令步骤基于Mac系统，Windows系统差异点也会提到。

#### 1.1 先在Github建立仓库
为了保持代码能够长期有效，也方便面试时展示，建议将代码以Git的方式存放，比如：http://github.com，http://gitee.com,https://bitbucket.org/ 等等。
选择任意一款新建仓库：`vue-cli-todolist`，git clone仓库到本地(Windows系统建议非桌面的盘符路径存储，比如D:/vue-todolist)，然后`cd ..`，在iTerm新建一个 tab 准备进行安装Vue-cli，留存当前的tab等安装完成之后运行npm run serve。 
PS: Windows下推荐命令行代替工具[cmder](https://cmder.net)，建议完整版，与编辑器分离，且支持多标签，VI编辑。

#### 1.2 Vue-cli的作用
- 本地生成文件和配置，减少繁琐的配置，以最短的时间最小的文件结构让项目先跑起来，让更多的精力关注开发本身。vue-cli3中vue.config.js不是必须，新建之后自动覆盖默认设置。
- //本地生成文件和配置，Vue-cli2直接通过git命令从远程github仓库拉取相应的模板，[webpack-template](https://github.com/vuejs-templates/webpack/tree/develop/template)，([其它模板](https://github.com/vuejs-templates))。然后复制到本地，vue-cli3直接在本地创建相关的配置文件，有部分还需要自己手动创建，比如vue.config.js。vue-cli3也可以[自定义模板](https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#creator)。
- 那如果不使用vue-cli那怎么办？就是手动在本地创始化package.json，然后其它相应文件手动创建手写配置，效率低，出错可能大。

#### 1.3 Vue-cli的全局安装
如果有旧版vuecli先得卸载，然后才能安装新版。
```shell
npm uninstall -g vue-cli
vue -V
```
输出：vue不是内外部命令时说明卸载成功，同样，新版安装成功通过这个命令来验证。

1. 安装前提必须安装[nodejs](https://nodejs.org/en/)，安装完之后通过`node -v`来确定是否安装成功，如果输出类似`v10.15.3`字样表示安装成功。//同时也安装了`npm`，输入以下命令来确认`npm -v`，如果输入`6.4.1`字样表示安装成功。 call:node
2. 通过`npm install -g @vue/cli`命令安装最新版，其中`-g`的意思是安装到全局，就像一个全局变量一样，以后在任何一个目录都可以运行创建命令`vue create`。
PS: 如果是使用Mac的同学此处可能需要增加sudo，完整的命令就是这样：`sudo npm install --global vue-cli`，否则会报这样的错误`Error: EACCES: permission denied, access '/usr/local/lib/node_modules'`，如果是Windows同学注意在右键用管理员方式打开cmd。
3. `vue create vue-cli-todolist` 通过此命令在原来git clone项目的Tab中来创建一个项目。
这时会有三个选项选择，

- Overwrite
- Merge
- Cancel

建议选择Merge，如果是Overwrite会删除.git隐藏文件，导致不能进行git commit，安装完成后通过`vue -V`来验证是否安装成功，如果输出`3.7.0`这样的字样，就说明安装成功了。
```shell
 $ cd vue-test
 $ npm run serve
```
根据命令行中提示的端口号，就可以预览到一个基础的项目页面。
4. 然后删除根目录下.gitignore文件中的dist目录，说明以后dist目录也需要提交上传，git提交代码，推送到远程，在github仓库刷新页面看到代码结构，说明代码远程推送成功。

5. `npm i vue-router -S`通过此命令来安装路由组件，很多朋友刚开始不太会区分-S，-D的区别，这个-S表示上线依赖，是`--save`缩写，表示上线之后还需要存在的代码块，比如Vue.js，对应package.json中的`dependencies: {}`，-D表示开发依赖，是`--save-dev`缩写，表示只是在开发阶段使用，上线之后只使用他的结果文件就可以了，比如sass-loader, babel，对应package.json中的`devDependencies: {}`。
6. `npm i sass-loader -D`通过此命令来安装我们后面用到的scss，也可以通过一个命令用空格分隔安装多个组件，比如：`npm i sass-loader vue-loader -D`。

### 2. 路由的配置
增加路由的目的还是为了让我们更方便的进行编程，比如：有些页面需要用户登录之后才能访问？比如有些页面进入之后后退就不让他进入这个页面？等等这样的场景都可以通过路由来实现。
- 在src目录下新建router.js，引入相关的对象，然后use，最后export。
```javascript
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
```

```javascript
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home'),
    }
  ],
})
```

- 这样router路由我们就建好了，但是他还没有被使用，所以还需要在main.js中引入之后被使用，这样配置的路由才会起作用，根据路由访问时才会跳转到期望的画面。
```javascript
import router from './router'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```
- 然后刷新页面，多了一个`/#/`，最后显示为`http://localhost:8080/#/`，且显示画面没有报错，说明我们的路由配置文件添加成功。

### 3. Sass-loader
加入scss的目的是让我们更快更方便的方式编写css，call:sass
了解一下。

需要在项目中使用scss，只需要在.vue组件中的style中添加lang="scss"，就可以使用了：
```css
<style lang="scss">
</style>
```
PS: node-sass包比较难安装，需要多次重新安装。
- 但是添加之后命令工具报错`Can't resolve 'sass-loader'`，这时候就需要我们通过命令`npm i sass-loader -D`来安装依赖。他主要的功能就是负责把scss编译为css。
- 安装完成之后，还是会报`Cannot find module 'node-sass'`，我们继续`npm i node-sass -D`安装依赖。
安装完成之后刷新页面还是报错，这时候需要重新启动服务了。具体步骤为先：`ctrl+c`停止服务，然后输入命令`npm run serve`启动，再刷新页面，画面重现。


- 因为这次的重点是Vue-cli，所以相关Html, CSS直接复用，刚好todo相关css已经有npm包，我们直接安装相关css模块， `npm i todomvc-common todomvc-app-css -S`，然后在main.js中引入：
```css
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
```
那到这一步我们前期的准备工作已经完成了，下面就是根据页面特点进行组件的拆分了。

### 4. 组件
拆分组件的难点在于，组织结构上趋于分散，但数据处理上趋于集中，集中的数据便于管理或驱动页面视图。
组件是Vue开发当中最小的组成单元，以.vue扩展名结尾，他包括：Html结构, JS, CSS，数据流，监听处理子组件触发事件，引用子组件(ref)。
如何拆分是一个开发习惯，并没有一个准确的原则，细拆可以拆分一个按钮为一个组件单元，但拆的越细坏处是会造成页面维护的困难，好处是页面组件的复用性更好。如果拆的少，组件结构关系比较简单，但是页面组件复用性不高，最终要达到期望效果还是要平衡和取舍。
根据当前页面的特点，大体拆分为以下四个部分，分别为：Header, List, Footer, Copyright，新建对应的*.vue文件并且放置在`vue-cli-todolist/src/components`目录下，然后相应的组件在`vue-cli-todolist/src/views/home.vue`中引入，然后在增加：
```javascript
components:{ Header, List, Footer }
```
需要注意的是`Copyright`在整个操作容器外部，所以放在`App.vue`中。

#### 4.1 home.vue
由于Vue单数据流的限制规则，此组件页面是操作整个Todolist数据源的总页面，所有对数据的操作方法都汇总在此组件来实现，包括子组件对数据源的操作。父级 prop 值的更新会向下传递，但不能反向传递，也不能在子组件直接修改 prop。这样做的目的是为了防止从子组件意外改变父级组件的状态，从而导致数据流向难以理解。其实对Todolist的操作，就是常说的是**增删改查**，只是少了一个查找而已，页面上的常规操作就是对Todolist数据源对象的的增加删除修改，那对应的代码其实就是数据的`push, splice, forEach`等方法。需要注意的是这些操作数据的结果都是基于浏览器的，刷新之后并不存在，解决办法后端接口存储和本地存储，本案例中通过localStorage存储在本地。

然后我们找一行有特征引入组件的方式来分析一下，比如：
```javascript
<main-view :todos="filteredTodos" @del-todo="delTodo" @all-done="allDone"></main-view>
```
- main-view表示组件名称，如果是全局组件那名称是唯一的。
- :todos="filteredTodos"，冒号表示变量是动态的，如果不是冒号默认是String，todos表示子组件接受数据的变量名称，filteredTodos表示当前页面的变量名称。子组件中通过props属性来接受父组件传来的数据，通过$emit的方法触发事件然后在父组件修改数据，整个的数据即能灵活的传下去，也能有效的回转回来。
- @del-todo="delTodo"，@表示事件处理，del-todo为子组件$emit方法名，delTodo为当前组件事件处理方法名。组件数据通过`:todos="filteredTodos"`传下去，然后通过`@del-todo="delTodo" @all-done="allDone"`进行捕获处理。

#### 4.2 Header.vue
- `home.vue`中输入`<header>....</header>`，刷新页面之后发现并没有达到期望的效果，只有`<header>....</header>`的代码片段。这时候就发现组件名称不能与HTML的原有标签名称重复，否则当普通的html标签解析。修改Header.vue为HeaderView.vue之后刷新页面，得到期望结果页面。另外的一个办法就是大写，比如：`<Header>....</Header>`。

#### 4.3 Main.vue
此页面虽然Html元素不多，但需要处理的东西还是挺多，包括点击进行中处理，双击进入编辑状态，.enter.blur事件退出编辑状态，基本每个Html元素上都需要js代码的处理，这里边大概有这几点分享：

##### 4.3.1 template
- v-model
扩展为：
```html
<input v-model="field" />
<input :value="field" @input="field = $event.target.value" />
```
每当输入框内容发生变化时，就会触发 oninput ，把最新的value传递给 field。

- :class

    - 对象语法 { active: isActive, 'text-danger': hasError }，通过Boolean值控制是否有值
    - 数组语法 [activeClass, errorClass]，通过变量合并显示
文档：https://cn.vuejs.org/v2/guide/class-and-style.html 

- @dblclick，@click
绑定事件的缩写形式，完整的为：v-on:click="handle"
文档：https://cn.vuejs.org/v2/guide/events.html
- {{ item.title }}
基础变量显示，原始html需要v-html="rawHtml"指令。
https://cn.vuejs.org/v2/guide/syntax.html
- @keyup.enter.prevent
通过事件修饰符连写，达到处理冒泡，阻止自定义事件等等的目的
https://cn.vuejs.org/v2/guide/events.html
- computed -> set || get
一般计算属性默认都是getter，全选的处理需要主动的修改数据源。
https://cn.vuejs.org/v2/guide/computed.html

##### 4.3.2 script

- props接受数据，data初始化变量
- computed中allDone通过进行中的数量是否为零来有效的在初始化时得到全选的状态。
- util方法就是对跨组件代码块复用的封装export然后import之后使用。

##### 4.3.3 style
- vh
css3新单位，相对于视口的高度的百分比，视口被均分为100单位的vh，1vh = 视口高度的1%。
```html
h1 {
	font-size: 8vh;
}
```
如果视口的高度是200px，那么上述代码中h1元素的字号将为16px，即(8x200)/100=16

#### 4.4 Footer.vue
点击状态每次切换需要切换画面，画面的变化依赖于路由，所以需要记录路由名称 `this.current`，在home.vue中通过watch来实现：
```javascript
'$route' (to) {
  this.current = to.name
},
```

#### 4.5 Copyright.vue
版权页面布局采用Flex形式布局。扩展认识：[Flex垂直水平居中对齐](https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb)

### 5. main.js
如果说App.vue是项目的组件入口文件的话那么main.js就是项目的代码入口，所有相关js的初始化以及npm包的引用都在此文件处理。ES6规定，import必须放在首行，有的组件需要Vue.use，有的则不需要。
Vue全家桶相关的Router, Vuex都需要在此文件绑定。

### 6. package.json

- dependencies 上线依赖，npm i -S moduleName
- devDependencies 开发依赖 npm i -D moduleName

同时习惯于vue-cli2 npm run dev方式的同学，也可以在package.json中增加：
```json
"scripts": {
  "dev": "npm run serve",
  "serve": "vue-cli-service serve"
}
```
可以用npm run dev继续运行当前项目。


### 7. package-lock.json

记录当前状态下实际安装的各个npm package的具体来源和版本号，package.json文件只能锁定大版本，也就是版本号的第一位，并不能锁定后面的小版本你每次npm install都是拉取的该大版本下的最新的版本，为了稳定性考虑几乎是不敢随意升级依赖包的，这将导致多出来很多工作量，所以package-lock.json安装一个依赖的时候就锁定在你安装的这个版本。

### 8. npm run build
在根目录增加vue.config.js，css,js默认访问根目录，而我们发布之后的目录是`http://www.host.com/dist/`，多了一层dist，所以需要配置publicPath，否则控制台报找不到资源的错误：
```javascript
module.exports = {
  publicPath: './',
  productionSourceMap: false
}
```
到此为止，今天的分享就结束了，下次分享见。

接下来的计划：
- [x] 基础版
- [ ] Vuex
- [ ] Element-UI
- [ ] Vue-ant-design
- [ ] IView


