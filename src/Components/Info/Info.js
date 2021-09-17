import React from 'react';
import s from './Info.module.css'
import {useSelector} from "react-redux";

const Info = () => {

    const products = useSelector(state => state.CatalogPage.products);

    let goods = 0;
    let total = 0;
    let average = 0;

    if(products.length) {
        let totalSum ;
        let initialValue = 0;

        // Общее количество товаров
        goods = products.length;

        // Слаживаем цены всез товаров
        totalSum = products.reduce(function (sum, current) {
            return sum + current.price
        }, initialValue);

        // Общая цена округленная до сотых
        total = totalSum.toFixed(2);

        // Средняя цена округленная до сотых
        average = totalSum / products.length
        average = average.toFixed(2);

    }

    return (
        <div className={s.info}>
            <div className={s.infoItems}>
                <div className={s.infoItem}>
                    <span className={s.infoItemTitle}>Total number of goods : </span>
                    <span className={s.infoItemValue}>{goods}</span>
                </div>
                <div className={s.infoItem}>
                    <span className={s.infoItemTitle}>Total amount : </span>
                    <span className={s.infoItemValue}>{total + ' $'}</span>
                </div>
                <div className={s.infoItem}>
                    <span className={s.infoItemTitle}>Average price : </span>
                    <span className={s.infoItemValue}>{average + ' $'}</span>
                </div>
            </div>
        </div>
    );
};

export default Info;