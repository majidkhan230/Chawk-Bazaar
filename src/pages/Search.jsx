import React, { useState, useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import ProdCard from "../components/common/ProdCard";
import LoadingC from "../components/common/LoadingC";
import { Empty } from "antd";

const Search = () => {
  const { products } = useProducts();
  const [filterProducts, setFilterProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
      setFilterProducts(products);
      setCategories([...new Set(products.map((product) => product.category))]);
    }
  }, [products]);


  useEffect(() => {
    let filtered = products;

    if (inputValue) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(inputValue)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilterProducts(filtered);
  }, [inputValue, selectedCategory, products]);

  return (
    <div>
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside className="w-full md:w-1/4 bg-gray-800 text-white p-4">
          <div className="mb-4">
            <input
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              type="text"
              placeholder="Search products..."
              className="w-full p-2 bg-gray-700 rounded focus:outline-none"
              id="searchInput"
              value={inputValue}
            />
          </div>

          <div>
            <h2 className="text-xl mb-2">Categories</h2>
            <ul>
              <li
                onClick={() => setSelectedCategory("")}
                className={`py-2 hover:bg-gray-700 cursor-pointer ${selectedCategory === "" ? "bg-gray-600" : ""}`}
              >
                All Categories
              </li>
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-2 hover:bg-gray-700 cursor-pointer ${selectedCategory === category ? "bg-gray-600" : ""}`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="w-full md:w-3/4 p-4 bg-gray-100">
          <h1 className="text-2xl mb-4">Products</h1>

          {loading ? (
           <LoadingC/>
          ) : (
            <div
              id="productList"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filterProducts.length > 0 ? (
                filterProducts.map((product) => (
                  <ProdCard key={product.id} data={product} />
                ))
              ) : (
                <div className="col-span-full items-center justify-center w-full h-full">
                 <Empty />
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Search;
