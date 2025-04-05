
import { useState } from "react"
import Restaurants from "./Restaurants"
import { restList } from "../utils/mockdata"
const Bodylayout = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(restList);
  return(
    <div className="body-container">

      <div className="search">
        <input type="text" placeholder="Search for restaurant" />
        <button className="search-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Search
          </button>
      </div>

      <div className="rest-container">
          
          {listOfRestaurants.map((restaurant) => (
            <Restaurants key={restaurant.data.id} resData = {restaurant}/>
          ))}
        
      </div>
    </div>
  )
}
 export default Bodylayout