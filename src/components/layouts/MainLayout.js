import React from 'react';
import Header from "../header/Header";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <div>
        <Header/>
            <h2>Contrnt</h2>
            <Outlet/>
        </div>
    );
}

export {MainLayout};