<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import Panel from '@panel/Panel.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';
	import SVG from '@base/SVG.svelte';

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
		name: 'Panel',
		importName: '@panel/Panel.svelte',
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
				label: 'applyTheme',
				options: [
					'none',
					'default',
					'primary',
					'secondary',
					'magic',
					'success',
					'warning',
					'danger',
					'black',
					'white'
				],
				value: 1
			}
		],
		inputs: [
			{
				forprop: 'contentHeight',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: '100px, auto, 100vh, etc' },
				value: null
			},
			{
				forprop: 'contentstyle',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'background: red' }
			}
		]
	};

	$: livecode = `    
    import LoremBlock from '@base/LoremBlock.svelte';
    import SVG from '@base/SVG.svelte';

    <Panel${propstr}${selectstr}${inputstr}>
      <div slot="title">
        <h3>Panel</h3>
      </div>
      <div slot="action">
       <SVG icon="link" />
      </div>
      <div slot="content">
        <LoremBlock ignoreTheme nopadding />
      </div>
    </Panel> 
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
		<Panel {...props} {...selectprops} {...inputprops} {...events}>
			<div slot="title">
				<h3>Panel</h3>
			</div>
			<div slot="action">
				<SVG icon="link" />
			</div>
			<div slot="content">
				<LoremBlock ignoreTheme nopadding />
			</div>
		</Panel>
	</div>
</LibrarySnippet>
