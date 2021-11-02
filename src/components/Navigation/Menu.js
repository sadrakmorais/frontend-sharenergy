import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuUl, Container, MenuLink, ContainerIcons } from './styles';
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
					<ContainerIcons>
						<BarChart style={{ width: '100%' }} />
					</ContainerIcons>
					<Link to='/home'>Visualização de Dados</Link>
				</MenuLink>
				<MenuLink active={pathname === '/clientes'}>
					<ContainerIcons>
						<PeopleAlt style={{ width: '100%' }} />
					</ContainerIcons>
					<Link to='/clientes'>Clientes</Link>
				</MenuLink>
				<MenuLink active={pathname === '/addclientes'}>
					<ContainerIcons>
						<AddBox style={{ width: '100%' }} />
					</ContainerIcons>
					<Link to='/addclientes'>Adicione Clientes</Link>
				</MenuLink>
				<MenuLink active={pathname === '/financeiro'}>
					<ContainerIcons>
						<AttachMoney style={{ width: '100%' }} />
					</ContainerIcons>
					<Link to='/financeiro'>Financeiro</Link>
				</MenuLink>
			</MenuUl>
		</Container>
	);
};

export default Menu;
