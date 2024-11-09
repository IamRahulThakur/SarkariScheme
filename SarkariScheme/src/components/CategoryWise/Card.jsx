// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ categoryname, image, applylink, category, onClick ,handle}) => {
    
    return (
        <div className="Card cursor-pointer p-3 rounded-lg text-lg w-48 h-40 shadow-md" onClick={() => onClick(()=>{ handle})}>
            <img src={image} alt={categoryname} />
                <h3 className='pt-5 hover:text-blue-500'>{categoryname}</h3>
        </div>
    );
};

export default Card;
