import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { VitePWA } from 'vite-plugin-pwa';
import { pwaConfiguration } from './pwa-configuration.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [VitePWA(pwaConfiguration)]
		}
	}
};

export default config;
