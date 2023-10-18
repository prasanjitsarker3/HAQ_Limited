import { Outlet } from "react-router-dom";
import Header from "../FrontPage/Header/Header";
import Footer from "../FrontPage/Pages/Footer";
import MovingHead from "../FrontPage/Pages/FrontPage/MovingHead";

const Main = () => {
    return (
        <div>
            <MovingHead/>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;