export interface IMicroAppConfig {
	name: string;
	url: string;
	routeActiveRule: string;
}

export const electronicWhiteboardEntry = import.meta.env.VITE_ELECTRONIC_WHITEBOARD;
export const MicroAppConfig: IMicroAppConfig[] = [
	{
		name: 'electronicWhiteboard', // 微应用 唯一用户名必须保证
		url: electronicWhiteboardEntry, // 渲染微应用的URL
		routeActiveRule: 'elecWhiteboard' //微应用 路由激活规则, 后续考虑使用远程模块动态加载
	}
];
``;
