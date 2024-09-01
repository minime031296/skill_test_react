import {legacy_createStore, combinedReducer} from 'react-redux'
//import here productReducer

let initialState = {}

let rootReducer = combinedReducer({
 product : ProductReducer
})

export const store = legacy_createStore(rootReducer, initialState)