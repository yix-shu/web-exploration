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
import { BrowserRouter as Router, Route, Switch} from "react-router-dom/cjs/react-router-dom.min";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import {StrictMode} from "react"; //dev tool, throws more errors and warnings for dev

const App = () => {
    StrictMode
    return (
        <div>
            <Router>
                <h1>Adopt me!</h1>
                <Switch>
                    <Route path = "/details/:id">
                        <Details/>
                    </Route>
                    <Route path = "/">
                        <SearchParams/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
    //return React.createElement(Pet, {name: "Meow", animal: "Cat", breed: "Siamese"});
}
render(<StrictMode><App/></StrictMode>, document.getElementById("root"));
//ReactDOM.render(React.createElement(App), document.getElementById("root"));