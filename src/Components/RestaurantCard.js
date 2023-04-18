import React from "react";
import CDN_URL from "../Utils/constant";

const styleCard = {
    backgroundColor: "#CAD5E2",
  };
  

  
  const RestaurantCard = ({resData}) => {
      const {name, cuisines, avgRating, costForTwo, minDeliveryTime} = resData?.data
  //const {resData} = props;
      //We can also desctructure props object here as {resName, cuisines, ratings, arrivalTime, image}
    return (
      <div className="restaurant-card" style={styleCard}>
        <img className="pizza-logo" alt="pizza logo" src={ CDN_URL + resData.data.cloudinaryImageId } />
        <h2> {name} </h2>
        <h4> {cuisines.join(", ")} </h4>
        <h5> {avgRating} stars</h5>
        <h5> {costForTwo/100} FOR TWO</h5>
        <h5> {minDeliveryTime}mins ETA</h5>
      </div>
    );
  };

export default RestaurantCard;