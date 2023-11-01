import { useState ,useEffect} from "react";

const useRestsurantItems=(id)=>{
    const [data,setdata]=useState([]);
   

    useEffect(()=>{
        callApi();
    },[])


    async function callApi(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.9188442&lng=75.8148262&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER")
        const jsonObj=await data.json();

        setdata(jsonObj?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        
    }  
    return data;
}
export default useRestsurantItems;