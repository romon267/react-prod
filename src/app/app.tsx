import "@app/styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {HomePageLazy} from "@pages/home-page";
import {AboutPageLazy} from "@pages/about-page";
import {useTheme} from "@app/providers/theme-provider";
import {classNames} from "@shared/class-names";

export const App = () => {
    const {theme, toggleTheme} = useTheme();


    return <div className={classNames('app', {}, [theme])}>
        <div>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <button onClick={toggleTheme}>toggle</button>
        </div>
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/home'} element={<HomePageLazy />}/>
                    <Route path={'/about'} element={<AboutPageLazy />}/>
                </Routes>
            </Suspense>
        </div>
    </div>
}
