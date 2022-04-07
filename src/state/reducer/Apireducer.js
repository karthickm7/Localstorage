import{ActionTypes} from '../action/Actiontype';

const intialState ={
    foods:[]
};

export const Apireducer=(state=intialState,action)=>{
    switch (action.type){

        case ActionTypes.FETCH_FOOD:
            console.log(action,"reducer")
            return {...state , foods:action.payload}
        case ActionTypes.POST_FOOD:
            return{...state,foods:action.payload}   
        case ActionTypes.DELETE_FOOD:
            return state.filter((user) => user.id !== action.payload)  
        case ActionTypes.PUT_FOOD:
            return{...state,foods:action.payload}     
        default:
            return state ;   
    }
}
