import {put, takeEvery, call} from "redux-saga/effects";
import {FETCH_PRODUCTS, setProductsAC, toggleIsFetchingAC} from "../Redux/catalog-reducer";

const fetchProductsFromApi = () => fetch('https://fakestoreapi.com/products');

function* fetchProductWorker() {
    const data = yield call(fetchProductsFromApi);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(toggleIsFetchingAC(true));
    yield put(setProductsAC(json));
    yield put(toggleIsFetchingAC(false));
}

export function* productWatcher() {
    yield takeEvery(FETCH_PRODUCTS, fetchProductWorker)
}