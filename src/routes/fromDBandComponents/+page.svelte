<script>
	import ContainerTable from '$lib/ContainerTable.svelte';
	export let data;

	let clickedContainerNumber = "none"

	function containerClicked(container) {
		console.log('Container clicked:', container.containernumber);
		if (container) {
			clickedContainerNumber = container.containernumber
		}
	}
</script>

<h1>Leaning into Svelte's approach: Components for UI elements</h1>

<ContainerTable containers={data.containers} onContainerClicked={containerClicked} />

<span class=i>Last container clicked: {clickedContainerNumber}</span>
