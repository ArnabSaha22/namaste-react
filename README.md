# Namaste React Episode 2#
1. package.json is basically a configuration of our NPM
2. NPM manages all the packages that we install in our system, sometimes these packages are also called dependencies. We use NPM because our react app needs a lot of packages to run itself, so those helper packages come inside npm.
3. A bundler packages/bundles, minifies, caches, compresses our app code so that it can be shipped to production. Ex:- webpack, parcel, vite. The "create-react-app" uses webpack bundler behind the scenes. Bundler is the most important package in our code. 
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
11. If we have the package.json and package-lock.json in GitHub we can regeneate our node_modules so we need to keep them.(run the command "npm install"). Never edit node_modules, package.json, package-lock.json.
12. To ignite the app using parcel (developement built)-> npx parcel <source file name> -> Here parcel creates a local server and hosts the website. It generates a developement built of the project and it host on the local server. When it generates a developement built it puts in "dist" folder.
    here npm -> install a package on our local system and then run and npx -> just execute a package without installing. 
    when we write npx create-react-app <App Name> => We are executing the "create-react-app" javascript package[collection of libraries form package].
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
3. JSX and React both are different. We can write React without JSX, it's just that JSX makes it easier. JSX is not HTML inside JS, both are different. JSX is an HTML like or XML like syntax. JSX is a different syntax.
4. JSX is not a valid JavaScript syntax, they only understand ECMA script, for browser to understand JSX, parcel does the job behind the scenes. It is transpiled before it goes to JS engine and then JS engine understands the code. Now Parcel doesn't do the transpiling itself, it gives the responsiblity to Babel(it's a package). Basically Babel's job is to convert JSX to React code.
5. Behind the scenes the JSX is converted to React.createElement which then makes a JS object and is rendered in DOM as an HTML element.
    JSX => React.createElement() => React.createElement - JS Object => rendered to an HTML Element. All these are done by Babel.
    "class" attribute in HTML => "className" attribute in JSX. Inside a JSX we can run any JavaScript expression, function inside a {}.
6. For mutiline JSX statements, wrap them under () so that Babel understands where JSX starts and ends. A JSX part in the code is a     React Element. React code is readable because of JSX. 
7. React Components -> Class based Components(Old way) and Functional Components. Component Composition -> Composing or adding one component into other.
8. For Functional components, they are just javascript functions that returns some JSX elemnt. Make sure to start the function name in capital letters. React Element is an object and React Component is a function.
9. A React element is a normal JavaScript variable, so to add that in a React functional component or to add that in another React element we just enclose it inside {}. Now to add a React functional component in another element or a component we just enclose it inside < Component Name />
10. Whatever data comes inside {} JSX won't blindly run it, it will sanitize and see if the data is ok to be processed. JSX Expression must have only one parent element. We can use React.Fragement that is used as an empty tag to wrap up the entire JSX. We can use <> </> in place of React.Fragement. Can we use multiple roots? Can we use a React.Fragement inside another React.Fragement ?

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 4#

1. Before building any app make sure to plan it first properly and then start coding.
2. React Components are just like JavaScript functions, we can reuse them repeatedly. Never create a component inside another component.
3. To add inline css in react component(within the HTML tags) you need to give them as JS objects {}.
4. React props -> also known as properties. Just like React Functional Components are javascript functions, similarly React props are the arguments of the function. Passing props to a component => passing arguments to a function. Props are just JS objects that wraps all the details. When we have to dynamically pass some data into a component, we pass it as a prop.
5. Config driven UI -> Managing the data how it looks on an UI using data or using configs or big JSON datas that comes from the backend.
6. While using map functions in react make sure to use "key" paramter, and in that never use indexes.

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 5#
1. The best industry practice is to make seperate files for seperate components and keep all the source code in the "src" folder.
    In that folder there will be a components folder. You can use Js as well as Jsx extenstion, it doesn't matter much.
2. Never keep the hard coded data or the hard coded urls in the component files, make sure you keep them in a seperate folder (utils folder) and in a seperate file(say config.js or constant.js). Since these js files are not a component so the name starts with small letters. All the constant variables should be written in full uppercase.
3. There are 2 different types of import and export. 
    a) Normal export/import => export default <function/variable name> => when we have to export only one file, we cannot write this command twice. While importing these this we can just mention the name. Example:- import CDN_URL from "../Utils/constant";
    b) Named export/import => export const <function/variable name> => here we mention export at the time of declaring the variable, so we can export multipe things at a time. While importing this named export make sure to mention them inside {}. 
    Example:- import {CDN_URL} from "../Utils/constant"; => we can import multiple components together like this.
    We can combine default and named exports in a single file.
4. All these React and other frameworks makes sure that the data layer and the UI layer are in sync, they help in faster DOM manipulation. React makes the DOM operations superfast and efficient.
5. A React HOOK is a normal JS utility function that is prebuilt and is given to us by React, only thing is these functions have some logic written behind the scenes. We need to use named import command to import hooks in our program.
    a) useState() hooks -> it is used to create state variables and maintains the state of our component. The scope of the local state variable is inside the component. Whenever a state variable updates React re-renders the component.
    Whenever a user makes any changes in UI or does any action, the data should be updated. Whenever there is something that changes on the UI we use a local state variable to handle that. useState() is a hook that helps us to manage this state variable across the UI.
    b) useEffet() hooks ->
6. React uses "Reconciliation Algorithm" which is also known as "React fiber"(came up in React version 16). It is used to differentiate one tree from the other and it determines what needs to be changed in UI and what not using a "diff" algorithm. A DOM stands for Document Object Model where Document is the HTML document, Object are the HTML Tags like <h1>, <h2>, <div>.. and the Model is the document structure where we have the HTML tags in the chronological order. React Fiber study material -> https://github.com/acdlite/react-fiber-architecture
7. Virtual DOM -> It is the representation of the actual DOM in the form of a JS object. So there will be an object of existing DOM, once we make any change there is a new object is created, react finds out the difference between these 2 objects and then it actually updates the DOM. React does efficient DOM manipulation and that's why it's fast.
    Example:- A real DOM          A Virtual DOM
            <head>                If you do "console.log(<Body />)" it prints a nested object in the console, that is the Virtual DOM.
                <body>
                    <div>
                    </div>
                </body>
            </head>
8. Diff Algorithm -> It compares and finds the difference between 2 virtual DOMs, updates the actual DOM accordingly on every render cycle. That's how React becomes faster because finding out the difference between two HTML code is tuff but finding out the difference between 2 objects is easier. React doesn't touch the actual DOM much and that's another reason why React is so fast.
9. Whenever there is a change in state variable React will immediately find out the difference between the Virtual DOM and it will re-render/update our component and update the actual DOM. Why not to use indexes as the React key?
10. Incremental rendering -> The ability to split rendering work into chunks and spread it out over multiple frames. React uses "one way data binding".

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 6#

1. A state is a built-in React object that is used to contain data or information about the component. Say there is a variable in react and on click of a button that variable changes and it shows up in UI. So for that react needs to track the variable so that the data layer is in sync with UI layer. Now React cannot do that on a normal variable and can only track local state variables. So to create and monitor changes on the local state variable we use useState hook. Every component in React maintains a "State", we can put all the variables in this state and everytime we have to create a local variable we use state in it. Never write a useState inside if-else/for-loop and outside functional component.
"useState is a hook that React gives us to create state variables inside a functional component."
2. In useState hook react gives us two things in the form of an array, a state variable and a function to update the state variable. Now whenever this state variable changes react will immediately update the UI. Whenever the state variable changes React re-renders the whole component. Whenever a state variable is updated React re-renders the entire component(Reconciliation).
3. Hooks are just normal JS functions which React gives us to obtain a certain functionality.
4. There are 2 ways to call an API. *Read about microservices and monolith
    a) Load -> Call API -> Render the page
    b) Load -> Show something on the page -> Call API -> Render the page  ==> This is mostly preferred as the page will be available all the time. To use this functionality React gives us access to the most important "useEffect" hook.
5. useEffect() takes in a callback function and that function is called whenever useEffect wants it to be called. This function is called after every component render and component render happens whenever there is a state change or there is any props change. If we don't want to run the useEffect on every re-render we can pass a dependency array to it. If that is not dependent on anything then it will be called just once when the page loads for the first time. It's a hook that React gives us and it's callled after the component renders.
6. When you have a useEffect with a callback function with empty dependency array, it will be called once after first render. Now if the dependency array has something then it will be called once after render and everytime the dependency is rendered. So the flow happens like this ==> First the page is rendered => the initial data is rendered => then the page loads with final data. We can return a function in useEffect hook mainly whenever we want to unmount the component.

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 7#

1. In useEffect if there is no dependency array mentioned (apart from a blank array) it will be called after each and every render. If a blank array is kept then it means there is no dependency and it will be called only after the first render.
2. createBrowserRouter => function that we get from "react-router-dom" that helps us to create routing. It takes some configuration in the form of an array and each path is an object having these 2 parameters.
    a) path => denotes the path
    b) element => denotes which component will be loaded for the particular path.
    Note:- Create the router below the component as everything runs in a sequence.
3. RouterProvider => component that we get from "react-router-dom" that helps us to provide he routing to our app. It passes it like a prop.
4. React Router DOM gives us a hook "useRouteError" which gives us an error object, it gives us an information on what type of error we have and we can display this on our page to show what kind of error we have.
5. The problem with anchor tag is that it refreshes the entire page. React pages are SPA (Single Page Applications), they don't make a network call when we change pages. To avoid this "react-router-dom" gives us a "Link", used exactly like our anchor tag(replace "href" with "to"). Behind the scenes Link tag uses and anchor tag only.
6. There are 2 types of routing => 
    a) Client side routing => When we click on a page it goes to another page without making a network call, we just load a different component.
    b) Server side routing => Way by which all our pages come from the server.
7. We can create multiple children of our Route. "React-router-dom" gives us access to "Outlet" component to create nested routes and this will be filled by the children configuration. It's a place where we an fill our children configs.
8. "React-router-dom" gives us access to a hook called as "useParams" which reads the dynamic url and takes the "id" from the browser. The best thing about creating more and more components is that it makes the code "modular", "reusable", "cleaner", "maintainable", "testable". There is also something called as "useSearchParams()" hook which is used when the id is attached with something else in browser[Ex:- youtube video id has "/watch?v=" with it so we can't use useParams hook here]. Read about => URLSearchParams.

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 8#

1. React initially started with class based components, the most important part of class based component is the render() method. Just like in functional components return a JSX here similarly here render method returns a JSX.
2. The "props" in functional component is replaced by "this.props" in class based components. A "constructor" is a method that is called automatically during the creation of an object from the class. The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, we should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
3. Constructor is something that is used for initialization and it is a place where the state variables are created. Whenever we load a class a constructor is called first. In class based components all the state variables are created as a part of the same object.
4. In class based components first the constructor is called then the class is rendered and then componentDidMount() is called.
    constructor() ==> Render() ==> componentDidMount(). So the best place to make an API call in class based component is componentDidMount().
5. Reason why constructor() is called first because its the place where things are initialized first. Whenever React renders it does it in 2 phases
    a) Render Phase => It includes render() and constructor(). This is the phase where the DOM is updated.
    b) Commit Phase => It includes componentDidMount(). This is the phase where React is actually modifying the DOM and then calls componentDidMount().
6. Because the Commit Phase takes time(because API call takes time) so React tries to complete the render phase first for all the child components before starting the commit phase. When the commit phase starts and there are 2 children and 1 parent then react will complete the commit for the first, then second and then parent. So the chronology is as follows:-
    Parent Constructor => Parent Render => First child constructor => First child render => Second child constructor => second child render => first child componentDidMount() => second child componentDidMount() => Parent componentDidMount().
7. componentDidMount can be made async but useEffect can't be, why??? || find the purpose of constructor(props) and super(props)
8. When there is an API call or any state changes in componentDidMount() phase the component re-renders and updates which called the componentDidUpdate() phase. Basically after first render componentDidMount() is called and after next every re-render componentDidUpdate is called. componentWillUnount() will be called when the component is unmounted from the DOM tree, basically when we move to someother page leaving the current page.

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 9#
1. We build functions in JS so that we can wrap up a small logic into a function and to benefit from these 3 things -> 
    a) Modularity => breaking down code into meaningful pieces
    b) Readability c) Reusability
2. Difference between hook and a functional component -> functional component returns a JSX whereas hooks returns a JS/array/value.
3. Window: online event => an event listener, when you go online the browser detects it. Clear event listeners once you go out of the component else browser will keep on storing it. This can be done in unmounting part of useEffect.
4. In large scale production ready apps we cant ask the bundler to have just one index.js file. This is the reason we do Chunking/Code Splitting/Dynamic Bundling/Lazy Loading/On demand loading. All of these are same concepts. Bundling is good but to a certain limit, till the time it's logical.
5. To do lazy loading we do that inside the lazy() function which comes from React Library as a named import. When we load the component on demand loading react tries to suspend it upon rendering because the code is not there. To solve this we use "Suspense", which takes care of the suspending part automatically.
6. Suspense takes a prop known as "fallback" which loads the shimmer unless the actual page is loaded. NEVER dynamically load/lazy load components inside another component because this will be lazy loaded after every render cycle which is not preferred. Always lazy load on the top where you are importing.

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 10#

1. scss -> mordern way of writing css, at the end scss is converted to css. There are different ways to add a css file(know pros and cons  of all of these)
        a) A normal css file.           b) An scss file.            c)Inline css -> it takes a js object in the html tag itself
        d) Using Component or UI libraries like Material UI, Base UI, Ant, Chakra   e) Styled components
    In this we will be using Tailwind CSS. PostCSS -> Tool for transforming CSS to JavaScript.
2. .postcssrc file tells the bundler that while it is building up a developement or a production build, we will be using tailwind so compile our tailwind. We use square bracket notation => w-[200px] to give exact dimentions. Tailwind creates a dynamic class for us in this case.
3. Pros of tailwind -> a) Easy to debug  b) Less code is shipped so bundle size is small    c) No duplicate CSS so time taken is less
        d) Gives more control and is more customisable  e) Everything is done inside our JS file so easy to manage code
    Cons of tailwind -> a) High initial learning curve so for new developers it may take time to grasp it.
                        b) Compromises code readability as the classnames are very big




#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 11#

1. If there is a component and we want to use a local variable within the component that's called a "State" and to pass data from one component to the other we use props. Props are local state for the parent.
2. Prop  Drilling -> Passing down of props down the component tree. We cannot change the state of another sibbling from the same component. In such cases we give control of the state of all the sibblings to the parent, this is called "Lifting the state up".
3. Redux store, React context are a shared store for the entire app from where the state variables can be used across multiple components without undergoing prop drilling. Basically we need a piece of data to be accessible anywhere in our app.
4. createContext() is a function that takes data which will be accessed all across our application. Props and other things are tied to a component which is not the case with React Context. In context.provider we can overide the default value with a state variable (using a prop called "value") that can be modified. It can modify the context for a smaller portion of my app. If any component is outside the context.provider that will have the default value, only the ones inside the provider will have the updated value. The major advantage of context is "Prop Drilling".
5. How to manage more than 1 context? Can a context come inside another context? Can we have multiple nested context?
6. Any component in our app can access the "Context" and any component can modify this context in our app. The best thing about Context is that it is not tied to any component, it stays independent outside the app. Context is like a "useState" for the entire application.
In class based components we use <Context.Consumer></Context.Consumer> to access the context.


#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 12#

1. Redux is also like context where we can have a centralised storage of data, but the difference is it is used only in Large Scale Applications. For small scale applications using context is enough.
2. Redux store is like a big object which have different sections and those are small pieces and all the components in the app will be able to access this store. On the other hand, state variable is restricted to that particular component and props help in passing data between the components.
3. Redux and context helps in accessig data globally, only difference is we can have multiple context but only one redux store. Redux and React are completely different and should not be combined together.
4. We create logical seperation into our store => slices of our store(Ex:- User slice, authentication slice, theme slice, cart slice)
    Basically a slice is a small portion of our store, so all these slices are small parts of our store.
5. In Redux components cannot directly update the store, instead they have to "Dispatch an Action". The action will call a normal JS function and this function will be modifying the cart(This function is called as a Reducer). In case of large applications we don't want random components to modify our store so that is why we make changes via "Action object" so that we can keep a track of each and everything.
 * So ==> we click a button in a React component ==> it dispatches an action ==> it calls a Reducer function ==> it updates the slice of our redux store. * [This is to write in the Redux store]
6. To read the cart in redux store we need to call the "Selector" and this selector will give us the information from the cart that will update the React component. [This is to read from the Redux store] The selector is a hook (useSelector) at the end of the day and which again means thats a JS function. When we use a selector it's also known as "Subscribing to the store" which means reading from the store.
It means that it is sync with the store so whenever the store modifies it will automatically modify the react component and the UI.
7. We install 2 libraries to have the redux in our app.
    i) npm i @reduxjs/toolkit  ==> This is the core of Redux.
    ii) npm i react-redux  ==> This is the bridge between React and Redux.
8. We need to give a provider to provide the store to the React application, we can provide the store to the entire app or some selective components based on our requirement.
9. The Reducer function takes in 2 things -> the initial state and the action payload(This is the place where we will get the items to be added to the cart or "The data which is comming in"). These functions take a state and directly modify it, they don't return anything.
10. 
/**
 * Steps in configuring a redux store:-
 * Create a store => configureStore API from "@reduxjs/toolkit
 *
 * Provide the store to the app in App.js=> Provider API from "react-redux" and used the key "store" and gave access of the store to the app.
 *
 * created a Slice using createSlice API from "@reduxjs/toolkit
 * In create slice we need the below things in the form of an object:-
 *      - name :
 *      - Initial State :
 *          - Items(array) :
 *      - Reducers : {(Its an object having the below things)
 *          - Action Name : Reducer function(Which takes in initial state and action payload) =>{ This function won't return anything }
 *                  }
 *        Export the actions as below
 *          export const {<Action names>} = <Slice Name>.actions
 *
 *        Export the reducers BUT as a "<Slice Name>.reducer" format (Here it will combine all of them to a single reducer)
 *
 *
 *  Now we put the slice in store in the below format in reducer object. Here all the slice created will be added here.
 *       reducer : {
 *                   <Name> : <Slice Name>
 *                  }
 *  
 *   To check if the redux is working fine on our app properly or not check the "Chrome Redux Dev Tools extension"
 */

11. Using useSelector if we subscribe to the entire store then everytime my store changes it will re-render the component, which is a very bad performance issue. Instead we subscribe to the "items in that particular slice of the store" for best performance. To dispatch an action we use useDispatch hook that comes from "react-redux".
12. Read about => Redux documentation, thunks, middleware, early return coding pattern, axios.


#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 13#

1. Reason to do testing in our app ==> There are lot of developers working on 100's of components on a large scale application so adding a new piece of code or making any changes may impact the existing code, so testing the code gives us confidence that we are not breaking the existing code. [Read about "Test Driven Developement" => Basically means writing test cases even before writing the code ] Test Driven Developement is a very good process as it ensures a very good quality of code but it's not preferred by companies as that makes the developement proces very very slow.

2. Different Types of testing:-
    a) Manual Testing => A person tries to do random tests on the code to see if that breaks or not.
    b) Automated Testing => A code testing a code. Ex:- Selenium, 
    c) End 2 End(E2E) testing => It simulates a flow where the entire flow and entire journey of a user on the app is being tested. Ex:- Cyprus. This part is being offloaded to the QA team in many cases where they use a "headless browser". Basically these processes replace the manual testing with a code.
    d) Unit Testing => Core job of developers where they test small unites in the code.
    e) Integration Testing => Testing the integration between the components

3. Jest -> Delightful JS testing framework and React Testing Library uses jest behind the scenes. React Testing Library makes the testing in react very efficient. A convention to write test file names => <filename>.test.js

Steps for testing:- 

/**
 * 
 * Install React Testing Library.  => npm install --save-dev @testing-library/react
 * Install Jest   => npm i -D jest
 * Configure Jest => Create a Jest.config file => npx jest --init => Remember we use jsdom(browser-like) environment for it. Also use   "babel" instrument code for coverage.
 * After all the configuration we can directly run our tests as "npm run test" => test command is already configured as "jest" by parcel in package.json.
 * After Jest version 28 "jest-environment-jsdom" is no longer shipped by default, so now we need to install it separately. => npm i -D jest-environment-jsdom.
 * After running npm run test => jest will try to find out the test cases in our entire file. Ex:- "**/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)" => this means jest is looking for "__tests__" folder and in that it's looking for "spec.js/spec.ts/test.js/test.ts" type of folders.
 * Now we create our first test file. Remember whatever files we put insie "__tests__" folder jest will consider all of them as testing files.
 * Configure jest bable config as JS files don't understand the "import" statements or any other ES6 statements. Jest needs some Babel packages for this. Now babel will make Jest understand that there is something called as ES6 statements and helps it to understand that.
            => npm install --save-dev babel-jest @babel/core @babel/preset-env
 * Now create a babel.config.js and configure the below one. We can also put this code in ".babelrc" file which was originally created to remove the console.log() for the end user by writing some configs. Both babel.config.js and .babelrc are valid ways to do so.
                module.exports = {
                            presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
                                };
 * Now the above code will throw an error on ".babelrc" file as that file accepts only JSON, so convert everything into "" and remove the "module.exports" part. [JSON and JS objects are not same]
 * Wrote and ran test cases, gitignored the coverage folder.
 * Wrote unit test cases for header and see what we can expect when we load the header. So test cases will be
        a) See if the logo loads        b) Cart items should be 0        c) Status should be online.
 * Add a configuration to the "presets" part in ".babelrc" file as mentioned below to make jest understand the JSX part ot JSX statements of React. Also install => npm i -D @babel/preset-react
                        ["@babel/preset-react", {"runtime": "automatic"}]
        To write render() inside the testing file the syntax is => const <Variable Name> = render(<Component Name />)
    The Variable Name returns a Vitual DOM object if we log inside the console. 
 * Create Mocks as jsdom doesn't understand a png image. Since jsdom doesn't have the redux so then we wrap the react component inside a provider(which will be imported from react-redux). In jest.config.js have a "moduleNameMapper: {}" which tells that all the .png files that we have take it from the dummy image. The format to do this is mentioned below.
            moduleNameMapper: {
    "\\.(png|jpg|svg)$" : "../Mocks/dummyLogo.js"  //Here we are mapping all the .png/.jpg/.svg files with the dummyLogo.js
   },
 * The jsdom doesn't understand Link and routing or from where the routing is comming from so we need to give it router as well. So in place of "createBrowserRouter" [because jsdom is not a Browser] we use "StaticRouter" imported from "react-router-dom/server". This router can work without browser. Also we have to import a "Provider" from react-redux and provide our store inside it for jsdom to unserstand.
 * We need to mock our API call because jsdom doesn't understand fetch() as that is provided to us by the browser. The jsdom doesn't have network access and cannot make network calls. So for that we use "global.fetch" and a dummy function called "jest.fn()" given to us by jest. The syntax is => **More details on point no 11.
    global.fetch = jest.fn(()=>{
        return Promise.resolve(
        {
        json: ()=> {return Promise.resolve(<Pass the data that you have to mock>)}  //Like this we create our own dummy fetch to fake..
        }                                                                   // ..the network call and attached that to a global object
    )
})
        Now our code will automatically undertand what is happening inside our fetch
 * expect(<Variable Name>).toBeInTheDocument() //This checks that Shimmer is actually there in the component or not.
    toBeInTheDocument() comes from @testing-library/jest-dom => npm i -D @testing-library/jest-dom
 * waitFor() => Is a function given to us by React Testing Library to wait for sometime untill I get the component or the portion on the screen loaded. Ex:-
                await waitFor(() =>  [Make sure the corresponding test function has async written]
                expect(screen.getByTestId("search-btn"))
 * To Moch typing something on the search bar we fire an event[fireEvent] given to us by react-testing library.
 * 
 * 
 * 
 */

 4. The "test()" function takes in 2 arguments => a) Name of the test  b) Callback function which will have the code that the test case will execute. Every test case should have an expect() function or an expectation inside it, also called as assertion.
        EX:- test("<Name of the test we are doing>", ()=>{
            expect(<Write the function to be tested>).toBe(<Expected result>)
        })
 5. Find the difference between JSON and JS object. Read about "jest babel config", "jsdom".
 6. During testing we don't run the app on the browser, we run the test on seperate environment called "jsdom". Say we are testing the "Header" component and assume jsdom to be a small machine. So in that small machine we will load the header using a render function that comes from React Testing Library. The "Coverage" folder gives us the coverage report, basically it tells us how many test cases we have written, how much code we have covered and we need to put this folder in .gitignore.
 7. Jsdom is a container that doesn't have any root(Like we create a root element while trying to load the component in browser) so here we use a special render() provided to us by React Testing Library. It also doesn't understand JSX so we install @babel/preset-react.
 8. Jsdom tries to read png images as a javascript statement and throws and error. In React testing whenever jest doesn't understand something and the testing breaks we create a "mock" out of it. In this case we will create a dummy image for us. This Dummy image will be a JS file as the jsdom understands only that.
 9. Here to help us jest comes into play, so in jest.config.js have a "moduleNameMapper: {}" which tells that all the .png files that we have take it from the dummy image. The format to do this is mentioned below.
            moduleNameMapper: {
    "\\.(png|jpg|svg)$" : "../Mocks/dummyLogo.js"  //Here we are mapping all the .png/.jpg/.svg files with the dummyLogo.js
   },
10. To differentiate one HTML tag of the React component with the other during the React testing we use "data-testid" for running in jsdom unlike using "id" in the case of a browser. 
11. fetch() is provided by browser for making network calls and it returns a promise in the form of a readable stream and we convert that readable stream into json and this json is again returns us a Promise.
12. In package.json in "scripts" part if we mention => "watch-test": "jest --watch" it creates a Hot Module Reloading(HMR) for testing so dont have to run "npm run test" repeatedly. So we need to run => npm run watch-test.


#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 14#

1. Topics that were asked in machine coding rounds of interviews:-
        a) Todo List       b) Fetch data from API   c) Forms    d) Quiz App    e) Nested Filters    f) Carousels    g) Hooks
        h) API Call Data    i) searching, sorting   j) Infinite scroll      k) Higher Order Components      l) E-commerse website
        m) Counter App      n) Debouncing       o) Tik Tac Toe      p) N level nested comments      q) Promises chaining        r) Design the given layout in HTML CSS(Ex:- Wall Clock)          s) Scopes and Closures     t) Caching
    For JS these topics are very very important:-
        a) setTimeout -> calculte the output        b) Closures -> explain with an example or calculate the output
        c) Debounce vs Throttle => Either code the output or explain the difference
        d) "this" keyword        e) Explain the difference between Angular, React and Vue frameworks.

2. The most crucial part of this machine coding interview is managing the time and also when the interviewer is watching us, so to be good at interviews we need to => Practice a lot(before the interview) AND Planning well(during the interview). So the first thing we need to do in the machine coding round is "To clear out all the questions before starting the code."
\\\\\\\\\\\\\\\\\\\\\\ Requirement Clarification \\\\\\\\\\\\\\\\\\\\\\
    a) What features we need to develop?
    b) Tech Stack -> Tell the interviewer that we will use tailwind CSS for styling, JavaScript, Redux or Context API or something else and justify all the tech stacks that you are using. Incase the app has forms the we will use FORMIK libraries. For routing we will be using react-router-dom. Mention the bundler we are using, the testing libraries we will be using. So in short the below things:-
            i) Styling -> Tailwind CSS
            ii) Data Management Library -> Redux/Context API
            iii)Forms -> Formik
            iv)Routing -> React-router-dom
            v)Bundler -> Parcel/Webpack
            vi)Testing Library -> react-testing-library/jest
        **Don't spend more than 5 mins on the above discussion**
3. The next 5mins we need to spend on planning or making a very low level design, how we will structure our components and how our data will flow, how we will use data and ui level. Remember -> "The more planning" => "The better code"
4. Search why reportWebVitals.js , <React.StrictMode> is used in create-react-app.
5. While writing a code for a list of items => do for one item => after that works fine [do console.log() to check] => Iterate that for rest of the items using map => This makes debugging easier. While using APIs if the data doesn't come the try doing an early return empty check and check first.
6. Higher Order Component => A function that takes in a component and returns another component. Takes an existing component and modifies it a little.


#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 15#

1. Debouncing => In search bar when we type something very fast it skips some of the events because making an API call on each key stroke is useless. When we type slow it makes an API call on each and every key stroke. Basically if the user types very fast he doesn't need any intermediate suggestions so it's useless to call an API on each key stroke. It makes a huge difference in API calls on large applications where thousands of people are searching things every second. So for example
---> Debouncing with 200ms means => if difference between 2 key strokes is < 200ms ==> Decline the API call, and if difference > 200ms ==> make the API call.
2. Here when we run the debouncing using a setTimeout inside useEffect hook with a dependency, everytime the dependency updates a new timer is created, so we need to make sure to close the previous timer. Ex:-

    useEffect(() => {
    //Make an API call after every key press but if the difference between 2 keypress is less than 200ms then decline the API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {              //Generally after everytime the "searchQuery" updates it should call the useEffect hook and run the setTimeout function, but then 
      clearTimeout(timer);      //everytime there will be a fresh timer of 200ms generated after every change of "searchQuery". So we make sure to clear the prev.
    };                          //timer after evert change of the "searchQuery".
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[0]);
    };

    So the process goes like this ==>
    * keypress => i
    * render the component and triggers the reconciliation process
    * useEffect() is called
    * start the timer => make api call after 200ms

    * keypress => ip [Here p is pressed before 200ms]
    * destroys/unmounts the component [calls the return method of the useEffect and clears the previous 200ms timer]
    * re-render the component and triggers the reconciliation process again
    * useEffect() is called again
    * New timer of 200ms is setup
    * 
    * If the keypress is done after 200ms the it will automatically make the API call. In every keypress the return function tries to clear the timer, but if the  next keypress is called after 200ms then the previous timer has already expired so there will be nothing to clear. Only when the keystrokes are done before 200ms then the return function will keep on clearing the preious running timers.


#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 16#

1. Read about -> pagination, infinite scroll, socket programming, web socket, rendering, observables, web rtc [in terms of relevance live chat >>>  infinite scroll  >>>>  pagination]
2. There are 2 types of applications :- 
        a) Applications which have live streaming => There is always something that keeps rapidly changing on the page, we need to fetch data again and again, also called as "near real time data".
        b) Applications without live streaming
Challenges of a live chat => a) To get data live    b) Constantly update the UI    c) Make sure that the page doesn't freeze even if constantly chats are coming in.
The first problem is to get the data in the data layer and the second one is to update the UI simultaneously.
3. There are 2 ways we can handle the live data in the applications with live streaming => 
        a) Using Web Sockets => It's a 2 way connection established, it's like a handshake between the server and UI, so we can quickly send data from the either side, like a bi-directional live data, so now we can immediately send data from both sides without any regular intervals(data can come in anytime).        [UI <==> Server]. Ex:- Applications like Zerodha, WhatsApp, Slack, Discord [basically all time critical apps or applications where we can see timestamps]
        b) API Polling => The data flows from server to UI after a regular interval, it's one directional. Ex:- Applications like Gmail, Crickbuzz.
4. useMemo => Hook increases the performance of our app. 
                useMemo(<Function whose result is to be memoised>, <Dependencies>)
                Here useMemo memoises the result of the function on every re-render "except" when the <Dependencies> change.
        Example:- useMemo(getData(), [text]) => This means memoise the value of getData() on every re-render, except when the value of "text" changes.
    useCallback is same as useMemo but the difference is it memoises the function defination between re-renders.
5. useRef => Hook used to keep some data of our component that we don't want to re-render. We can use a local variable but and get they updated behind the scenes but doesn't get rendered. But if we use state variable that wll re-render, so here useRef avoids the re-render of the state variable. Another important point is when a component re-renders the value of local variables get refreshed to the initial value again whereas the value of state variables stay intact. 
Now say we need to persist the value of the local variable during re-renders and don't want them to change, this is where we use useRef hook so that React keeps a track of it. Now useRef doesn't return a value, it returns an object with a current value hard coded inside it. Ex:=>
        const ref = useRef(0)  ====> This will return ref variable like this --- ref = {current: 0}
        To update it we can diretly write like this => ref.current = ref.current+1
    Ref never re-renders the component.


#####  ############# ####################### ################################# ##############################################

# Namaste React Notes#

1.     Why is React called a library? Why not a framework?🤔
-       A Library is one that can be applied to our existing code wherever we need it, whereas a Framework is a template that builds the whole software. The developer’s code is just plugged in by the framework at some places as needed.
-       React is a JS Library, not a full-fledged Framework. It can work independently in a small portion of our page like a navbar or header without affecting the rest of the code. It works only in that portion of the page which has been defined as the root element of React.

2.     The fundamental philosophy of React in web apps?😎
-         “Efficiently manipulate the DOM using JS”
-         “Rather, if you want to do anything on the webpage, do it using JavaScript”

3.     Is create-react-app the only way to configure our project with React?
-       Create-react-app is not the only way! React CDN is another way to inject React in our code. But it is important to note that CDN is not the best way, still we should be aware of it.

4.     Significance of cross-origin attribute of script tag?💫
-       Well, whenever we want to load some resources (JS files, css, image etc) from a server other than our origin server, we need to use this attribute.
-       Cross-origin with a <script> element allows the browser to execute the js file without the exchange of user-credentials.

5.     Why 2 separate packages – react and reactDOM?👀
-       Because ‘react’ package gives the core React code that is needed to run React anywhere, while ‘reactDOM’ is useful for DOM operations in a web app ie. it is specific to the browser only.
-       React does not just build web apps, but also mobile and desktop apps, so the separation of core ‘react’ from ‘reactDOM’ makes a lot of sense, since we don’t need ‘reactDOM’ in all these platforms.

6.      What is React and how is it different from other frameworks?
        React is a library and it has it's own beliefs like mentioned below:-
        i) Virtual DOM -> React utilizes a virtual DOM and in-memory representation of the actual browser DOM. When the state of a component changes React creates a new Virtual DOM representation and compares it with the previous one.
        ii) View Oriented -> React is view oriented, and is primarily concerned with the view layer of the application. It provides a declarative way to build UI components and manages the rendering of those components effeciently.
        iii)Unidirectional -> React follows a unidirectional data flow, where data flows from parent to child components. This promotes a predictble and easier to manage data flow and helps in debugging and understanding the application state.
        iv) Component based -> React encourages component based architechture where UI are broken down into modular and reusable components, components can be composed and nested to create complex UI structures.

7.      What is the purpose of React's Virtual DOM?

8.      How does React handle updates and rendering? [React Reconciliation, Diffing Algorithm]

9.      How does data flow and what are "props" and "state"?  [Props are read only and state is an internal parameter]

10.     Difference between client and server side rendering?

11.     What is the use of "refs" in react?

12.     What is React Fiber?

13.     What are Synthetic Events in React?

14.     Why were hooks introduced?