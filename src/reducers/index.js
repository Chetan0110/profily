import { combineReducers } from "redux";
// import { routerReducer } from 'react-router-redux';

import UserReducer from "./reducer_user";

const rootReducer = combineReducers({
    userData: UserReducer
    // routing: routerReducer
});

export default rootReducer;
