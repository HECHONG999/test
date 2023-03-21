import { defineStore } from 'pinia';
import type { RouteRecordRaw } from 'vue-router';
import { menu } from '../data/menuData';
import type { IMenu } from '../data/menuData';
import { reactive } from 'vue';
import router from '../router/index';
const globViews = import.meta.glob('../views/*.vue');

// menu配置转Routes标准格式
function transformRoutes(menus: IMenu[], parentPath = ''): RouteRecordRaw[] {
	const res: RouteRecordRaw[] = [];
	for (const item of menus) {
		const { path, component, key, children } = item;
		const routeItem: RouteRecordRaw = {
			name: key + '',
			path: '',
			children: []
		};
		// 处理一级路由
		if (!parentPath && (!children || children?.length === 0)) {
			routeItem.name = `top${item.key}`;
			routeItem.component = globViews[`../views/${component}`];
			routeItem.path = '';
			routeItem.children = [
				{
					name: item.key + '',
					path: `/${item.path}`
				} as RouteRecordRaw
			];
			if (component) {
				routeItem.children[0].component = globViews[`../views/${component}`];
			}
			res.push(routeItem);
			continue;
		}
		routeItem.path = parentPath + '/' + path;
		if (component) {
			routeItem.component = globViews[`../views/${component}`];
		}
		if (children) {
			routeItem.children = transformRoutes(children, routeItem.path);
		}
		res.push(routeItem);
	}
	return res;
}
/**
 * 组合menu完整path
 * @param menus
 * @param parentPath
 * @returns
 */
function combineMenuPath(menus: IMenu[], parentPath = ''): IMenu[] {
	return menus.map(item => {
		const path = `${parentPath}/${item.path}`;
		if (item.children) {
			return {
				...item,
				path,
				children: combineMenuPath(item.children, path)
			};
		}
		return { ...item, path };
	});
}

/**
 * 使menu结构扁平化
 * @param menu
 * @returns
 */
function flatMenu(menu: IMenu[]): IMenu[] {
	return menu.reduce((res, cur) => {
		if (cur.children && cur.children.length > 0) {
			res.push(...flatMenu(cur.children));
		}
		res.push(cur);
		return res;
	}, [] as IMenu[]);
}
export const useMenuStore = defineStore('menu', () => {
	const menuList = reactive<IMenu[]>(combineMenuPath(menu));
	const flattenMenuList = flatMenu(menuList);
	const addRoutes = () => {
		transformRoutes(menu).forEach((item: RouteRecordRaw) => router.addRoute(item));
	};
	return { menuList, addRoutes, flattenMenuList };
});
