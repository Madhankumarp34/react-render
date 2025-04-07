import { useEffect, useState } from "react";
import Restaurants from "./Restaurants";
import { restList } from "../utils/mockdata";
import Shimmer from "../components/Shimmer"

const Bodylayout = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    setListOfRestaurants(restList)
    // fetchData()
  }, []);

  // const async fetchData = () =>{
  //   const data = await fetch("restList");
  //   const json = await data.json;
  //   setListOfRestaurants(json)
  // }

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body-container">
      <div className="search">
        <input type="text" placeholder="Search for restaurant" />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <Restaurants key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Bodylayout;
