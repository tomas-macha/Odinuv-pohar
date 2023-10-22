<script>
	export let title, date;
</script>

<div class="content">
	<h2>{title}</h2>
	<div class="subtitle">{date}</div>
</div>

<style lang="scss">
	@import "../colors";
	.content {
		height: auto;
		color: $light;
		padding: 160px 100px 80px 100px;
		@media screen and (max-width: 992px) {
			padding: 160px 50px 80px 50px;
		}
		h2{
			width: 100%;
			font-size: 60px;
			text-align: center;
			border-bottom: 5px solid $primary;
			margin: 0;
			@media screen and (max-width: 992px) {
				font-size: 50px;
			}
			@media screen and (max-width: 576px) {
				font-size: 30px;
			}
		}
		.subtitle{
			margin-top: 10px;
			font-size: 18px;
			text-align: center;
			color: $accent;
		}
	}
</style>