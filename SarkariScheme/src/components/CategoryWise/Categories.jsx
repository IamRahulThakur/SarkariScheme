// Categories.jsx
import { useContext } from 'react';
import DataCategory from '../data/DataCategory';
import Card from "./Card";
import { Outlet  } from 'react-router-dom';
import { userContext } from '../../contexts/context';
import { useNavigate } from 'react-router-dom';


const Categories = () => {

    const { setSelectedCategory } = useContext(userContext);

    const backy=useNavigate();

    const back=()=>{
        backy('/Schemes');
    }

    const handleCardClick = (category) => {
        // console.log(category)
        setSelectedCategory(category);
        back();
    };


    return (
        <>
            <div className="cards flex flex-wrap justify-center gap-16 w-[70%] items-center mx-auto">
                {DataCategory.map((item) => (
                        <Card
                            key = {item.id}
                            categoryname={item.categoryname}
                            image={item.img}
                            applylink={item.applylink}
                            onClick={() => handleCardClick(item.category)}
                        />
                ))}
            </div>

            <Outlet />
        </>
    );
};


export default Categories;