import React from 'react';
import s from "./Card.module.css";
import MyButton from "../../../Assets/MyButton";
import Logo from "../../Common/Logo/Logo";

const Card = ({product, deleteProduct, isAdmin}) => {
    const p = product;

    return (
        <div className={s.card}>
            <div className={s.cardBody}>
                <div className={s.cardImage}>
                    {(p.image) ? <img src={p.image} alt=""/> : <Logo/>}
                </div>
                <div className="cardContent">
                    <h4 className={s.cardTitle}>{p.title}</h4>
                    <div className={s.cardDesc}>{p.description}</div>
                    <div className={s.cardPrice}>{p.price + ' $'}</div>
                </div>

                {isAdmin &&
                <div className={s.cardBtn}>
                    <MyButton
                        text="Delete Product"
                        func={() => deleteProduct(p)}
                    />
                </div>
                }

            </div>
        </div>
    );
};

export default Card;