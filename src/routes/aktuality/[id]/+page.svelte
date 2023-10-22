<script>
	import { page } from '$app/stores';
	
	let Article;
	let loaded = false;
	
	/*async function load() {
		const res = await import(`../../../lib/aktuality/${$page.params.id}.svelte`);
		Article = res.default;
		loaded = true;
	}
	load();*/
	
	/*
	<!--{#if loaded===true}
		<svelte:component this="{Article}" grid="false" />
	{:else}
		<div class="loading">Načítání aktuality...</div>
	{/if}-->
	 */
	
</script>

<div class="article">
	{#await import(`../../../lib/aktuality/${$page.params.id}.svelte`) then value }
		<svelte:component this={value.default} grid="false" />
	{/await}
</div>