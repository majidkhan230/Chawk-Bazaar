import { Button, Card, Rate } from "antd";
import { useState } from "react";
import ModalB from "./Modal";
import { toast } from "react-toastify";

const { Meta } = Card;

const ProdCard = ({ data }) => {
  const { id, title, image, description, price, rating } = data;
  const [modal2Open, setModal2Open] = useState(false);

  const showDetails = () => {
    setModal2Open(true);
  };

  return (
    <div>
      <div onClick={showDetails}>
        <Card
          hoverable
          className="w-36 md:w-60"
          cover={
            <img
              alt="example"
              src={image}
              className="h-36 md:h-48 object-cover border-x border-t"
            />
          }
        >
          <Meta title={title} />

          <div className="mt-2">
            <p className="text-xs text-gray-600 mb-1">
              {description.split(" ").slice(0, 10).join(" ") +
                (description.split(" ").length > 10 ? "..." : "")}
            </p>
            <div className="text-lg font-semibold text-red-600">${price}</div>
          </div>
        </Card>
      </div>

      <ModalB data={{ modal2Open, setModal2Open }}>
        <div className="bg-gray-100 p-6">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="lg:w-1/2">
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="lg:w-1/2 p-6">
                <Card>
                  <h2 className="text-md font-bold text-gray-800 mb-4">
                    {title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-xs">
                    {description.slice(0, 300)}
                  </p>

                  <div className="text-2xl font-semibold text-red-600 mb-4">
                    ${price}
                  </div>

                  <div className="mb-6">
                    <Rate allowHalf defaultValue={rating} />
                    <span className="ml-2 text-gray-600">({rating} stars)</span>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      onClick={() => {
                        toast.success("You have successfully added to Cart!", {
                          position: "bottom-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                      }}
                      type="primary"
                      size="large"
                    >
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
