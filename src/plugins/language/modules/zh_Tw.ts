export default {
	menu: {
		cardiacSchedule: '心導管排程',
		eecpSchedule: 'EECP排程'
	},
	whitePanel: {
		header: {},
		content: {
			unfinish: '未完成',
			finish: '已完成',
			revoked: '已取消'
		},
		patienDate: {
			chartNo: '病歷號碼',
			birth: '出生年月',
			department: '科別',
			scheduleDate: '排程日期',
			scheduleDateNote: '請選擇時間',
			admissionDate: '住院日期',
			physicianInfoTitle: '醫師資訊',
			physicianBill: '開單醫師',
			physOperate: '操作醫師',
			nurse: '技術員',
			specialNoteTitle: '特殊註記',
			personalNoteTitle: '人工註記'
		}
	},
	loginModule: {
		userTips: '請輸入用戶名',
		pwdTips: '請輸入密碼',
		login: '登入',
		loginFail: '登入失敗',
		loginSuccess: '登入成功'
	},
	admin: {
		table: {
			add: '新增',
			edit: '編輯',
			delete: '刪除',
			get: '查詢',
			reset: '重置',
			expand: '展開',
			collapse: '合并',
			operation: '操作',
			save: '保存',
			cancel: '取消'
		},
		role: {
			id: '角色ID',
			name: '角色名稱',
			description: '描述',
			createdDate: '創建時間',
			lastModifiedDate: '修改時間',
			permission: '權限',
			permissionId: '權限ID',
			permissionName: '權限名稱',
			permissionType: '權限類型'
		},
		user: {
			id: '用戶ID',
			username: '用戶名稱',
			password: '用戶密碼',
			ofPractitioner: '所屬從業者',
			organizationList: '所属組織',
			roleList: '角色列表',
			deleted: '狀態',
			createdDate: '創建時間',
			lastModifiedDate: '修改時間',
			roleName: '角色名稱',
			roleId: '角色ID',
			description: '描述'
		},
		pracitioner: {
			id: '從業者ID',
			name: '姓名',
			jobTitle: '工作名稱',
			jobType: '工作類型',
			idCard: '身份證號',
			gender: '性別',
			birthDate: '出生日期',
			address: '地址',
			telecom: '電話號碼',
			photo: '照片',
			ofOrganizationList: '所屬組織'
		},
		organization: {
			id: '組織ID',
			name: '組織名稱',
			description: '組織描述',
			alias: '組織別名',
			active: '組織狀態'
		},
		dictionary: {
			code: '詞典代碼',
			itemName: '詞典名稱',
			description: '詞典描述',
			parent: '父級詞典',
			itemOrder: '組此案順序'
		}
	}
};
