import React from "react";
import App from "../App";
import { Route } from "react-router-dom";

const MAinComponent = () => {
    return (
        <Route path='/' exact >
            <App />
            App
        </Route>
    )
}

export default MAinComponent;