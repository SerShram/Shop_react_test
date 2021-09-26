import React from "react";
import s from "./Catalog.module.css"
import MyButton from "../../Assets/MyButton";
import Card from "./Card/Card";
import Info from "../Info/Info";
import Pagination from "../Pagination/Pagination";
import Preloader from "../../Assets/Preloader";

const Catalog = ({isLoading, currentProducts, removeAllProducts, setProducts, deleteProduct, isAdmin, setCurrentPage, totalCountProducts, currentPage}) => {

    const products = currentProducts;

    return (
        <div>
            {(!products.length)
                ? <h1>The catalog is empty!</h1>
                : <h1>Catalog of Products</h1>}

            <Info/>

            <div className={s.blockBtnCreate}>
                {(!products.length)
                    ? <MyButton text="Download Catalog" func={setProducts}/>
                    : isAdmin && <MyButton text="Remove Catalog" func={removeAllProducts} />
                }
            </div>

            <div className={s.cards}>

                {isLoading && <Preloader/>}

                {products.map(product => <Card
                    product={product}
                    deleteProduct={deleteProduct}
                    key={product.id}
                    isAdmin={isAdmin}/>)
                }
            </div>
            <Pagination
                setCurrentPage={setCurrentPage}
                totalCountProducts={totalCountProducts}
                currentPage={currentPage}
            />

        </div>
    )
}

export default Catalog;