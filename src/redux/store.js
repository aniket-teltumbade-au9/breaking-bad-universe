import { rootReducer } from "./rootReducer";
import  thunk  from "redux-thunk";

const { createStore, applyMiddleware } = require("redux");


export const store=createStore(rootReducer, applyMiddleware(thunk))