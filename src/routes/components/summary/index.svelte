<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';
	import Summary from '@layout/Summary.svelte';

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
		name: 'Summary',
		importName: '@layout/Summary.svelte',
		props: {
			open: false,
			outline: false,
			nomargin: false
		},
		dropdowns: [
			{
				label: 'titleSize',
				options: ['small', 'normal', 'large'],
				value: 0
			},
			{
				label: 'contentSize',
				options: ['small', 'normal', 'large'],
				value: 0
			},
			{
				label: 'titleTheme',
				options: ['default', 'primary', 'secondary', 'magic', 'success', 'warning', 'danger'],
				value: 0
			},
			{
				label: 'contentTheme',
				options: ['default', 'primary', 'secondary', 'magic', 'success', 'warning', 'danger'],
				value: 0
			}
		],
		inputs: [
			{
				forprop: 'title',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'Summary title'
			},
			{
				forprop: 'content',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
			}
		]
	};

	$: livecode = `    
    <Summary${propstr}${selectstr}${inputstr} />  

    // OR

    <Summary${propstr}${selectstr}>
      <span slot="title"> I am using slots to assign a title! </span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </span>
    </Summary>
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
		<Summary {...props} {...selectprops} {...inputprops} {...events} />

		<Summary {...props} {...selectprops} {...events}>
			<span slot="title"> I am using slots to assign a title! </span>
			<span> Lorem ipsum dolor sit amet, consectetur adipiscing elit... </span>
		</Summary>
	</div>
</LibrarySnippet>
