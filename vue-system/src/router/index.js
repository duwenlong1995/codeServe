import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
Vue.use(VueRouter)
/*
解决Uncaught (in promise) NavigationDuplicated: 
Avoided redundant navigation to current location问题
*/
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//1.创建路由组件
//2.将路由与组件进行映射
const routes = [
  {
    //主路由（不变的内容
    path: '/',
    component: Main,
    redirect: '/home',//重定向
    children: [
      //子路由
      { path: 'home', name: 'home', component: Home },//首页
      { path: 'user', name: 'user', component: User },//用户管理
      { path: 'mall', name: 'mall', component: Mall },//商品管理
      { path: 'page1', name: 'page1', component: PageOne },//页面1
      { path: 'page2', name: 'page2', component: PageTwo },//页面2
    ]
  },
]
//3.创建router实例
const router = new VueRouter({
  routes
})

export default router
