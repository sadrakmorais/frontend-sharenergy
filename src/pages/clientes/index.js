import React, { useState, useEffect } from 'react';
import ClientCard from '../../components/ClientCard';
import { GET } from '../../services/api';

const Clientes = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		const fetchClients = async () => {
			try {
				const { data } = await GET('/users');
				setClients(data);
			} catch (erro) {
				console.log(erro);
			}
		};
		fetchClients();
	}, []);

	return (
		<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
			{clients.map((event) => {
				return <ClientCard event={event} key={event._id} />;
			})}
		</div>
	);
};

export default Clientes;
