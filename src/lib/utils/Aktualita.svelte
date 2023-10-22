<script>
	import Anchor from "$lib/utils/Anchor.svelte";
	import Header from "$lib/utils/Header.svelte";
	import Footer from "$lib/utils/Footer.svelte";
	import {url} from "../../config.js";
	import NewsHeader from "$lib/utils/NewsHeader.svelte";
	
	export let nazev="", datum="", uryvek="", grid="false";
	
	$: date = convertDate(datum);
	
	function convertDate(date) {
		const ar = date.split(".").map(v => v.trim());
		const d = new Date(ar[2], ar[1]-1, ar[0]);
		return d.toLocaleDateString("cs-CZ", { year: "numeric", month: "long", day: "numeric" });
	}
	
</script>

<svelte:head>
	{#if grid=="false"}
		<title>Odinův pohár - {nazev}</title>
		<meta property="og:type" content="article">
		<meta property="og:title" content={nazev}>
		<meta property="og:description" content={uryvek}>
	{/if}
</svelte:head>

<div class="news">
	{#if grid!="false"}
		<div class="card">
			<h3>{nazev}</h3>
			<div class="date">{date}</div>
			<p>{uryvek}</p>
			<a class="btn" href="{url}/aktuality/{grid}">Celý článek</a>
		</div>
	{:else}
		<div class="article">
			<Anchor name="domu"/>
			<Header>
				<NewsHeader title={nazev} date={date} slot="content" />
			</Header>
			
			<article>
				<h3>{nazev}</h3>
				<div class="divider"></div>
				<slot />
			</article>
			
			<Footer />
		</div>
	{/if}
</div>

<style lang="scss">
	@import "../main.scss";
	.article article{
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
		.divider{
			margin: 10px 0 5px;
			width: 38%;
			height: 2px;
			background: $primary;
		}
		:global(img){
			padding: 5px 0;
			text-align: left;
			max-width: 100%;
			max-height: 80vh;
		}
	}
	.card {
		background-color: $light;
		border-radius: 10px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		max-width: 400px;
		margin: 0 auto;
		padding: 20px 20px 30px;
		h3 {
			color: $dark;
			font-size: 24px;
			margin-bottom: 10px;
			&:hover ~ .date {
				border-top: 1.5px solid $accent;
			}
		}
		.date {
			color: $grey;
			font-size: 12px;
			text-transform: uppercase;
			margin-top: 10px;
			border-top: 1.5px solid $primary;
			padding-top: 10px;
			width: 38.2%;
			transition: .3s;
		}
		p {
			color: $grey;
			font-size: 14px;
			line-height: 1.5;
			margin-bottom: 20px;
			text-align: left;
		}
		.btn {
			background-color: $primary;
			color: $light;
			border: none;
			border-radius: 18px;
			padding: 10px 20px;
			text-decoration: none;
			box-shadow: rgba($dark, 0.1) 0px 4px 12px;
			font-size: 16px;
			cursor: pointer;
			transition: .3s;
			&:hover{
				background-color: $accent;
			}
		}
	}
</style>