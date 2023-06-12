import React from "react";
import { CDN_URL } from "../Utils/constant";
import { useContext } from "react";
import userContext from "../Utils/userContext";

const RestaurantCard = ({ resData }) => {
  //console.log(resData)
  const { name, cuisines, avgRating, costForTwo, minDeliveryTime } =
    resData?.data;
  const { user } = useContext(userContext);

  //const {resData} = props;
  //We can also desctructure props object here as {resName, cuisines, ratings, arrivalTime, image}
  return (
    <div className="w-56 p-5 m-5 shadow-lg bg-pink-50">
      <img
        className="pizza-logo"
        alt="pizza logo"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />
      <h2 className="font-bold text-2xl"> {name} </h2>
      <h4> {cuisines.join(", ")} </h4>
      <h5> {avgRating} stars</h5>
      <h5> {costForTwo / 100} FOR TWO</h5>
      <h5> {minDeliveryTime}mins ETA</h5>
      <h5> {user.name}</h5>
    </div>
  );
};

export default RestaurantCard;
