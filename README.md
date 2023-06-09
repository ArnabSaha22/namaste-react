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
8. "React-router-dom" gives us access to a hook called as "useParams" which reads the dynamic url and takes the "id" from the browser. The best thing about creating more and more components is that it makes the code "modular", "reusable", "cleaner", "maintainable", "testable"

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
4. createContext() is a function that takes data which will be accessed all across our application. Props and other things are tied to a component which is not the case with React Context. In context.provider we can overide the default value with a state variable that can be modified. I can modify the context for a smaller portion of my app. If any component is outside the context.provider that will have the default value, only the ones inside the provider will have the updated value. The major advantage of context is "Prop Drilling".
5. How to manage more than 1 context? Can a context come inside another context? Can we have multiple nested context?
6. Any component in our app can access the "Context" and any component can modify this context in our app.


#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 12#

1. Redux is also like context where we can have a centralised storage of data, but the difference is it is used only in Large Scale Applications. For small scale applications using context is enough.
2. Redux store is like a big object which have different sections and those are small pieces and all the components in the app will be able to access this store. On the other hand, state variable is restricted to that particular component and props help in passing data between the components.
3. Redux and context helps in accessig data globally, only difference is we can have multiple context but only one redux store.