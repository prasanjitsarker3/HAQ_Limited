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
                    <h1 className=' text-5xl py-5 font-semibold'>About Us </h1>
                    <h1 className=' text-lg'>HM Angel Overseas Limited! A hub of global reach and local expertise, combined to deliver an unmatched perspective with detailed insight into markets across all major industries. Local or global, we create the workforce solutions you need, in various sectors like Overseas Human Resource Recruitment, Integrated Facility Management, Payroll & Manpower Outsourcing, and Non-Profit Organization. Raquib Mohammad Fakhrul Rocky, Managing Director of MUNSHI, has the vision to develop the company while helping society simultaneously. In his words, when our partners succeed, we succeed, by developing an understanding of our partner’s business to provide an efficient workforce on client’s premises.</h1>
                    <div className='py-5 flex'>
                        <Button color="amber" className='text-white py-3 flex justify-center items-center gap-3'><span>More Information</span><FaLongArrowAltRight /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;