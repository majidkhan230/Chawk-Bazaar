import { Button, Card, Rate } from "antd";
import { useEffect, useState } from "react";
import ModalB from "./Modal";
import { toast } from "react-toastify";
const { Meta } = Card;
const ProdCard = ({data}) => {
  const {id,title,image,description} = data;
  const [modal2Open, setModal2Open] = useState(false);
  
  // const [products,setProduct] = useState([]);
  // const getData= async()=>{
  //  try {
  //   const data = await axios.get("https://fakestoreapi.in/api/products")
  //   setProduct(data?.data?.products)
  //   console.log(data?.data?.products)
  //  } catch (error) {
  //   console.log(error.message)
  //  }
  // }  

  // useEffect(()=>{
  //   getData();
  // },[])
    // console.log(data)

  const showDetails = ()=>{
    setModal2Open(true);
  }

  return (
<div>
<div  onClick={showDetails}>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="example"
            src={image}
           className=" border-x  border-t "
          />
        }
      >
        <Meta title={title} description={description.split(" ").slice(0, 20).join(" ") + (description.split(" ").length > 20 ? "..." : "")} />
      </Card>
    </div>
    <ModalB data={{ modal2Open, setModal2Open }}>
        <div className=" bg-gray-100 p-6">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Product Image */}
              <div className="lg:w-1/2">
                <img
                  src={data.image}
                  alt={data.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* data Details */}
              <div className="lg:w-1/2 p-6">
                <Card>
                  <h2 className="text-md font-bold text-gray-800 mb-4">
                    {data.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-xs">{data.description.slice(0,300)}
\
                  </p>
              
                  {/* data Price */}
                  <div className="text-2xl font-semibold text-red-600 mb-4">
                    ${data.price}
                  </div>

                  {/* data Rating */}
                  <div className="mb-6">
                    <Rate allowHalf defaultValue={data.rating} />
                    <span className="ml-2 text-gray-600">
                      ({data.rating} stars)
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="flex space-x-4">
                    <Button onClick={()=>{
                      console.log("you have sucessfully added to Cart!")
                      toast.success('you have sucessfully added to Cart!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      
                        });
                    }} type="primary" size="large">
                      Add to Cart
                    </Button>
                    <Button type="default" size="large">
                      Buy Now
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </ModalB>
</div>
  );
};

export default ProdCard;
