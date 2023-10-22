<script>
	
	import {createEventDispatcher} from "svelte";
	import {page} from "$app/stores";
	
	export let count, offset, next;
	
	let loaded = false;
	let chosen = [];
	let data = {};
	
	async function load() {
		const news = import.meta.glob('../aktuality/*.svelte');
		const keys = Object.keys(news).reverse();
		chosen = keys.slice(offset, offset+count).map(name => {
			return name.slice(-10, -7);
		});
		
		let promises = []
		/*for(const id of chosen) {
			promises.push(new Promise(r => {
				import("../aktuality/"+id+".svelte").then(m => {
					data[id] = m.default;
					r();
				});
			}));
		}*/
		await Promise.all(promises);
		
		loaded = true;
	}
	load();
	
	let btn;
	const dispatch = createEventDispatcher();
	function btnClick() {
		btn.style.display = "none";
		dispatch("next", {});
	}
	
	
</script>

<div class="gridOfNews">
	{#if loaded===true}
		<div class="grid">
			{#each chosen as id}
				<!--<svelte:component this={data[id]} grid="{id}" />
				-->
				{#await import(`../aktuality/${id}.svelte`) then value }
					<svelte:component this={value.default} grid="{id}" />
				{/await}
			{/each}
		</div>
		{#if (next=="true" && chosen.length!=0) }
		<div class="btn-outer" bind:this={btn}>
			<button class="btn" on:click={btnClick}>Načíst starší aktuality</button>
		</div>
		{/if}
	{:else}
		<div class="loading">
			Načítání aktualit...
		</div>
	{/if}
</div>


<style lang="scss">
	@import "../colors";
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 25px 50px;
		column-gap: 30px;
		row-gap: 50px;
		@media screen and (max-width: 1050px) {
			grid-template-columns: 1fr 1fr;
		}
		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
		}
		@media screen and (max-width: 576px) {
			padding: 20px;
		}
	}
	.loading {
		margin: 50px;
		color: $light;
		font-size: 20px;
	}
	.btn-outer {
		text-align: center;
		height: 80px;
		button {
			outline: none;
			border: none;
		}
	}
</style>
