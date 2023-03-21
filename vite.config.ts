import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import viteCompression from 'vite-plugin-compression';
export default defineConfig(({ mode }) => {
	return {
		build: {
			outDir: path.join(__dirname, 'dist')
		},
		base: loadEnv(mode, process.cwd()).VITE_BASE_URL,
		plugins: [
			vue(),
			vueJsx(),
			viteCompression({
				verbose: true,
				disable: false,
				threshold: 10240,
				algorithm: 'gzip',
				ext: '.gz'
			}),
			createSvgIconsPlugin({
				// 指定需要缓存的图标文件夹
				iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
				// 指定symbolId格式
				symbolId: 'icon-[dir]-[name]'
			})
		],
		server: {
			port: 7000,
			cors: true,
			proxy: {
				'^/sso/': {
					target: 'https://his.intrii.com',
					changeOrigin: true,
					secure: false
				}
			}
		},
		css: {
			preprocessorOptions: {
				less: {
					additionalData: '@import "node_modules/ant-design-vue/dist/antd.less";',
					javascriptEnabled: true
				}
			}
		},
		resolve: {
			alias: {
				// '@': fileURLToPath(new URL('./src', import.meta.url))
				'@': path.join(__dirname, 'src')
			}
		}
	};
});
