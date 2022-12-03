import { lazy } from "react"
import Page404 from "./pages/404"
import {HOME_PATH} from './config/path'

const Home = lazy(() => import('./pages/index'))
const routers = [
    {
        path:HOME_PATH, element: <Home />
    },
    {
        path:'*', element:<Page404 />
    }
]

export default routers