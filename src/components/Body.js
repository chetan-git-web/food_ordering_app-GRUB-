import { RestaurantCard } from "./RestaurantCard";
import React, { useContext, useEffect, useState } from "react";
import Shimm from "./Shimmer";
import { searchFilterRestro } from "../utils/helper";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [allrestro, setallrestro] = useState([]);
  const [filteredrestaurant, setfilteredrestaurant] = useState([]);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    const getRestaurants = async () => {
      //location success fetch
      async function success(position) {
        const latitude = await position.coords.latitude;
        const longitude = await position.coords.longitude;
        // api call 
    
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.8606522&lng=75.8168998&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       
        if (json === undefined) {
          setallrestro([]);
          setfilteredrestaurant([]);
        } else {
          setallrestro(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setfilteredrestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
        }
      }
      //location failed fetch
      function error() {
        <Error/>
      }
      // location using geolocation
      const location = navigator.geolocation.getCurrentPosition(success, error);

    };
    getRestaurants();
  }, []);



// custom hook useOnline
  const isOnline = useOnline();
  // if online return offline page
  if (!isOnline) {
    return <h1>You are offline</h1>;
  }

  // if online return online page
  
  return allrestro.length == 0 ? (
    <Shimm />
  ) : (
    <div className="mt-10">
      {/* // this is search bar */}
      <div className="relative mx-[210px] mr-[240px] my-[60px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 "
          placeholder="Search for restaurants and foods"
          value={searchValue}
          onChange={(e) => {
            setsearchValue(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 "
          onClick={() => {
            let filteresrestaurant = searchFilterRestro(searchValue, allrestro);
            setfilteredrestaurant(filteresrestaurant);
          }}
        >
          Search
        </button>
      </div>

      {/* // this is restaurant cards */}
      <div className="flex flex-wrap gap-[30px] px-[210px] ">
        {filteredrestaurant.length == 0 ? (
          <h1>not found</h1>
        ) : (
          filteredrestaurant.map((restaurant) => {
            return <RestaurantCard {...restaurant.info} />;
          })
        )}
      </div>
    </div>
  );
};
export default Body;
