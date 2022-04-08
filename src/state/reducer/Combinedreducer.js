import { combineReducers } from "redux";
import{Apireducer}from '../reducer/Apireducer';
import {Addreducer}from '../reducer/Apireducer';
import {removereducer} from '../reducer/Apireducer'


const reducers = combineReducers({
    allreducers:Apireducer,
    postreducer:Addreducer,
    deletereducer:removereducer
});
export default reducers;