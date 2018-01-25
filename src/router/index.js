import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/admin'
import MiUi from '@/components/header/miui'
import LoT from '@/components/header/lot'
import Yfw from '@/components/header/yfw'
import Sd from '@/components/header/sd'
import Jr from '@/components/header/jr'
import Serve from '@/components/footer/serve'
import Return from '@/components/footer/return'
import ChangeGoods from '@/components/footer/changegoods'
import Postage from '@/components/footer/postage'
import Branch from '@/components/footer/branch'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin,
      alias:'小米商城',
      title:true,
      hidden:false,
      sites:true,
    },
    {path:'/miui',alias:'MIUI',title:true,hidden:false,sites:true,name:'miui',component:MiUi},
    {path:'/lot',alias:'loT',title:true,hidden:false,name:'lot',component:LoT},
    {path:'/yfw',alias:'云服务',title:true,hidden:false,name:'yfw',component:Yfw},
    {path:'/sd',alias:'水滴',title:true,hidden:false,name:'sd',component:Sd},
    {path:'/jr',alias:'金融',title:true,hidden:false,name:'jr',component:Jr},
    {path:'/footer/serve',alias:'预约维修服务',hidden:true,name:'serve',component:Serve},
    {path:'/footer/return',alias:'7天无理由退货',hidden:true,name:'return',component:Return},
    {path:'/footer/changegoods',alias:'15天免费换货',hidden:true,name:'changegoods',component:ChangeGoods},
    {path:'/footer/postage',alias:'满150元包邮',hidden:true,name:'postage',component:Postage},
    {path:'/footer/branch',alias:'520余家售后网点',hidden:true,name:'branch',component:Branch},
    {
    	path:'/service/content',
    	component: MiUi,
      alias:'帮助中心',
      hide:true,
      children:[
      	{path:'/footer/postage',alias:'账户管理',hidden:true,name:'postage',component:Postage},
    		{path:'/footer/branch',alias:'购物指南',hidden:true,name:'branch',component:Branch},
    		{path:'/footer/branch',alias:'订单操作',hidden:true,name:'branch',component:Branch}
      ]
    },
    {
    	path:'/service/content',
    	component: MiUi,
      alias:'服务支持',
      hide:true,
      children:[
      	{path:'/footer/postage',alias:'售后政策',hidden:true,name:'postage',component:Postage},
    		{path:'/footer/branch',alias:'自助服务',hidden:true,name:'branch',component:Branch},
    		{path:'/footer/branch',alias:'相关下载',hidden:true,name:'branch',component:Branch}
      ]
    },
    {
    	path:'/service/content',
    	component: MiUi,
      alias:'线下门店',
      hide:true,
      children:[
      	{path:'/footer/postage',alias:'小米之家',hidden:true,name:'postage',component:Postage},
    		{path:'/footer/branch',alias:'服务网点',hidden:true,name:'branch',component:Branch},
    		{path:'/footer/branch',alias:'零售网点',hidden:true,name:'branch',component:Branch}
      ]
    },
    {
    	path:'/service/content',
    	component: MiUi,
      alias:'关于小米',
      hide:true,
      children:[
      	{path:'/footer/postage',alias:'了解小米',hidden:true,name:'postage',component:Postage},
    		{path:'/footer/branch',alias:'加入小米',hidden:true,name:'branch',component:Branch},
    		{path:'/footer/branch',alias:'联系我们',hidden:true,name:'branch',component:Branch}
      ]
    },
    {
    	path:'/service/content',
    	component: MiUi,
      alias:'关注我们',
      hide:true,
      children:[
      	{path:'/footer/postage',alias:'新浪博客',hidden:true,name:'postage',component:Postage},
    		{path:'/footer/branch',alias:'小米部落',hidden:true,name:'branch',component:Branch},
    		{path:'/footer/branch',alias:'官方微信',hidden:true,name:'branch',component:Branch}
      ]
    },
    {
    	path:'/service/content',
    	component: MiUi,
      alias:'特色服务',
      hide:true,
      children:[
      	{path:'/footer/postage',alias:'F码通道',hidden:true,name:'postage',component:Postage},
    		{path:'/footer/branch',alias:'礼物码',hidden:true,name:'branch',component:Branch},
    		{path:'/footer/branch',alias:'防伪查询',hidden:true,name:'branch',component:Branch}
      ]
    },
    {path:'/miui',alias:'米家',sites:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'米聊',sites:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'多看',sites:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'路由器',sites:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'米粉卡',sites:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'小米天猫店',sites:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'隐私政策',sites:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'问题反馈',sites:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'问题反馈',integrity:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'问题反馈',integrity:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'问题反馈',integrity:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'问题反馈',integrity:true,name:'miui',component:MiUi},
    {path:'/miui',alias:'问题反馈',integrity:true,name:'miui',component:MiUi},
  ]
})
export default router;