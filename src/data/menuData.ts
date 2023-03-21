import type { AsyncComponentLoader } from 'vue';
export interface IMenu {
	name: string;
	path?: string;
	component?: string | AsyncComponentLoader;
	key: number;
	children?: IMenu[];
}

export const menu: IMenu[] = [
	{
		key: 1,
		name: 'Vue3主应用',
		path: 'main',
		component: 'Layout.vue'
	},
	{
		key: 1,
		name: 'home',
		path: 'home',
		component: 'Home.vue'
	},
	{
		key: 2,
		name: '电子白板项目',
		path: 'elecWhiteboard',
		component: 'Layout.vue'
	}
];
