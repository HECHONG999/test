export enum RequestMethodEnum {
	GET = 'GET',
	POST = 'POST',
	PATCH = 'PATCH',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

export enum ResultEnum {
	SUCCESS = '200',
	ERROR = '500',
	OVERDUE = '599', // 登录失效
	TIMEOUT = '1000',
	TYPE = 'success'
}
/**
 * @description：常用的contentTyp类型
 */
export enum ContentTypeEnum {
	// json
	JSON = 'application/json;charset=UTF-8',
	// text
	TEXT = 'text/plain;charset=UTF-8',
	// form-data 一般配合qs
	FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
	// form-data 上传
	FORM_DATA = 'multipart/form-data;charset=UTF-8'
}
