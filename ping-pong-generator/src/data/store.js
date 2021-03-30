
import { createStore, compose, applyMiddleware } from "redux"
import persistState from "redux-localstorage"
import reducer from "./reducer"
import initial from "./initial"
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(applyMiddleware((thunk))));

export default store;