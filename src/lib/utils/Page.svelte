<script>
	import Header from "./Header.svelte";
	import Footer from "$lib/utils/Footer.svelte";
	import Anchor from "$lib/utils/Anchor.svelte";

</script>

<div id="app">
	<Anchor name="domu"/>
	
	<Header>
		<svelte:fragment slot="header">
			<slot name="header" />
		</svelte:fragment>
	</Header>
	
	<slot />
	
	<Footer />

</div>

<style lang="scss">
	@import "../main";
	
	#hlavicka{
		.obsah{
			color: $light;
			padding: 160px 100px 0 100px;
			@media screen and (max-width: 1050px) {
				padding: 160px 50px 0 50px;
			}
			h2{
				width: 100%;
				font-size: 120px;
				text-align: center;
				border-bottom: 5px solid $primary;
				margin: 0;
				@media screen and (max-width: 1050px) {
					font-size: 50px;
				}
				@media screen and (max-width: 576px) {
					font-size: 40px;
				}
			}
			.podtitulek{
				margin-top: 30px;
				font-size: 36px;
				text-align: center;
				color: $accent;
				@media screen and (max-width: 576px) {
					font-size: 22px;
				}
			}
			.tlacitka{
				display: flex;
				flex-direction: row;
				justify-content: center;
				width: 100%;
				text-align: center;
				padding: 50px 0;
			}
		}
	}
	
	#sekce-zanry {
		background: $light;
		color: $dark;
		width: calc(100% - 60px);
		padding: 0 30px 60px;
		h2{
			width: calc(100% - 60px);
			text-align: center;
			font-size: 60px;
			margin: 0;
			padding: 30px;
		}
		.akordeon{
			background: $light;
			box-shadow: rgba($dark, 0.2) 0px 7px 29px 0px;
		}
		.zalozka{
			height: 600px;
			&:nth-child(1)>.hlavicka{
				background: $primary;
			}
			&:nth-child(2)>.hlavicka{
				background: $accent;
			}
			&:nth-child(3)>.hlavicka{
				background: $primary;
			}
			.hlavicka{
				font-size: 30px;
				text-transform: uppercase;
				font-weight: bold;
				color: white;
			}
			.telo{
				overflow-y: auto;
				h3{
					margin: 45px 15px 0;
					font-size: 24px;
				}
				p{
					padding: 5px 12px;
					margin: 0;
				}
				.tlacitko{
					display: block;
					width: 200px;
				}
				audio {
					margin: 15px;
				}
			}
		}
	}
	
	#sekce-vysledky{
		background: $light;
		color: $dark;
		width: calc(100% - 60px);
		padding: 0 30px;
		h2{
			width: calc(100% - 60px);
			text-align: center;
			font-size: 60px;
			margin: 0;
			padding: 30px;
			@media screen and (max-width: 576px) {
				font-size: 40px;
				width: calc(100% - 30px);
				padding: 15px;
			}
		}
		table{
			width: 100%;
			border-collapse: collapse;
			tr{
				border-bottom: 5px solid $dark;
				&:last-child{
					border-bottom: none;
				}
				th{
					font-size: 30px;
					font-weight: bold;
				}
				td{
					width: 30%;
					vertical-align: top;
					.vitez{
						margin: 20px;
						padding: 10px;
						text-align: center;
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
					}
					&:first-child{
						width: 10%;
						vertical-align: middle;
						font-size: 30px;
						color: $primary;
						font-weight: bold;
						text-align: center;
					}
				}
			}
		}
	}
	
	#sekce-aktuality{
		width: calc(100% - 30px);
		background: $dark;
		padding: 15px 15px 45px;
		h2{
			color: $light;
			text-align: center;
			font-size: 60px;
			margin: 0;
			padding: 30px;
			@media screen and (max-width: 576px) {
				font-size: 40px;
				width: calc(100% - 30px);
				padding: 15px;
			}
		}
		
		.mrizka-clanku{
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			padding: 50px;
			background: $dark;
			column-gap: 30px;
			row-gap: 50px;
			@media screen and (max-width: 576px) {
				font-size: 40px;
				padding: 15px;
			}
			@media screen and (max-width: 1050px) {
				grid-template-columns: 1fr 1fr;
			}
			@media screen and (max-width: 768px) {
				grid-template-columns: 1fr;
			}
		}
		
		.karta {
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
				&:hover ~ .datum {
					border-top: 1.5px solid $accent;
				}
			}
			.datum {
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
			.tlacitko {
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
	}
</style>