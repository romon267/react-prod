import "@app/styles/index.scss";
import {Link} from "react-router-dom";
import {useTheme} from "@app/providers/theme-provider";
import {classNames} from "@shared/class-names";
import AppRouter from "@app/providers/router/ui/app-router";

export const App = () => {
    const {theme, toggleTheme} = useTheme();


    return <div className={classNames('app', {}, [theme])}>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <button onClick={toggleTheme}>toggle</button>
            <AppRouter />
        </div>

    </div>
}
