import { Button } from '@material-tailwind/react';
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const HomeAbout = () => {
    return (
        <div>
            <div className=" md:flex justify-between px-8 py-8">
                <div className='relative lg:w-1/2'>
                    <div className='flex justify-center items-center py-5'>
                        <h1 className='primaryColor text-7xl font-semibold'>2010</h1>
                        <h1 className='primaryColor text-2xl'>Start In </h1>
                    </div>
                    <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://img.freepik.com/premium-photo/photo-construction-worker039s_931878-5139.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" alt="" srcset="" className="w-1/2  rounded-lg shadow-2xl absolute top-1/2 right-5 border-8 border-white" />

                </div>
                <div className='lg:w-1/2 p-4'>
                    <h1 className=' text-5xl py-5 font-semibold text-blue-600'>About Us </h1>
                    <h1 className=' text-lg text-justify'>HM ANGEL OVERSEAS LIMITED is a government-approved recruiting agency in Bangladesh, with Recruiting License No. 2129. Since 2012, HM ANGEL OVERSEAS LTD has created more than 7,000 overseas jobs for Bangladeshi people. The company has been working with top-class companies and providing them with HR solutions. HM ANGEL OVERSEAS LTD is renowned for its work in the SAUDI ARABIA & Middle East market. The company has a vision to create more than 10 million jobs for Bangladeshi people by 2030. Following the growing demand, HM ANGEL OVERSEAS LTD aims to grab the market and create over 50,000 new jobs.</h1>
                    <h1 className=' text-lg pt-5 text-justify'>HM ANGEL OVERSEAS LIMITED's impact on the Bangladesh economy is significant. The company has created thousands of jobs for Bangladeshi people, which has helped to reduce unemployment and poverty. The company also provides its employees with training and development opportunities, which helps to improve their skills and knowledge. This, in turn, makes them more productive and competitive in the global workforce.</h1>
                    <div className='pt-12 flex'>
                        <Button color="blue" className='text-white py-3 flex justify-center items-center gap-3'><span>More Information</span><FaLongArrowAltRight /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;