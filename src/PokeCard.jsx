import React from 'react'
import {  } from '';
export const PokeCard = ({ poke }) => {
	return (
		<li>
			<img src={poke.url} alt={poke.name} />
			<p>{poke.name}</p>
		</li>
	)
}
