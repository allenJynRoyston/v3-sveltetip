<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import Accordion from '@layout/Accordion.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';
	import ProgressBar from '@layout/ProgressBar.svelte';

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
		name: 'Accordion',
		importName: '@layout/Accordion.svelte',
		props: {
			nomargin: false,
			rounded: false,
			shadow: false,
			shadowOnHover: false,
			skinnybar: false,
			onlyOneOpened: false
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
			},
			{
				label: 'headerTag',
				options: ['none', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
				value: 2
			}
		]
	};

	const dataset = [
		{ title: 'Accordion 1', icon: 'link', content: 'Hello world!', open: true },
		{
			title: 'Accordion 2',
			icon: 'globe',
			component: ProgressBar,
			props: { show: true, type: 'warning' }
		},
		{
			title: 'Accordion 3',
			icon: 'link',
			contentHeight: '200px',
			component: LoremBlock,
			props: { ignoreTheme: true, length: 3 }
		}
	];

	$: livecode = `    
    const dataset = [
      { title: 'Accordion 1', icon: 'link', content: 'Hello world!', open: true },
      {
        title: 'Accordion 2',
        icon: 'globe',
        component: ProgressBar,
        props: { show: true, type: 'warning' }
      },
      {
        title: 'Accordion 3',
        icon: 'link',
        contentHeight: '200px',
        component: LoremBlock,
        props: { ignoreTheme: true, length: 3 }
      }
    ];

    <!-- USING DATASET -->
    <Accordion {dataset}${propstr}${selectstr}${inputstr} />

    <!-- OR USING SLOTS -->
    <Accordion dataset={[{ title: 'Slot only' }]}${propstr}${selectstr}${inputstr}>
      Hello World!
    </Accordion>      

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
		<Accordion {dataset} {...props} {...selectprops} {...inputprops} {...events} />
		<br />
		<hr />
		<br />
		<Accordion
			dataset={[{ title: 'Slot only' }]}
			{...props}
			{...selectprops}
			{...inputprops}
			{...events}
		>
			Hello World!
		</Accordion>
	</div>
</LibrarySnippet>
