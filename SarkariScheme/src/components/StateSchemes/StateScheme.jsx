// StateScheme.jsx
import React, { useContext, useEffect, useState } from 'react';
import Data from '../data/Data';
import Card from '../Card/Card';
import { userContext } from '../../contexts/context';

const StateScheme = () => {
    
    const { selectedState } = useContext(userContext);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const dataFilteredByState = Data.filter((item) => item.state === selectedState);
        setFilteredData(dataFilteredByState);
    }, [selectedState]);


    return (
        <div>
            <div className="cards flex flex-wrap justify-center gap-16 w-[70%] items-center mx-auto">
                {filteredData.map((item) => (
                    <Card
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        apply={item.apply}
                        applylink={item.applylink}
                        descriptionlink={item.descriptionlink}
                    />
                ))}
            </div>
        </div>
    );
};

export default StateScheme;
