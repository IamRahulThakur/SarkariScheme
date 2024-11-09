import React from 'react';

const Card = ({ apply, description, image, applylink, descriptionlink, name }) => {
    return (
        <div className="Card  shadow-lg rounded-xl bg-[#eaf5ea] w-3/4 ">
            <p  className='text-2xl shadow-sm p-5'>{name}</p>
            <div className='flex gap-8 px-5 py-3'>
                <a href={applylink}>
                    <button className=' hover:text-blue-500 text-lg  '>{apply}</button>
                </a>
                <a href={descriptionlink}>
                    <button className='hover:text-blue-500 text-lg '>{description}</button>
                </a> 
            </div>
        </div>
    );
};


export default Card;

