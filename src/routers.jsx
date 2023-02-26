import { lazy } from "react"
import Page404 from "./pages/404"
import {AUTH_PATH, HOME_PATH, SHOP_PATH, USER_PATH} from './config/path'
import MainLayout from "./layouts/MainLayout"
import AccountLayout from "./layouts/AccountLayout"
import Account from "./pages/Account"

const Home = lazy(() => import('./pages/index'))
const Shop = lazy(() => import('./pages/shop'))
const Auth = lazy(() => import('./pages/auth'))
const routers = [
    {
        element: <MainLayout />,
        path: '/',
        children: [
            {
                path:HOME_PATH, element: <Home />
            },
            {
                path:SHOP_PATH, element: <Shop />
            },
            {
                path:AUTH_PATH, element: <Auth />
            },
            {
                path:USER_PATH, element: <AccountLayout />, children:[
                    {
                        index:true, element: <Account />
                    }
                ]
            },
            {
                path:'*', element:<Page404 />
            }
        ]
    }
]

export default routers