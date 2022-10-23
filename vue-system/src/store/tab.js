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