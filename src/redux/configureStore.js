// import { combineReducers, createStore } from "redux"
import { combineReducers, createStore } from "@reduxjs/toolkit"
import counterReducer from "./ducks/counter"

const reducer = combineReducers({ counter: counterReducer })

const store = createStore(reducer)

export default store
