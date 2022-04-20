import reducers from "./reducer/Combinereducer";
import ThunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const middleWare = [ThunkMiddleware];
const store = createStore(reducers, applyMiddleware(...middleWare));
export default store;
