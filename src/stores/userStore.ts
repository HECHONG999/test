import { defineStore } from 'pinia';
import { ref, toRaw } from 'vue';
import WujieVue from 'wujie-vue3';

export interface User {
	name: string;
	gender: string;
	age: number;
	phone: string;
}

const { bus } = WujieVue;
export const useUserStore = defineStore('userStore', () => {
	const user = ref<User | null>(null);

	const setUser = (userParam: User) => {
		user.value = userParam;
		bus.$emit('changeUser', {
			user: toRaw(user.value)
		});
	};
	return { user, setUser };
});
