import { ActionTypes } from '../action/Actiontype';

const intialState = {
  foods: [],
  sidedish: []
};

export const Apireducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_FOOD:
      console.log(action, 'reducer');
      return { ...state, foods: action.payload };
    case ActionTypes.POST_FOOD:
      return { ...state, foods: action.payload };
    case ActionTypes.DELETE_FOOD:
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};

export const sidedishreducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SIDEDISH:
      console.log(action, 'reducer');
      return { ...state, sidedish: action.payload };
    case ActionTypes.POST_SIDEDISH:
      return { ...state, sidedish: action.payload };
    case ActionTypes.DELETE_SIDEDISH:
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};
