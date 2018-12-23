import React from "react";
import ReactDOM from "react-dom";
import Layout from "../common/Layout";
import "../sass/index.scss";
import { BrowserRouter } from "react-router-dom";
import getData from "../common/getData";
import StaticContext from "./StaticContext";

const path = window.document.location.pathname;
const promises = getData(path);
const data = {};
Promise.all(promises).then(responses => {
    responses.forEach(r => {
        if (r) Object.assign(data, r);
    });

    ReactDOM.hydrate(
        <StaticContext.Provider value={data}>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </StaticContext.Provider>,
        document.getElementById("root")
    );
});
