export const mapPokemonData = (rawData) => {
	return {
		id: rawData.id,
		name: rawData.name,
		image: rawData.sprites.front_default,
	}
}
