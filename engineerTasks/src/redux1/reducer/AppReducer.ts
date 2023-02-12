import {ActionTypes} from "../contents/ActionTypes";

const initialState={
	hits:[],
	row:[]
}
type reducerType={
	type:string,
	payload:any
}

export const hitsReducer=(state=initialState.hits,{type,payload}:reducerType)=>{
	switch(type){
		case ActionTypes.FETCH_DATA:
		return [...state,...payload]
		default:
		return state
	}
}

export const rowDataReducer=(state=initialState.row,{type,payload}:reducerType)=>{
	switch(type){
		case ActionTypes.ROW_DATA:
		return payload
		default:
		return state
	}
}