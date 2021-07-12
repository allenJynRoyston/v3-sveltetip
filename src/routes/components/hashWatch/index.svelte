<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import Link from '@link/Link.svelte';
	import HashWatch from '@core/HashWatch.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let activeLink;

	let eventLog = [];
	const events = {
		onChange: (val) => {
			hashWatchValue = val;
			activeLink = val?.params?.link;
			eventLog = [...eventLog, { action: 'onChange', val }];
		}
	};

	const snippet = {
		name: 'HashWatch',
		importName: '@core/HashWatch.svelte',
		notes: ['Links must have attribute rel="external" to work correctly.']
	};

	const currentHash = '#components?link=';

	$: livecode = `     
  
    <Link active={activeLink === 'foo'} rel="external" type="primary" href="${currentHash}foo">Foo</Link>
    <Link active={activeLink === 'bar'} rel="external" type="success" href="${currentHash}bar">Bar</Link>
    <Link active={activeLink === 'foobar'} rel="external" type="danger" href="${currentHash}foobar">FooBar</Link>

    <HashWatch onChange={(val) => {
			activeLink = val?.params?.link;
      hashWatchValue = val      
    }} />     

    {JSON.stringify(hashWatchValue, null, 4)}    
     `;

	let hashWatchValue = null;
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
		<HashWatch onChange={events.onChange} />

		<p>Test Links:</p>
		<Link active={activeLink === 'foo'} type="primary" rel="external" href={`${currentHash}foo`}
			>Foo</Link
		>
		<Link active={activeLink === 'bar'} type="success" rel="external" href={`${currentHash}bar`}
			>Bar</Link
		>
		<Link
			active={activeLink === 'foobar'}
			type="danger"
			rel="external"
			href={`${currentHash}foobar`}>FooBar</Link
		>
		<br />

		<p>Results:</p>
		{JSON.stringify(hashWatchValue, null, 4)}
	</div>
</LibrarySnippet>
