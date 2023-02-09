import "@app/styles/index.scss";
import {useTheme} from "@app/providers/theme-provider";
import {classNames} from "@shared/class-names";
import AppRouter from "@app/providers/router/ui/app-router";
import Navbar from "@widgets/navbar/ui/navbar";
import {Sidebar} from "@widgets/sidebar";

export const App = () => {
    const {theme} = useTheme();


    return <div className={classNames('app', {}, [theme])}>
        <div>
            <Navbar />
            <div className="page-content">
                <Sidebar />
                <AppRouter />
            </div>

        </div>

    </div>
}
