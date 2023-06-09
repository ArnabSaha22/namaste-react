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
 *      - Name, star rating, cuisine, eta, delivery time.
 * Footer
 *  - Copyright
 *  - About Us
 *  - Contact Us
 */

import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { Header } from "./Components/Header"; //Named import
import Body from "./Components/Body"; //Normal import
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import ContactUs from "./Components/ContactUs";
import { Footer } from "./Components/Footer";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import userContext from "./Utils/userContext";

//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading
//On Demand Loading
//Dynamic Import

const Instamart = lazy(
  () => import("./Components/Instamart") //This is called Dynamic Import for lazy loading
);

const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  const [user1, setUser1] = useState({
    name: "Arnab 2",
    email: "email2"
  })

  return (
    <userContext.Provider value={{user : user1, setUser: setUser1 }}>
      <Header />
      <Outlet />
      <Footer />
      </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/About",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "",
        element: <Body />,
      },
      {
        path: "/Contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //Now the root will render according to the given configuration in RouterProvider

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
