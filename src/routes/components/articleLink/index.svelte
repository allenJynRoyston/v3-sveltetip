<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import ArticleLink from '@link/ArticleLink.svelte';
	import SVG from '@base/SVG.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';

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
		}
	};

	const snippet = {
		name: 'ArticleLink',
		importName: '@link/ArticleLink.svelte',
		props: {
			disabled: false,
			rounded: false,
			shadow: false,
			nomargin: false,
			hidedivider: false,
			prefetch: false
		},
		dropdowns: [
			{
				label: 'target',
				options: [null, '_blank', '_self', '_parent', '_top'],
				value: 0
			}
		],
		inputs: [
			{ forprop: 'href', renderAs: 'input', componentprop: { type: 'text' }, value: '/#something' },
			{
				forprop: 'classes',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'semi-bold italic' },
				value: null
			},
			{
				forprop: 'style',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'margin-bottom: 20px' },
				value: null
			}
		]
	};

	$: livecode = `
    import LoremBlock form '@utility/LoremBlock.svelte'

    <ArticleLink${propstr}${selectstr}${inputstr}>
      <h1 slot="title">Article title</h1>
      <div slot="image">
			  <img src="https://picsum.photos/200/300" alt="alt"  />
      </div>
      <div slot="content">
			  <LoremBlock ignoreTheme nopadding  />
      </div>
    </ArticleLink>
    
    <ArticleLink${propstr}${selectstr}${inputstr}>
      <h2 slot="title">Article title</h2>
      <div slot="image">
			  <SVG icon="home" size={30}  />
      </div>
      <div slot="content">
			  <LoremBlock ignoreTheme nopadding />
      </div>
    </ArticleLink>     
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
	{eventLog}
	{events}
>
	<div slot="liveexample">
		<ArticleLink {...props} {...selectprops} {...inputprops} {...events}>
			<h1 slot="title">Article title</h1>
			<div slot="image">
				<img src="https://picsum.photos/200/300" alt="alt" />
			</div>
			<div slot="content">
				<LoremBlock ignoreTheme nopadding />
			</div>
		</ArticleLink>
		<ArticleLink {...props} {...selectprops} {...inputprops} {...events}>
			<h2 slot="title">Article title</h2>
			<div slot="image">
				<SVG icon="home" size={30} />
			</div>
			<div slot="content">
				<LoremBlock ignoreTheme nopadding />
			</div>
		</ArticleLink>
	</div>
</LibrarySnippet>
