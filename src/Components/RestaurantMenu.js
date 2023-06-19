import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_URL } from "../Utils/constant";
import { IMG_CDN_URL } from "../Utils/constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";
import { addItem, clearCart, removeItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, menu] = useRestaurant(id);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1> Restaurant id: {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3> {restaurant.areaName}</h3>
        <h3> {restaurant.city}</h3>
        <h3> {restaurant.avgRating} stars </h3>
        <h3> {restaurant.costForTwoMessage} </h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <div data-testid="menu">
          <ul>
            {Object.values(menu).map((items) => (
              <li key={items.card.info.id}>
                {items.card.info.name} -{" "}
                <button
                  data-testid="addBtn"
                  className="p-1 bg-green-200"
                  onClick={() => addFoodItem(items.card.info)}
                >
                  Add Item
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
