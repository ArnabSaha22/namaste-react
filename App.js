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

//Above code was for episode 1


//*********Code for episode 2***********


import React from "react";
import ReactDOM from "react-dom/client";

const coreReact = React.createElement("h1", {id: "heading"}, "React element using core React");
const jsxReact = <h1 id="heading"> React element using JSX</h1> //JSX is just a syntax whereas the React.createElement is an object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(coreReact)

console.log(coreReact);
console.log(jsxReact);