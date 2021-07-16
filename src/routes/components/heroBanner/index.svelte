<script lang="ts">
	import { getContext } from 'svelte';
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import HeroBanner from '@layout/HeroBanner.svelte';
	const theme: string = getContext('theme');

	let eventLog = [];
	const events = {
		onTitleClick: (val) => {
			eventLog = [...eventLog, { action: 'onTitleClick', val }];
		}
	};

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'HeroBanner',
		importName: '@layout/HeroBanner.svelte',
		inputs: [
			{
				forprop: 'title',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'HeroBanner title!'
			},
			{ forprop: 'version', renderAs: 'input', componentprop: { type: 'text' }, value: '0.9' }
		]
	};

	$: livecode = `    
      const props = {
        buttonOne: {
          text: 'CTA 1',
          applyTheme: 'secondary',
          rounded: true,     
        },
        buttonTwo: {
          text: 'CTA 2',
          applyTheme: theme === 'dark' ? 'white' : 'black',
          rounded: true,  
          hollow: true        
        }    
      } 

     <HeroBanner {...props}${propstr}${selectstr}${inputstr}/>
     `;

	const staticprops = {
		buttonOne: {
			text: 'Action 1',
			applyTheme: 'secondary',
			rounded: true,
			onClick: events.onClick
		},
		buttonTwo: {
			text: 'Action 2',
			applyTheme: theme === 'dark' ? 'white' : 'black',
			rounded: true,
			hollow: true,
			onClick: events.onClick
		}
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
	{events}
	{eventLog}
>
	<div slot="liveexample">
		<HeroBanner {...staticprops} {...props} {...selectprops} {...inputprops} {...events} />
	</div>
</LibrarySnippet>
