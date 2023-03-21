import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: { name: 'whiteboard' }
		},
		{
			path: '/whiteboard',
			name: 'whiteboard',
			component: () => import('@/views/Layout.vue')
		},
		{
			path: '/administration',
			name: 'administration',
			component: () => import('@/views/Layout.vue')
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/Login.vue')
		}
	]
});
router.beforeEach((form, to, next) => {
	console.log('href', decodeURIComponent(location.href));
	next();
});
router.afterEach(async () => {
	console.log('主应用路由加载完成');
});
export default router;
