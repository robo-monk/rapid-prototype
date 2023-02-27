import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
 	resolve: {
		alias: {
	      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
		}
	},

});
// git remote add origin git @github.com: viralloops / examples.git
