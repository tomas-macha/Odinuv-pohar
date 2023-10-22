

<div class="content">
	<h2>Odinův pohár</h2>
	<div class="subtitle">Literární soutěž Arcibiskupského gymnázia</div>
	<div class="buttons">
		<a class="btn" href="#vysledky">Výsledky</a>
		<a class="btn" href="aktuality">Aktuality</a>
	</div>
</div>

<style lang="scss">
	@import "../lib/colors";
	.content{
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
		.subtitle{
			margin-top: 30px;
			font-size: 36px;
			text-align: center;
			color: $accent;
			@media screen and (max-width: 576px) {
				font-size: 22px;
			}
		}
		.buttons{
			display: flex;
			flex-direction: row;
			justify-content: center;
			width: 100%;
			text-align: center;
			padding: 50px 0;
		}
	}
</style>