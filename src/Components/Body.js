import React from "react"; //Normal import
import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState, useEffect, useContext } from "react"; //named import
import resList from "../Utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";
import useOnline from "../Utils/useOnline";
import userContext from "../Utils/userContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //creating a powerfull state variable.
  //console.log(listOfRestaurants);
  const [searchText, setSearchText] = useState("");
  const [searchClick, setSearchClick] = useState("false");
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
  //console.log("rendered");
  //console.log(listOfRestaurants);

  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    //console.log("useEffect")
    getRestaurant();
  }, []);

  console.log("render");

  const online = useOnline();
  if (!online) return <h1>You are offline</h1>;

  if (!allRestaurants) return null;

  //Conditional Rendering
  //If restaurant is empty => Shimmer UI
  //If restaurant has data => Actual data UI

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.831457&lng=91.2867777&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container p-5 bg-pink-200 my-5">
        <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-3 m-4 bg-purple-900 hover:bg-slate-500 text-white rounded-md"
          onClick={() => {
            //searchClick == "false"  ? setSearchClick("true") : setSearchClick("false");
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setListOfRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="filter">
        <button
          className="bg-purple-700 p-3 m-4 text-white rounded-md hover:bg-slate-500"
          onClick={() => {
            filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.0
            );
            console.log(listOfRestaurants);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap bg-white">
        {listOfRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id}>
              {" "}
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body; //Normal export
