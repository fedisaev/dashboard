import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import {RouteTypes} from "../types/routeTypes";

const AppRouter: FC = () => {
    return (
        <Routes>
            {routes.map((route: RouteTypes) =>
                <Route key={route.path} path={route.path} element={<route.element/>}/>
            )}
        </Routes>
    );
};

export default AppRouter;