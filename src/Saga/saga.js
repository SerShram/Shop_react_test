import {all} from "redux-saga/effects";
import {productWatcher} from "./productSaga";

export function* rootWatcher() {
    yield all([productWatcher()])
}