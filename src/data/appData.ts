export interface IMicroAppConfig {
	name: string;
	url: string;
	routeActiveRule: string;
	sync?: Boolean;
}

export const electronicWhiteboardEntry = import.meta.env.VITE_ELECTRONIC_WHITEBOARD;
export const electronicWhiteboardAdminEntry = import.meta.env.VITE_ELECTRONIC_WHITEBOARD_ADMIN;
export const MicroAppConfig: IMicroAppConfig[] = [
	{
		sync: true,
		name: 'whiteboard', // 微应用 唯一用户名必须保证
		url: electronicWhiteboardEntry, // 渲染微应用的URL
		routeActiveRule: '/whiteboard' //微应用 路由激活规则, 后续考虑使用远程模块动态加载
	},
	{
		sync: true,
		name: 'administration', // 微应用 唯一用户名必须保证
		url: electronicWhiteboardAdminEntry, // 渲染微应用的URL
		routeActiveRule: '/administration' //微应用 路由激活规则, 后续考虑使用远程模块动态加载
	}
];
``;
