<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import ShoppingCart from '@shopping/ShoppingCart.svelte';

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
		onRemove: (val) => {
			eventLog = [...eventLog, { action: 'onRemove', val }];
		}
	};

	const snippet = {
		name: 'ShoppingCart',
		importName: '@shopping/ShoppingCart.svelte',
		properties: `
    export let items = []
    export let onClick = (index) => {};
    `
	};

	$: livecode = `    
    const items = [
      {name: 'Product 1', price: 25.99, quantity: 1},
      {name: 'Product 2', price: 25.99, quantity: 1},
      {name: 'Product 3', price: 20.99, quantity: 1},
      {name: 'Product 4', price: 10.25, quantity: 1}
    ]

    const onClick = (index) => {
      alert("clicked on item: " + items[index].name)
    }

    <ShoppingCart {items} {onClick} ${propstr}${selectstr}${inputstr}/>
     `;

	const items = [
		{ name: 'Product 1', price: 25.99, quantity: 1 },
		{ name: 'Product 2', price: 25.99, quantity: 1 },
		{ name: 'Product 3', price: 20.99, quantity: 1 },
		{ name: 'Product 4', price: 10.25, quantity: 1 }
	];

	const onClick = (index) => {
		alert('clicked on item: ' + items[index].name);
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
		<ShoppingCart {items} {onClick} {...props} {...selectprops} {...inputprops} {...events} />
	</div>
</LibrarySnippet>
