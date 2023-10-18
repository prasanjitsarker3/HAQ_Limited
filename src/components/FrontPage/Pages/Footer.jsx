import { Button, Typography } from "@material-tailwind/react";
import { FaAccusoft, FaChevronRight, FaEnvelope, FaEnvelopeOpen, FaHome, FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div className=" w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 md:px-12 md:gap-5 bg-blue-gray-50 pt-12 pb-5">
                <div className=" p-5 md:text-left text-center">
                    <h1 className="uppercase text-xl pb-2">Company</h1>
                    <div className=" space-y-2 text-md">
                        <h1>Company Support</h1>
                        <h1>Customer Service</h1>
                        <h1>Help Center</h1>
                        <h1>Terms of Service</h1>
                    </div>
                </div>
                <div className=" p-5 md:text-left text-center">
                    <h1 className="uppercase text-xl pb-2 ml-5">Links</h1>
                    <div className=" space-y-2 flex flex-col text-md ">
                        <div className="flex md:justify-start justify-center items-center gap-2 ">
                            <FaChevronRight className="h-5 w-5 text-blue-600" />
                            <Link>Home</Link>
                        </div>
                        <div className="flex md:justify-start justify-center items-center gap-2 ">
                            <FaChevronRight className="h-5 w-5 text-blue-600" />
                            <Link>About Us</Link>
                        </div>
                        <div className="flex items-center gap-2 md:justify-start justify-center">
                            <FaChevronRight className="h-5 w-5 text-blue-600" />
                            <Link>License</Link>
                        </div>
                        <div className="flex items-center gap-2 md:justify-start justify-center">
                            <FaChevronRight className="h-5 w-5 text-blue-600" />
                            <Link>Service</Link>
                        </div>
                    </div>
                </div>
                <div className=" p-5 md:text-left text-center">
                    <h1 className="uppercase text-xl pb-2">Contact Us</h1>
                    <div className=" space-y-2">
                        <div className="flex md:justify-start justify-center items-center gap-2">
                            <FaHome className="h-5 w-5 text-blue-600" />
                            <h1 className="text-md">Dhaka-Bangladesh</h1>
                        </div>
                        <div className="flex md:justify-start justify-center items-center gap-2">
                            <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
                            <h1 className="text-md">Dhaka-Bangladesh</h1>
                        </div>
                        <div className="flex md:justify-start justify-center items-center gap-2">
                            <FaPhone className="h-5 w-5 text-blue-600" />
                            <h1 className="text-md">+8801278367377</h1>
                        </div>
                        <div className="flex  md:justify-start justify-center items-center gap-2">
                            <FaEnvelope className="h-5 w-5 text-blue-600" />
                            <h1 className="text-md">+hqa123@gmail.com</h1>
                        </div>
                    </div>
                </div>
                <div className=" p-5">
                    <h1 className="uppercase text-xl pb-2 text-center md:text-left ">Follow us</h1>
                    <div className=" flex  md:justify-start justify-center gap-3 pt-5">
                        <img
                            className=" h-8 w-18 rounded-full cursor-pointer"
                            src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
                            alt=""
                        />
                        <img
                            className=" h-8 w-18 rounded-full cursor-pointer"
                            src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                            alt=""
                        />
                        <img
                            className=" h-8 w-18 rounded-full cursor-pointer"
                            src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
                            alt=""
                        />
                        <img
                            className=" h-8 w-18 rounded-full cursor-pointer"
                            src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                            alt=""
                        />
                    </div>
                    <div className=" flex md:justify-start justify-center">
                        <Button className="mt-6" color="blue">Career Explore</Button>
                    </div>
                </div>

            </div>
            <div className="flex w-full bg-blue-gray-50 flex-col  items-center gap-5 justify-center border-t border-blue-gray-900 py-4 md:flex-row ">
                <Typography
                    variant="small"
                    className=" text-center font-normal text-blue-gray-900 md:mb-0 text-md"
                >
                    &copy; 2023<a href="https://material-tailwind.com/"> HM Expo Private Ltd</a>. All
                    Rights Reserved
                </Typography>
                <div className=" text-blue-gray-900 ">
                    <Typography className="text-md">
                        Developer By Team TechFlex
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Footer;