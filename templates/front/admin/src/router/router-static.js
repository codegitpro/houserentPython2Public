import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import fangwuleixing from '@/views/modules/fangwuleixing/list'
    import fangwuxinxi from '@/views/modules/fangwuxinxi/list'
    import yuyuekanfang from '@/views/modules/yuyuekanfang/list'
    import news from '@/views/modules/news/list'
    import fangzhu from '@/views/modules/fangzhu/list'
    import yonghupingjia from '@/views/modules/yonghupingjia/list'
    import zaixianzixun from '@/views/modules/zaixianzixun/list'
    import zuke from '@/views/modules/zuke/list'
    import zukezufang from '@/views/modules/zukezufang/list'
    import config from '@/views/modules/config/list'
    import qiandinghetong from '@/views/modules/qiandinghetong/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/fangwuleixing',
        name: '房屋类型',
        component: fangwuleixing
      }
      ,{
	path: '/fangwuxinxi',
        name: '房屋信息',
        component: fangwuxinxi
      }
      ,{
	path: '/yuyuekanfang',
        name: '预约看房',
        component: yuyuekanfang
      }
      ,{
	path: '/news',
        name: '网站公告',
        component: news
      }
      ,{
	path: '/fangzhu',
        name: '房主',
        component: fangzhu
      }
      ,{
	path: '/yonghupingjia',
        name: '用户评价',
        component: yonghupingjia
      }
      ,{
	path: '/zaixianzixun',
        name: '在线咨询',
        component: zaixianzixun
      }
      ,{
	path: '/zuke',
        name: '租客',
        component: zuke
      }
      ,{
	path: '/zukezufang',
        name: '租客租房',
        component: zukezufang
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/qiandinghetong',
        name: '签订合同',
        component: qiandinghetong
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
