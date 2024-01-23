export interface PokemonListPropsToPass {
	allPokemon: PokeRegister[]
}

export interface PokeRegister {
	name: string
	url: string
	image: string
}

export interface PokeCardProp {
	pokemon: PokeRegister
}