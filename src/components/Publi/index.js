import React from 'react';
import { Container } from './style';
import Button from '@mui/material/Button';

const Publi = () => {
	return (
		<Container>
			<h1>Economize com a Energia Solar!</h1>
			<p>Clique no botão abaixo e obtenha já uma cotação do seu sistema fotovoltaico!</p>
			<Button variant='contained'>
				<a href='https://sharenergy.com.br/orcamento/' target='_blank'>
					QUERO USAR ENERGIA SOLAR!
				</a>
			</Button>
		</Container>
	);
};

export default Publi;
