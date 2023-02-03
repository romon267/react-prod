import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {HomePageLazy} from "./pages/home-page/home-page.lazy";
import {AboutPageLazy} from "./pages/about-page/about-page.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/class-names/class-names";

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
