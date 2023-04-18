import React from "react"; //Normal import
import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState } from "react"; //named import
import resList from "../Utils/mockData"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList); //creating a powerfull state variable.

  let listOfRestaurants2 = [
    {
      type: "restaurant",
      data: {
        id: "480230",
        name: "Hapieee Box",
        city: "111",
        area: "Krishna Nagar",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "v0bt0ijid4dtgm28jkvf",
        cuisines: ["Fast Food", "Snacks"],
        costForTwo: 30000,
        avgRating: "3.4",
        totalRatings: 500,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "480231",
        name: "Lets Dim Sum",
        city: "111",
        area: "Krishna Nagar",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "v0bt0ijid4dtgm28jkvf",
        cuisines: ["Fast Food", "Snacks"],
        costForTwo: 30000,
        avgRating: "4.1",
        totalRatings: 500,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "480232",
        name: "Chatpata",
        city: "111",
        area: "Krishna Nagar",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "v0bt0ijid4dtgm28jkvf",
        cuisines: ["Fast Food", "Snacks"],
        costForTwo: 30000,
        avgRating: "4.6",
        totalRatings: 500,
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.0
            );
            console.log(listOfRestaurants);
            setListOfRestaurants(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body; //Normal export
