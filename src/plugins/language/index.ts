import { createI18n } from 'vue-i18n';
import zh_Tw from './modules/zh_Tw';

const i18n = createI18n({
	locale: 'zh_Tw',
	legacy: false,
	globalInjection: true,
	messages: {
		zh_Tw
	}
});

export default i18n;
