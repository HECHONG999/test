import antd from 'ant-design-vue';
import WujieVue from 'wujie-vue3';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '@/router';
import 'ant-design-vue/dist/antd.css';
import '@/styles/reset.less';
import { setupApp } from '@/utils/setupApp';
import i18n from '@/plugins/language';
const app = createApp(App);
app.use(WujieVue);
app.use(createPinia());
app.use(router);
app.use(antd);
app.use(i18n);
setupApp();

app.mount('#app');
