import React from "react";
import s from "./Catalog.module.css"
import MyButton from "../../Assets/MyButton";
import Card from "./Card/Card";
import Info from "../Info/Info";

const Catalog = ({products, removeAllProducts, setProducts, deleteProduct, isAdmin}) => {

    return (
        <div>
            <h1>
                {(!products.length)
                    ? 'The catalog is empty!'
                    : 'Catalog of Products'}
            </h1>

            <Info/>

            <div className={s.blockBtnCreate}>
                {(!products.length)
                    ? <MyButton text="Download Catalog" func={setProducts}/>
                    : isAdmin &&
                    <MyButton text="Remove Catalog" func={removeAllProducts} />
                }
            </div>

            <div className={s.cards}>
                {products.map(product => <Card
                    product={product}
                    deleteProduct={deleteProduct}
                    key={product.id}
                    isAdmin={isAdmin}/>)
                }
            </div>
        </div>
    )
}

export default Catalog;