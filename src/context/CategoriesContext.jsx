import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const CategoriesContext = createContext()


export const CategoriesProvider = ({children})=>{
    const [categories, setCategories] = useState([]);

    const getCategory = async () => {
      try {
        const data = await axios.get(
          "https://api.escuelajs.co/api/v1/categories"
        );
        // setCategories(data?.data?.products)
        console.log(data?.data)
        const filterCategory = data?.data?.filter(
          (item, index) => item.name !== "New Category"
        );
        setCategories(filterCategory);
        // console.log(filterCategory)
      } catch (error) {
        console.log(error.message);
      }
    };
  
    useEffect(() => {
      getCategory();
    }, []);
    return(
        <CategoriesContext.Provider value={{categories,setCategories}}>
            {children}
        </CategoriesContext.Provider>
    )
}


export const useCategories = ()=>{
    return useContext(CategoriesContext)
}