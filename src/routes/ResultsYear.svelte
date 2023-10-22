<script>
	export let year="";
</script>

<tr>
	<td>{year}</td>
	<slot />
</tr>

<style lang="scss">
	@import "../lib/colors.scss";
	tr{
		border-bottom: 5px solid $dark;
		&:last-child{
			border-bottom: none;
		}
	}
	th{
		font-size: 30px;
		font-weight: bold;
	}
	td:first-child{
		width: 10%;
		vertical-align: middle;
		font-size: 30px;
		color: $primary;
		font-weight: bold;
		text-align: center;
	}
</style>