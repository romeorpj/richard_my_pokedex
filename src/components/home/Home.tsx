// Header (moved to app component)
// Pokemon cards
// Pagination buttons

import useGetPokemon from "../../customHooks/useGetPokemon"
import PokeContainer from "../pokeContainer/PokeContainer"
import './Home.css'



const Home = () => {
	const { allPokemon} = useGetPokemon()
	return (
		<>
			{/* contains all pokemon cards  */ }
			<PokeContainer allPokemon={ allPokemon } />
		</>
	)
}

export default Home
Home.displayName = 'Home'