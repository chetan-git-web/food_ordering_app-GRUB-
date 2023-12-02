import { Link } from "react-router-dom";
import { IMG_URL } from "./Config";

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
  id,
}) => {
  return (
    <Link
      className="overflow-hidden hover:scale-95 hover:shadow-none transition duration-300 shadow-lg rounded-2xl"
      to={"/restaurant/" + id}
    >
      <div className="w-[287px] h-[294px]">
        <div className="w-[287px] h-[191px] overflow-hidden items-center rounded-2xl  bg-gradient-to-t from-gray-700">
          <img className="" src={IMG_URL + cloudinaryImageId} alt="" />
        </div>
        <div className="px-3">
          <h1 className="text-gray-800 font-semibold text-[18px] truncate">
            {name}
          </h1>
          {avgRatingString === "NEW" ? (
            <h1></h1>
          ) : (
            <h4 className="font-bold text-green-700">{avgRatingString}⭐</h4>
          )}
          <h3 className="text-gray-500 truncate">{cuisines.join(", ")}</h3>
        </div>
      </div>
    </Link>
  );
};
