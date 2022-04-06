import{ActionTypes} from '../action/Actiontype';

const intialState ={
    foods:[]
};

export const Apireducer=(state=intialState,action)=>{
    switch (action.type){
        case ActionTypes.FETCH_FOOD:
            return {...state , foods:action.payload}
        case ActionTypes.GET_FOOD:
            return {...state , foods:action.payload}

        default:
            return state    
    }
}
