import React, {useState} from 'react';
import AddProduct from "./AddProduct";
import {useDispatch} from "react-redux";
import {addProductAC} from "../../Redux/catalog-reducer";

const AddProductContainer = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    // Записываем значение полей в локальный state
    const onChangeName = (value) => setTitle(value)
    const onChangeTextarea = (value) => setDescription(value)
    const onChangePrice = (value) => setPrice(value)

    // Преобразуем строку в число
    const transformPrice = (string) => string.length ? string++ : 0;

    // Создаем новый продукт
    const addProduct = () => {
        const newProduct = {
            id: Date.now(),
            title: title,
            description: description,
            price: transformPrice(price),
            image: '',
        }
        dispatch(addProductAC(newProduct));

        localStorage.setItem(newProduct.id, JSON.stringify(newProduct))

        setTitle('');
        setDescription('');
        setPrice('');
    }

    return (
       <AddProduct
           title={title}
           description={description}
           price={price}
           onChangeName={onChangeName}
           onChangeTextarea={onChangeTextarea}
           onChangePrice={onChangePrice}
           addProduct={addProduct}
       />
    );
};

export default AddProductContainer;