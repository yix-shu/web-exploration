import {useState} from "react";

const SearchParams = () => {
    const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

    
    //const location = "Seattle, WA"; //this made it so you couldn't change the location
    const [location, updateLocation] = useState("Seattle, Washington"); //sets Seattle by default but this is modifiable
    updateLocation("Toronto, ON"); //cannot update variable directly. Must use function bc it is by React's design
    //cannot do the following: location = "Toronto, ON";
    console.log(location) //checks to see if changed location is registered
    const [animal, updateAnimal] = useState("");
    const [breed, updateBreed] = useState("");
    const breeds = [];

    useEffect(() => {
        requestPets();
    }, [])

    async function requestPets(){
        
    }

    return (
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input id="location" value={location} placeholder="Location" onChange{...(e) => {updateLocation(e.target.value)}}/> //defining onChange function
          </label>
          <label htmlFor = "animal">
              Animal 
              <select
                id = "animal"
                value = {animal}
                onChange={(e) => {updateAnimal(e.target.value)}}
                onBlur = {(e) => {updateAnimal(e.target.value)}}
              >
                <option />
                {
                    ANIMALS.map((animal) => (
                        <option key = {animal} value = {animal}>
                            {animal}
                        </option>
                    ))
                }
              </select>
          </label>
          <button>Submit</button>
        </form>
      </div> 
    );
  };

  export default SearchParams; 