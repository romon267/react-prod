import {RouteProps} from "react-router-dom";
import {HomePageLazy} from "@pages/home-page";
import {AboutPageLazy} from "@pages/about-page";

export enum AppRoutes {
    HOME = "home",
    ABOUT = "about"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.ABOUT]: "/about"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePageLazy />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageLazy />
    }
}