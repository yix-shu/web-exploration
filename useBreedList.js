import {useState, useEffect} from "react";

const localCache = {};
export default function useBreedList(animal) {
    console.log(localCache); 
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");
    useEffect(()=>{
        if(!animal) {
            setBreedList([]);

        } else if (localCache[animal]){
            setBreedList(localCache[anima]);
        } else{
            //functionality
            requestBreedList();
        }
        async function requestBreedList(){
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pet-v2.dev-apis.com/breeds?animal=${animal}` //searches for breeds based on newly updated animal
            );
            const json = await res.json(); //converts into json value
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");

        }
    }, [animal]);
    return [breedList, status];
}
