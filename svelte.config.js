import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-node';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => ({
			resolve: {
				alias: {
					'@root': path.resolve('./'),
					'@scss': path.resolve('./src/scss'),
					'@app': path.resolve('./src/app'),
					'@routes': path.resolve('./src/routes'),
					'@lib': path.resolve('./src/lib'),
					'@component': path.resolve('./src/lib/AppComponents'),
					'@store': path.resolve('./src/stores'),
					'@js': path.resolve('./src/js'),
					// SVELTETIP ALIASES
					'@chart': path.resolve('./src/lib/SvelteTip/@Charts'),
					'@required': path.resolve('./src/lib/SvelteTip/@Required'),
					'@base': path.resolve('./src/lib/SvelteTip/@Base'),
					'@core': path.resolve('./src/lib/SvelteTip/@Core'),
					'@button': path.resolve('./src/lib/SvelteTip/@Buttons'),
					'@external': path.resolve('./src/lib/SvelteTip/@External'),
					'@panel': path.resolve('./src/lib/SvelteTip/@Panels'),
					'@layout': path.resolve('./src/lib/SvelteTip/@Layout'),
					'@link': path.resolve('./src/lib/SvelteTip/@Links'),
					'@form': path.resolve('./src/lib/SvelteTip/@Form'),
					'@examples': path.resolve('./src/lib/SvelteTip/@Examples'),
					'@shopping': path.resolve('./src/lib/SvelteTip/@Shopping'),
					'@cards': path.resolve('./src/lib/SvelteTip/@Cards'),
					'@images': path.resolve('./src/lib/SvelteTip/@Images'),
					'@utility': path.resolve('./src/lib/SvelteTip/@Utility'),
					'@unsorted': path.resolve('./src/lib/SvelteTip/@Unsorted'),
					// SVELTETIP SUPPORTING FILES
					'@st-stores': path.resolve('./src/lib/SvelteTip/stores'),
					'@st-js': path.resolve('./src/lib/SvelteTip/js')
				}
			}
		}),
		adapter: adapter({
			// default options are shown
			out: 'build'
		})
	}
};

export default config;
