import { combineReducers } from 'redux';
import data from './fetchReducers';
import { routerReducer } from "react-router-redux";

export default combineReducers({
	data,
	router: routerReducer
})
