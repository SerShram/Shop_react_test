import React from 'react';
import Catalog from "./Catalog";
import {useDispatch, useSelector} from "react-redux";
import {deleteProductAC, fetchProductsAC, removeAllProductsAC} from "../../Redux/catalog-reducer";

const CatalogContainer = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.CatalogPage.products);

    // Загрузить весь каталог
    const setProducts = () => {
        dispatch(fetchProductsAC())
    }

    // Удалить весь каталог
    const removeAllProducts = () => {
        dispatch(removeAllProductsAC())
    }

    // Удалить один товар
    const deleteProduct = (product) => {
        dispatch(deleteProductAC(product.id))
    }

    return (
        <div>
            <Catalog
                products={products}
                removeAllProducts={removeAllProducts}
                setProducts={setProducts}
                deleteProduct={deleteProduct}
            />
        </div>

    );
};

export default (CatalogContainer);
