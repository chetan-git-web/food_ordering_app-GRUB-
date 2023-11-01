import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_URL } from "./Config";
import RestroItems from "./RestaurantItems";
import useRestsurantItems from "../hooks/useRestaurantItems";

const Menu=()=>{
    const {id}=useParams();

    // const img=RestaurantData?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId;
    const RestroMenu=useRestsurantItems(id);
    return(
        <>
        {/* <h1> Restaurant id:{id}</h1> */}
        <div>
            {
                RestroMenu.map((restro)=>{
                    return <RestroItems {...restro?.card?.card}/>
                })
            }
        </div>
        </>
        
    )
}
export default Menu;