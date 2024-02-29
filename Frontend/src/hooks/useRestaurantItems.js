import { useState, useEffect } from "react";

const useRestsurantItems = (id) => {
  const [data, setdata] = useState([]);
  const [name, setname] = useState("");

  useEffect(() => {
    callApi();
  }, []);

  async function callApi() {
    const data = await fetch(
      `https://food-ordering-application-9rzm.onrender.com/api/menu?id=${id}`,
      {
        method: "GET",
      }
    );
    const jsonObj = await data.json();
    console.log(jsonObj);
    const showdata = jsonObj?.data?.cards.filter((data) => {
      return data.groupedCard != undefined;
    });
    console.log(showdata);
    setdata(showdata[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setname(jsonObj?.data?.cards[0]?.card?.card?.info?.name);
  }
  return [data, name];
};
export default useRestsurantItems;
