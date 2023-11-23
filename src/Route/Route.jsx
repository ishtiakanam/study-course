import { createBrowserRouter, } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Root from './Root';
import AllClasses from "../Pages/AllClasses";
import TeachOnSynergy from "../Pages/TeachOnSynergy";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'allClasses',
                element: <AllClasses />
            },
            {
                path: 'teachOnline',
                element: <TeachOnSynergy />
            },
        ]
    },
]);
export default router;