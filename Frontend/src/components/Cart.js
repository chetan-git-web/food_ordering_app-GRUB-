import { useDispatch, useSelector } from "react-redux";
import veg from "../logo/veg.svg";
import nonveg from "../logo/non-veg.svg";
import { removeaction } from "../utils/cardslice";
import { substractprice } from "../utils/priceSlice";
import alternativeimg from "../logo/Alt.png";
import { add } from "../utils/restroslice";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import ErrorElement from "./ErrorRoute";

const CartItems = () => {
  // restaurant in cart
  const CartItems = useSelector((store) => store.cart.items);
  const priceofitems = useSelector((store) => store.price.totalprice);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const Remove = (item) => {
    dispatch(removeaction(item));
  };
  const Substract = (item) => {
    dispatch(substractprice(item.price / 100));
  };
  const handlerestro = () => {
    dispatch(add(""));
  };
  if (CartItems.length === 0) {
    handlerestro();
  }
  // payment

  const makepayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OU06pSAmzsQrsfH4W5EqbjHObwZ2aA2axE6x07CZlnN9IgxkE4vHFE9BvBMWjJmybsxPj6P5JZjTKDNBhZv9VNE00HJAhxbww"
    );
    const body = {
      products: CartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://food-ordering-application-9rzm.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      <ErrorElement />;
    }
  };

  return (
    <>
      <div className="mx-[300px] ">
        {CartItems.length === 0 ? (
          <h1 className=" text-[50px] w-[400px] mx-auto mt-20 my-auto">
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

      {CartItems.length != 0 ? (
        <div className="w-[300px] ml-[69rem] mb-10">
          <div className="flex w-[300px] justify-between">
            <h1 className="text-[20px] font-semibold">SubTotal:</h1>
            <h1 className="text-[20px]">Rs.{priceofitems}</h1>
          </div>
          <div className="bg-gray-200 h-[1px] w-full my-3"></div>
          <div className="flex w-[300px] justify-between">
            <h1 className="text-[20px] font-semibold">Taxes(18%): </h1>
            <h1 className="text-[20px] ">{priceofitems % 18}</h1>
          </div>
          <div className="bg-gray-200 h-[1px] w-full my-3"></div>

          <div className="flex w-[300px] justify-between">
            <h1 className="text-[20px] font-semibold">CouponCode:</h1>
            <div>
              <a className="text-[20px]" href="#">
                Add Coupon
              </a>
              <div className="bg-black h-[1px] w-full"></div>
            </div>
          </div>
          <div className="bg-gray-200 h-[1px] w-full my-3"></div>

          <div className="flex w-[300px] justify-between">
            <h1 className="text-[20px] font-semibold">GrandTotal:</h1>
            <h1 className="text-[40px] ">
              Rs {priceofitems + (priceofitems % 18)}
            </h1>
          </div>
          <button
            className="w-full h-10 bg-green-400 text-white rounded-lg focus:bg-green-600"
            onClick={() => {
              if (user) {
                makepayment();
              } else {
                alert("Login / Signup First To order things from GRUB ❤️");
              }
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default CartItems;
