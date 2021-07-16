<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import Draggable from '@utility/Draggable.svelte';
	import Droppable from '@utility/Droppable.svelte';
	import Button from '@button/Button.svelte';
	import Box from '@layout/Box.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {
		onDragEnd: (val) => {
			if (val.success) {
				alert(
					`Dropped "${val.ele?.id || 'element'}" into "${val.targets[0]?.id || 'no id present'}"`
				);
			}
		}
	};

	const snippet = {
		name: 'Droppable',
		importName: '@utility/Droppable.svelte',
		notes: [
			'Used in conjunction with Draggable.',
			`See <a style='text-decoration: underline' href='/components/draggableExample'>example</a> for a more indepth use.`
		],
		props: {},
		dropdowns: [],
		inputs: [
			{ forprop: 'id', renderAs: 'input', componentprop: { type: 'text' }, value: 'dropzone1' }
		]
	};

	$: livecode = `    
    const onDragEnd = (e) => {
      if (e.success) {
        alert('...');
      }
    }

    <Draggable id="button1" {onDragEnd}>
      <Button nomargin size="large">Click to drag</Button>
    </Draggable>

    <Droppable${propstr}${selectstr}${inputstr}>
      <Box applyTheme="primary">Dropzone 1</Box>
    </Droppable>

    <Draggable id="button2" {onDragEnd}>
      <Button nomargin size="large">Click to drag</Button>
    </Draggable>

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
  {...eventLog}
  {...events}
>
	<div slot="liveexample">
		<Draggable {...events} id="button1">
			<Button nomargin size="large">Click to drag</Button>
		</Draggable>

		<Droppable {...props} {...selectprops} {...inputprops} {...events}>
			<Box applyTheme="primary">Dropzone 1</Box>
		</Droppable>

		<Draggable {...events} id="button2">
			<Button nomargin size="large">Click to drag</Button>
		</Draggable>
	</div>
</LibrarySnippet>

<style lang="scss">
	.box-container {
		display: flex;
	}

	.box {
		flex: 1 1 auto;
		height: 200px;
		background: red;
	}
</style>
