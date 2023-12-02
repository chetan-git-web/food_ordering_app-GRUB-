import { useDispatch, useSelector } from "react-redux";
import veg from "../logo/veg.svg";
import nonveg from "../logo/non-veg.svg";
import { removeaction } from "../utils/cardslice";
import { substractprice } from "../utils/priceSlice";
import alternativeimg from "../logo/Alt.png";

const CartItems = () => {
  // restaurant in cart
  const CartItems = useSelector((store) => store.cart.items);
  const priceofitems = useSelector((store) => store.price.totalprice);
  const dispatch = useDispatch();
  const Remove = (item) => {
    dispatch(removeaction(item));
  };
  const Substract = (item) => {
    dispatch(substractprice(item.price / 100));
  };

  return (
    <>
      <div className="mx-[300px] border border-black rounded-2xl">
        {CartItems.length === 0 ? (
          <h1 className=" text-[100px] w-[800px] mx-auto mt-20">
            Your cart is Empty
          </h1>
        ) : (
          CartItems.map((item) => {
            return (
              <div className="p-4 w-full h-[200px]">
                <div className="flex justify-between">
                  <div>
                    {item.isveg === 1 ? (
                      <img className="w-[20px]" src={veg}></img>
                    ) : (
                      <img className="w-[20px]" src={nonveg}></img>
                    )}
                    <h1 className="truncate text-gray-800 font-bold">
                      {item.name}
                    </h1>
                    <h1 className="text-gray-800 font-semibold">
                      ₹{item.price / 100}
                    </h1>
                    <h1 className="truncate text-gray-600 w-[790px]">
                      {item.description}
                    </h1>
                  </div>
                  <div className="item-center">
                    <div className="w-[100px] h-[100px] overflow-hidden rounded-xl ">
                      {item.imageId === undefined ? (
                        <img
                          className="object-cover w-[100px] h-[100px] border border-gray-700"
                          src={alternativeimg}
                        ></img>
                      ) : item.imageId === undefined ? (
                        <></>
                      ) : item.isStock !== 1 ? (
                        <img
                          className="object-cover w-[100px] h-[100px]"
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                            item.imageId
                          }
                          alt={alternativeimg}
                        ></img>
                      ) : (
                        <img
                          className="grayscale object-cover"
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                            item.imageId
                          }
                        ></img>
                      )}
                    </div>
                    <div className="w-[100px] h-[40px] border-[1px] shadow-md rounded-md flex justify-between px-3">
                      <button
                        className=" text-xl my-[5px] text-green-500"
                        onClick={() => {
                          Remove(item);
                          Substract(item);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] w-auto bg-gray-200 mt-5"></div>
              </div>
            );
          })
        )}
      </div>
      <div className="ml-[1320px]">
        <h1 className="text-[20px] ">Total:</h1>Rs {priceofitems}
      </div>
    </>
  );
};
export default CartItems;
