const reducer = (state=[],action)=>{
    switch (action.type){
        case ActionTypes.GET_FOOD:
            return [action.payload]
        case ActionTypes.PUT_FOOD:
            return [action.payload]  
        case ActionTypes.DELETE_FOOD:
            return [action.payload]      
    }
}