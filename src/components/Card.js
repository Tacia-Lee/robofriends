import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className='bg-light-pink dib br3 pa3 ma2 grow'>
			<img alt='robots' src={`https://robohash.org/${id}`}/>
			<div>
				<h2> {name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;