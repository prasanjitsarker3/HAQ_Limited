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
import UserApplication from "../UserInfoSection/UserApplication";
import UserProfile from "../UserInfoSection/UserProfile";
import ApplicationView from "../UserInfoSection/ApplicationView";
import AllUser from "../DashboardSection/AdminSection/AllUser";
import AdminCandidate from "../DashboardSection/AdminSection/AdminCandidate";
import AdminCompany from "../DashboardSection/AdminSection/AdminCompany";
import AdminMessage from "../DashboardSection/AdminSection/AdminMessage";
import AdminBlogPost from "../DashboardSection/AdminSection/AdminBlogPost";
import ApplyEvent from "../FrontPage/Pages/FrontPage/ApplyEvent";
import CompanyTable from "../UserInfoSection/CompanyTable";
import CompanyView from "../CustomViewPage/CompanyViewPage";
import CompanyViewPage from "../CustomViewPage/CompanyViewPage";
import ViewMessage from "../CustomViewPage/ViewMessage";
import AdminViewAppliation from "../DashboardSection/AdminSection/AdminViewAppliation";
import AdminViewCompany from "../DashboardSection/AdminSection/AdminViewCompany";


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
                path: "company",
                element: <Company></Company>
            },
            {
                path: "application",
                element: <UserApplication></UserApplication>
            },
            {
                path: "companyInfo",
                element: <CompanyTable></CompanyTable>
            },
            {
                path: "userProfile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "applyEvent",
                element: <ApplyEvent></ApplyEvent>
            },
            {
                path: "viewApplication/:id",
                element: <ApplicationView />,
                loader: ({ params: { id } }) => fetch(`https://hqa-server-prasanjitsarker3.vercel.app/candidate/${id}`)

            },
            {
                path: "viewCompany/:id",
                element: <CompanyViewPage />,
            },
            {
                path: "viewMessage/:id",
                element: <ViewMessage></ViewMessage>
            }
        ]
    }
    ,
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "admin",
                element: <AdminInfo />
            },
            {
                path: "allUser",
                element: <AllUser />
            },
            {
                path: "adminCandidate",
                element: <AdminCandidate />
            },
            {
                path: "adminCompany",
                element: <AdminCompany></AdminCompany>
            }
            ,
            {
                path: "adminMessage",
                element: <AdminMessage></AdminMessage>
            },
            {
                path: "adminBlogPost",
                element: <AdminBlogPost />
            },
            {
                path: "viewAdminApplication/:id",
                element: <AdminViewAppliation></AdminViewAppliation>
            },
            {
                path: "viewAdminCompany/:id",
                element: <AdminViewCompany></AdminViewCompany>
            },
            {
                path: "viewMessage/:id",
                element: <ViewMessage></ViewMessage>
            }

        ]
    }
])
export default router;