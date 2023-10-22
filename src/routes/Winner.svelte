<script>
	export let name="", desc="", file="", work="";
	
</script>

<td>
	<div class="winner">
		<h3>{name}</h3>
		<div>{desc}</div>
		<div><a href={file}>{work}</a></div>
	</div>
</td>

<style lang="scss">
	@import "../lib/colors";
	td{
		width: 30%;
		vertical-align: top;
	}
	.winner{
		margin: 20px;
		padding: 10px;
		text-align: center;
	}
	h3{
		font-size: 30px;
		margin: 5px 0 0px 0;
	}
	img{
		margin: 0 0 10px 0;
		width: 50%;
		border-radius: 50%;
		box-shadow: rgba($dark, 0.24) 0px 3px 8px;
	}
	a{
		color: $primary;
		font-weight: bold;
		font-size: 18px;
	}
</style>
