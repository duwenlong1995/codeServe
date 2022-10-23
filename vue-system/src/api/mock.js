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
