import React, { useEffect, useState } from 'react'
import ProdCard from '../components/common/ProdCard'
import axios from 'axios'

const Product = () => {
const [products,setProduct] = useState([]);
  const getData= async()=>{
   try {
    const data = await axios.get("https://fakestoreapi.in/api/products")
    setProduct(data?.data?.products)
    console.log(data?.data?.products)
   } catch (error) {
    console.log(error.message)
   }
  }  

  useEffect(()=>{
    getData();
  },[])
    
    
  return (
    <div className='flex flex-wrap justify-center items-center gap-4 ml-4'>
{
    products.map((product)=>{
        return(
            <ProdCard  key={product.id} data = {product} />
        )
    })
}
    </div>
  )
}

export default Product