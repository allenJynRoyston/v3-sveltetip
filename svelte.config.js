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
					'@button': path.resolve('./src/lib/SvelteTip/@Buttons'),
					'@cards': path.resolve('./src/lib/SvelteTip/@Cards'),
					'@chart': path.resolve('./src/lib/SvelteTip/@Charts'),
					'@examples': path.resolve('./src/lib/SvelteTip/@Examples'),
					'@external': path.resolve('./src/lib/SvelteTip/@External'),
					'@form': path.resolve('./src/lib/SvelteTip/@Form'),
					'@images': path.resolve('./src/lib/SvelteTip/@Images'),
					'@layout': path.resolve('./src/lib/SvelteTip/@Layout'),
					'@link': path.resolve('./src/lib/SvelteTip/@Links'),
					'@panel': path.resolve('./src/lib/SvelteTip/@Panels'),
					'@shopping': path.resolve('./src/lib/SvelteTip/@Shopping'),
					'@system': path.resolve('./src/lib/SvelteTip/@System'),
					'@text': path.resolve('./src/lib/SvelteTip/@Text'),
					'@unsorted': path.resolve('./src/lib/SvelteTip/@Unsorted'),
					'@utility': path.resolve('./src/lib/SvelteTip/@Utility'),
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
