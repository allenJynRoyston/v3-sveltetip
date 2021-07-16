<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import ColumnLayout from '@layout/ColumnLayout.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'ColumnLayout',
		importName: '@supports/ColumnLayout/ColumnLayout.svelte',
		dropdowns: [
			{
				label: 'activeTheme',
				options: [
					null,
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
				label: 'side',
				options: [null, 'left', 'right'],
				value: 0
			}
		],
		notes: [
			'See Documentation for a better description on how to setup the columnLayout component.'
		]
	};

	const links = [
		{ title: 'Link 1', href: '#', section: 'Section 1' },
		{ title: 'Link 2', href: '#', section: 'Section 1' },
		{ title: 'Link 3', href: '#', section: 'Section 1' },
		{ title: 'Link 1', href: '#', section: 'Section 2' },
		{ title: 'Link 2', href: '#', section: 'Section 2' },
		{ title: 'Link 3', href: '#', section: 'Section 2' }
	];

	$: livecode = `    
    const links = [
      {title: 'Link 1', href: '#', section: 'Section 1' },    
      {title: 'Link 2', href: '#', section: 'Section 1' },    
      {title: 'Link 3', href: '#', section: 'Section 1' },    
      {title: 'Link 1', href: '#', section: 'Section 2' },    
      {title: 'Link 2', href: '#', section: 'Section 2' },    
      {title: 'Link 3', href: '#', section: 'Section 2' },    
    ]

    <ColumnLayout {links} ${propstr}${selectstr}${inputstr}>
      <div style='padding: 0 10px'>
        <LoremBlock />
      </div>
    </ColumnLayout>
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
>
	<div slot="liveexample">
		<ColumnLayout {links} {...props} {...selectprops} {...inputprops} >
			<div style="padding: 0 10px">
				<LoremBlock />
			</div>
		</ColumnLayout>
	</div>
</LibrarySnippet>
