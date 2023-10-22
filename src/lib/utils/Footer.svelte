<footer>
	Web vytvořil <a href="mailto:machat@arcig.cz">Tomáš Mácha.</a>
</footer>

<style lang="scss">
	@import "../colors";
	footer {
		width: 100%;
		background: $dark;
		padding: 50px 0;
		text-align: center;
		color: $light;
		font-size: 20px;
		
		a {
			position: relative;
			border-bottom: 3px solid $primary;
			
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				transform: scaleX(0);
				height: 3px;
				bottom: -3px;
				left: 0;
				background-color: $accent;
				transform-origin: bottom right;
				transition: transform 0.3s ease-out;
			}
			
			&:hover::after {
				transform: scaleX(1);
				transform-origin: bottom left;
			}
		}
	}
</style>