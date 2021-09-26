const SET_PRODUCTS = 'SET_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const SET_USER_ROLE = 'SET_USER_ROLE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
    products: [],
    user: {name: 'Roles', admin: false},
    currentPage: 1,
    isLoading: false,
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

        case SET_USER_ROLE:
            return {...state, user: {...state.user, ...action.user}}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.loading}

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
export const setUserRoleAC = (user) => ({type: SET_USER_ROLE, user})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetchingAC = (loading) => ({type: TOGGLE_IS_LOADING, loading})


