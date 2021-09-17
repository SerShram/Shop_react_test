import React from "react";
import {Route} from "react-router";
import CatalogContainer from "../../Catalog/CatalogContainer";
import AddProductContainer from "../../AddProduct/AddProductContainer";

const Main = () => {
    return (
        <main>
            <div className="container">
               <Route exact path="/" component={CatalogContainer}/>
               <Route path="/add" component={AddProductContainer}/>
            </div>
        </main>
    )
}

export default Main;