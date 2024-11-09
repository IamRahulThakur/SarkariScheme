// Schemes.jsx
import React, { useContext, useEffect, useState } from 'react';
import Data from '../data/Data';
import Card from '../Card/Card';
import { userContext } from '../../contexts/context';

const Schemes = () => {
    
    const { selectedCategory } = useContext(userContext);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const dataFilteredByCategory = Data.filter((item) => item.category === selectedCategory);
        setFilteredData(dataFilteredByCategory);
    }, [selectedCategory]);

    return (
        <div>
            <div className="cards flex flex-wrap justify-center gap-16 w-[90%] items-center  ">
                {filteredData.map((item) => (
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
        </div>
    );
};


export default Schemes;
