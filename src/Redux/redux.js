import {applyMiddleware, combineReducers, createStore} from "redux";
import {catalogPageReducer} from "./catalog-reducer";
import createSagaMiddleware from "redux-saga";
import {rootWatcher} from "../Saga/saga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    CatalogPage: catalogPageReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)

export default store;
// Смотреть store в консоли
window.store = store;