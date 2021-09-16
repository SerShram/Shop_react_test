const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';
const REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

let initialState = {
    products: [],
};

export const catalogPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ALL_PRODUCTS:
            //return {...state, products: [...state.products, ...action.products]} // Добавляем Products к уже существующим
            return {...state, products: action.products}

        case REMOVE_ALL_PRODUCTS:
            return {...state, products: []}

        case DELETE_PRODUCT:
            return {...state, products: state.products.filter(product => product.id !== action.product)}

        default:
            return state;
    }
}

//----------------- Action creators ------------------------------
export const setAllProductsAC = (products) => ({type: SET_ALL_PRODUCTS, products});
export const removeAllProductsAC = () => ({type: REMOVE_ALL_PRODUCTS});
export const deleteProductAC = (product) => ({type: DELETE_PRODUCT, product});


