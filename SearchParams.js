import {useState} from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const SearchParams = () => {
    const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

    
    //const location = "Seattle, WA"; //this made it so you couldn't change the location
    const [location, updateLocation] = useState("Seattle, Washington"); //sets Seattle by default but this is modifiable
    updateLocation("Toronto, ON"); //cannot update variable directly. Must use function bc it is by React's design
    //cannot do the following: location = "Toronto, ON";
    console.log(location) //checks to see if changed location is registered
    const [animal, updateAnimal] = useState("");
    const [breed, updateBreed] = useState("");
    const [breeds] = useBreedList(animal); //updates breeds list based on animal when animal changes
    const [pets, setPets] = useState([]);


    useEffect(() => {
        requestPets();
    }, [pets])

    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pet?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);

    }

    return (
      <div className="search-params">
        <form onSubmit = {(e)=>{
            e.preventDefault();
            requestPets();
        }}>
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
          <label htmlFor = "breed">
              Breed
              <select
                disabled = {!breeds.length}
                id = "breed"
                value = {breed}
                onChange={(e) => {updateBreed(e.target.value)}}
                onBlur = {(e) => {updateBreed(e.target.value)}}
              >
                <option />
                {
                    breeds.map((breed) => (
                        <option key = {breed} value = {breed}>
                            {breed}
                        </option>
                    ))
                }
              </select>
          </label>
          <button>Submit</button>
        </form>
        {

        }
      </div> 
    );
  };

  export default SearchParams; 