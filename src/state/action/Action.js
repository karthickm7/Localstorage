import { ActionTypes } from './Actiontype'
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type';

export const fetchfood = () => {


    return async (dispatch) => {

        axios.get("http://localhost:3006/foods")
            .then((res) => {
                console.log("res",res)
                dispatch({ type: ActionTypes.FETCH_FOOD, foods: res.data })
               
             } )
           
    }
}



// return{ 
//     type: ActionTypes.GET_FOOD,
//     payload:Foods,
// }


export const addfoods = () => {
    return {
        type: ActionTypes.POST_FOOD,

    }
};

export const choosefoods = (Foodss) => {
    return {
        type: ActionTypes.PUT_FOOD,
        payload: Foodss,
    }
};

export const removefoods = (Food) => {
    return {
        type: ActionTypes.DELETE_FOOD,
        payload: Food,
    }
};

// export const fetchfood =()=>{
//     return(dispatch)=>{
//         dispatch(ActionTypes.GET_FOOD)
//         axios.get("http://localhost:3006/foods")
//         .then(response =>{
//             console.log(response.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })

//     }
//}
