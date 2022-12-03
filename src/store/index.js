import { combineReducers, createStore } from "redux";
import pageReducers from "./pageReducers";

const reducers = combineReducers({page: pageReducers})
const store = createStore(reducers);

export default store