export const  setFoods=(Foods)=>{
    return{
        type: ActionTypes.GET_FOOD,
        payload:Foods,
    }
};

export const choosefoods=(Foodss)=>{
    return{
        type:ActionTypes.PUT_FOOD,
        payload:Foodss,
    }
};

export const removefoods=(Food)=>{
    return{
        type:ActionTypes.DELETE_FOOD,
        payload:Food,
    }
};

