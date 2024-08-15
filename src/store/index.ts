import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import rootWatcher from "../saga";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";

const sagaMiddleweare = createSagaMiddleware();

const rootReducer = combineReducers({
  countReducer: countReducer,
  userReducer: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleweare));

sagaMiddleweare.run(rootWatcher);
