<script>
	import Aktualita from "$lib/utils/Aktualita.svelte";
	import Vyhlaseni from "$lib/files/vyhlaseni-2022-2023.jpeg";
	export let grid;
</script>

<Aktualita nazev="Vyhlášení výsledků prvního ročníku Odinova poháru" datum="17. 2. 2023" {grid}
           uryvek="V prvním ročníku Odinova poháru uspěli Vojtěch Stluka s povídkou Knihovník a Kateřina Václavíková s esejí Je vhodný návrat vlků do české přírody? Cena za sonet nebyla udělena. Studenti si odnesli knižní ceny a mohli si také symbolicky připít z pohárků upomínajících na příběh, podle kterého získala naše literární soutěž svůj název.">
	<p>
		V prvním ročníku Odinova poháru uspěli Vojtěch Stluka s povídkou Knihovník a Kateřina
		Václavíková s esejí Je vhodný návrat vlků do české přírody? Cena za sonet nebyla udělena.
		Studenti si odnesli knižní ceny a mohli si také symbolicky připít z pohárků upomínajících na
		příběh, podle kterého získala naše literární soutěž svůj název.
	</p>
	<img src={Vyhlaseni} alt="Vyhlášení"/>
</Aktualita>