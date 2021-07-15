<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import InViewport from '@utility/InViewport.svelte';
  import LoremBlock from '@utility/LoremBlock.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

  let visible = false;

	let eventLog = [];
	const events = {
		enterViewport: (val) => {
      visible = true;
			eventLog = [...eventLog, { action: 'enterViewport', val }];
		},
		leaveViewport: (val) => {
      visible = false;
			eventLog = [...eventLog, { action: 'leaveViewport', val }];
		}    
	};  

	const snippet = {
		name: 'InViewport',
		importName: '@utility/InViewport.svelte',
		props: {

		},
		inputs: [

		]
	};

	$: livecode = `   
    <InViewport>    
      <LoremBlock content='I am in the viewport' />
    </InViewport />
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
    <div class='viewport-spacer' class:visible >
      Scroll down...
    </div>
    <br><br>

    <InViewport  {...props} {...selectprops} {...inputprops} {...events}>
      <LoremBlock content='I am in the viewport' />
    </InViewport>

    <br><br>
    <div class='viewport-spacer' class:visible >
      Scroll down...
    </div>        
  </div>
</LibrarySnippet>

<style lang='scss'>
  .viewport-spacer{
    width: 100%; 
    height: 1000px; 
    color: white;
    background: red;
    padding: 10px;

    &.visible{
      background: green;
    }
  }
</style>