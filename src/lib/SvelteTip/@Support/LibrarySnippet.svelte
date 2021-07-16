<script lang="ts">
	import { onMount, getContext, tick } from 'svelte';	
	import { DeviceStore, ComponentStore } from '@stores/index';

	import Panel from '@panel/Panel.svelte';
	import Stack from '@layout/Stack.svelte';
	import Input from '@form/Input.svelte';
	import Textarea from '@form/Textarea.svelte';
	import InputDate from '@form/InputDate.svelte';
	import InputTime from '@form/InputTime.svelte';
	import Select from '@form/Select.svelte';
	import CodeBlock from '@utility/CodeBlock.svelte';
	import TwoSlot from '@base/TwoSlot.svelte';
	import Button from '@button/Button.svelte';
	import Pill from '@button/Pill.svelte';

	let ready = false;

	export let name = null;
	export let importName = null;
	export let properties = null;
	export let inputs = null;
	export let code = null;
	export let livecode = null;
	export let notes = [];
	export let eventLog = [];
	export let events = null;

	export let dropdowns = [];

	export let props = null;
	export let selectprops = null;
	export let inputprops = {};

	export let propstr = '';
	export let selectstr = '';
	export let inputstr = '';

	const theme: string = getContext('theme');
	const colors: any = getContext('colors');

	const { showImport, showProperties, showCode, showExample, showActions } = ComponentStore;
	const { isDesktop } = DeviceStore;

	let opencontent = true;
	let livebg = 'none';

	$: bgStyle = () => {
		switch (livebg) {
			case 'none':
				return 'background: none';
			case 'blueprint':
				return 'background: linear-gradient(-120deg, #021B79, #0575E6, #205E9B);';
		}
	};

	const updateProps = async (val = null, key = null) => {
		await tick();
		let _propstr = '';
		if (!!props) {
			for (const [key, value] of Object.entries(props)) {
				if (!!value) {
					_propstr += ` ${key}`;
				}
			}
		}
		propstr = _propstr;
	};

	const updateSelect = async () => {
		let _selectstr = '';
		if (!!dropdowns) {
			dropdowns.forEach(({ label, options, value = 0 }) => {
				if (!!options[value]) {
					_selectstr += ` ${label}='${options[value]}'`;
					selectprops = { ...selectprops, [label]: options[value] };
				}
			});
		}
		selectstr = _selectstr;
	};

	const updateInputs = (value, key) => {
		inputprops[key] = value;

		let _inputstr = '';
		for (const [key, value] of Object.entries(inputprops)) {
			const { renderAs } = inputs.find((x) => x.forprop === key);
			if (!!value) {
				_inputstr += renderAs === 'textarea' ? ` ${key}={\`${value}\`}` : ` ${key}='${value}'`;
			}
		}
		inputstr = _inputstr;
	};

	$: listofdropdowns = () => {
		const list = [];

		dropdowns?.forEach((x, index) => {
			let { label, options, value } = x;

			options = options.map((title, id) => {
				return { id, title };
			});

			const obj = {
				label: label.toUpperCase(),
				options,
				value,
				defaultOption: 'Select an option',
				onInitFilter: (val, options) => {
					return options.find((x) => x.id === val);
				},
				onChangeFilter: (val) => {
					dropdowns[index].value = val?.id;
					updateSelect();
				}
			};
			list.push(obj);
		});

		return list;
	};

	$: listofinputs = () => {
		const list = [];
		inputs?.forEach(({ forprop, componentprop = {}, renderAs, value }) => {
			const obj = {
				label: forprop,
				key: forprop,
				value,
				...componentprop
			};
			list.push(obj);
		});

		return list;
	};

	let eventList = !!events
		? Object.keys(events).map((title) => {
				return { title, toggled: true };
		  })
		: [];

	const toggleEvent = (index) => {
		eventList = eventList.map((x, i) => {
			if (i === index) {
				x.toggled = !x.toggled;
			}
			return x;
		});
	};

	onMount(() => {
		updateProps();
		updateSelect();
		inputs?.forEach(({ value, forprop }) => {
			updateInputs(value, forprop);
		});
		ready = true;
	});
</script>

<div class="library-snippet">
	<TwoSlot nopadding>
		<h3 slot="left">{name}</h3>
		<div slot="right" style="display: flex; gap: 5px; flex-wrap: wrap">
			<Button
				exactfit
				applyTheme={theme === 'dark' ? 'white' : 'black'}
				size="small"
				useToggle
				toggled={$showProperties}
				hollow={!$showProperties}
				nomargin
				onClick={() => {
					$showProperties = !$showProperties;
				}}>Properties</Button
			>

			<Button
				exactfit
				applyTheme={theme === 'dark' ? 'white' : 'black'}
				size="small"
				useToggle
				toggled={$showActions}
				hollow={!$showActions}
				nomargin
				onClick={() => {
					$showActions = !$showActions;
				}}>Actions</Button
			>

			<Button
				exactfit
				applyTheme={theme === 'dark' ? 'white' : 'black'}
				size="small"
				useToggle
				toggled={$showImport}
				hollow={!$showImport}
				nomargin
				onClick={() => {
					$showImport = !$showImport;
				}}>Import</Button
			>

			<Button
				exactfit
				applyTheme={theme === 'dark' ? 'white' : 'black'}
				size="small"
				useToggle
				toggled={$showExample}
				hollow={!$showExample}
				nomargin
				onClick={() => {
					$showExample = !$showExample;
				}}>Example</Button
			>

			<Button
				exactfit
				applyTheme={theme === 'dark' ? 'white' : 'black'}
				size="small"
				useToggle
				toggled={$showCode}
				hollow={!$showCode}
				nomargin
				onClick={() => {
					$showCode = !$showCode;
				}}>Code</Button
			>
		</div>
	</TwoSlot>
	<hr />

	<Stack stack={$isDesktop} leftWidth="250px">
		<!-- LEFT SIDE -->
		<div slot="stack-left">
			{#if $showProperties}
				<Panel open>
					<h5 slot="title">Properties</h5>

					<div slot="content">
						{#if !!props || listofdropdowns().length > 0 || listofinputs().length > 0}
							<div class="props-container">
								{#if !!props && Object.entries(props).length > 0}
									<div class="buttons">
										{#each Object.entries(props) as [key, pair]}
											<Pill
												inactiveTheme={theme}
												activeTheme="primary"
												active={props[key]}
												disabled={!props[key]}
												rounded
												onClick={() => {
													updateProps();
													props[key] = !props[key];
												}}
											>
												{key}
											</Pill>
										{/each}
									</div>
								{/if}
                
								{#if listofdropdowns().length > 0}
									<hr />
									<div class="dropdowns">
										{#each listofdropdowns() as props}
											<Select {...props} />
										{/each}
									</div>
								{/if}

								{#if listofinputs && listofinputs().length > 0}
									<hr />
									<div class="inputs">
										{#each listofinputs() as props, index}
											{#if inputs[index].renderAs === 'input'}
												<Input {...props} onChange={updateInputs} />
											{/if}
											{#if inputs[index].renderAs === 'inputdate'}
												<InputDate {...props} onChange={updateInputs} />
											{/if}
											{#if inputs[index].renderAs === 'inputtime'}
												<InputTime {...props} onChange={updateInputs} />
											{/if}
										{/each}
									</div>
								{/if}

								{#if listofinputs && listofinputs().length > 0}
									<br />
									<div class="inputs">
										{#each listofinputs() as props, index}
											{#if inputs[index].renderAs === 'textarea'}
												<Textarea {...props} onChange={updateInputs} />
											{/if}
										{/each}
									</div>
								{/if}
							</div>
						{:else}
							<p>No properties</p>
						{/if}
					</div>
				</Panel>
			{/if}

			{#if notes.length > 0}
				<Panel open>
					<h5 slot="title">Notes</h5>
					<ul slot="content">
						{#each notes as note, index}
							<li>⭐ {@html note}</li>
						{/each}
					</ul>
				</Panel>
			{/if}
		</div>

		<!-- LEFT SIDE -->

		<!-- RIGHT SIDE -->
		<div slot="stack-right">
			{#if !!livecode && ready}
				<CodeBlock
					show={$showImport}
					title="Import"
					snippet={`
  import ${name} from '${importName}'
  `}
				/>

				{#if $showExample}
					<Panel open applyTheme="none" contentstyle={bgStyle()}>
						<h5 slot="title">Live example:</h5>

						<section class="panel-live-example" slot="action">
							<Pill
								rounded
								active={livebg === 'blueprint'}
								activeTheme="black"
								onClick={() => {
									livebg = 'blueprint';
								}}>Blueprint</Pill
							>
							<Pill
								rounded
								active={livebg === 'none'}
								activeTheme="black"
								onClick={() => {
									livebg = 'none';
								}}>None</Pill
							>
						</section>

						<div slot="content" class="live-example" class:opencontent>
							<slot name="liveexample" />
						</div>
					</Panel>
				{/if}

				<CodeBlock
					show={$showCode}
					title="Code"
					snippet={`
        ${livecode}
        `}
				/>
			{/if}

			{#if !!events && $showActions}
				<Panel open contentHeight="200px">
					<h5 slot="title">Actions</h5>

					<div slot="content">
						<div class="actions">
							{#if eventList.length > 0}
								{#each eventList as { title, toggled }, index}
									<Pill
										inactiveTheme={theme}
										activeTheme="primary"
										active={toggled}
										disabled={!toggled}
										rounded
										onClick={() => {
											toggleEvent(index);
										}}
									>
										{title}
									</Pill>
								{/each}
							{:else}
								No actions available
							{/if}
						</div>

						{#if eventLog.length > 0}
							<hr />
							{#each eventLog as log}
								{#if eventList.find((x) => x.title === log.action).toggled}
									<span style="font-size: 10px">
										{JSON.stringify(log, null, 4)}
									</span>
									<br />
								{/if}
							{/each}
						{/if}
					</div>
				</Panel>
			{/if}
		</div>
		<!-- /RIGHT SIDE -->
	</Stack>
</div>

<style lang="scss">
	@import '../../../scss/src/_media-queries';

	.library-snippet {
		max-width: 1000px;
		margin: auto;
	}

	ul,
	li {
		list-style-type: none;
		margin: 0;
		padding: 0;
		font-size: 12px;
	}

	.live-example {
		overflow-x: hidden;
		padding: 20px;
		border: 1px dashed rgba(255, 255, 255, 0.1);

		&:hover {
			border: 1px dashed white;
		}

		&.opencontent {
			min-height: auto;
			@include desktop-and-up {
				min-height: 400px;
			}
		}
	}

	.panel-live-example {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.actions {
		display: flex;
		gap: 5px;
		width: 100%;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.props-container {
		width: 100%;
	}

	.dropdowns,
	.inputs {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 5px;
	}

	.buttons {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		gap: 5px;
		flex-wrap: wrap;
		margin-bottom: 20px;
	}
</style>
