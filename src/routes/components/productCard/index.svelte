<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';
	import ProductCard from '@cards/ProductCard.svelte';
	import { DeviceStore } from '@st-stores/index';

	const { isMobile } = DeviceStore;

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {
		onNameClick: (val) => {
			eventLog = [...eventLog, { action: 'onNameClick', val }];
		},
		onShoppingCartClick: (val) => {
			eventLog = [...eventLog, { action: 'onShoppingCartClick', val }];
		},
		onMoreInfoClick: (val) => {
			eventLog = [...eventLog, { action: 'onMoreInfoClick', val }];
		}
	};

	const snippet = {
		name: 'ProductCard',
		importName: '@cards/ProductCard.svelte',
		props: {
			shadow: false,
			innerShadow: true,
			rounded: false,
			useGradiant: false,
			showRating: true,
			showRibbon: true,
			noEdges: false,
			showAddToCart: true,
			showMoreInfo: true
		},
		dropdowns: [
			{
				label: 'orientation',
				options: ['horizontal', 'vertical'],
				value: 0
			},
			{
				label: 'type',
				options: ['light', 'dark'],
				value: 0
			},
			{
				label: 'applyTheme',
				options: ['primary', 'secondary', 'magic', 'success', 'warning', 'danger'],
				value: 0
			},
			{
				label: 'ribbonPlacement',
				options: ['left', 'right'],
				value: 0
			},
			{
				label: 'currencyType',
				options: ['$', '€', '£', '¥'],
				value: 0
			}
		],
		inputs: [
			{
				forprop: 'name',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'Product Name'
			},
			{
				forprop: 'description',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value:
					'I am the product description and I should usually be around 20-100 words.  More then that and people stop reading.'
			},
			{ forprop: 'price', renderAs: 'input', componentprop: { type: 'text' }, value: '99.99' },
			{ forprop: 'ribbonText', renderAs: 'input', componentprop: { type: 'text' }, value: 'New!' },
			{
				forprop: 'rating',
				renderAs: 'input',
				componentprop: { type: 'number', max: 10 },
				value: 3
			},
			{
				forprop: 'maxRating',
				renderAs: 'input',
				componentprop: { type: 'number', max: 10 },
				value: 5
			},
			{
				forprop: 'imageSrc',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'https://picsum.photos/id/10/200/300'
			}
		]
	};

	$: livecode = `    
    <ProductCard${propstr}${selectstr}${inputstr}/>
     `;
</script>

<LibrarySnippet
	{...snippet}
	{livecode}
	bind:propstr
	bind:selectstr
	bind:inputstr
	bind:props
	bind:selectprops
	bind:inputprops
	{events}
	{eventLog}
>
	<div slot="liveexample">
		<ProductCard {...props} {...selectprops} {...inputprops} {...events} />
		{#if !$isMobile}
			<div style="display: flex; gap: 10px; margin-top: 20px;">
				<ProductCard {...props} {...selectprops} {...inputprops} {...events} />
				<ProductCard {...props} {...selectprops} {...inputprops} {...events} />
			</div>
		{/if}
	</div>
</LibrarySnippet>
