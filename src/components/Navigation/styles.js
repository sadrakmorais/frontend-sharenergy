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
	@media (max-width: 800px) {
		padding: 10px;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const MenuUl = styled.nav`
	width: 100%;
	margin-top: 48px;
	display: flex;
	flex-direction: column;
	@media (max-width: 800px) {
		margin-top: 0;
		flex-direction: row;
		max-height: 200px;
		flex-wrap: wrap;
		justify-content: center;
	}
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
	@media (max-width: 800px) {
		padding: 0;
		margin: 0;
		& > a {
			padding: 5px 6px;
			font-size: 0.7em;
		}
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

export const ContainerLogo = styled.div`
	width: 100%;
	& > img {
		max-width: 300px;
	}
	@media (max-width: 800px) {
		width: 40px;
		& > img {
			max-width: 200px;
		}
	}
`;
