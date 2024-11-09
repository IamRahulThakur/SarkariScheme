// Card.js
import React from 'react';

const Card = ({ state, image, onClick }) => {
    return (
        <div className="Card cursor-pointer flex  p-5 rounded-lg  w-60 gap-4 shadow-md  " onClick={() => onClick(state)}>
            <img src={image} alt={state} className='h-9 w-9 ' />
            <h3 className='hover:text-blue-500  overflow-clip h-5'>{state}</h3>
        </div>
    );
};


export default Card;
