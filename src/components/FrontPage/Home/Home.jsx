import Banner from "../Pages/Banner";
import HomeAbout from "../Pages/HomeAbout";
import Leader from "../Pages/Leader";
import OurCompany from "../Pages/OurCompany";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <OurCompany></OurCompany>
           <HomeAbout></HomeAbout>
           <Leader></Leader>
        </div>
    );
};

export default Home;