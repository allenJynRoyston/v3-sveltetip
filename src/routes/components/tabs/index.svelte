<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import Tabs from '@layout/Tabs.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';
	import FormExample from '@examples/FormExample.svelte';
	import ExampleBlock from '@support/ExampleBlock.svelte';

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
		},
    onClose: (val) => {
      eventLog = [...eventLog, { action: 'onClose', val }];
    }
	};

	const snippet = {
		name: 'Tabs',
		importName: '@supports/Tabs/Tabs.svelte',
		props: {
			closable: false
		},
		dropdowns: [
			{
				label: 'applyTheme',
				options: [
					null,
					'white',
					'black',
					'primary',
					'secondary',
					'magic',
					'success',
					'warning',
					'danger'
				],
				value: 3
			}
		],
		inputs: [
			{ forprop: 'queryId', renderAs: 'input', componentprop: { type: 'text' }, value: 'id' },
			{
				forprop: 'defaultTab',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'hello-world'
			}
		]
	};

	$: livecode = `    
    const props = {
      tabs: [
        {
          title: 'Example Block',
          id: 'example-block',
          component: ExampleBlock
        },
        {
          title: 'Hello World',
          id: 'hello-world',
          component: LoremBlock,
          props: {
            content: 'Hello World!'
          }
        },
        {
          title: 'Form Example',
          id: 'form-example',
          component: FormExample
        }
      ]
    }

    <Tabs {props} ${propstr}${selectstr}${inputstr} />  
     `;

	const staticprops = {
		tabs: [
			{
				title: 'Example Block',
				id: 'example-block',
				component: ExampleBlock
			},
			{
				title: 'Hello World',
				id: 'hello-world',
				component: LoremBlock,
				props: {
					content: 'Hello World!'
				}
			},
			{
				title: 'Form Example',
				id: 'form-example',
				component: FormExample
			}
		]
	};
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
		<Tabs {...staticprops} {...props} {...selectprops} {...inputprops} {...events} />
	</div>
</LibrarySnippet>
