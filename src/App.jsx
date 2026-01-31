import './App.css'
import { usePokemon } from './usePokemon'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

function App() {
	const { data, status } = usePokemon()

	console.log(data)

	return (
		<>
			<h1>Pokemons</h1>
			{status === 'error' && (
				<p className='error'>Ошибка при получении данных</p>
			)}
			<ul>
				{status === 'loading'
					? [
							...Array(6).map((_, i) => (
								<li className='skeleton' key={i}>
									----------
								</li>
							)),
						]
					: status === 'success' &&
						data.results.map((poke, i) => {
							return (
								<li key={i}>
									<img src={poke.url} alt={poke.name} />
									<p>{poke.name}</p>
								</li>
							)
						})}
			</ul>
		</>
	)
}

export default App
