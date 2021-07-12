<script lang="ts">
	//--------------------------- IMPORTS
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import { SiteStore } from '@stores/index';
  
	import SvelteTip from '@required/SvelteTipApp.svelte';

	import Search from '@base/Search.svelte';
	import Header from '@layout/Header.svelte';
	import HeroBanner from '@layout/HeroBanner.svelte';
	import NavBar from '@layout/NavBar.svelte';
	import ThemeSwitch from '@unsorted/ThemeSwitch.svelte';

	let theme = browser ? localStorage.getItem('theme') : 'dark';

	//--------------------------- STORES
	const { searchValue, openSidebar } = SiteStore;

	//--------------------------- HEADER
	let headerprops = {
		title: 'SvelteTip',
		version: '0.8.0',
		noanimation: true,
		bgSrc: `../../images/bg/header-${theme}-bg.jpg`,
		logoSrc: '../../images/logo/logo.png',
		showNotch: true,
		navEle: {
			component: NavBar,
			props: {
				watchProp: 'page',
				links: [
					{ title: 'Home', icon: 'home', href: '/', hrefIncludes: '/home' },
					{ title: 'Components', icon: 'list', href: '/components', hrefIncludes: '/components' },
					{ title: 'Docs', icon: 'file-text', href: '/docs', hrefIncludes: '/docs' }
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
					text: 'Github',
					applyTheme: theme === 'dark' ? 'white' : 'black',
					href: 'https://github.com/allenRoyston',
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
		if ($page?.path.includes('/components')) {
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

<SvelteTip>
	<Header
		{...headerprops}
		notchEle={notchEle()}
		showHero={$page.path === '/'}
		showFooter={$page.path === '/'}
		showNotch
		showBurgerMenuButton={$page.path.includes('/components')}
	/>

	<main>
		<slot />
	</main>
</SvelteTip>
