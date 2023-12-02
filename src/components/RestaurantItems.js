import { useState } from "react";
import down from "../logo/down.svg";
import up from "../logo/up.svg";
import veg from "../logo/veg.svg";
import nonveg from "../logo/non-veg.svg";
import { ITEM_URL } from "./Config";
import { additem } from "../utils/cardslice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";
import { addprice } from "../utils/priceSlice";
import SameRestroDialogue from "./SameRestroDialogue";


// categories

const RestroItems = ({ title, itemCards, categories, name}) => {
  const [isShow, setisshow] = useState(false);
  if (title === undefined) {
    return <></>;
  }
  // it is called accordian
  return (
    <div className="gap-[10px] mx-[200px]">
      <div className="h-2 w-auto bg-gray-100"></div>
      <div className="my-[30px]">
        <a
          className="flex justify-between hover:cursor-pointer"
          onClick={() => {
            setisshow(!isShow);
          }}
        >
          <h1 className="text-[25px] font-semibold">
            {title}(
            {itemCards !== undefined
              ? itemCards.length
              : categories !== undefined
              ? categories.length
              : null}
            )
          </h1>
          {isShow ? (
            <img className="w-[25px]" src={up}></img>
          ) : (
            <img className="w-[25px]" src={down}></img>
          )}
        </a>
      </div>
      <div className="h-2 w-auto bg-gray-100"></div>
      {isShow ? (
        itemCards === undefined ? (
          categories !== undefined &&
          categories.map((restro) => {
            return <RestrofoodCategories {...restro} name={name}/>;
          })
        ) : (
          itemCards.map((restro) => {
            return <Restrofooditems {...restro.card.info} restroname={name}/>;
          })
        )
      ) : (
        <></>
      )}
    </div>
  );
};
export default RestroItems;

// subcategory

const RestrofoodCategories = ({ title, itemCards,name}) => {
  const [isshow, setisshow] = useState(false);
  return (
    <>
      <div className="flex  justify-between mx-[10px]">
        <a
          className="flex justify-center hover:cursor-pointer"
          onClick={() => {
            setisshow(!isshow);
          }}
        >
          <div className="flex gap-[220px]">
            <h1 className="text-[25px] w-[1000px] font-semibold">{title}</h1>
            {isshow ? (
              <img className="w-[25px]" src={up}></img>
            ) : (
              <img className="w-[25px]" src={down}></img>
            )}
            <br></br>
            <br></br>
          </div>
        </a>
      </div>
      {isshow &&
        itemCards.map((restro) => {
          return <Restrofooditems {...restro.card.info} restroname={name} />;
        })}
    </>
  );
};

// real cart items

const Restrofooditems = ({
  name,
  isStock,
  isVeg,
  price,
  description,
  imageId,
  restroname
  
}) => {
  console.log(restroname);
  const dispatch = useDispatch();
  const handleadditem = () => {
    dispatch(
      additem({
        name: name,
        price: price,
        imageId: imageId,
        isveg: isVeg,
        isStock: isStock,
        description: description,
      })
    );
    //dispatch an action and pass the payload
  };

  const handleprice = () => {
    // dispatch price
    dispatch(addprice(price / 100));
  };
  const alreadyrestro = useSelector(store => store.restro.value);

  return (
    <div className="p-4 w-full h-[200px]">
      <div className="flex justify-between">
        <div>
          {isVeg === 1 ? (
            <img className="w-[20px]" src={veg}></img>
          ) : (
            <img className="w-[20px]" src={nonveg}></img>
          )}
          <h1 className="truncate text-gray-800 font-bold">{name}</h1>
          <h1 className="text-gray-800 font-semibold">₹{price / 100}</h1>
          <h1 className="truncate text-gray-600 w-[790px]">{description}</h1>
        </div>
        <div className="item-center">
          <div className="w-[100px] h-[100px] overflow-hidden rounded-xl ">
            {imageId === undefined ? (
              <></>
            ) : isStock !== 1 ? (
              <img
                className="object-cover w-[100px] h-[100px]"
                src={ITEM_URL + imageId}
              ></img>
            ) : (
              <img
                className="grayscale object-cover"
                src={ITEM_URL + imageId}
              ></img>
            )}
          </div>
          <div className="w-[100px] h-[40px] border-[1px] shadow-md rounded-md flex justify-between px-3">
            <button
              className="text-[20px] font-bold text-green-500 mx-auto"
              onClick={() => {

                if(alreadyrestro === ""){
                  handleadditem();
                  handleprice();
                }
                else if(alreadyrestro === restroname){
                  handleadditem();
                  handleprice();
                }
                else{
                  <SameRestroDialogue/>
                }
                
              }}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-auto bg-gray-200 mt-5"></div>
    </div>
  );
};
