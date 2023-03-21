<template>
	<div class="login-input">
		<div class="login-input__item">
			<div class="login-input__item__icon">
				<svg-icon name="account"></svg-icon>
			</div>
			<div class="login-input__item__input">
				<input
					v-model="formState.username"
					style="background: #ffffff"
					type="text"
					:placeholder="$t('loginModule.userTips')"
				/>
			</div>
		</div>
		<div class="login-input__item">
			<div class="login-input__item__icon">
				<svg-icon name="password"></svg-icon>
			</div>
			<div class="login-input__item__input">
				<input
					v-model="formState.password"
					style="background: #ffffff"
					type="password"
					:placeholder="$t('loginModule.pwdTips')"
				/>
			</div>
		</div>
		<div class="login-button">
			<a-button type="primary" @click="onFinish">{{ $t('loginModule.login') }}</a-button>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue';
import { userLogin } from '@/network/modules/user';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';
import { useGlobalStore } from '@/stores/index';
import { ResultEnum } from '@/enums/httpEnums';
import SvgIcon from '@/components/SvgIcon.vue';
const { token } = toRefs(useGlobalStore());
const { t } = useI18n();

const router = useRouter();
interface FormState {
	username: string;
	password: string;
}
const formState = reactive<FormState>({
	username: 'administrator',
	password: '123'
});
const onFinish = async () => {
	try {
		const { code, data } = await userLogin(formState);
		if (code === ResultEnum.SUCCESS && data) {
			token.value = data;
			await router.push({ path: '/' });
			message.success(t('loginModule.loginSuccess'));
		}
	} catch (e) {
		console.error(t('loginModule.loginFail'));
		message.error(t('loginModule.loginFail'));
	}
};
</script>

<style lang="less">
.login-input {
	&__item {
		height: 50px;
		display: flex;
		border-bottom: 2px solid #ddd;
		margin-bottom: 25px;
		&__icon {
			display: flex;
			align-items: center;
			width: 30px;
			height: 100%;
		}
		&__input {
			display: flex;
			align-items: center;
			background: #ffffff;
			> input {
				border: none;
				outline: none;
				&:-webkit-autofill {
					-webkit-box-shadow: 0 0 0px 1000px white inset;
				}
			}
		}
	}
}
.login-button {
	display: flex;
	justify-content: center;
	margin-top: 80px;
	overflow: hidden;
	> button {
		height: 50px;
		width: 100%;
		border-radius: 30px;
	}
}
</style>
