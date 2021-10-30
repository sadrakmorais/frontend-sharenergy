import React from 'react';

import Menu from './Menu';

import { Container } from './styles';

const Navigation = () => {
	return (
		<Container>
			<img
				style={{ maxWidth: '300px', width: '100%' }}
				src='https://sharenergy.com.br/wp-content/uploads/2018/08/logo-Sharenergy-01.png'
				alt='Sharenergy'
			/>
			<Menu />
		</Container>
	);
};

export default Navigation;
