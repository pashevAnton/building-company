import MainPage from "./pages/MainPage/MainPage";
import {MAIN_PAGE, PORTFOLIO, SERVICES, SERVICE, PRIVACY} from "./util/const";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import ServicePage from './pages/ServicePage/ServicePage'
import Privacy from './pages/Privacy/Privacy'
export const routes = [
    {
        path: MAIN_PAGE,
        component: <MainPage/>
    },
    {
        path: PORTFOLIO,
        component: <Portfolio/>
    },
    {
        path: SERVICES,
        component: <Services/>
    },
    {
        path: SERVICE,
        component: <ServicePage/>
    },
    {
        path: PRIVACY,
        component: <Privacy/>
    }
]