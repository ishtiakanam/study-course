import { createBrowserRouter, } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Root from './Root';
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOnSynergy from "../Pages/TeachOnline/TeachOnSynergy";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../Layout/Dashboard";
import MyEnrollClass from "../Layout/MyEnrollClass";
import MyProfile from "../Layout/MyProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddClass from "../Layout/TeacherDashBoard/AddClass";
import MyClass from "../Layout/TeacherDashBoard/MyClass";
import Profile from "../Layout/TeacherDashBoard/Profile";
import UpdateClass from "../Layout/TeacherDashBoard/UpdateClass";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
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
                element: <PrivateRoute><TeachOnSynergy /></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
        ]
    },
    {
        path: 'dashBoard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'myEnrollClass',
                element: <MyEnrollClass />
            },
            {
                path: 'myProfile',
                element: <MyProfile />
            },
            {
                path: 'addClass',
                element: <AddClass />
            },
            {
                path: 'myClass',
                element: <MyClass />,
                loader: () => fetch('http://localhost:5000/class')
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'updateClass/:id',
                element: <UpdateClass />,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/class/${params.id}`)
                },
            },
        ]
    }
]);
export default router;