export interface PokeResponse {
	// it seems that the api is null on first and last page
	// so a string | null is needed
	// TODO: double check this
	count: number
	next: string | null
	previous: string | null
	results: LoggedPokemon[]
}
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

export interface LoggedPokemon {
	name: string
	url: string
}
