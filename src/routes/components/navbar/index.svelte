<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import NavBar from '@layout/NavBar.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'NavBar',
		importName: '@layout/NavBar.svelte',
		props: {
			prefetch: false
		},
		inputs: []
	};

	$: livecode = `    
      const props = {
        links: [
          {
            title: 'Home',
            active: true,
            icon: 'icon',
            href: '?test=home',
            queryIncludes: { id: 'test', queryId: 'home' }
          },
          {
            title: 'About',
            icon: 'icon',
            href: '?test=about',
            queryIncludes: { id: 'test', queryId: 'about' }
          },
          {
            title: 'Contact',
            icon: 'icon',
            href: '?test=contact',
            queryIncludes: { id: 'test', queryId: 'contact' }
          }
        ] 
      }

      <NavBar {...props} ${propstr}${selectstr}${inputstr} />
     `;

	const staticprops = {
		links: [
			{
				title: 'Home',
				active: true,
				icon: 'home',
				href: `?test=home`,
				queryIncludes: { id: 'test', queryId: 'home' }
			},
			{
				title: 'About',
				icon: 'list',
				href: `?test=about`,
				queryIncludes: { id: 'test', queryId: 'about' }
			},
			{
				title: 'Contact',
				icon: 'file-text',
				href: `?test=contact`,
				queryIncludes: { id: 'test', queryId: 'contact' }
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
>
	<div slot="liveexample">
		<NavBar {...staticprops} {...props} {...selectprops} {...inputprops} />
	</div>
</LibrarySnippet>
