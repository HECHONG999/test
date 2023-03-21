import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { useGlobalStore } from '@/stores/index';
import { toRefs } from 'vue';
import { AxiosCanceler } from './helper/axiosCancel';
import { ResultEnum } from '@/enums/httpEnums';
import { message } from 'ant-design-vue';
import { checkStatus } from './helper/checkStatus';
import { IResultData } from '@/network/interface';
import Nprogress from '@/config/nprogress';

const { token } = toRefs(useGlobalStore());
const axiosCanceler = new AxiosCanceler();
class Network {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config);

		this.service.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				Nprogress.start();

				// * 将当前请求添加到 pending 中
				axiosCanceler.addPending(config);
				// 设置是否在请求时 出现 loading
				// config.headers!.noLoading || showFullScreenLoading();
				return config;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);

		/**
		 * @description 响应拦截器
		 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 */
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data, config } = response;
				// * 在请求结束后，移除本次请求，并关闭请求 loading
				axiosCanceler.removePending(config);
				// tryHideFullScreenLoading();
				// * 登陆失效（code == 599）
				if (data.code == ResultEnum.OVERDUE) {
					message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
					token.value = '';
					// router.replace({
					// 	path: '/login'
					// });
					return Promise.reject(data);
				}
				// * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
				if (data.code && data.code !== ResultEnum.SUCCESS) {
					message.error(data.msg);
					return Promise.reject(data);
				}
				Nprogress.done();

				// * 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
				return data;
			},
			async (error: AxiosError) => {
				const { response } = error;
				// tryHideFullScreenLoading();
				// 请求超时单独判断，因为请求超时没有 response
				if (error.message.indexOf('timeout') !== -1) message.error('请求超时！请您稍后重试');
				// // 根据响应的错误状态码，做不同的处理
				if (response) checkStatus(response.status);
				// // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
				// if (!window.navigator.onLine) router.replace({ path: '/500' });
				Nprogress.done();

				return Promise.reject(error);
			}
		);
	}

	get<T>(url: string, params?: object, _object = {}): Promise<IResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object, _object = {}): Promise<IResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<IResultData<T>> {
		return this.service.put(url, params, _object);
	}
	patch<T>(url: string, params?: object, _object = {}): Promise<IResultData<T>> {
		return this.service.patch(url, params, _object);
	}
	delete<T>(url: string, params?: object): Promise<IResultData<T>> {
		return this.service.delete(url, params);
	}
}

const config = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: import.meta.env.VITE_API_URL as string,
	// 设置超时时间（10s）
	// timeout: ResultEnum.TIMEOUT as number,
	// 跨域时候允许携带凭证
	withCredentials: false,
	token: token
};
export default new Network(config);
