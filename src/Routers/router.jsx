import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Dashboard/DashboardHome";
import Users from "../Dashboard/Users";
import Courses from "../Dashboard/Courses";
import HomePage from "../Pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <HomePage></HomePage>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'users',
                element: <Users></Users>
            },
            {
                path: 'courses',
                element: <Courses></Courses>
            }
        ]
    }
])

export default router;