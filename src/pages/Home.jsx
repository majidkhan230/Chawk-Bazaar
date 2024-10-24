import React, { useContext, useEffect, useState } from "react";
import SimpleSlider from "../components/common/Slider";
import CompCard from "../components/common/CompCard";
import { CompCardData } from "../Utils/constant/CompCardData";
import ProdCard from "../components/common/ProdCard";
import { Button, Card, Rate } from "antd";

import {useCategories } from "../context/CategoriesContext";
import { useProducts } from "../context/ProductContext";

const Home = () => {
  const [view, setViewAll] = useState(8);
  const { products } = useProducts();

  // console.log(products);
  // const product = useContext(ProductContext)
  // console.log(product)
  // const {productItem,setProductItem} = useState({});
  // const product = {
  //   name: "Stylish Leather Jacket",
  //   price: "$150",
  //   description:
  //     "This stylish leather jacket is made from premium quality leather and offers both comfort and style. It's perfect for both casual and formal occasions.",
  //   rating: 4.5,
  //   image: "https://placeimg.com/400/400/fashion",
  // };

const {categories,setCategories} = useCategories();

  return (
    <div className="px-10">
      {/* top banner */}
      <div className="w-full h-[500px] overflow-hidden rounded-md">
        <SimpleSlider slidesToShow={1}>
          <div>
            <img src="/assets/images/banner-1.webp" className="object-cover" />
          </div>
          <div>
            <img src="/assets/images/banner-4.webp" className="object-cover" />
          </div>
          <div>
            <img src="/assets/images/banner-5.webp" className="object-cover" />
          </div>
        </SimpleSlider>
      </div>

      {/* cards component */}
      <div className="flex space-x-10    mt-10 ">
        {CompCardData.map((card, index) => {
          return <CompCard key={index} data={card} />;
        })}
      </div>

      {/* featured Categories */}
      <div className="featuresCategory flex flex-col gap-4">
        <h1 className="text-3xl font-bold my-4">Featured Category</h1>
        <div className="">
          <SimpleSlider slidesToShow={4}>
            {categories.map((category) => {
              return (
                <div className="relative w-52 h-52">
                  <img
                    src={category.image}
                    className="w-full h-full object-cover"
                    alt={category.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center  bg-gray-600 bg-opacity-40">
                    <span className="text-white text-xl font-bold">
                      {category.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </SimpleSlider>
        </div>
      </div>

      {/* featured Products */}
      <div className="featuredProducts">
        <h1 className="text-3xl font-bold my-4">Featured Products</h1>
        <div className="grid grid-cols-4 ">
          {products.slice(0, view).map((product) => {
            return (
              <ProdCard
                onClick={() => {
                  console.log("just clicked", product.id);
                }}
                key={product.id}
                data={product}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <Button
            onClick={() => {
              setViewAll(products.length);
            }}
          >
            View All
          </Button>
        </div>
      </div>

      {/* <div className="carousel ">
        <Sliders>
        {categories.map((category) => {
              return (
                <div className="relative w-52 h-52">
                  <img
                    src={category.image}
                    className="w-full h-full object-cover"
                    alt={category.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center  bg-gray-600 bg-opacity-40">
                    <span className="text-white text-xl font-bold">
                      {category.name}
                    </span>
                  </div>
                </div>
              );
            })}
        </Sliders>
      </div> */}

      {/* flash sale */}

     
      
    </div>
  );
};

export default Home;
