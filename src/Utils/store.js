import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice, //Importing slice like this "Name of the Slice" : "Slice"
  },
});

export default store;

/**
 * Steps in configuring a redux store:-
 * Create a store => configureStore API from "@reduxjs/toolkit
 *
 * Provide the store to the app => Provider API from "react-redux" and used the key = store and gave access of the store to the app.
 *
 * created a Slice using createSlice API from "@reduxjs/toolkit
 * In create slice we need the below things in the form of an object:-
 *      - name
 *      - Initial State
 *          - Items(array)
 *      - Reducers(Its an object having the below things)
 *          - Action Name : Reducer function(Which takes in initial state and action payload) =>{ This function won't return anything }
 *
 *        Export the actions as below
 *          export const {<Action names>} : <Slice Name>.actions
 *
 *        Export the reducers BUT as a "<Slice Name>.reducer" format (Here it will combine all of them to a single reducer)
 *
 *
 *  Now we put the slice in store in the below format in reducer object. Here all the slice created will be added here.
 *       reducer : {
 *                   <Name> : <Slice Name>
 *                  }
 */
