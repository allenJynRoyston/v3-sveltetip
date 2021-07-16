<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import Form from '@form/FormBuilder.svelte';
	import { exampleFormData } from '@examples/FormExample.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'Form (with example)',
		importName: '@supports/FormPremade/FormExample'
	};

	$: livecode = `    
  let formData = ${JSON.stringify(exampleFormData, null, 4)}


  <Form {formData} />
    `;

	const staticprops = {
		formData: exampleFormData
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
		<Form {...staticprops} />
	</div>
</LibrarySnippet>
