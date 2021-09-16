import React from "react";
import s from "./Catalog.module.css"
import MyButton from "../../Assets/MyButton/MyButton";
import Card from "./Card/Card";

const Catalog = ({products, removeAllProducts, setAllProducts, deleteProduct}) => {

    return (
        <div>
            <h1 className={s.catalogTitle}>
                {(!products.length)
                    ? 'The catalog is empty!'
                    : 'Catalog of Products'}
            </h1>

            <div className={s.cards}>
                {products.map(product => <Card
                    product={product}
                    deleteProduct={deleteProduct}
                    key={product.id}/>)}
            </div>

            <div className={s.blockBtnCreate}>
                {(!products.length)
                   ? <MyButton text="Create Products" func={setAllProducts}/>
                   : <MyButton text="Remove Products" func={removeAllProducts} />
                }
            </div>
        </div>
    )
}

export default Catalog;