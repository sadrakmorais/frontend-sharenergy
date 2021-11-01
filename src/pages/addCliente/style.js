import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	flex-direction: column;
`;
export const AlertContainer = styled.div`
	display: flex;
	width: 100%;
	background: linear-gradient(329.54deg, #00c7d1 0%, #00d2a2 100%);
	justify-content: center;
	padding: 30px 100px;
	border-radius: 20px;

	& > h1 {
		color: #fff;
	}
`;
