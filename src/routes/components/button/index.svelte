<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import Button from '@button/Button.svelte';

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
		name: 'Button',
		importName: '@button/Button.svelte',
		props: {
			useGradiant: false,
			rounded: false,
			hollow: false,
			disabled: false,
			nomargin: false,
			exactfit: true,
			fullOnMobile: false,
			useToggle: false,
			toggled: false
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
				label: 'size',
				options: ['tiny', 'small', 'medium', 'large'],
				value: 2
			}
		],
		inputs: [
			{
				forprop: 'text',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'Some button text'
			},
			{
				forprop: 'style',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'border: 1px solid red' }
			}
		]
	};

	$: livecode = `    
    <Button${propstr}${selectstr}${inputstr} />  
     `;

	$: code = `    
    <Button type='primary' ${propstr}>
      Primary
    </Button>

    <Button type='secondary' ${propstr}>
      Secondary
    </Button>
    
    <Button type='success' ${propstr}>
      Success
    </Button>  

    <Button type='warning' ${propstr}>
      Warning
    </Button>    
    
    <Button type='danger' ${propstr}>
      Danger
    </Button>         
    
    <Button type='black' ${propstr}>
      Black
    </Button>    
    
    <Button type='white' ${propstr}>
      White
    </Button>   
     `;
</script>

<LibrarySnippet
	{...snippet}
	{livecode}
	{code}
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
		<Button {...props} {...selectprops} {...inputprops} {...events} />
	</div>
</LibrarySnippet>
