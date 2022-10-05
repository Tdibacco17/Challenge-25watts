import axios from "axios";

export function getSlider(){
    return async function(dispatch){
        const json = await axios.get("http://localhost:3000/slider");
        return dispatch({
            type: "GET_SLIDER",
            payload: json.data
        })
    }
}

export function getAboutUs(){
    return async function(dispatch){
        const json = await axios.get("http://localhost:3000/aboutUs");
        return dispatch({
            type: "GET_ABOUT_US",
            payload: json.data
        })
    }
}

export function getServices(){
    return async function(dispatch){
        const json = await axios.get("http://localhost:3000/services");
        return dispatch({
            type: "GET_SERVICES",
            payload: json.data
        })
    }
}

export function getProducts(){
    return async function(dispatch){
        const json = await axios.get("http://localhost:3000/products");
        return dispatch({
            type: "GET_PRODUCTS",
            payload: json.data
        })
    }
}

export function getMoreDetails(){
    return async function(dispatch){
        const json = await axios.get("http://localhost:3000/moreDetails");
        return dispatch({
            type: "GET_MORE_DETAILS",
            payload: json.data
        })
    }
}

