import React, { useEffect, useState } from "react";
import SimpleSlider from "../components/common/Slider";
import CompCard from "../components/common/CompCard";
import { CompCardData } from "../Utils/constant/CompCardData";
import ProdCard from "../components/common/ProdCard";
import { Button } from "antd";
import { useCategories } from "../context/CategoriesContext";
import { useProducts } from "../context/ProductContext";
import LoadingC from "../components/common/LoadingC";

const Home = () => {
  const [view, setViewAll] = useState(8);
  const { products } = useProducts();
  const [loading, setLoading] = useState(true);
  const { categories } = useCategories();

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  return (
    <div className="px-4 md:px-10">
      <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-md">
        <SimpleSlider slidesToShow={1}>
          <div>
            <img
              src="/assets/images/banner-1.webp"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/assets/images/banner-4.webp"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/assets/images/banner-5.webp"
              className="object-cover w-full h-full"
            />
          </div>
        </SimpleSlider>
      </div>

      <div className="flex flex-col md:flex-row space-y-6 md:space-x-10 md:space-y-0 mt-10">
        {CompCardData.map((card, index) => (
          <CompCard key={index} data={card} />
        ))}
      </div>

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

      <div className="featuredProducts mt-10">
        <h1 className="text-2xl md:text-3xl font-bold my-4">
          Featured Products
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {loading ? (
            <div className="col-span-full my-6">
              <LoadingC />
            </div>
          ) : (
            products.slice(0, view).map((product) => (
              <ProdCard
                onClick={() => {
                  console.log("just clicked", product.id);
                }}
                key={product.id}
                data={product}
              />
            ))
          )}
        </div>
        <div className="flex justify-center items-center mt-6">
          <Button
            onClick={() => setViewAll(products.length)}
            className={`${view >= 9 ? "hidden" : ""}`}
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
