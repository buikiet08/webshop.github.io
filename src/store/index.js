import { applyMiddleware, combineReducers, createStore } from "redux";
import pageReducers from "./pageReducers";
import thunk from 'redux-thunk'
import authReducer from "./authReducer";
import userReducer, { getUserAction } from "./userReducer";

const reducers = combineReducers({
    page: pageReducers,
    auth: authReducer,
    user: userReducer,
})
const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(getUserAction())
export default store