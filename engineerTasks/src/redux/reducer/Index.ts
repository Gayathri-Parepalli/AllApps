import {combineReducers} from "redux";
import {hitsReducer,rowReducer} from "./AppReducer";

export const reducer=combineReducers({
	hits:hitsReducer,
	row:rowReducer
})
export type RootState=ReturnType<typeof reducer>