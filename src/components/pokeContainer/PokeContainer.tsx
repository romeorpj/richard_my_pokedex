
import PokeCard from '../pokeCard/PokeCard'
import './pokeContainer.css'
import { PokemonListPropsToPass } from '../../interfaces'

const PokeContainer = ({ allPokemon }: PokemonListPropsToPass) => {
	return (
		<>
			{/* uses the array of pokemon from custom hook to map out pokemon cards  */ }
			<div className="poke-Container_Card">
				{
					allPokemon.length > 0
						? allPokemon
							.map((pokemon) => <PokeCard key={ pokemon.name } pokemon={ pokemon } />)
						: <h1 className="poke-Container_h1">Loading Pokemon...</h1>
				}
			</div>
		</>
	)
}

export default PokeContainer
PokeContainer.displayName = 'PokeContainer'