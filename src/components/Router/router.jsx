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
               path:"login",
               element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"candidate",
                element:<Candidate></Candidate>
            }
        ]
    }
])
export default router;