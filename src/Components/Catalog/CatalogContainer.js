import React from 'react';
import Catalog from "./Catalog";
import {useDispatch, useSelector} from "react-redux";
import {deleteProductAC, fetchProductsAC, removeAllProductsAC, setCurrentPageAC} from "../../Redux/catalog-reducer";

const CatalogContainer = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.CatalogPage.products);
    const isAdmin = useSelector(state => state.CatalogPage.user.admin);
    const isLoading = useSelector(state => state.CatalogPage.isLoading);
    const totalCountProducts = products.length;
    const currentPage = useSelector(state => state.CatalogPage.currentPage);

    // Взять текущие подукты
    const indexOfLastProduct = currentPage * 4;
    const indexOfFirstProduct = indexOfLastProduct - 4;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)


    // Загрузить весь каталог
    const setProducts = () => {
        dispatch(fetchProductsAC());
    }
    // Удалить весь каталог
    const removeAllProducts = () => {
        dispatch(removeAllProductsAC())
    }
    // Удалить один товар
    const deleteProduct = (product) => {
        dispatch(deleteProductAC(product.id))
    }
    // Изменение страницы
    const setCurrentPage = (currentPage) => {
        dispatch(setCurrentPageAC(currentPage))
    }

    return (
        <div>
            <Catalog
                isLoading={isLoading}
                currentProducts={currentProducts}
                removeAllProducts={removeAllProducts}
                setProducts={setProducts}
                deleteProduct={deleteProduct}
                isAdmin={isAdmin}
                setCurrentPage={setCurrentPage}
                totalCountProducts={totalCountProducts}
                currentPage={currentPage}
            />
        </div>
    );
};

export default (CatalogContainer);
