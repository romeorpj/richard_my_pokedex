import useGetPokemon from "../../customHooks/useGetPokemon"
import Buttons from "../buttons/Buttons"
import PokeContainer from "../pokeContainer/PokeContainer"
import './Home.css'

const Home = () => {
	const { allPokemon, getNextPage, hasMoreNext, hasMorePrevious, getPreviousPage } = useGetPokemon()
	return (
		<>
			{/* contains all pokemon cards  */ }
			<PokeContainer allPokemon={ allPokemon } />
			
			{/* displays buttons to navigate through pages */ }
			<div className="Paginate-Btn-Grp">
				<Buttons
					btnType="<< Previous Page"
					clickHandler={ getPreviousPage }
					isDisabled={ hasMorePrevious }
				/>
				<Buttons
					btnType="Next Page >>"
					clickHandler={ getNextPage }
					isDisabled={ hasMoreNext }
				/>
			</div>
		</>
	)
}

export default Home
Home.displayName = 'Home'