import { combineReducers } from "redux";
import { characterReducer, eventReducer, listReducer } from "./index";

export const rootReducer = combineReducers({
	character: characterReducer,
	list: listReducer,
	event: eventReducer,
});
