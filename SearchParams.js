import {useState} from "react";

const SearchParams = () => {
    //const location = "Seattle, WA"; //this made it so you couldn't change the location
    const [location, updateLocation] = useState("Seattle, Washington"); //sets Seattle by default but this is modifiable
    updateLocation("Toronto, ON"); //cannot update variable directly. Must use function bc it is by React's design
    //cannot do the following: location = "Toronto, ON";
    return (
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input id="location" value={location} placeholder="Location" />
          </label>
          <button>Submit</button>
        </form>
      </div> 
    );
  };

  export default SearchParams; 