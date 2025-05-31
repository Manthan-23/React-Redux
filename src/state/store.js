import itemReducer from "./reducers";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { createStore } from "redux";

export const store = createStore(itemReducer, {}, applyMiddleware(thunk))