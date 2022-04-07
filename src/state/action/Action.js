import { ActionTypes } from './Actiontype'
import axios from 'axios'
export const fetchfood =() => {
    return async (dispatch)=>{
        await axios.get("http://localhost:3006/foods")
    .then((res)=>{
        dispatch({type:ActionTypes.FETCH_FOOD,payload:res.data})
        console.log(res,"res")
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}

export const addfood =(postfood) => {
    return async (dispatch)=>{
        await axios.post("http://localhost:3006/foods",postfood)
    .then((res)=>{
        console.log(res,"putf")
        dispatch({type:ActionTypes.POST_FOOD,payload:res.postfood})
        
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}

export const removefood =(items) => {
    return async (dispatch)=>{
        await axios.delete(`http://localhost:3006/foods/${items}`)
    .then((res)=>{
        console.log(res,"putf")
        dispatch({type:ActionTypes.DELETE_FOOD,payload:res.items})
        
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}

export const editfoods =(editfood,id) => {
    return async (dispatch)=>{
       await axios.put(`http://localhost:3006/foods/${id}`,editfood)
       
    .then((res)=>{
        console.log(res,"putf")
        dispatch({type:ActionTypes.PUT_FOOD,payload:editfood})
        console.log('edit',editfood)
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}
