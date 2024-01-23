import { useState, useEffect, useCallback } from 'react'
import { LoggedPokemon, PokeRegister } from '../interfaces'
import { POKE_API_URL, POKE_IMG_BASE_URL } from '../BASE_URLS'

const useGetPokemon = () => {
	const [allPokemon, setAllPokemon] = useState<PokeRegister[]>([])
	const [nextPage, setNextPage] = useState<string | null>(POKE_API_URL)
	const [previousPage, setPreviousPage] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	const registeredPokemonToShow = useCallback((loggedPokemon: LoggedPokemon) => {
		const { name, url } = loggedPokemon
		// just getting the id from the url - https://pokeapi.co/api/v2/pokemon/1/ -> 1
		const splitString = url.split('/').filter(Boolean)
		const pokeId = parseInt(splitString[splitString.length - 1])
		return {
			name,
			url,
			image: `${POKE_IMG_BASE_URL}${pokeId}.png`,
		}
	}, [])

	// fetches pokemon from pokeapi
	const fetchPokemon = useCallback(async (url: string | null) => {
		if (!url || isLoading) return
		setIsLoading(true)
		try {
			const response = await fetch(url)
			const dataJSON = await response.json()
			if (dataJSON?.results) {
				// maps through the results and returns an array of completed pokemon objecs
				const registeredPokemon = dataJSON.results.map(registeredPokemonToShow)
				setAllPokemon(registeredPokemon)

				// will either be a url or null
				setNextPage(dataJSON.next)
				setPreviousPage(dataJSON.previous)
			}
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}, [isLoading, registeredPokemonToShow])

	// clickhandler for next page & previous page
	// using useCallback to ensure the functions and their references in memory dont chnage on every re-render
	const getNextPokemon = useCallback(() => fetchPokemon(nextPage), [fetchPokemon, nextPage])
	const getPreviousPokemon = useCallback(() => fetchPokemon(previousPage), [fetchPokemon, previousPage])

	// fetches pokemon on initial render
	useEffect(() => {
		getNextPokemon()
	}, [])

	return {
		allPokemon,
		getNextPage: getNextPokemon,
		getPreviousPage: getPreviousPokemon,
		hasMoreNext: Boolean(nextPage),
		hasMorePrevious: Boolean(previousPage),
		isLoading,
	}
}

export default useGetPokemon
useGetPokemon.displayName = 'useGetPokemon'
