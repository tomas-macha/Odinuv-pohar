<script>
	import Header from "./Header.svelte";
	import Footer from "$lib/utils/Footer.svelte";
	import Anchor from "$lib/utils/Anchor.svelte";
	export let genre="", name = "";
</script>

<svelte:head>
	<title>Odinův pohár - {genre}</title>
	<meta property="og:title" content="{genre} - {name}">
	<meta property="og:type" content="website">
</svelte:head>

<div id="app">
	<Anchor name="domu"/>
	
	<Header --contentPadding="160px 100px 80px 100px">
		<svelte:fragment slot="header">{genre}: {name}</svelte:fragment>
	</Header>
	
	
	<article>
		<h3>{name}</h3>
		<slot />
	</article>
	
	<Footer />
	
</div>

<style lang="scss">
	@import "../main";
	#header{
		min-height: auto;
		height: auto;
		.content{
			height: auto;
			color: $light;
			padding: 160px 100px 80px 100px;
			@media screen and (max-width: 992px) {
				padding: 160px 50px 80px 50px;
			}
			h2{
				width: 100%;
				font-size: 80px;
				text-align: center;
				border-bottom: 5px solid $primary;
				margin: 0;
				@media screen and (max-width: 992px) {
					font-size: 80px;
				}
				@media screen and (max-width: 576px) {
					font-size: 30px;
				}
			}
		}
	}
	
	article{
		background: $light;
		padding: 20px 75px 60px;
		@media screen and (max-width: 576px) {
			padding: 20px 35px 60px;
		}
		h3{
			font-size: 40px;
			margin: 45px 0 0;
			@media screen and (max-width: 576px) {
				font-size: 30px;
			}
		}
		:global(p){
			padding: 5px 0;
			margin: 0;
			text-align: left;
		}
		:global(em){
			color: $grey;
		}
		:global(a){
			color: $primary;
		}
		:global(a:hover){
			color: $accent;
		}
		:global(audio){
			margin-top: 20px;
		}
	}
</style>