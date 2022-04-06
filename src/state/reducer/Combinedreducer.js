import { combineReducers } from "redux";
import{Apireducer}from '../reducer/Apireducer';

const reducers = combineReducers({
    allreducers:Apireducer,
});
export default reducers;