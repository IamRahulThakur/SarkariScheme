import { createContext, useState } from "react";

export const userContext = createContext();


export const SelectedCategoryProvider = ({ children }) => {
  
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedState , setSelectedState] = useState('');

    return (
        <userContext.Provider value={{ selectedCategory, setSelectedCategory , selectedState , setSelectedState }}>
            {children}
        </userContext.Provider>
    );
};


