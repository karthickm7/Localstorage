import reducers from "../state/reducer/Combinedreducer";
import ThunkMiddleware  from "redux-thunk";
import { createStore, applyMiddleware ,compose } from 'redux';

const middleWare=[ThunkMiddleware]
const store = createStore(reducers,(applyMiddleware(...middleWare)));
export default store;