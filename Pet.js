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
    return (
        <div>
            <h1>(props.name)</h1>
            <h2>(props.animal)</h2>
            <h3>(props.breed)</h3>
        </div>
    )
};

export default Pet;