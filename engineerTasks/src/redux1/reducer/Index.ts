import {combineReducers} from "redux";
import {hitsReducer,rowDataReducer} from "./AppReducer";

export const reducer=combineReducers({
	hits:hitsReducer,
	row:rowDataReducer
})
export type RootState=ReturnType<typeof reducer>