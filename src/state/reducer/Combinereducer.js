import { combineReducers } from "redux";
import { Apireducer, sidedishreducer } from "./Apireducer";

const reducers = combineReducers({
  allreducers: Apireducer,
  sidereducer: sidedishreducer,
});
export default reducers;
