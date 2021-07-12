<script lang="ts">
	//--------------------------- IMPORTS
	import { setContext } from 'svelte';
	import { browser, dev } from '$app/env';
	import { navigating } from '$app/stores';
  
	import { createColorPallete, assignFonts } from '@js/index';
	import { DeviceStore, SiteStore } from '@stores/index';

  import styles from '@scss/src/font.scss';

	import HashWatch from '@core/HashWatch.svelte';
	import ProgressBar from '@base/ProgressBar.svelte';
	import SnackBar from '@core/Snackbar.svelte';
	import Modal from '@core/Modal.svelte';

	// //--------------------------- STORES
	const { appWidth, appHeight } = DeviceStore;
	const { urlHash, urlParams, shrinkHeader } = SiteStore;

	//--------------------------- FONTS
  const {fontOne, fontTwo} =  JSON.parse(styles.replace(':export', '').replace("fontOne", '"fontOne"').replace("fontTwo", ',"fontTwo"').replace(/\;/g, ''))  
	const fonts = [fontOne, fontTwo]; // also assign in scss file below
	if (browser) {
		assignFonts(fonts);
	}
  setContext('fonts', fonts)
	//---------------------------

	//---------------------------  THEME
	let defaultTheme = 'dark';
	let theme = browser ? localStorage.getItem('theme') : 'dark';
	theme = theme === 'dark' || theme === 'light' ? theme : defaultTheme;
	if (browser) {
		localStorage.setItem('theme', theme);
	}
	setContext('theme', theme);
	//---------------------------

	//--------------------------- COLORS
	const colorSet = {
		black:
			theme === 'light' ? { start: '#10131b', end: '#eee' } : { start: '#10131b', end: '#eee' },
		white:
			theme === 'light' ? { start: 'white', end: '#bdc3c7' } : { start: 'white', end: '#bdc3c7' },
		primary:
			theme === 'light' ? { start: '#0fbcf9', end: 'black' } : { start: '#4bcffa', end: 'black' },
		secondary:
			theme === 'light' ? { start: '#3c40c6', end: 'black' } : { start: '#FD7272', end: 'black' },
		magic:
			theme === 'light' ? { start: '#9b59b6', end: 'black' } : { start: '#9b59b6', end: 'black' },
		success:
			theme === 'light' ? { start: '#4cd137', end: 'black' } : { start: '#4cd137', end: 'black' },
		warning:
			theme === 'light' ? { start: '#e67e22', end: 'black' } : { start: '#e67e22', end: 'black' },
		danger:
			theme === 'light' ? { start: '#ff073a', end: 'black' } : { start: '#d63031', end: 'black' }
	};

	if (browser) {
		setContext('colors', createColorPallete({ colorSet, range: 10, theme }));
	}
	//---------------------------

	//--------------------------- WEBWORKERS
	if (browser) {
		const worker = new Worker(
			dev ? '../../../static/workers/testWorker.js' : '/workers/testWorker.js'
		);
		worker.addEventListener(
			'message',
			(e) => {
				console.log('Worker said: ', e.data);
			},
			false
		);
		worker.postMessage('Hello World'); // Send data to our worker.
	}

	//---------------------------  SNACKBAR CODE
	let snack;
	setContext('addSnack', (newSnack) => {
		snack = newSnack;
	});
	//---------------------------

	//--------------------------- HASHCHANGE
	let view = null;
	let showLoader = false;
	let timer = null;
	let modalOpen: boolean = false;

	const hashChange = async ({ hash, params }) => {
		// // make available in store
		$urlHash = hash;
		$urlParams = params;
		// monitors modal
		modalOpen = hash === 'modal' && params.open === 'true' ? true : false;
	};
	//---------------------------

	//--------------------------- ROUTECHANGE
	navigating.subscribe((nav) => {
		if (!!nav) {
			const { to, from } = nav;
			if (to.path !== from.path) {
				$shrinkHeader = false;

				showLoader = true;

				clearTimeout(timer);
				timer = setTimeout(() => {
					showLoader = false;
				}, 800);
			}
		}
	});
</script>

<SnackBar {snack} />
<Modal show={modalOpen} />
<HashWatch onChange={hashChange} />

<div id="svelte-tip-app" bind:clientWidth={$appWidth} bind:clientHeight={$appHeight}>
	<slot />
</div>

<div id="app-loader">
	<ProgressBar skinny nobg nomargin show={showLoader} />
</div>

<style lang="scss">
	#app-loader {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1;
	}
</style>
