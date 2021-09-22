import React from "react";
import {Route} from "react-router";
import CatalogContainer from "../../Catalog/CatalogContainer";
import AddProductContainer from "../../AddProduct/AddProductContainer";
import UserRoleContainer from "../../UserRole/UserRoleContainer";
import Notice from "../Notice";

const Main = () => {
    return (
        <main>
            <div className="container">
               <Route exact path="/" component={CatalogContainer}/>
               <Route path="/add" component={AddProductContainer}/>
               <Route path="/user-role" component={UserRoleContainer}/>
               <Route path="/notice" component={Notice}/>
            </div>
        </main>
    )
}

export default Main;