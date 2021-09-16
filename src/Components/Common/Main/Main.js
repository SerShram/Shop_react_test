import React from "react";
import {Route} from "react-router";
import AddProduct from "../../AddProduct/AddProduct";
import CatalogContainer from "../../Catalog/CatalogContainer";

const Main = () => {
    return (
        <main>
            <div className="container">
               <Route exact path="/" component={CatalogContainer}/>
               <Route path="/add" component={AddProduct}/>
            </div>
        </main>
    )
}

export default Main;