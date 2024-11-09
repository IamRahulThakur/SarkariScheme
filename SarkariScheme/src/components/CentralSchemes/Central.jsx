// Central.js
import React from 'react';
import Data from '../data/Data';
import Card from '../Card/Card';


const Central = () => {

    const centralSchemes = Data.filter(item => item.central == "true");

    return (
        <div className="cards flex flex-wrap justify-center gap-12 w-[85%] items-center mx-auto ">
            {centralSchemes.map((item) => (
                <Card
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.img}
                    apply={item.apply}
                    applylink={item.applylink}
                    descriptionlink={item.descriptionlink}
                />
            ))}
        </div>
    );
};

export default Central;
