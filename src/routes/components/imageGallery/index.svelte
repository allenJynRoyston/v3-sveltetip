<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import ImageGallery from '@images/ImageGallery.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {
		onClick: (val) => {
			eventLog = [...eventLog, { action: 'onClick', val }];
		}
	};

	const snippet = {
		name: 'ImageGallery',
		importName: '@images/ImageGallery.svelte',
		notes: ['Make sure you disable touchEnabled if useModalOnClick is active.'],
		props: {
			autoResize: true,
			showArrows: true,
			showButtons: true,
			lazyLoad: true,
			touchEnabled: true,
			dragEnabled: true,
			useModalOnClick: false
		},
		dropdowns: [
			{
				label: 'easing',
				options: [
					'linear',
					'backIn',
					'backOut',
					'bounceIn',
					'bounceInOut',
					'bounceOut',
					'circIn',
					'circInOut',
					'circOut',
					'cubicIn',
					'cubicInOut',
					'cubicOut',
					'elasticIn',
					'elasticInOut',
					'elasticOut',
					'expoIn',
					'expoInOut',
					'expoOut',
					'quadIn',
					'quadInOut',
					'quadOut',
					'quartIn',
					'quartInOut',
					'quartOut',
					'quintIn',
					'quintInOut',
					'quintOut',
					'sineIn',
					'sineInOut',
					'sineOut'
				],
				value: 11
			}
		],
		inputs: [
			{ forprop: 'duration', value: 400, renderAs: 'input', componentprop: { type: 'number' } }
		]
	};

	$: livecode = `    
    <ColorText ${propstr}${selectstr}${inputstr} >
      <ImageGallery />
    </ColorText>
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
	{eventLog}
	{events}
>
	<div slot="liveexample">
		<ImageGallery {...props} {...selectprops} {...inputprops} {...events} />
	</div>
</LibrarySnippet>
