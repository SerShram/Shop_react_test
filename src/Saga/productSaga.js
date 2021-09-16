import {put, takeEvery, call} from "redux-saga/effects";
import {FETCH_PRODUCTS, setProductsAC} from "../Redux/catalog-reducer";

const fetchProductsFromApi = () => fetch('https://fakestoreapi.com/products');

function* fetchProductWorker() {
    const data = yield call(fetchProductsFromApi);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(setProductsAC(json));
}

export function* productWatcher() {
    yield takeEvery(FETCH_PRODUCTS, fetchProductWorker)
}