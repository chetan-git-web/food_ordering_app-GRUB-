import { RestaurantCard } from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shimm from "./Shimmer";
import { searchFilterRestro } from "../utils/helper";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [allrestro, setallrestro] = useState([]);
  const [filteredrestaurant, setfilteredrestaurant] = useState([]);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(
          `https://food-ordering-application-9rzm.onrender.com/api/restaurants?lat=${latitude}&lng=${longitude}`,
          {
            method: "GET",
          }
        );

        const json = await response.json();
        console.log(json);

        if (
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        ) {
          setallrestro(
            json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
          );
          setfilteredrestaurant(
            json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
          );
        } else {
          setallrestro([]);
          setfilteredrestaurant([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error as needed
      }
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

  return allrestro.length === 0 ? (
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
      <div className="flex flex-wrap justify-between gap-y-10 px-[210px] ">
        {allrestro && allrestro.length === 0 ? (
          <h1>not found</h1>
        ) : (
          filteredrestaurant.map((restaurant) => {
            return <RestaurantCard key={restaurant.id} {...restaurant.info} />;
          })
        )}
      </div>
    </div>
  );
};
export default Body;
