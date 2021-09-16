import {combineReducers, createStore} from "redux";
import {catalogPageReducer} from "./catalog-reducer";


let reducers = combineReducers({
    CatalogPage: catalogPageReducer,
});

let store = createStore(reducers);

export default store;

window.store = store; // Смотреть store в консоли