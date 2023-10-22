<script>
	import Header from "$lib/utils/Header.svelte";
	import Footer from "$lib/utils/Footer.svelte";
	import Genre from "./GenreInAccordion.svelte";
	import ResultsYear from "./ResultsYear.svelte";
	import Winner from "./Winner.svelte";
	import Anchor from "$lib/utils/Anchor.svelte";
	import Accordion from "./Accordion.svelte";
	import HeaderContent from "./HeaderContent.svelte";
	
	import VojtechStluka2023 from "$lib/prace/VojtechStluka-Knihovnik.pdf"
	import KaterinaVaclavikova2023 from "$lib/prace/KaterinaVaclavikova-JeVhodnyNavratVlkuDoCeskePrirody.pdf"
	import GridOfNews from "$lib/utils/GridOfNews.svelte";
</script>

<svelte:head>
	<title>Odinův pohár</title>
	<meta property="og:title" content="Odinův pohár">
	<meta property="og:type" content="website">
</svelte:head>

<div id="main">
	<Anchor name="domu"/>
	<Header>
		<HeaderContent slot="content"/>
	</Header>
	
	<Anchor name="vysledky"/>
	<section id="section-results">
		<h2>Vítězové a jejich práce</h2>
		<div style="overflow-x:auto">
			<table>
				<tr>
					<th>Rok</th>
					<th>Povídka</th>
					<th>Esej</th>
					<th>Sonet</th>
				</tr>
				<ResultsYear year="2023">
					<Winner name="Vojtěch Stluka" desc="a jeho povídka" work="Knihovník" file={VojtechStluka2023}/>
					<Winner name="Kateřina Václavíková" desc="a její esej" work="Je vhodný návrat vlků do české přírody?" file={KaterinaVaclavikova2023} />
					<Winner name="Cena neudělena"/>
				</ResultsYear>
			</table>
		</div>
	</section>
	
	<Anchor name="aktuality"/>
	<section id="section-news">
		<h2>Aktuality</h2>
		<GridOfNews count="3" offset="0" next="false" />
	</section>
	
	<Anchor name="zanry"/>
	<section id="section-genres">
		<h2>Žánry</h2>
		<Accordion>
			<Genre name="Povídka" href="zanry/povidka" active="true">
				<p>
					Povídku můžeme vyprávět na jedno posezení, prohlásil o tomto literárním žánru Jiří Opelík.
					A vymezil tak nejspíše nejzřetelnější rys povídky. Její rozsah. Povídka se svým rozsahem
					vymezuje vůči románu, který je prózou větších rozměrů. Pro povídku je příznačná krátkost.
				</p>
				<p>
					Nevelký rozsah povídky předurčuje řadu dalších specifických rysů. Povětšinou se povídka
					soustřeďuje na jednu dějovou linii, jednu postavu, zdůrazňuje hlavně klíčové momenty
					příběhu, je rozsahem sice úsporná, ale tím spíš se magický vliv konce vznáší nad každým
					slovem a každým výběrem událostí, jak víme od Alexandra Jessupa. Autor musí pečlivě
					vybírat, který výřez reality v krátkém prostoru povídky čtenáři představí. Danou životní
					realitu autor za pomoci různých postupů, jako je kondenzace času a prostoru, technika
					náznaků a významuplných detailů, dále zhušťuje a zintenzivňuje.
				</p>
				<p>
					Vypravěč sleduje zvolený moment lidské existence v jistém nadhledu. Vypravěč bývá
					subjektivní, a povídka se tím blíží črtě, fejetonu nebo reportáži. Ačkoliv vypravěč celý příběh
					„táhne k závěru“, tento závěr může být otevřený a nezavršený. Vypravěč zanechává v povídce
					„bílá místa“ a aktivizuje čtenářovu pozornost a schopnost domýšlet. Podle tematického
					hlediska rozlišujeme povídky milostné, historické, dobrodružné, detektivní, fantastické nebo
					humoristické.
				</p>
			</Genre>
			<Genre name="Esej" href="zanry/esej">
				<p>
					Esej je kratší próza argumentativního typu. Esej obsahuje objevné úvahy, které vzešly z
					přemýšlení ne zrovna soustavného, ale soustředěného, jak tvrdil Pavel Eisner. Esej osciluje
					mezi uměleckým a odborným stylem.
				</p>
				<p>
					Odbornost je vyjádřena vhledem do problematiky, originalitou myšlení o stanovených
					pojmech a prokomponovanou argumentací. Esej se však zároveň neřídí pravidly organizované
					vědy a teorie. Esej si neklade nárok na komplexní výklad nebo konečné řešení zkoumaných
					otázek. Tomu odpovídá i název žánru pocházející z francouzského essai, tedy pokus. Pro
					tvůrce je esej formou myšlenkového hledání. Esej tak vychází ze vztahu autora ke zkušenosti
					se světem, s kulturou a přírodou. Obraz duchovní zkušenosti autora eseje je originální a
					plodný tím, že je spletený z různých pojmů, zkušeností a impulsů.
				</p>
				<p>
					Intelektuální dramatičnost eseje je doprovázená osobitým stylem využívajícím bohatou škálu
					figur – příměru a přirovnání, metafory, nadsázky, příkladu ze života, paradoxu, antiteze apod.
					Pozornost upoutává již mnohdy provokativní úvodní tvrzení (Krása světa je skrytá – O.
					Březina). Od tohoto tvrzení se logicky rozvíjí téma a argumentace.
				</p>
			</Genre>
			<Genre name="Sonet" href="zanry/sonet">
				<p>
					Sonet je čtrnáctiveršová lyrická báseň s ustáleným systémem rýmů. Existuje několik variant
					dělení těchto čtrnácti veršů, přičemž nejfrekventovanější je typ italský (dvě kvarteta a dvě
					terceta – abba/abba/cdc/cdc) a anglický (abab/cdcd/efef/gg).
				</p>
				<p>
					Kromě formálních pravidel většinou sonet obsahuje i vnitřní dramatickou kompozici. Původní
					italský sonet v prvním osmiverší rozprostřel téma a v závěrečném šestiverší jeho řešení –
					kontrast prologu s epilogem. Devátý verš (volta) tvořil obrat v celém sonetu. V anglickém
					sonetu tento tematický nebo obrazový obrat nebo pointu přináší závěrečné dvojverší
					(couplet).
				</p>
				<p>
					Po stránce obsahové je sonet velmi otevřeným žánrem (existují sonety s lyrikou reflexivní,
					milostnou, náboženskou, politickou atd.), ale monotematickým (vyjadřuje jedinou ideu).
					Důležité je i metrum (trochej, jamb (u Shakespeara pětistopý jamb – 11 slabik), daktyl).
				</p>
			</Genre>
		</Accordion>
	</section>
	
	<Footer/>

</div>


<style lang="scss">
	@import "../lib/main.scss";
	
	#section-genres {
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
		
	}
	
	#section-results {
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
		table {
			width: 100%;
			border-collapse: collapse;
			tr {
				border-bottom: 5px solid $dark;
				&:last-child {
					border-bottom: none;
				}
				th {
					font-size: 30px;
					font-weight: bold;
				}
			}
		}
	}
	
	#section-news {
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