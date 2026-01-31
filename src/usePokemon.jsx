import { useEffect, useState } from 'react'
import './App.css'
import { fetchData } from './fetchData'
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

export function usePokemon() {
	const [data, setData] = useState([])
	const [status, setStatus] = useState('idle') // loading | error | success
	const [error, setError] = useState('')

	useEffect(() => {
		async function getPokemons() {
			setStatus('loading')
			try {
				const data = await fetchData(BASE_URL)

				setData(data)
				setStatus('success')
			} catch (error) {
				setError(error.message || 'Ошибка загрузки')
				setStatus('error')
				console.error('Fetch error:', error)
			}
		}

		getPokemons(BASE_URL)
	}, [])

	return { data, status, error }
}
