/*
import React from "react";

export default function Pet({props}) {
    return (
        <div>
            <h1>(props.name)</h1>
            <h2>(props.animal)</h2>
            <h3>(props.breed)</h3>
        </div>
    )
    
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h3", {}, breed),
    ])
    
}
*/
const Pet = (props) => {
    const {name, animal, breed, images, location, id} = props

    let defaultPet = "https://pets-images.dev-apis.com/pets/none.jpg";
    if(images.length){
        defaultPet = images[0];
    } 

    return (
        /*
        <div>
            <h1>(props.name)</h1>
            <h2>(props.animal)</h2>
            <h3>(props.breed)</h3>
        </div>
        */
       <a href = {`/details/${id}`} className = "pet">
            <div className = "image-container">
                <img src = {defaultPet} alt = {name} />
            </div>
            <div className = "info">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
       </a>
    )
};

export default Pet;