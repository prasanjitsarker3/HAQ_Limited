import { createBrowserRouter } from "react-router-dom";
import Home from "../FrontPage/Home/Home";
import Main from "../Layout/Main";
import ResourceService from "../FrontPage/Pages/ResourceService";
import Profile from "../ViewRoutingPage/Profile";
import Choose from "../FrontPage/Pages/Choose";
import Login from "../AuthenticationPage/Login";
import Register from "../AuthenticationPage/Register";
import CompanyService from "../ViewRoutingPage/CompanyService";
import Candidate from "../BackendRoutingPage/BackendRoutePage/Candidate";
import Dashboard from "../DashboardSection/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminInfo from "../DashboardSection/AdminSection/AdminInfo";
import Company from "../BackendRoutingPage/BackendRoutePage/Company";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "service",
                element: <CompanyService></CompanyService>
            },
            {
                path: "profile",
                element: <Profile></Profile>
            },
            {
                path: "choose",
                element: <Choose></Choose>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "candidate",
                element: <Candidate></Candidate>
            },
            {
                path:"company",
                element:<Company></Company>
            }
        ]
    }
    ,
    {
        path:"/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children:[
            {
                path:"admin",
                element:<AdminInfo/>
            }
        ]
    }
])
export default router;