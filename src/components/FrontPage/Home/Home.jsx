import Banner from "../Pages/Banner";
import Choose from "../Pages/Choose";
import Contract from "../Pages/Contract";
import Footer from "../Pages/Footer";
import HomeAbout from "../Pages/HomeAbout";
import Leader from "../Pages/Leader";
import OurCompany from "../Pages/OurCompany";
import ResourceService from "../Pages/ResourceService";
import SiteCalculation from "../Pages/SiteCalculation";
import Testimonial from "../Pages/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <OurCompany></OurCompany> */}
            <HomeAbout></HomeAbout>
            <ResourceService></ResourceService>
            <Leader></Leader>
            <Choose></Choose> 
            <SiteCalculation></SiteCalculation>
            <Testimonial></Testimonial>
            <Contract></Contract>
        </div>
    );
};

export default Home;