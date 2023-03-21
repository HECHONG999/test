<template>
	<div class="login-container flx-center">
		<div class="login-box">
			<div class="login-left">
				<img src="@/assets/images/login_img.png" alt="#" />
			</div>
			<div class="login-right">
				<div class="login-form">
					<div class="login-form__inner">
						<div class="login-logo">
							<img class="login-icon" src="@/assets/images/login_logo.png" alt="" />
						</div>
						<LoginItem></LoginItem>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import LoginItem from '@/components/loginItem.vue';
</script>

<style scoped lang="less">
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	min-width: 550px;
	height: 100%;
	min-height: 500px;
	padding: 80px 60px;
	background-color: #eeeeee;
	background-size: 100%;

	.dark {
		position: absolute;
		top: 4.5%;
		right: 3.2%;
	}
	.login-box {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 100%;
		background-color: #ffffff;
		border-radius: 10px;
		padding: 70px;
		.login-left {
			width: 60%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
				background-size: 100% 100%;
				background-size: cover;
			}
		}
		.login-right {
			width: 40%;
			height: 100%;
			box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 10px;
		}
		.login-form {
			width: 650px;
			height: 570px;
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			&__inner {
				width: 500px;
				height: 353px;
			}
			.login-logo {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 45px;
				.login-icon {
					width: 260px;
					min-width: 260px;
					height: auto;
				}
				.logo-text {
					padding: 0 0 0 25px;
					margin: 0;
					font-size: 42px;
					font-weight: bold;
					color: #34495e;
					white-space: nowrap;
				}
			}
			.el-form-item {
				margin-bottom: 40px;
			}
			.login-btn {
				display: flex;
				justify-content: space-between;
				width: 100%;
				margin-top: 40px;
				white-space: nowrap;
			}
		}
	}
}
</style>
