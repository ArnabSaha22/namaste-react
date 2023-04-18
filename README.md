# Namaste React Episode 2#
1. package.json is basically a configuration of our NPM
2. NPM manages all the packages that we install in our system, sometimes these packages are also called dependencies.
3. A bundler packages/bundles, minifies, caches, compresses our app code so that it can be shipped to production. Ex:- webpack, parcel, veet. The "create-react-app" uses webpack bundler behind the scenes. Bundler is the most important package in our code. 
4. There are 2 dependies that we can install in our app -> 
    a. Dev dependency -> required in a developement phase (npm install -D parcel)
    b. Normal dependency -> used in production also.   (npm install parcel)
5. To create your own package.json -> npm init
6. To install a bundler -> npm install -D <bundler name> -> this creates the package-lock.json file.
7. package.json -> Configuration file for NPM, keeps a track of what version of that package is installed in our system. 
        Here we have '^' sign which says install minor versions in future and '~' says install major verions automatically. It's safe to use ^ to avoid any major changes on the code.
8. package-lock.json -> Keeps a track of exact versions that is being installed for all dependencies in the dependency tree. It locks the version and keeps a record of it. It has an "integrity" property as a sha512 hash so that the code in local and in production are exactly same. 
9. node_modules -> Has all the codes that we fetched from NPM for installing any dependency or bundler. It's like a database, contains the actual data. Don't put this node modules on git, put them in .gitignore
10. Transitive Dependencies -> Dependies having their own dependencies and those again having their own dependencies and so on, also called as dependency tree. These dependencies have their own package-lock.json and package.json
11. If we have the package.json and package-lock.json in GitHub we can regeneate our node_modules so we need to keep them.(run the command "npm install").
12. To ignite the app using parcel (developement built)-> npx parcel <source file name> -> Here parcel creates a local server and hosts the website. It generates a developement built of the project and it host on the local server. When it generates a developement built it puts in "dist" folder.
    here npm -> install a package and npx -> execute a package. 
13. To bring React and ReactDOM into our app we have 2 ways -> CDN Links(not a good way) and NPM. This is because it's easier to manage the react in node_modules rather than using CDN links where we have to update latest react versions.
14. Parcel does HMR -> Hot module replacement -> means real time update on the browser as soon as code changes are made. This is done by a file watching algorithm of parcel written in C++. It does caching(.parcel-cache file) so it  gives faster builts. It does image optimization as well. It does minification, compress and bundling of files. It does consistent hashing(Google).
15. React is fast because it's the bundler which makes it faster.
16. Parcel does the below things(in short) -> parcel.org
    a. Dev Built
    b. Local Server
    c. HMR -> Hot module replacement-> means real time update on the browser as soon as code changes are made. This is done by a file watching algorithm of parcel written in C++.
    d. Caching -> (.parcel-cache file) so it  gives faster builts
    e. Image Optimization
    f. Minification, compress and bundling of files
    g. Consistent Hashing(Google)
    h. Code Splitting
    i. Differential Bundling -> To support the app in older browsers.
    j. Better error Handling and diagnostics
    k. Host in HTTPs
    l. Tree Shaking -> remove unused code
    m. Different Dev and Production bundles.
17. When we do "npx parcel build <source file name>" -> when we run this for a production ready app all the file optimization and save it in the "dist" folder.
18. The files ".parcel-cache" and "dist" should be put in .gitignore as they can be regenerated.
19. Local System ---> GIT ----> Server ==> Here the package.json and package-lock.json gets transported from Local to Server via Git, and the server uses that to create it's own node_modules, .parcel-cache and dist folders.
20. browserslist --> make the page compatible to older browsers. We add that in package.json (browserslist.dev website) --> This makes sure that this page will 100% work on these browsers and may or maynot work on the others.

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 3#

1. npx parcel <source file name> -> means we are executing an NPM package "parcel" and we give the source file.
2. We can create a script to run the project in package.json file in the "scripts" part, now to run the code we just type npm run <script tag>. (Only for "start" tag we can also write "npm start").
3. JSX and React both are different. We can write React without JSX, it's just that JSX makes it easier. JSX is not HTML inside JS, 
    both are different. JSX is an HTML like or XML like syntax. JSX is a different syntax.
4. JSX is not a valid JavaScript syntax, they only understand ECMA script, for browser to understand JSX, parcel does the job behind the scenes. It is transpiled before it goes to JS engine and then JS engine understands the code. Now Parcel doesn't do the transpiling itself, it gives the responsiblity to Babel(it's a package). Basically Babel's job is to convert JSX to React code.
5. Behind the scenes the JSX is converted to React.createElement which then makes a JS object and is rendered in DOM as an HTML element.
    JSX => React.createElement() => React.createElement - JS Object => rendered to an HTML Element. All these are done by Babel.
    "class" attribute in HTML => "className" attribute in JSX. Inside a JSX we can run any JavaScript expression, function inside a {}.
6. For mutiline JSX statements, wrap them under () so that Babel understands where JSX starts and ends. A JSX part in the code is a     React Element. React code is readable because of JSX. 
7. React Components -> Class based Components(Old way) and Functional Components. Component Composition -> Composing or adding one component into other.
8. For Functional components, they are just javascript functions that returns some JSX elemnt. Make sure to start the function name in capital letters.
9. A React element is a normal JavaScript variable, so to add that in a React functional component or to add that in another React element we just enclose it inside {}. Now to add a React functional component in another element or a component we just enclose it inside < Component Name />
10. Whatever data comes inside {} JSX won't blindly run it, it will sanitize and see if the data is ok to be processed. JSX Expression must have only one parent element. We can use React.Fragement that is used as an empty tag to wrap up the entire JSX. We can use <> </> in place of React.Fragement. Can we use multiple roots? Can we use a React.Fragement inside another React.Fragement ?

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 4#

1. Before building any app make sure to plan it first properly and then start coding.
2. React Components are just like JavaScript functions, we can reuse them repeatedly.
3. To add inline css in react component(within the HTML tags) you need to give them as JS objects {}.
4. React props -> also known as properties. Just like React Functional Components are javascript functions, similarly React props are the arguments of the function. Passing props to a component => passing arguments to a function. Props are just JS objects that wraps all the details. When we have to dynamically pass some data into a component, we pass it as a prop.
5. Config driven UI -> Managing the data how it looks on an UI using data or using configs that comes from the backend.
6. While using map functions in react make sure to use "key" paramter, and in that never use indexes.

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 5#
1. The best industry practice is to make seperate files for seperate components and keep all the source code in the "src" folder.
    In that folder there will be a components folder. You can use Js as well as Jsx extenstion, it doesn't matter much.
2. Never keep the hard coded data or the hard coded urls in the component files, make sure you keep them in a seperate folder (utils folder) and in a seperate file(say config.js or constant.js). Since these js files are not a component so the name starts with small letters. All the constant variables should be written in full uppercase.
3. There are 2 different types of import and export. 
    a) Normal export/import => export default <function/variable name> => when we have to export only one file, we cannot write this command twice. While importing these this we can just mention the name. Example:- import CDN_URL from "../Utils/constant";
    b) Named export/import => export const <function/variable name> => here we mention export at the time of declaring the variable, so we can export multipe things at a time. While importing this named export make sure to mention them inside {}. 
    Example:- import {CDN_URL} from "../Utils/constant";
    We can combine default and named exports in a single file.
4. All these React and other frameworks makes sure that the data layer and the UI layer are in sync, they help in faster DOM manipulation. React makes the DOM operations superfast and efficient.
5. A React HOOK is a normal JS utility function that is prebuilt and is given to us by React, only thing is these functions have some logic written behind the scenes. We need to use named import command to import hooks in our program.
    a) useState() hooks -> it is used to create state variables and maintains the state of our component. The scope of the local state variable is inside the component. Whenever a state variable updates React re-renders the component
    b) useEffet() hooks ->
6. React uses "Reconciliation Algorithm" which is also known as "React fiber"(came up in React version 16). A DOM stands for Document Object Model where Document is the HTML document, Object are the HTML Tags like <h1>, <h2>, <div>.. and the Model is the document structure where we have the HTML tags in the chronological order. React Fiber study material -> https://github.com/acdlite/react-fiber-architecture
7. Virtual DOM -> It is the representation of the actual DOM in the form of a JS object. So there will be an object of existing DOM, once we make any change there is a new object is created, react finds out the difference between these 2 objects and then it actually updates the DOM. React does efficient DOM manipulation and that's why it's fast.
    Example:- A real DOM          A Virtual DOM
            <head>                If you do "console.log(<Body />)" it prints a nested object in the console, that is the Virtual DOM.
                <body>
                    <div>
                    </div>
                </body>
            </head>
8. Diff Algorithm -> It compares and finds the difference between 2 virtual DOMs, updates the actual DOM accordingly on every render cycle. That's how React becomes faster because finding out the difference between two HTML code is tuff but finding out the difference between 2 objects is easier. React doesn't touch the actual DOM much and that's another reason why React is so fast.
9. Whenever there is a change in state variable React will immediately find out the difference between the Virtual DOM and it will re-render/update our component and update the actual DOM. 
10. Incremental rendering -> The ability to split rendering work into chunks and spread it out over multiple frames.
 