import { AxiosRequestConfig } from 'axios';
import qs from 'qs';
function isFunction(val: unknown): val is Function {
	return typeof val === 'function';
}
let pendingMap = new Map<string, AbortController>();
export const getPendingUrl = (config: AxiosRequestConfig) =>
	[config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&');

export class AxiosCanceler {
	/**
	 * @description 添加请求的路径
	 * @param {Object} config
	 */
	addPending(config: AxiosRequestConfig) {
		this.removePending(config);
		const url = getPendingUrl(config);
		// const url = config.url + '';
		const controller = new AbortController();
		config.signal = controller.signal;
		if (!pendingMap.has(url)) {
			pendingMap.set(url, controller);
		}
	}

	/**
	 * @description: 移除请求
	 * @param {Object} config
	 */
	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);
		// const url = config.url + '';
		if (pendingMap.has(url)) {
			// 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
			const controller = pendingMap.get(url);
			controller && controller.abort();
			pendingMap.delete(url);
		}
	}
	/**
	 * @description: 清空所有pending
	 */
	removeAllPending() {
		pendingMap.forEach(cancel => {
			cancel && isFunction(cancel) && cancel();
		});
		pendingMap.clear();
	}

	/**
	 * @description: 重置
	 */
	reset(): void {
		pendingMap = new Map<string, AbortController>();
	}
}
