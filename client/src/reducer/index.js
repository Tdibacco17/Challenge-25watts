const initialState ={
    slider:[],
    aboutUs: [],
    services: [],
    products:[],
    moreDetails: []
}

export default function rootRedcuer(state = initialState, action) {
    switch(action.type){
        case "GET_SLIDER":
            return {
                ...state,
                slider: action.payload,
            }
        case "GET_ABOUT_US":
            return {
                ...state,
                aboutUs: action.payload,
            }
        case "GET_SERVICES":
            return {
                ...state,
                services: action.payload
            }
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload
            }
        case "GET_MORE_DETAILS":
            return{
                ...state,
                moreDetails: action.payload
            }
        default:
            return state;
    }
}