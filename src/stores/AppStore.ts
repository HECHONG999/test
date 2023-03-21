import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import { MicroAppConfig } from '../data/appData';
import type { IMicroAppConfig } from '../data/appData';
export const useAppStore = defineStore('subAppStore', () => {
	const apps = reactive<IMicroAppConfig[]>(MicroAppConfig);
	const paths = computed(() => apps.map(item => item.routeActiveRule));
	return { apps, paths };
});
