/**
 * Author: hechong
 * Date: 2023/2/26 11:25
 * Company: intrii
 */
import network from '@/network';

// 登錄
export const userLogin = (params: { username: string; password: string }) => {
	return network.post<string>(`/sso/user/login`, params, {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	});
};
