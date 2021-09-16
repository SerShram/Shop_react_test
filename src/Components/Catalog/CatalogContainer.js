import React, {useEffect, useState} from 'react';
import Catalog from "./Catalog";
import {useDispatch, useSelector} from "react-redux";
import {deleteProductAC, removeAllProductsAC, setAllProductsAC} from "../../Redux/catalog-reducer";

const CatalogContainer = () => {

    const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const products = useSelector(state => state.CatalogPage.products);

    // Загрузить весь каталог
    const setAllProducts = () => {
        dispatch(setAllProductsAC(data))
    }

    // Удалить весь каталог
    const removeAllProducts = () => {
        dispatch(removeAllProductsAC())
    }

    // Удалить один товар
    const deleteProduct = (product) => {
        dispatch(deleteProductAC(product.id))
    }

    // Получаем данные из https://fakestoreapi.com
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(
                (result) => setData(result)
            )
    }, []);

    return (
        <div>
            <Catalog
                products={products}
                removeAllProducts={removeAllProducts}
                setAllProducts={setAllProducts}
                deleteProduct={deleteProduct}
            />
        </div>

    );
};

export default (CatalogContainer);
