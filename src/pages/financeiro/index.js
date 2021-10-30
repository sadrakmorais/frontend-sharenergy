import React from 'react';
import dadosUsina from '../../json/dadosUsina';

const Financeiro = () => {
	const temposUsina = dadosUsina.map((i) => i.tempo_h);
	const potUsina = dadosUsina.map((i) => i.potencia_kW);

	return (
		<>
			<h1>Tempos</h1>
			<p>{potUsina.reduce((acc, att) => acc + att)}</p>
			<p>{temposUsina}</p>
		</>
	);
};

export default Financeiro;
