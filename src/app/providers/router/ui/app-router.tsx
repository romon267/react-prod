import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../config/route-config";

function AppRouter() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routeConfig)
                        .map(
                            ({element, path}) => (<Route key={path} path={path} element={element} />)
                        )
                    }
                </Routes>
            </Suspense>
        </div>
    );
}

export default AppRouter;