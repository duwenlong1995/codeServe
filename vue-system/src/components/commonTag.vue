<template>
  <div class="tabs">
    <div class="tag-group">
  <span class="tag-group__title"></span>
  <el-tag
    v-for="(item,index) in tags"
    :key="item.path"
    :closable="item.name!=='home'"
    :effect="$route.name === item.name ? 'dark' : 'plain'"
    @click="changeMenu(item)"
    @close="handleClose(item,index)"
    size:small
   >
    {{ item.label }}
  </el-tag>
</div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name:'CommonTags',
  data() {
    return {

    }
  },
  mounted(){

  },
  computed:{
    ...mapState({
      tags:state=>state.tab.tabList
    })
  },
  
  methods:{
    //点击tag跳转的效果
    changeMenu(item){
    // this.$route.push
    //实现跳转的第二种方式
    this.$router.push({name: item.name})
    },
    ...mapMutations(['closeTag']),
    //点击tag删除功能
    handleClose(item,index){
    //调用store中的mutation
    this.closeTag(item)
    const length = this.tags.length
    //删除之后的跳转逻辑
    if (item.name!==this.$route.name) {
        return
    }
    //表示的是删除的最后一项
    if (index===length) {
        this.$router.push({name:this.tags[index-1].name})
    }else{
        this.$router.push({name:this.tags[index].name})
    }
    },
  },
}

</script>
<style lang='less'scoped>
.tabs{
  padding: 20px;
  .el-tag{
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>

