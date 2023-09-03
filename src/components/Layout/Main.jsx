import { Outlet } from "react-router-dom";
import Header from "../FrontPage/Header/Header";
import Footer from "../FrontPage/Pages/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;