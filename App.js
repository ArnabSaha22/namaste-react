//*********Code for episode 3***********
/**
 * Planning for the Foodspah app
 * Header
 *  - Home
 *  - Logo
 *  - Cart
 *  - Profile
 * Body
 *  - Search Bar
 *  - Restaurant Container
 *  - Restaurant Card
 * Footer
 *  - Copyright
 *  - About Us
 *  - Contact Us
 */

import React from "react";
import ReactDOM from "react-dom/client"

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="Food App Logo.jpeg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
        <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)









//*********Code for episode 2***********

/** import React from "react";
import ReactDOM from "react-dom/client";

const coreReact = React.createElement("h1", {id: "heading"}, "React element using core React");
const jsxReact = <h1 id="heading"> React element using JSX</h1> //JSX is just a syntax whereas the React.createElement is an object
                //JS engine won't understand the above code, they only understand ECMA script. Parcel does the job behind the scenes.
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxReact)   //Rendering a React Element.

console.log(coreReact);
console.log(jsxReact);

//React Functional Component
const ReactHeading = () =>{
    return <h1>React Functional Component</h1>;
}

const ReactHeading2 = () => <h1>React Functional Component 2</h1>

root.render(<ReactHeading />)   //Rendering a React Component
 */

//*********Code for episode 1***********

//import React from "react";      //Here both React and ReactDOM are being imported from the node modules
//import ReactDOM from "react-dom/client";  //Previously they used to come from CDN Links
/*
const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");    //inside {} we give attributes to the tag
//console.log(heading) //returns an object    
const root = ReactDOM.createRoot(document.getElementById("root"));
   // root.render(heading); //When we run this it will replace whatever is there in root.

const parent = React.createElement("div" , {id: "parent"}, //React.createElement is an object, when we render this on DOM it becomes HTML
React.createElement("div" , {id: "child"}, 
[ 
    React.createElement("h1", {}, "I am H1 tag"), 
    React.createElement("h2", {}, "I am H2 tag")
]
));
root.render(parent);

/**
 * <div id="parent"> 
 * <div id="child"> 
 * <h1>I am H1 tag</h1>
 * </div>
 * </div>
 * 
 * React Element is an object -> It becomes HTML that the browser understands
 */




