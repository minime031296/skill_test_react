import {legacy_createStore, combinedReducer} from 'react-redux'


let initialState = {}

let combinedReducer = {
 product : ProductReducer
}

export const store = legacy_createStore()