import Vue from 'vue'
import store from './store'
import App from './App'

import Json from './Json' //测试用数据
/**
 *  因工具函数属于公司资产, 所以直接在Vue实例挂载几个常用的函数
 *  所有测试用数据均存放于根目录json.js
 *  
 *  css部分使用了App.vue下的全局样式和iconfont图标，有需要图标库的可以留言。
 *  示例使用了uni.scss下的变量, 除变量外已尽量移除特有语法,可直接替换为其他预处理器使用
 */
const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const json = type => {
	//模拟异步请求数据
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = { msg, json, prePage };


// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)

// 全局引入request封装方法
import request from '@/tools/request'
Vue.prototype.request = request

// 全局引入公共函数
import hc_base from '@/tools'
Vue.prototype.base = hc_base

/**** 全局引用filters过滤器 ****/
// 全局方法Vue.filter()统一注册自定义过滤器
import * as filters from "@/tools/filters"
Object.keys(filters).forEach(key => { //返回filters对象中属性名组成的数组
	Vue.filter(key, filters[key])
})

// 引入mock
if (process.env.NODE_ENV === "development") {
	require('@/mock');
}

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()