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
8. For Functional components, they are just javascript functions that returns some JSX elemnt. Make sure to start the name in capital letters.
9. A React element is a normal JavaScript variable, so to add that in a React functional component or to add that in another React element we just enclose it inside {}. Now to add a React functional component in another element or a component we just enclose it inside < Component Name />
10. Whatever data comes inside {} JSX won't blindly run it, it will sanitize and see if the data is ok to be processed. JSX Expression must have only one parent element. We can use React.Fragement that is used as an empty tag to wrap up the entire JSX. We can use <> </> in place of React.Fragement. Can we use multiple roots? Can we use a React.Fragement inside another React.Fragement ?

#####  ############# ####################### ################################# ##############################################

# Namaste React Episode 4#

1. Before building any app make sure to plan it first properly and then start coding.