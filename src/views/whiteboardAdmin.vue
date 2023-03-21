<template>
	<a-layout>
		<WujieVue
			height="100%"
			:name="microApp.name"
			url="//127.0.0.1:7002/"
			:props="microAppProps"
			:bus="bus"
			:setupApp="setupApp"
			:preloadApp="preloadApp"
			:destroyApp="destroyApp"
			:install="install"
			:afterMount="afterMount"
		/>
	</a-layout>
</template>
<script lang="ts" setup>
/**
 * 主应用首页显示子应用信息 点击子应用跳转到子应用页面
 * 做路由导航
 */
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/AppStore';
import { useRoute } from 'vue-router';
import router from '@/router';
import WujieVue from 'wujie-vue3';
const route = useRoute();
const microApp = computed(() => {
	const { apps } = storeToRefs(useAppStore());

	const app = apps.value.find(item => {
		const path = route.path;
		return path.startsWith(item.routeActiveRule) && path.endsWith(item.routeActiveRule);
	});
	if (app) {
		return {
			...app,
			url: `${app.url}${route.fullPath}`
		};
	}
	return null;
});

console.log('microApp====', microApp);
const microAppProps = computed(() => ({ router }));

const { bus } = WujieVue;
function setupApp() {
	console.log('setupApp');
}
function preloadApp() {
	console.log('preloadApp');
}
function destroyApp() {
	console.log('destroyApp');
}
function install() {
	console.log('install');
}
function afterMount() {
	if (microApp.value) {
		// 解决首次加载路由跳转地址错误问题
		bus.$emit(`${microApp.value.name}:router-change`, {
			path: route.fullPath,
			replace: true
		});
	}
	// bus.$emit('changeUser', toRaw(microData.value));
}
</script>
<style lang="less">
.ant-layout {
	height: 100vh;
}
</style>
