import React, {useState} from 'react';
import UserRole from "./UserRole";
import {useDispatch} from "react-redux";
import {setUserRoleAC} from "../../Redux/catalog-reducer";

const UserRoleContainer = () => {

    const dispatch = useDispatch();

    const [userNameValue, setUserNameValue] = useState('')
    const [isAdmin, setIsAdmin] = useState('false');

    const onChangeName = (value) => setUserNameValue(value)

    const onChangeRole = (event) => {
        const target = event.target;
        (target.checked) && setIsAdmin(target.value);
    };

    const saveUserRole = () => {
        let user = {
            name: userNameValue,
            admin: JSON.parse(isAdmin),
        }
        dispatch(setUserRoleAC(user))
        setUserNameValue('');
    }

    return (
        <UserRole
            userNameValue={userNameValue}
            onChangeName={onChangeName}
            isAdmin={isAdmin}
            onChangeRole={onChangeRole}
            saveUserRole={saveUserRole}
        />
    );
};

export default UserRoleContainer;