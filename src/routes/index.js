import React, { useContext } from 'react';

import CommomStack from './commom.routes';

import { AuthContext } from '../store/Auth';
import AuthStack from './auth.routes';

const Routes = () => {
	const { isLogged } = useContext(AuthContext);

	console.log({ isLogged });

	if (!isLogged) {
		return <AuthStack />;
	}

	return <CommomStack />;
};

export default Routes;
