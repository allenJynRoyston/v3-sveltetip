<script lang="ts">
	import { ModalStore } from '@st-stores/index';
	import Button from '@button/Button.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';

	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';
	import ExampleBlock from '@component/base/ExampleBlock.svelte';

	const { setModalState, modalIsBusy, modalProps } = ModalStore;

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'Modal',
		importName: '@core/Modal.svelte',
		properties: `
        Must pass props through $modalProps:
      `,
		props: {
			rounded: false,
			nopadding: false,
			shadow: false,
			naked: false
		},
		dropdowns: [
			{
				label: 'type',
				options: [
					'primary',
					'secondary',
					'magic',
					'success',
					'warning',
					'danger',
					'black',
					'white'
				],
				value: 0
			},
			{
				label: 'location',
				options: ['left', 'right', 'center', 'corner-left', 'corner-right'],
				value: 2
			},
			{
				label: 'backdrop',
				options: ['dark', 'light'],
				value: 0
			}
		]
	};

	$: livecode = `    
      import {ModalStore} from '@st-stores/indexstore'
      const {setModalState, modalIsBusy, modalProps} = ModalStore

      const openExampleBasic = () => {
        setModalState(true)
        $modalProps = {
          title: 'Basic Example',                
          rounded: true, 
          shadow: true,
          nopadding: false,
          type: 'magic',
          content: {
            component: ExampleBlock,
          },
          onConfirm: () => {
            setModalState(false)
          }                  
        }
      }    

      <Button onClick={openExampleBasic} >Basic</Button>
      `;

	const openExampleBasic = () => {
		setModalState(true);

		$modalProps = {
			title: 'Basic Example',
			...props,
			...selectprops,
			content: {
				component: props.naked ? LoremBlock : ExampleBlock
			},
			onConfirm: () => {
				setModalState(false);
			}
		};
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
>
	<div slot="liveexample">
		<Button exactfit onClick={openExampleBasic}>Open Modal</Button>
	</div>
</LibrarySnippet>
