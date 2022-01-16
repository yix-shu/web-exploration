```
import React from "react";

const App = () => {
    return React.createElement("div", React.createElement("h1", {}, "Adopt me!"));
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

list of modules:
prettier
parcel
babel
JSX
```
import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
    return (
        <div>
            <h1>Adopt me!</h1>
            <Pet name = "Meow" animal = "Cat" breed = "Siamese"></Pet>
            <Pet name = "Brownie" animal = "Dog" breed = "Poodle"></Pet>
        </div>
    )
    //return React.createElement(Pet, {name: "Meow", animal: "Cat", breed: "Siamese"});
}
render(<App/>, document.getElementById("root"));
//ReactDOM.render(React.createElement(App), document.getElementById("root"));