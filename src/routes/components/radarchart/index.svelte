<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import RadarChart from '@chart/RadarChart.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {};

	const snippet = {
		name: 'LineChart',
		importName: '@chart/LineChart.svelte',
		props: {},
		dropdowns: [
			{
				label: 'gridColor',
				options: [
					'black',
					'white',
					'primary',
					'secondary',
					'magic',
					'success',
					'warning',
					'danger',
				],
				value: 0
			}, 
			{
				label: 'gridColorHue',
				options: [
					'0', '1', '2', '3', '4', '5', '6'
				],
				value: 0
			},  
			{
				label: 'lineColor',
				options: [
					'black',
					'white',
					'primary',
					'secondary',
					'magic',
					'success',
					'warning',
					'danger',
				],
				value: 2
			},  
			{
				label: 'lineColorHue',
				options: [
					'0', '1', '2', '3', '4', '5', '6'
				],
				value: 0
			},                       
    ],
		inputs: [
			{ forprop: 'title', renderAs: 'input', componentprop: { type: 'text' }, value: 'Linechart Title' },
			{ forprop: 'legend', renderAs: 'input', componentprop: { type: 'text' }, value: 'Time x months' },

		]
	};

  const labels = [
    'Svelte',
    'React',
    'Vue',
    'Angular'    
  ]

  const data = [
    100, 75, 80, 50, 50, 50, 100
  ]

  const staticprops = {
    labels, 
    data
  }

	$: livecode = `    
    const labels = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ]

    const data = [
      70, 20, 100, 20, 50, 20, 40, 84, 22, 10, 15, 37
    ]

    <LineChart${propstr}${selectstr}${inputstr} {data} {labels} />
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
		<RadarChart {...props} {...selectprops} {...inputprops} {...events}  {...staticprops}/>
	</div>
</LibrarySnippet>
