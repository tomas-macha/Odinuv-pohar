<script>
	import Aktualita from "$lib/utils/Aktualita.svelte";
	import Plakat from "$lib/files/plakat-2022-2023.png";
	export let grid;
</script>

<Aktualita nazev="Vyhlášení prvního ročníku Odinova poháru" datum="1. 12. 2022" {grid}
           uryvek="Kabinet češtiny vyhlašuje první ročník Odinova poháru. Své texty studenti do soutěže přihlašují u Markéty Ochodkové, která připraví jejich anonymizaci pro hodnotitele, kterými jsou ostatní členové kabinetu češtiny AG.">
	<p>
		Kabinet češtiny vyhlašuje první ročník Odinova poháru. Své texty studenti do soutěže
		přihlašují u Markéty Ochodkové, která připraví jejich anonymizaci pro hodnotitele, kterými
		jsou ostatní členové kabinetu češtiny AG.
	</p>
	<img src={Plakat} alt="Plakát"/>
</Aktualita>