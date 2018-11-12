import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//旧版本使用webpack的require.ensure来一步加载模块
//const App = r => {require.ensure([], () => r(require('./App.vue')), 'App')};

//现在使用import来替代webpack中的require.ensure
const App = () => import(/* webpackChunkName:'App'*/ './App.vue');
const MainBlog = () => import(/* webpackChunkName:'MainBlog'*/ './views/MainBlog.vue');
const Message = () => import(/* webpackChunkName:'Message'*/ './views/Message.vue');
const Discovery = () => import(/* webpackChunkName:'Discovery'*/ './views/Discovery.vue');
const PersonalInfo = () => import(/* webpackChunkName:'PersonalInfo'*/ './views/PersonalInfo.vue');

//按需加载组件

const routes = [
	{
		/*根路径*/
		path: '/', 
		component: App,
		children: [
			{
				path: '/mainblog',
				component: MainBlog
			},
			{
				path: '/message',
				component: Message
			},
			{
				path: '/discovery',
				component: Discovery
			},
			{
				path: '/personalinfo',
				component: PersonalInfo
			}
		]
	},
		{
			path: '*',
			redirect: '/'
		}
]

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;