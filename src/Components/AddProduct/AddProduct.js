import React from "react";
import s from "./AddProduct.module.css"
import Info from "../Info/Info";
import MyInput from "../../Assets/MyInput";
import MyTextarea from "../../Assets/MyTextarea";
import MyButton from "../../Assets/MyButton";

const AddProduct = ({title, description, price, onChangeName, onChangeTextarea, onChangePrice, addProduct}) => {

    return(
        <div>
            <h1>Add Product</h1>
            <Info/>
            <form>
                <div className={s.formItem}>
                    <MyInput type={'text'} currentFunc={onChangeName} value={title} placeHolder={'Title'}/>
                </div>
                <div className={s.formItem}>
                    <MyTextarea currentFunc={onChangeTextarea} value={description} placeHolder={'Description'}/>
                </div>
                <div className={s.formItem}>
                    <MyInput type={'number'} currentFunc={onChangePrice} value={price} placeHolder={'Price'}/>
                </div>
                <div>
                    <MyButton text={'Add product'} func={addProduct}/>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;