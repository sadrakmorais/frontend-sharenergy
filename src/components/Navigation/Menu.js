import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuUl, Container, MenuLink } from './styles';
import BarChart from '@material-ui/icons/BarChart';
import AttachMoney from '@material-ui/icons/AttachMoney';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import AddBox from '@material-ui/icons/AddBox';

const Menu = () => {
	const { pathname } = useLocation();
	return (
		<Container>
			<MenuUl>
				<MenuLink active={pathname === '/home'}>
					<BarChart style={{ fontSize: 30 }} />
					<Link to='/home'>Visualização de Dados</Link>
				</MenuLink>
				<MenuLink active={pathname === '/clientes'}>
					<PeopleAlt style={{ fontSize: 30 }} />
					<Link to='/clientes'>Clientes</Link>
				</MenuLink>
				<MenuLink active={pathname === '/addclientes'}>
					<AddBox style={{ fontSize: 30 }} />
					<Link to='/addclientes'>Adicione Clientes</Link>
				</MenuLink>
				<MenuLink active={pathname === '/financeiro'}>
					<AttachMoney style={{ fontSize: 30 }} />
					<Link to='/financeiro'>Financeiro</Link>
				</MenuLink>
			</MenuUl>
		</Container>
	);
};

export default Menu;
