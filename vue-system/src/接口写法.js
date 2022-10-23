//1.在store的index文件中创建模组
import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
Vue.use(Vuex)
//创建vuex实例
export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        tab
    }
})
//1.在store的index文件中创建模组
/*
引入后台数据
import home from "@/api/mockServeData/home"

export default ({
    state: {
        isCollapse: false,
        //控制菜单的展开还是收起
        tabList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            },
            
        ]
        //面包屑数据
    },
    getters: {
    },
    mutations: {
        //修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state, val) {
            //判断添加数据是否为首页
            if (val !== "home") {
                //findIndex函数存在返回当前数据的索引，不存在返回-1
                const index = state.tabList.findIndex(item => item.name === val.name)
                //如果不存在
                if (index === -1) {
                    state.tabList.push(val)
                }
            }
        },
        //删除指定的tag数据
        closeTag(state, item) {
           const index= state.tabList.findIndex(val=>val.name===item.name)
           //splice(删除的位置，删除的个数)
           state .tabList.splice(index,1)
        }
    },
    actions: {
    },
    modules: {

    }
})

     axios中的接口文件
import http from '../utils/request'
//请求首页数据的接口
export const getData=()=>{
    //返回promise对象
    return http.get('/home/getData')
}


export const getUser=(params)=>{
    //返回用户列表
    return http.get('/user/getUser',params)
}
export const addUser=(data)=>{
   
    return http.post('/user/add',data)
}
export const editUser=(data)=>{
   
    return http.post('/user/edit',data)
}
export const delUser=(data)=>{
   
    return http.post('/user/del',data)
}


     mock服务器中的接口文件
import Mock from 'mockjs';
import homeApi from './mockServeData/home'
import user from './mockServeData/user'

//定义mock请求拦截
Mock.mock('/home/getData',homeApi.getStatisticalData)
//用户列表的数据
Mock.mock('/user/add','post' ,user.createUser)
Mock.mock('/user/edit','post' ,user.updateUser)
Mock.mock('/user/del','post' ,user.deleteUser)
Mock.mock('/user/getUser',user. getUserList)
*/