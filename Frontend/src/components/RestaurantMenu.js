import { useParams } from "react-router-dom"
import RestroItems from "./RestaurantItems";
import useRestsurantItems from "../hooks/useRestaurantItems";

const Menu = () => {
    const { id } = useParams();

    const RestroMenu = useRestsurantItems(id);
    return (
        <>
            <div>
                {
                    RestroMenu[0].map((restro) => {
                        return <RestroItems {...restro?.card?.card} name={RestroMenu[1]} />
                    })
                }
            </div>
        </>

    )
}
export default Menu;