import React from "react";
import s from "./Catalog.module.css"
import MyButton from "../../Assets/MyButton/MyButton";
import Card from "./Card/Card";
import Info from "../Info/Info";

const Catalog = ({products, removeAllProducts, setProducts, deleteProduct}) => {

    return (
        <div>
            <h1 className={s.catalogTitle}>
                {(!products.length)
                    ? 'The catalog is empty!'
                    : 'Catalog of Products'}
            </h1>

            <Info products={products}/>

            <div className={s.blockBtnCreate}>
                {(!products.length)
                    ? <MyButton text="Download Catalog" func={setProducts}/>
                    : <MyButton text="Remove Catalog" func={removeAllProducts} />
                }
            </div>

            <div className={s.cards}>
                {products.map(product => <Card
                    product={product}
                    deleteProduct={deleteProduct}
                    key={product.id}/>)}
            </div>
        </div>
    )
}

export default Catalog;