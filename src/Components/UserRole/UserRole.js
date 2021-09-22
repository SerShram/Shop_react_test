import React from 'react';
import MyInput from "../../Assets/MyInput";
import s from "./UserRole.module.css"
import MyInputRadio from "../../Assets/MyInputRadio";
import MyButton from "../../Assets/MyButton";

const UserRole = ({userNameValue, onChangeName, isAdmin, onChangeRole, saveUserRole}) => {

    return (
        <div>
            <h1>Select user role</h1>
            <form className={s.formUserRole}>
                <div className={s.formItem}>
                    <MyInput
                        type="text"
                        value={userNameValue}
                        currentFunc={onChangeName}
                        placeHolder="Your Name"
                    />
                </div>
                <div className={s.formRadio}>
                    <MyInputRadio
                        name="role"
                        value="false"
                        checked={isAdmin === 'false'}
                        spanText="User"
                        onChangeRole={onChangeRole}
                    />
                    <MyInputRadio
                        name="role"
                        value="true"
                        checked={isAdmin === 'true'}
                        spanText="Admin"
                        onChangeRole={onChangeRole}
                    />
                </div>
                <MyButton
                    text="Save Role"
                    func={saveUserRole}
                />
            </form>
        </div>
    );
};

export default UserRole;