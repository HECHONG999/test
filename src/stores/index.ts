/**
 * Author: hechong
 * Date: 2023/2/26 21:36
 * Company: intrii
 */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalStore = defineStore('GlobalStore', () => {
	const token = ref('');
	const language = ref<string>('zh_TW');
	const updateLanguage = (lan: string) => {
		language.value = lan;
	};
	return { token, language, updateLanguage };
});
