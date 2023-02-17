import { RouteProps } from 'react-router-dom'
import { HomePageLazy } from '@pages/home-page'
import { AboutPageLazy } from '@pages/about-page'
import { NotFoundPage } from '@pages/not-found-page'

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePageLazy />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageLazy />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}
