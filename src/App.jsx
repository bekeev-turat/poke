import './App.css'
import { usePokemon } from './usePokemon'

function App() {
	const { data, status } = usePokemon()

	return (
		<>
			<h1>Pokemons</h1>
			{status === 'error' && (
				<p className='error'>Ошибка при получении данных</p>
			)}
			<ul>
				{status === 'loading'
					? [...Array(6)].map((_, i) => <li className='skeleton' key={i}></li>)
					: status === 'success' &&
						data.map((poke) => {
							return (
								<li key={poke.id}>
									<img src={poke.image} alt={poke.name} />
									<p>{poke.name}</p>
								</li>
							)
						})}
			</ul>
		</>
	)
}

export default App
