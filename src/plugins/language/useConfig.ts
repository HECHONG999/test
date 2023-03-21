import { computed, onMounted } from 'vue';
import { useGlobalStore } from '@/stores/index';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import zhTw from 'ant-design-vue/es/locale/zh_Tw';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';

export const configLang: { [key: string]: any } = {
	[zhCN.locale]: zhCN,
	[zhTw.locale]: zhTw,
	[enUS.locale]: enUS
};
/**
 * 配置国际化相关
 * @returns 当前国际化配置语言类型
 */
export const useConfigLang = () => {
	const { language, updateLanguage } = useGlobalStore();
	onMounted(() => {
		dayjs.locale(language);
	});

	/**
	 * 监听语言变化适配国际化
	 */
	const i18nLocal = computed((): any => {
		const local = configLang[language] ?? zhTw;
		dayjs.locale(local.local);
		return local;
	});
	return { i18nLocal, updateLanguage };
};
