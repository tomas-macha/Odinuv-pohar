import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import {url} from "./src/config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	prerender: {
		entries: [
			"/zanry/esej",
			"/zanry/povidka",
			"/zanry/sonet"
		]
	},
	preprocess: preprocess({
	
	})
};


export default config;
