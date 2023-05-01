import React from 'react';
import Card from '../components/Card';
import '../styles/cardList.css.scss';

import useGetInvestments from '../hooks/useGetInvestments';     //hacemos import de nuestro Hook

const API= '' //Acá debera ir la api creada con django

const CardList = () => {
	const products=useGetInvestments(API)
	return (
		<section className="main-container">
			<div className="cardList">
				{products.map( user => (
					<Card product={user} key={user.id} />
				))}
			</div>
		</section>
	);
}

export default CardList;