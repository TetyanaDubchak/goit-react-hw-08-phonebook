import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import { AppBar } from "../AppBar/AppBar.jsx";

export const Layout = () => {

    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </div>
    )
}
