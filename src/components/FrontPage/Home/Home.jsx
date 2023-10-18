import Banner from "../Pages/Banner";
import Brands from "../Pages/Brands";
import ChangeBanner from "../Pages/ChangeBanner";
import Choose from "../Pages/Choose";
import Contract from "../Pages/Contract";
import Footer from "../Pages/Footer";
import CareerEvent from "../Pages/FrontPage/CareerEvent";
import HearVideoSection from "../Pages/HearVideoSection";
import HomeAbout from "../Pages/HomeAbout";
import Leader from "../Pages/Leader";
import OurCompany from "../Pages/OurCompany";
import ResourceService from "../Pages/ResourceService";
import SiteCalculation from "../Pages/SiteCalculation";
import Testimonial from "../Pages/Testimonial";

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}

            <ChangeBanner></ChangeBanner>
            {/* <OurCompany></OurCompany> */}
            <HomeAbout></HomeAbout> 
            <CareerEvent></CareerEvent>
            <ResourceService></ResourceService>
            {/* <Leader></Leader> */}
            <Brands/>
            <HearVideoSection></HearVideoSection>
            <Choose></Choose> 
            <SiteCalculation></SiteCalculation>
            <Testimonial></Testimonial>
            <Contract></Contract>
        </div>
    );
};

export default Home;