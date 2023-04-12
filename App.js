const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");    //inside {} we give attributes to the tag
//console.log(heading) //returns an object    
const root = ReactDOM.createRoot(document.getElementById("root"));
   // root.render(heading);

const parent = React.createElement("div" , {id: "parent"}, 
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