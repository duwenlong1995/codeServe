<template>
  <!-- 公共部分 -->
  <div>
    <el-container>
  <el-aside width="auto"><common-aside /></el-aside>
  <el-container>
    <el-header><CommonHeader /></el-header>
    <CommonTags />
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>
<script>
import commonAside from '../components/commonAside.vue'
import CommonHeader from '@/components/commonHeader.vue'
import CommonTags from '@/components/commonTag.vue'
export default {
  data(){
    return{
  
    }
  },
  components:{
    commonAside,
    CommonHeader,
    CommonTags
}
}
</script>
<style scoped>
.el-header{
padding: 0px;
}
</style>