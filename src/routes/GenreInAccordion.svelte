<script>
	export let name = "", href = "", active = "false";
	
</script>

<div class="tab" class:active={active==="true"}>
	<div class="header">
		{name}
	</div>
	<div class="body">
		<h3>{name}</h3>
		<slot/>
		<a class="btn" {href}>Ukázka</a>
	</div>
</div>

<style lang="scss">
	@import "../lib/colors";
	.tab {
		display: flex;
		width: 50px;
		max-height: 450px;
		min-width: 50px;
		transition: .3s;
		overflow: hidden;
		height: 600px;
		&.active{
			width: 100%;
		}
		@media screen and (max-width: 768px) {
			flex-direction: column;
			width: 100%;
			height: 50px;
			max-height: 50px;
			transition: 0s;
			&.active{
				height: auto;
				max-height: 1000%;
			}
		}
		.header{
			width: 50px;
			writing-mode: vertical-rl;
			text-align: center;
			line-height: 50px;
			cursor: pointer;
			font-size: 30px;
			text-transform: uppercase;
			font-weight: bold;
			color: white;
			@media screen and (max-width: 768px) {
				height: 50px;
				width: 100%;
				writing-mode: horizontal-tb;
			}
		}
		.body{
			overflow: hidden;
			overflow-y: auto;
			width: calc(100% - 50px);
			@media screen and (max-width: 768px) {
				height: calc(100% - 50px);
				width: 100%;
			}
			h3{
				margin: 45px 15px 0;
				font-size: 24px;
			}
			& :global(p){
				padding: 5px 12px;
				margin: 0;
			}
			.btn{
				display: block;
				width: 200px;
			}
			& :global(audio) {
				margin: 15px;
			}
		}
	}
</style>