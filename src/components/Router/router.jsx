import { createBrowserRouter } from "react-router-dom";
import Home from "../FrontPage/Home/Home";
import Main from "../Layout/Main";
import ResourceService from "../FrontPage/Pages/ResourceService";
import Profile from "../ViewRoutingPage/Profile";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,  
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"service",
                element:<ResourceService></ResourceService>
            },
            {
                path:"profile",
                element:<Profile></Profile>
            }
        ]
    }
])
export default router;