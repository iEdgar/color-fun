import axios from 'axios';

export function loadColor(){
    return(dispatch)=>{
        return axios.get("http://www.colr.org/json/colors/random/").then((response)=>{
            dispatch(changeColor("#"+response.data.matching_colors));
        })
    }
}

export function changeColor(color){
    return{
        type:"CHANGE_COLOR",
        color:color
    }
}