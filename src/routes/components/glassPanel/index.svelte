<script lang="ts">
	import { getContext } from 'svelte';
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import GlassPanel from '@panel/GlassPanel.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';
	import SVG from '@base/SVG.svelte';
	import FullImage from '@images/FullImage.svelte';

	const theme: string = getContext('theme');

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {
		onHeaderClick: (val) => {
			eventLog = [...eventLog, { action: 'onHeaderClick', val }];
		}
	};

	const snippet = {
		name: 'GlassPanel',
		importName: '@panel/GlassPanel.svelte',
		props: {
			nopadding: false,
			nomargin: false,
			rounded: false,
			shadow: false,
			skinnybar: true,
			open: true
		},
		dropdowns: [
			{
				label: 'glassEffect',
				options: ['semi-light', 'semi-dark', 'light', 'dark'],
				value: theme === 'dark' ? 0 : 1
			},
			{
				label: 'textColor',
				options: [
					'black',
					'white',
					'primary',
					'secondary',
					'magic',
					'success',
					'warning',
					'danger'
				],
				value: theme === 'dark' ? 0 : 1
			}
		],
		inputs: [
			{ forprop: 'blur', renderAs: 'input', componentprop: { type: 'number' }, value: 7 },
			{
				forprop: 'contentHeight',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: '100px, auto, 100vh, etc' },
				value: null
			}
		]
	};

	$: livecode = `    
    import FullImage from '@images/FullImage.svelte'
    import LoremBlock from '@base/LoremBlock.svelte';
    import SVG from '@base/SVG.svelte';

    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%">
      <FullImage src="https://picsum.photos/id/1011/400/800" />
    </div>

    <GlassPanel {...props} {...selectprops} {...inputprops} {...events}>        
      <div slot="title">
        <h3>GlassPanel</h3>
      </div>

      <div slot="action">
        <SVG icon="link" />
      </div>

      <div slot="content">
        <LoremBlock ignoreTheme nopadding />
      </div>
    </GlassPanel>

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
		<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%">
			<FullImage src={`https://picsum.photos/id/${theme === 'dark' ? '1002' : '1004'}/400/800`} />
		</div>

		<GlassPanel {...props} {...selectprops} {...inputprops} {...events}>
			<div slot="title">
				<h3>GlassPanel</h3>
			</div>
			<div slot="action">
				<SVG icon="link" />
			</div>
			<div slot="content">
				<LoremBlock ignoreTheme nopadding />
			</div>
		</GlassPanel>
	</div>
</LibrarySnippet>
