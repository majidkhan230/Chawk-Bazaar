import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products,setProduct] = useState([]);
  const getData= async()=>{
   try {
    const res = await axios.get("https://fakestoreapi.in/api/products")
    setProduct(res?.data?.products)
    
    // console.log(data?.data?.products)
   } catch (error) {
    console.log(error.message)
   }
  }  

  useEffect(()=>{
    getData();
  },[])
    

  return (
    <ProductContext.Provider value={{products,setProduct}}>{children}</ProductContext.Provider>
  );
};


export const useProducts = ()=>{
  return useContext(ProductContext)
}