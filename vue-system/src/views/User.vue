<template>
  <div class="manage">
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="50%"
  :before-close="handleClose">
 <!-- 用户的表单信息开始 -->
 <el-form :rules="rules" ref="form" :inline="true" :model="form" label-width="80px">
  <el-form-item label="姓名" prop="name">
    <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="年龄" prop="age">
    <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
  </el-form-item>
  
  <el-form-item label="性别" prop="sex">
  <el-select v-model="form.sex" placeholder="请选择性别">
      <el-option label="男" value="1"></el-option>
      <el-option label="女" value="0"></el-option>
    </el-select>
  </el-form-item>
  
  <el-form-item label="出生日期" prop="birth">
    <el-date-picker
      v-model="form.birth"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>

  <el-form-item label="地址" prop="addr">
    <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
  </el-form-item>
   <!-- 用户的表单信息结束 -->
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="Submit">确 定</el-button>
  </span>
</el-dialog>
<div class="manage-header">
 <el-button @click="dialogVisible=true" type="primary">
 +新增
 </el-button>
 <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
       >
      </el-table-column>
      <el-table-column
        prop="sexLabel"
        label="性别">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.sex===1?'男':'女' }}</span>
          </template>
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="birth"
        label="出生日期">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="地址">
        <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope,row)">编辑</el-button>
            <el-button type='danger' size="mini" @click="handleDel(scope,row)">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
</div>
  </div>
</template>
<script>
import {getUser} from '../api'
export default {
  data(){
    return{
      dialogVisible: false,
      form:{
      name:'',
      age:'',
      sex:'',
      birth:'',
      addr:'',
      },
      rules:{
        name:[
        {required: true, message: '请输入姓名'}
        ],
        age:[
        {required: true, message: '请输入年龄'}
        ],
        sex:[
        {required: true, message: '请选择性别'}
        ],
        birth:[
        {required: true, message: '请选择出生日期'}
        ],
        addr:[
        {required: true, message: '请填写地址'}
        ],
      },
      tableData:[]
      
    
    }
  },
  methods:{
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
  },
  //提交用户表单
  Submit(){
  this.$refs.form.validate((val)=>{
  if (val) {
    //后续对表单数据的处理
    console.log(this.form,'form');
    //关闭弹窗
    this.dialogVisible=false
    
  }
  }
)
  },
  //弹窗关闭的时候
  handleClose(){
    //resetFields()重置表单
    this.$refs.form.resetFields()
    this.dialogVisible=false
  },
  cancel(){
    this.handleClose()
   
  },
  handleEdit(row){

  },
  handleDel(row){

  }
},
mounted() {
  //获取列表数据
  getUser().then((data)=>{
    console.log(data.data.list);
    this.tableData=data.data.list
  })
},
}

</script>
