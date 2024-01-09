import { useReducer,useEffect } from "react"
import axios from 'axios'
const ACTION = {
    API_REQUEST:"api-request",
    FETCH_DATA:"fetch-data",
    ERROR:'error'
}


const initial = {
    loading:false,
        error:null,
        data:[]
}

function reducer(state,{type,payload}){
    switch(type){
        case ACTION.API_REQUEST:
            return {...state,data:[],loading:true}
        case ACTION.FETCH_DATA:
                return {...state,data:payload.data,loading:false}

        case ACTION.ERROR:
                    return {...state,data:[],error:true}

        default:
            return state;
    }
}

function useFetch (url){
  const [state,dispatch] = useReducer(reducer,initial)

  useEffect(()=>{
     dispatch({type:ACTION.API_REQUEST})
     
     axios.get(url).then((res)=> dispatch({type:ACTION.FETCH_DATA,payload:res.data})).catch((err)=>{
        dispatch({type:ACTION.ERROR,payload:err})
     })
  },[url])
    return state
}

export default useFetch