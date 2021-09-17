const SET_PRODUCTS = 'SET_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';

let initialState = {
    products: [],
};

export const catalogPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PRODUCTS:
            //return {...state, products: [...state.products, ...action.products]} // Добавляем Products к уже существующим
            return {...state, products: [...state.products, ...action.products]}

        case ADD_PRODUCT:
            //debugger
            return {...state, products: [...state.products, action.product]}

        case REMOVE_ALL_PRODUCTS:
            return {...state, products: []}

        case DELETE_PRODUCT:
            return {...state, products: state.products.filter(product => product.id !== action.product)}

        default:
            return state;
    }
}

//----------------- Action creators ------------------------------
export const setProductsAC = (products) => ({type: SET_PRODUCTS, products});
export const fetchProductsAC = () => ({type: FETCH_PRODUCTS});
export const removeAllProductsAC = () => ({type: REMOVE_ALL_PRODUCTS});
export const deleteProductAC = (product) => ({type: DELETE_PRODUCT, product});
export const addProductAC = (product) => ({type: ADD_PRODUCT, product});


