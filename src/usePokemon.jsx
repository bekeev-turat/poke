import { useEffect, useState } from 'react'
import './App.css'
import { fetchData } from './fetchData'
import { mapPokemonData } from './poke.mapper'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

export function usePokemon() {
	const [data, setData] = useState([])
	const [status, setStatus] = useState('idle') // loading | error | success
	const [error, setError] = useState('')

	useEffect(() => {
		const getPokemons = async () => {
			setStatus('loading')

			try {
				const list = await fetchData(BASE_URL)

				const detailedPokemons = await Promise.all(
					list.results.map(async (pokemon) => {
						const data = await fetchData(pokemon.url)
						return mapPokemonData(data)
					}),
				)

				setData(detailedPokemons)
				setStatus('success')
			} catch (err) {
				setError(err.message || 'Ошибка загрузки')
				setStatus('error')
			}
		}

		getPokemons(BASE_URL)
	}, [])

	return { data, status, error }
}
