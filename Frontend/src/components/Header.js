import { Link } from "react-router-dom";
import logomain from "../logo/logo.jpg";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRef, useEffect } from "react";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import useHeader from "../hooks/useHeader";
const HeaderComponent = () => {
  
  const cartitems = useSelector((store) => store.cart.items);
  // custom hook
  useHeader();
  const dropdownRef = useRef(null);
  const user = useSelector((store) => store.user);
  // for drop down menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const handleOutsideClick = (event) => {
    // event.target retrun the element that we have clicked on
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  return (
    <div className="flex justify-center p-[9px] gap-[300px] shadow-lg">
      <Link to={"/"}>
        <img
          src={logomain}
          alt="This is logo"
          className="w-[120px] hover:scale-125 transition duration-300 cursor-pointer mt-3"
        ></img>
      </Link>

      <div>
        <ul className="flex gap-[80px] items-center">
          <li className="my-[20px]">
            <Link
              to={"/"}
              className="text-[22px] font-sans items-center font-bold text-gray-600 hover:text-red-500 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />{" "}
                <path
                  fillRule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />{" "}
              </svg>
              Home{" "}
            </Link>
          </li>
          <li className="my-[20px]">
            <Link
              to={"/about"}
              className="text-[22px] font-sans items-center font-bold text-gray-600 hover:text-red-500 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />{" "}
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />{" "}
              </svg>
              About{" "}
            </Link>
          </li>
          <li className="my-[20px]">
            <Link
              to={"/contact"}
              className="text-[22px] font-sans items-center font-bold text-gray-600 hover:text-red-500 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />{" "}
              </svg>
              Contact{" "}
            </Link>
          </li>
          <li className="my-[20px]">
            <Link
              to={"/cart"}
              className="text-[22px] font-sans items-center font-bold text-gray-600 hover:text-red-500 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
              </svg>
              Cart {cartitems.length}{" "}
            </Link>
          </li>
          
          
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              type="button"
              onClick={toggleDropdown}
              className="inline-flex text-gray-600 hover:text-red-500 justify-center items-center  text-sm font-medium   rounded-md  outline-none   "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"></path>
              </svg>
            </button>

            {isOpen && (
              <div className=" z-20 origin-top-right absolute right-0 mt-2 w-40 smartphone:w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                {user ? (
                  <div className=" z-20 py-1">
                    <div className=" z-20 block w-full text-left px-4 py-2 text-sm text-black font-bold ">
                      {user.displayName}
                    </div>
                    <div className="z-20 block smartphone:w-48 text-left px-4 truncate text-sm text-black font-bold ">
                      {user.email}
                    </div>
                    <div className="z-20 w-full h-[1px] bg-gray-500 my-3"></div>
                    <button
                      onClick={() => {
                        signOut(auth)
                          .then(() => {
                           
                          })
                          .catch((error) => {
                          });

                        
                      }}
                      className=" z-20 block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      SignOut
                    </button>
                  </div>
                ) : (
                  <Link
                    to={"/login"}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                   Login{" "}
                  </Link>
                )}
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
