// all importing will be done from action.js

let initialState = {
    loading : false,
    product : [],
    error : false
}

let ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case API_LOADING:
            return [...state, {loading:true}]

        case API_SUCCESS:
            return [...state, {loading:false, product: action.payload, error:false}]
        case API_ERROR:
            return [...state, {loading: false, product: [], error: action.error}]
        default:
            return {...state}
    }
}