import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./constant";

const useRestaurant = (resID) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resID + "&submitAction=ENTER");
    const json = await data.json();
    const itemCards1 =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    const itemCards2 = json?.data?.cards[0]?.card?.card?.info;
    console.log(json);
    console.log(itemCards1);
    setMenu(itemCards1);
    setRestaurant(itemCards2);
    console.log(json?.data?.cards[0]?.card?.card?.info);
    console.log(menu);
  }
  return [restaurant, menu];
};

export default useRestaurant;
