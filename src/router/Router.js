import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Main from "../layout/Main";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
])