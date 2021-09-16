import React from 'react';
import s from "./Card.module.css";
import MyButton from "../../../Assets/MyButton/MyButton";

const Card = ({product, deleteProduct}) => {
    const p = product;
    return (
        <div className={s.card}>
            <div className={s.cardBody}>
                <div className={s.cardImage}>
                    <img src={p.image} alt={p.image}/>
                </div>
                <div className="cardContent">
                    <h4 className={s.cardTitle}>{p.title}</h4>
                    <div className={s.cardDesc}>{p.description}</div>
                    <div className={s.cardPrice}>{p.price + ' $'}</div>
                </div>
                <div className={s.cardBtn}>
                    <MyButton
                        text="Delete Product"
                        func={() => deleteProduct(p)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;