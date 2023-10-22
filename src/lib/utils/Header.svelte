<script>
	import {url} from "../../config.js"
	import {onMount} from "svelte";
	
	
	let scrollY;
	$: scrolled = scrollY > 30;
	

	let opened = false;
	function toggleMenu() {
		opened = !opened;
	}
	
</script>

<svelte:window bind:scrollY={scrollY} />

<header id="header">
	<div class="menu" class:scrolled={scrolled} class:mobileMenu={opened}>
		<h1>
			<a href={url}>ODINŮV POHÁR</a>
		</h1>
		<nav>
			<ul on:click={toggleMenu}>
				<li><a href="{url}#vysledky">Výsledky</a></li>
				<li><a href="{url}/aktuality">Aktuality</a></li>
				<li><a href="{url}#zanry">Žánry</a></li>
			</ul>
		</nav>
		<span class="btn"><a href="https://arcig.cz">Arcig.cz</a></span>
	</div>
	<div class="open-menu" class:opened={opened} on:click={toggleMenu}>
		<div class="bar1"></div>
		<div class="bar2"></div>
		<div class="bar3"></div>
	</div>
	<div class="content">
		<slot name="content">
			<h2 class="defaultH2">
				<slot name="header"></slot>
			</h2>
		</slot>
		<slot name="contentStyle" />
	</div>
</header>

<style lang="scss">
	@import "../colors";
	
	#header {
		width: 100%;
		background: $dark;
		
		.menu {
			position: fixed;
			top: 0;
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 100px;
			color: $light;
			background: $dark;
			box-shadow: rgba($ultraDark, 0.8) 0 8px 24px;
			
			h1 {
				flex-grow: 1;
				margin: 25px;
				padding: 0;
				font-size: 50px;
				cursor: pointer;
				transition: .3s;
				
				&:hover {
					filter: brightness(115%);
					letter-spacing: 1px;
				}
			}
			
			nav {
				ul {
					list-style-type: none;
					margin: 25px 0;
					padding: 0;
					
					li {
						height: 50px;
						line-height: 50px;
						float: left;
						font-size: 20px;
						text-align: center;
						margin: 0 10px;
						padding: 0 25px;
						list-style-position: inside;
						border-bottom: 2px solid $light;
						cursor: pointer;
						transition: .3s;
						
						&:hover {
							border-bottom: 5px solid $light;
							background: lighten($dark, 5%);
							filter: brightness(115%);
						}
						
						a {
							display: block;
							height: 50px;
						}
					}
				}
			}
			
			.btn {
				display: block;
				margin: 25px;
				height: 25px;
				
				a {
					font-size: 20px;
					height: 55px;
					line-height: 55px;
					transition: .3s;
				}
			}
			
			z-index: 999999;
			@media screen and (max-width: 1050px) {
				flex-direction: column;
				text-align: center;
				display: none;
				ul {
					display: none;
				}
				.btn {
					display: none;
				}
			}
		}
		
		.open-menu {
			display: none;
			position: fixed;
			height: 50px;
			width: 50px;
			margin: 15px 23px;
			top: 0;
			right: 0;
			z-index: 999999999;
			cursor: pointer;
			
			.bar1, .bar2, .bar3 {
				width: 50px;
				height: 6px;
				background-color: $light;
				margin: 8px 0;
				transition: 0.3s;
			}
			
			&.opened {
				.bar1 {
					transform: translate(0, 14px) rotate(-45deg);
				}
				
				.bar2 {
					opacity: 0;
				}
				
				.bar3 {
					transform: translate(0, -14px) rotate(45deg);
				}
			}
			
			@media screen and (max-width: 1050px) {
				display: block;
			}
			@media screen and (max-width: 576px) {
				height: 30px;
				width: 30px;
				margin: 25px 33px;
				.bar1, .bar2, .bar3 {
					width: 30px;
					height: 4px;
					background-color: $light;
					margin: 4.5px 10px;
					transition: 0.3s;
				}
				&.opened {
					.bar1 {
						transform: translate(0, 8.5px) rotate(-45deg);
					}
					
					.bar2 {
						opacity: 0;
					}
					
					.bar3 {
						transform: translate(0, -8.5px) rotate(45deg);
					}
				}
			}
		}
		
		.scrolled {
			height: 80px;
			background: lighten($dark, 2%);
			box-shadow: rgba($dark, 0.7) 0 4px 12px;
			
			h1 {
				font-size: 30px;
				@media screen and (max-width: 576px) {
					font-size: 18px;
					line-height: 30px;
				}
			}
			
			nav {
				ul {
					margin: 20px 0;
					
					li {
						height: 40px;
						line-height: 40px;
					}
				}
			}
			
			.btn {
				height: 15px;
				line-height: 15px;
				margin: 20px;
				
				a {
					font-size: 20px;
					height: 45px;
					line-height: 45px;
				}
			}
			
			@media screen and (max-width: 1050px) {
				display: block;
			}
		}
		
		.mobileMenu {
			@media screen and (max-width: 1050px) {
				display: block;
				position: fixed;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				background: $dark;
				h1 {
					font-size: 30px;
					@media screen and (max-width: 576px) {
						font-size: 18px;
						line-height: 30px;
					}
				}
				nav {
					ul {
						display: flex;
						flex-direction: column;
						margin: 25px 0;
						
						li {
							display: block;
							height: 50px;
							line-height: 50px;
						}
					}
				}
			}
		}
		
		.content {
			height: auto;
			color: $light;
			padding: var(--contentPadding);
			@media screen and (max-width: 992px) {
				padding: 160px 50px 80px 50px;
			}
		}
		
		.defaultH2 {
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
</style>