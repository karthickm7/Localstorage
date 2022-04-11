import { combineReducers } from "redux";
import { Apireducer } from "../reducer/Apireducer";
import { sidedishreducer } from "../reducer/Apireducer";

const reducers = combineReducers({
  allreducers: Apireducer,
  sidereducer: sidedishreducer,
});
export default reducers;
