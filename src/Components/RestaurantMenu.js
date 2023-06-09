import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_URL } from "../Utils/constant";
import { IMG_CDN_URL } from "../Utils/constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, menu] = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h1> Restaurant id: {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3> {restaurant.areaName}</h3>
        <h3> {restaurant.city}</h3>
        <h3> {restaurant.avgRating} stars </h3>
        <h3> {restaurant.costForTwoMessage} </h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(menu).map((items) => (
            <li key={items.card.info.id}>{items.card.info.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
