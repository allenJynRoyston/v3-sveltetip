<script lang="ts">
	//--------------------------- IMPORTS
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import { SiteStore } from '@st-stores/index';

	import SvelteTipApp from '@system/SvelteTipApp.svelte';

	import Search from '@layout/Search.svelte';
	import Header from '@layout/Header.svelte';
	import HeroBanner from '@layout/HeroBanner.svelte';
	import NavBar from '@layout/NavBar.svelte';
	import ThemeSwitch from '@utility/ThemeSwitch.svelte';

	let theme = browser ? localStorage.getItem('theme') : 'dark';

	//--------------------------- STORES
	const { searchValue, openSidebar } = SiteStore;

	//--------------------------- HEADER
	let headerprops = {
		title: 'SvelteTip',
		version: '0.9.1',
		noanimation: true,
		bgSrc: `../../images/bg/header-${theme}-bg.jpg`,
		logoSrc: '../../images/logo/logo.png',
		showNotch: true,
		navEle: {
			component: NavBar,
			props: {
				links: [
					{ title: 'Home', icon: 'home', href: '/' },
					{
						title: 'Install',
						icon: 'file-text',
						href: '/home/install',
						hrefIncludes: '/home/install'
					},
					{ title: 'FAQs', icon: 'file-text', href: '/home/faqs', hrefIncludes: '/home/faqs' },
					{ title: 'Components', icon: 'list', href: '/components', hrefIncludes: '/components' }
				]
			}
		},
		centerEle: {
			component: ThemeSwitch,
			props: {}
		},
		heroEle: {
			component: HeroBanner,
			props: {
				title: 'Welcome!',
				buttonOne: {
					text: 'Install',
					applyTheme: theme === 'dark' ? 'white' : 'black',
					href: '/home/install',
					rounded: true,
					hollow: true
				},
				buttonTwo: {
					text: 'Components',
					applyTheme: 'primary',
					href: '/components',
					rounded: true
				}
			}
		}
	};

	$: notchEle = () => {
		if (!!page && $page?.path.includes('/components')) {
			return {
				component: Search,
				props: {
					debounceTime: 10,
					rounded: true,
					hideSearchButton: true,
					placeholder: 'Search for a component...',
					style: 'max-width: 400px; margin-top: 10px',
					onUpdate: (val) => {
						$searchValue = val;
						if (val?.length > 0) {
							$openSidebar = true;
						}
					}
				}
			};
		} else {
			return null;
		}
	};
	//---------------------------
</script>

<SvelteTipApp>
	<Header
		{...headerprops}
		notchEle={notchEle()}
		showHero={$page.path === '/'}
		showFooter={$page.path === '/'}
		showNotch
		showBurgerMenuButton={$page.path.includes('/components')}
		notchCloseIcon="cross"
		notchOpenIcon="search"
	/>

	<main>
		<slot />
	</main>
</SvelteTipApp>

<style lang="scss">
	:global(body) {
		margin: 0;
		padding: 0;
		text-rendering: optimizeLegibility;
		margin: 0;
		font-size: 14px;
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}
</style>
