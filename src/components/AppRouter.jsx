import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {routes} from "../routes";
import MainPage from "../pages/MainPage/MainPage";



const AppRouter = () => {
    return (
            <Routes>
                {routes.map(route =>
                    <Route key={route.path} path={route.path} element={route.component} exact/>
                )}
                <Route path='*' element={<Navigate to={MainPage} exact/>}/>
            </Routes>
    );
};

export default AppRouter;