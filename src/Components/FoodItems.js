import React from "react";
import { CDN_URL } from "../Utils/constant";
import { useContext } from "react";
import userContext from "../Utils/userContext";


const FoodItems = ({ resData }) => {
  console.log(resData)
  const { name, price, category, imageId } = resData;
  const { user } = useContext(userContext);
  

  //const {resData} = props;
  //We can also desctructure props object here as {resName, cuisines, ratings, arrivalTime, image}
  return (
    <div className="w-56 p-5 m-5 shadow-lg bg-pink-50">
      <img
        className="pizza-logo"
        alt="pizza logo"
        src={CDN_URL + imageId}
      />
      <h2 className="font-bold text-2xl"> {name} </h2>
      <h4> Rs. {price/100} </h4>
      <h5> {category}</h5>
    </div>
  );
};

export default FoodItems;
