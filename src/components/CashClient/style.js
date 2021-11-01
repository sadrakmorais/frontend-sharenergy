import styled from 'styled-components';

export const ContainerCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border: 2px solid #1ba2a1;
	border-radius: 20px;
	padding: 25px;
	text-align: center;
	width: 100%;
	max-width: 280px;

	& > span {
		color: #034d4c;
		font-weight: bold;
	}
`;
