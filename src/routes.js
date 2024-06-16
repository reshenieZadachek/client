import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Game from "./pages/Game"
import Learn from "./pages/Learn"
import Profile from "./pages/Profile"
import Questions from "./pages/Questions"
import Reviews from "./pages/Reviews"
import Rooms from "./pages/Rooms"
import Settings from "./pages/Settings"
import { COMMON_ROUTE, GAME_ROUTE, LOGIN_ROUTE, OHTERS_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, REVIEWS_ROUTE, ROOMS_ROUTE, SECURITY_ROUTE, SETTINGS_ROUTE, QUESTIONS_ROUTE, SECONDSTAGE_ROUTE, FIRSTSTAGE_ROUTE, THIRDSTAGE_ROUTE, MARKETING_ROUTE, ADMIN_ROUTE } from "./utils/const"

export const learnRouteFirst = [
    {
        path: FIRSTSTAGE_ROUTE,
        Component: Learn,
    },
    {
        path: ROOMS_ROUTE,
        Component: Rooms,
    },
]
export const learnRouteSecond = [
    {
        path: SECONDSTAGE_ROUTE,
        Component: Learn,
    },
]
export const learnRouteThird = [
    {
        path: THIRDSTAGE_ROUTE,
        Component: Learn,
    },
]
export const authRoutes = [
    {
        path: COMMON_ROUTE,
        Component: Settings,
    },
    {
        path: SECURITY_ROUTE,
        Component: Settings,
    },
    {
        path: OHTERS_ROUTE,
        Component: Settings,
    },
]

export const publicRoutes = [
    {
        path: GAME_ROUTE,
        Component: Game,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: REVIEWS_ROUTE,
        Component: Reviews,
    },
    {
        path: PROFILE_ROUTE + '/:id',
        Component: Profile,
    },
    {
        path: QUESTIONS_ROUTE,
        Component: Questions,
    },
    {
        path: MARKETING_ROUTE,
        Component: Learn,
    },
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
]