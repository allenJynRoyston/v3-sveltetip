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
		onDragStart: (val) => {
			eventLog = [...eventLog, { action: 'onDragStart', val }];
		},
		onDragEnd: (val) => {
			if (val.success) {
				alert(`Dropped "${val.ele?.id || 'no id present'}" into "${val.targets[0].id}"`);
			}
			eventLog = [...eventLog, { action: 'onDragEnd', val }];
		},
		onUpdate: (val) => {
			eventLog = [...eventLog, { action: 'onUpdate', val }];
		}
	};

	const snippet = {
		name: 'Draggable',
		importName: '@utility/Draggable.svelte',
		notes: [
			'Used in conjunction with Droppable.',
			`See <a style='text-decoration: underline' href='/components/draggableExample'>example</a> for a more indepth use.`
		],
		props: {},
		dropdowns: [],
		inputs: [
			{ forprop: 'id', renderAs: 'input', componentprop: { type: 'text' }, value: 'dragid' },
			{ forprop: 'index', renderAs: 'input', componentprop: { type: 'number' }, value: null },
			{ forprop: 'listRef', renderAs: 'input', componentprop: { type: 'text' }, value: null }
		]
	};

	$: livecode = `    
    <Draggable${propstr}${selectstr}${inputstr}>
      <Button nomargin size="large">Click to drag</Button>
    </Draggable>

    <Droppable id="dropzone1">
      <Box applyTheme="primary">Dropzone 1</Box>
    </Droppable>

    <div class="box-container">
      <Droppable id="dropzone2">
        <Box applyTheme="secondary">Dropzone 2</Box>
      </Droppable>

      <Droppable id="dropzone3">
        <Box applyTheme="magic">Dropzone 3</Box>
      </Droppable>
    </div>
      
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
		<Droppable id="dropzone1">
			<Box applyTheme="primary">Dropzone 1</Box>
		</Droppable>
		<Draggable {...props} {...selectprops} {...inputprops} {...events}>
			<Button nomargin size="large">{inputprops.id}</Button>
		</Draggable>

		<div class="box-container">
			<Droppable id="dropzone2">
				<Box applyTheme="secondary">Dropzone 2</Box>
			</Droppable>

			<Droppable id="dropzone3">
				<Box applyTheme="magic">Dropzone 3</Box>
			</Droppable>
		</div>
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
