import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

// import appReducer from "./app-reducer";

let reducers = combineReducers({
    // app:  appReducer,
    form: formReducer
});


export const store = createStore(reducers, applyMiddleware(thunkMiddleware));



