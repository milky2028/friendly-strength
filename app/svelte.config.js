import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import nested from 'postcss-nested';

const BUILD_DIR = '../public';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: {
				plugins: [nested()]
			}
		}),
		mdsvex({ extensions: ['.md'] })
	],

	kit: {
		adapter: adapter({ pages: BUILD_DIR, assets: BUILD_DIR })
	}
};

export default config;
