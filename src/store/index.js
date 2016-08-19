import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";

import * as todos from "./todos";

const rootReducer = combineReducers(todos);
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export const dispatch = store.dispatch;
export default store;
