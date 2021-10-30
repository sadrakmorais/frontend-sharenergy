import styled, { css } from 'styled-components';

export const Container = styled.aside`
	flex: 0.2;
	background: linear-gradient(329.54deg, #00c7d1 0%, #00d2a2 100%);
	height: 100%;
	display: flex;
	text-align: center;
	flex-direction: column;
	padding: 30px;
	align-items: center;
	justify-content: flex-start;
	gap: 100px;
`;

export const Menu = styled.nav`
	width: 100%;
	margin-top: 48px;
`;

export const MenuLink = styled.li`
	border-radius: 4px;
	margin: 4px 0;
	transition: 0.2s all ease;
	display: flex;
	align-items: center;
	padding: 10px;

	& > a {
		padding: 10px 12px;
		cursor: pointer;
		font-size: 20px;
		color: rgba(20, 20, 20);
		flex: 1;
		border-radius: 4px;
	}

	&:hover {
		background: #13afa4;
	}

	${({ active }) =>
		active &&
		css`
			 {
				background: #506353;
				color: #ffffff;
			}
			& > a {
				color: #ffffff;
			}
		`}
`;
