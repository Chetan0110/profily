import { combineReducers } from "redux";
import UserReducer from "./reducer_user";

const rootReducer = combineReducers({
    userData: UserReducer
});

export default rootReducer;
