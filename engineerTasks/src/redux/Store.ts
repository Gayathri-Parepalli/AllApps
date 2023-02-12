import {createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import {reducer} from "./reducer/Index";

declare global{
	interface Window{
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:typeof compose
	}
}
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createStore(reducer,composeEnhancer(applyMiddleware(thunk)));