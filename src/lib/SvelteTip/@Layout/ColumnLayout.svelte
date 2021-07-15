<script lang="ts">
	import { getContext } from 'svelte';
	import { SiteStore, DeviceStore } from '@stores/index';
	import { page } from '$app/stores';

	import Accordion from '@base/Accordion.svelte';
	import Link from '@link/Link.svelte';
	import ScrollWrapper from '@layout/ScrollWrapper.svelte';
	import Container from '@layout/Container.svelte';

	export let links = [];
	export let watchParam = null;
	export let ignoreForExample = false;

	export let activeTheme = 'primary';
	export let side = 'left';

	const theme: string = getContext('theme');

	const { openSidebar, searchValue } = SiteStore;
	const { isTabletAndBelow } = DeviceStore;

	let removeWidth = false;
	SiteStore.openSidebar.subscribe(async (value) => {
		if (!value) {
			setTimeout(() => {
				removeWidth = true;
			}, 300);
		} else {
			removeWidth = false;
		}
	});

	const capitalize = (s) => {
		if (typeof s !== 'string') return '';
		return s.charAt(0).toUpperCase() + s.slice(1);
	};

	const partialMatch = (str1, str2) => {
		return new RegExp(str1).test(str2);
	};

	let _list = {};
	let dataset = [];
	links.forEach((x) => {
		_list[x.section] = [];
	});

	for (const key in _list) {
		dataset.push({ title: key });
		_list[key] = links.filter((x) => x.section === key);
	}

  var sortKeysFor = function(obj) {
    return Object.keys(obj).sort().reduce(function(map, key) {
      map[key] = obj[key] 
      return map
    }, {})
  }  

	let linkList = sortKeysFor(_list);
</script>

<div class={`column-layout ${theme}-theme`}>
	<div class="layout-inner">
		<div class={`directory ${side}`} class:collapse={!$openSidebar} class:removeWidth>
			<Container>
				<div class="directory-inner">
					<ScrollWrapper accountForTopPos height={'100%'}>
						<div class="directory-links-container">
							{#each Object.entries(linkList) as [key, pairs], index}
								<Accordion
									dataset={[{ title: key, open: $searchValue !== null || true }]}
									applyTheme="default"
									headerTag="h4"
								>
									<ul class="directory-links">
										{#each pairs as { href, title }, index}
											<Link
												type={activeTheme}
												classes="font-one"
												disabled={$searchValue !== null &&
													!partialMatch($searchValue?.toLowerCase(), title?.toLowerCase())}
												applyHover
												applyActive
												prefetch
												active={href === $page.path ||
													($searchValue !== null &&
														partialMatch($searchValue?.toLowerCase(), title?.toLowerCase()))}
												{href}
											>
												{capitalize(title)}
											</Link>
										{/each}
									</ul>
								</Accordion>
							{/each}
						</div>
					</ScrollWrapper>
				</div>
			</Container>
		</div>

		<div class={`content ${side}`}>
			<ScrollWrapper accountForTopPos height={'100%'}>
				{#if $isTabletAndBelow && $openSidebar}
					<div
						class="backdrop"
						on:click={() => {
							$openSidebar = false;
						}}
					/>
				{/if}

				<slot>
					<p>Content</p>
				</slot>
			</ScrollWrapper>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../style/_media-queries.scss';

	.column-layout {
		width: 100%;
		display: block;
		position: relative;

		.layout-inner {
			display: flex;
		}

		.directory {
			width: 100vw;
			height: 100vh;
			display: flex;
			flex-direction: row;
			font-size: 12px;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			width: auto;
			overflow: hidden;
			transform: translateX(0);
			transition: 0.3s;
			z-index: 2;

			&.removeWidth {
				width: 0 !important;
			}

			&.right {
				order: 1;
			}

			&.collapse {
				transform: translateX(-100%);
			}

			@include desktop-and-up {
				position: relative;
				top: 0;
				left: 0;
				width: 350px;
				font-size: 14px !important;
				display: block;
			}
		}

		.directory-inner {
			overflow: hidden;
		}

		.directory-links-container {
			display: flex;
			flex-direction: column;
			padding: 10px;

			.directory-key {
				font-size: 16px;
			}
		}

		.directory-links {
			display: flex;
			flex-direction: column;
			padding: 0;
			font-size: 18px;
			margin: 5px 0;

			@include desktop-and-up {
				font-size: 14px;
			}
		}

		.content {
			position: relative;
			width: 100%;
			overflow: hidden;
			z-index: 1;

			.backdrop {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0.9;
				z-index: 3;
				background: var(--black-0);
				cursor: pointer;
			}

			&.right {
				order: 0;
			}

			@include desktop-and-up {
				width: 100% !important;
			}
		}
	}
</style>
