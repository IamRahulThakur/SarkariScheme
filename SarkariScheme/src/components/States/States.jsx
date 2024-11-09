import React, { useContext } from 'react';
import DataStates from '../data/DataStates';
import Card from './Card';
import { userContext } from '../../contexts/context';
import { Outlet , useNavigate } from 'react-router-dom';

const States = () => {
    const { setSelectedState } = useContext(userContext);

    const backy = useNavigate();

    const back = () => {
        backy('/StateScheme')
    }

    const handleClick = (state) => {
        console.log(state)
        setSelectedState(state);
        back();
    };

    
    return (
        <>
            <div className="cards flex flex-wrap justify-center gap-12 w-[85%] items-center mx-auto">
                {DataStates.map((item) => (
                        <Card
                            key={item.id}
                            state={item.state}
                            image={item.img}
                            onClick={() => handleClick(item.state)}
                        />
                ))}
            </div>
            <Outlet />
        </>
    );
};

export default States;
