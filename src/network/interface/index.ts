// * 请求响应参数（）
export interface IResult {
	code: string;
	msg: string;
}

// 请求响应参数（data）
export interface IResultData<T> extends IResult {
	data?: T;
}

export interface ResPage<T> {
	dataList: T[];
	pageNum: number;
	pageSize: number;
	total: number;
}
