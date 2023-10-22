<script>
	import GridOfNews from "$lib/utils/GridOfNews.svelte";
	import Anchor from "$lib/utils/Anchor.svelte";
	import Header from "$lib/utils/Header.svelte";
	import Footer from "$lib/utils/Footer.svelte";
	
	const newsCount = 6;
	
	let grids;
	let pg = 0;
	function moreNews() {
		console.log("clicked");
		const comp = new GridOfNews({ target: grids, props: {
			count: newsCount,
			offset: ++pg*newsCount,
		}});
		comp.$on("next", moreNews);
	}
	
</script>

<svelte:head>
	<title>Odinův pohár - Aktuality</title>
	<meta property="og:title" content="Odinův pohár - Aktuality">
	<meta property="og:type" content="website">
</svelte:head>

<div class="page">
	<Anchor name="domu"/>
	<Header --contentPadding="160px 100px 80px 100px">
		<div slot="header">Aktuality</div>
	</Header>
	<div class="grids" bind:this={grids}>
		<GridOfNews count={newsCount} offset="0" on:next={moreNews} next="true" />
	</div>
	<Footer/>
</div>

<style lang="scss">
	@import "../../lib/colors";
	.grids {
		padding: 25px 0;
		background: $light;
	}
</style>