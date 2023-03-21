import { useAppStore } from '@/stores/AppStore';
import type { IMicroAppConfig } from '@/data/appData';
import WujieApp from 'wujie-vue3';
const { setupApp: setupAppOfWujie, preloadApp } = WujieApp;

/**
 * 统一注册所有子应用
 */
export const setupApp = () => {
	const { apps } = useAppStore();
	apps.forEach((item: IMicroAppConfig) => {
		console.log('item ===app ===', item);
		//@ts-ignore
		setupAppOfWujie({
			...item
		});
		preloadApp({
			...item
		});
	});
};
