// Card.js
import React from 'react';

const Card = ({ apply, description, image, applylink, descriptionlink , name}) => {
    return (
        <div className="Card  font-bold p-4 rounded-md  w-36 h-40 ">
            <img src={image} alt={apply} />
            <p>{name}</p>
            <a href={applylink}>
                <h3 className=' hover:text-blue-500 '>{apply}</h3>
            </a>
            <a href={descriptionlink}>
                <p className='hover:text-blue-500' >{description}</p>
            </a>
        </div>
    );
};


export default Card;
