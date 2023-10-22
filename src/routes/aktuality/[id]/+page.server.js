import {error} from "@sveltejs/kit";



export async function load({params}) {
	const name = `../../../lib/aktuality/${params.id}.svelte`;
	const news = import.meta.glob("../../../lib/aktuality/*.svelte");
	if(!news[name]) {
		throw error(404);
	}
}

export function entries() {
	const news = import.meta.glob("../../../lib/aktuality/*.svelte");
	const keys = Object.keys(news).reverse();
	return keys.map(name => {
		return {id: name.slice(-10, -7)};
	});
}