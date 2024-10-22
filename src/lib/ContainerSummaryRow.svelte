<script>
	export let container;
</script>

<div class="row">
	<div class="id">{container.containernumber}</div>
	<div class="shipname">{container.nameofship}</div>
	<div class="date">{container.datecontainershipped}</div>
	<div class="size">{container.containersize}</div>
</div>

<style>
	.row {
		display: flex;
		background-color: #eee;
	}
	.id,
	.shipname,
	.size,
	.date {
		margin: 5px;
	}
	.id {
		font-weight: bold;
		flex: 1;
	}
	.size {
		text-align: right;
		flex: 0 0 50px;
	}
	.date {
		flex: 0 0 100px;
		text-align: center;
	}
	.shipname {
		flex: 1;
		color: #999;
	}
</style>
