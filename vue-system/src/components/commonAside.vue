<template>
  <div class='ref'>
<el-menu default-active="1-4-1" 
class="el-menu-vertical-demo"
 @open="handleOpen" 
 @close="handleClose" 
 :collapse="isCollapse"
 background-color="#545c64"
 text-color="#fff"
 active-text-color="#ffd04b">
 <h3>{{isCollapse?'后台':"通用后台管理系统"}}</h3>
  <el-menu-item @click='clickMenu(item)' v-for='item in noChildren' 
  :key='item.name' :index="item.name">
    <i :class="`el-icon-${item.icon}`"></i>
    <span slot="title">{{item.label}}</span>
  </el-menu-item>
  <el-submenu v-for="item in haveChildren" 
  :key='item.label' :index="item.label">
    <template slot="title">
      <i :class="`el-icon-${item.icon}`"></i>
    <span slot="title">{{item.label}}</span>
    </template>
    <el-menu-item-group v-for="subitem in item.children" 
    :key="subitem.path" :index="subitem.path">
      <el-menu-item index="1-1">{{subitem.label}}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</el-menu>
</div>
</template>
<style lang="less" scope>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  /* less语法 */
  .el-menu{
    height: 100vh;
    h3{
      color: #fff;
      text-align: center;
      line-height: 48px;
      font-size: 16px;
      font-weight: 400px;
    }
  }
</style>
<script>
  export default {
    data(){
      return {
        menuData:[
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
       
      },
      handleClose(key, keyPath) {
        
      },
      //点击菜单
      clickMenu(item){
        //当页面的路由与跳转的路由不一致的时候才允许跳转
        if(this.$route.path !== item.path&&
        (this.$route.path==='/home'&&(item.path==='/'))){
           
        }
       //$router,整个router实例
       this.$router.push(item.path)
       this.$store.commit('selectMenu',item)
      },
      
    },
    computed:{
      //没有子菜单
      noChildren() {
    return this.menuData.filter(item=>!item.children)
      },
      haveChildren() {
    return this.menuData.filter(item=>item.children)
      },
      isCollapse(){
    return this.$store.state.tab.isCollapse
      }
    }
  }
</script>
<style>
.el-menu{
border-right: none
}
</style>