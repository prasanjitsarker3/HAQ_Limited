import React from 'react';
import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContractSection from './FrontPage/ContractSection';

const Contract = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl primaryColor py-8'>Our Contract & Address Here</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-5 px-12'>
                <div className='text-center shadow-md  rounded-md p-3'>
                    <h1 className='text-xl font-serif py-2'>Contract Number</h1>
                    <div className='flex justify-evenly items-center py-2'>
                        <FaPhoneFlip className='w-10 h-10 text-light-blue-600' />
                        <div className='text-light-blue-600 text-left'>
                            <h1>+8812378978489</h1>
                            <h1>+8812378978489</h1>
                        </div>
                    </div>

                </div>
                <div className='text-center shadow-md  rounded-md p-3'>
                    <h1 className='text-xl font-serif py-2'>Email Address</h1>
                    <div className='flex justify-evenly items-center py-2'>
                        <FaEnvelope className='w-10 h-10 text-light-blue-600' />
                        <div className='text-light-blue-600 text-left'>
                            <h1>kholifa123@gmail.com</h1>
                            <h1>HAOLimited123@gmail.com</h1> 
                        </div>
                    </div>

                </div>
                <div className='text-center shadow-md  rounded-md p-3'>
                    <h1 className='text-xl font-serif py-2'>Company Location</h1>
                    <div className='flex justify-evenly items-center py-2'>
                        <FaMapMarkerAlt className='w-10 h-10 text-light-blue-600' />
                        <div className='text-light-blue-600 text-left'>
                            <h1>New Badda,Dhaka</h1>
                            <h1>Dhaka - Bangladesh</h1>
                        </div>
                    </div>

                </div>

            </div>

            <ContractSection></ContractSection>

        </div>
    );
};

export default Contract;