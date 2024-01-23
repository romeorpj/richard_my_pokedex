
import { PokeCardProp } from '../../interfaces'
import './PokeCard.css'

// formats the content of each pokemon card
// TODO: add tabindex to individual cards focusable if i add clickable details in the future
const PokeCard = ({ pokemon }: PokeCardProp) => {
	return (
		<>
			<div className="poke-card_container">
				<img
					alt={ pokemon.name }
					className="poke-card_image"
					src={ pokemon.image }
				/>
				<h2>{ pokemon.name }</h2>
			</div>
		</>
	)
}

export default PokeCard
PokeCard.displayName = 'PokeCard'