import Restaurants from "./Restaurants"
import { resList } from "../utils/mockdata"

const Bodylayout = () => {
  return(
    <div className="body-container">

      <div className="search">
        <input type="text" placeholder="Search for restaurant" />
        <button>Search</button>
      </div>

      <div className="rest-container">
          
          {resList.map((restaurant) => (
            <Restaurants key={restaurant.data.id} resData = {restaurant}/>
          ))}
        
      </div>
    </div>
  )
}
 export default Bodylayout