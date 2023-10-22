<script>
	import {onMount} from "svelte";
	
	let acc;
	
	onMount(() => {
		acc.querySelectorAll(".tab").forEach(tab => {
			tab.addEventListener("click", () => {
				acc.querySelectorAll(".tab").forEach(tab2 => {
					tab2.classList.remove("active");
				});
				tab.classList.add("active");
			});
		});
	});

</script>

<div class="accordion" bind:this={acc}>
	<slot/>
</div>

<style lang="scss">
	@import "../lib/colors";
	
	.accordion{
		background: $light;
		box-shadow: rgba($dark, 0.2) 0px 7px 29px 0px;
		display: flex;
		@media screen and (max-width: 768px) {
			flex-direction: column;
		}
	}
	.accordion :global(.tab:nth-child(1)>.header){
		background: $primary;
	}
	.accordion :global(.tab:nth-child(2)>.header){
		background: $accent;
	}
	.accordion :global(.tab:nth-child(3)>.header){
		background: $primary;
	}
</style>