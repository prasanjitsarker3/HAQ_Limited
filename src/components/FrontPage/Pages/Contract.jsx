import React, { useState } from 'react';
import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelope, FaFacebookMessenger, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import ContractSection from './FrontPage/ContractSection';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
    IconButton,
} from '@material-tailwind/react';

const Contract = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl primaryColor py-8  font-serif'>Contract Us</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-5 px-24'>
                {/* <div className="group text-center rounded-md p-3 shadow-md transition duration-300 ease-in-out transform hover:bg-light-blue-200 hover:text-black hover:scale-105">
                    <h1 className="text-2xl font-serif py-2 group-hover:text-black">Contract Number</h1>
                    <div className="flex justify-evenly items-center py-2">
                        <FaPhoneFlip className="w-10 h-10 text-light-blue-600 group-hover:text-black" />
                        <div className="text-light-blue-600 text-left group-hover:text-black">
                            <h1>+8812378978489</h1>
                            <h1>+8812378978489</h1>
                        </div>
                    </div>
                </div>
                <div className="group text-center rounded-md p-3 shadow-md transition duration-300 ease-in-out transform hover:bg-light-blue-200 hover:scale-105">
                    <h1 className="text-2xl  py-2 group-hover:text-black">Email Address</h1>
                    <div className="flex justify-evenly items-center py-2">
                        <FaEnvelope className="w-10 h-10 text-light-blue-600 group-hover:text-black" />
                        <div className="text-light-blue-600 text-left group-hover:text-black">
                            <h1>kholifa123@gmail.com</h1>
                            <h1>HAOLimited123@gmail.com</h1>
                        </div>
                    </div>
                </div>
                <div className="group text-center rounded-md p-3 shadow-md transition duration-300 ease-in-out transform hover:bg-light-blue-200 hover:scale-105">
                    <h1 className="text-2xl font-serif py-2 group-hover:text-black">Company Location</h1>
                    <div className="flex justify-evenly items-center py-2">
                        <FaMapMarkerAlt className="w-10 h-10 text-light-blue-600 group-hover:text-black" />
                        <div className="text-light-blue-600 text-left group-hover:text-black">
                            <h1>New Badda, Dhaka</h1>
                            <h1>Dhaka - Bangladesh</h1>
                        </div>
                    </div>
                </div> */}

            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                <div className='flex space-y-2 flex-col items-center justify-center w-full md:w-[300px] mx-auto p-5 rounded shadow-sm border border-yellow-900 '>
                    <img className=' h-12 w-12' src="https://cdn-icons-png.flaticon.com/128/9303/9303167.png" alt="" />
                    <h1 className='text-xl font-semibold text-gray-800'>By Phone</h1>
                    <h1 className='text-md'>Monday To Friday, 9am to 6am</h1>
                    <h1 className=' text-lg font-semibold text-gray-800'>Dhaka, Bangladesh</h1>
                    <h1>+8801878675774</h1>
                    <h1 className='text-lg'>International</h1>
                    <h1>9878768467546</h1>
                </div>
                <div className='flex space-y-2 flex-col items-center justify-center w-full md:w-[300px] mx-auto p-5 rounded shadow-sm border border-yellow-900 '>
                    <img className=' h-12 w-12' src="https://cdn-icons-png.flaticon.com/128/11511/11511316.png" alt="" />
                    <h1 className='text-xl uppercase font-semibold text-gray-800'>Start New Case</h1>
                    <h1 className=' text-lg font-semibold text-gray-800'>Start a new case</h1>
                    <h1 className=' flex-1'>Just Send us your questions or concern by starting a new case and we will give you the help you need.</h1>
                    <Button onClick={handleOpen} color='blue' className='uppercase'>Start here</Button>
                    <Dialog open={open} handler={handleOpen}>
                        <div className="flex items-center justify-between">
                            <DialogHeader>New message to @</DialogHeader>
                            <IconButton onClick={handleOpen} variant="gradient" color='red' className="rounded-full mr-3">
                                <FaTimes/>
                            </IconButton>
                           
                        </div>
                        <DialogBody divider>
                            <div className="grid gap-6">
                                <Input label="Username" />
                                <Textarea label="Message" />
                            </div>
                        </DialogBody>
                        <DialogFooter className="space-x-2">
                            <Button variant="gradient" color="red" onClick={handleOpen}>
                                close
                            </Button>
                            <Button variant="gradient" color="blue" onClick={handleOpen}>
                                send message
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className='flex space-y-2 flex-col items-center justify-center w-full md:w-[300px] mx-auto p-5 rounded shadow-sm border border-yellow-900 '>
                    <img className=' h-12 w-12' src="https://cdn-icons-png.flaticon.com/128/4457/4457168.png" alt="" />
                    <h1 className='text-xl  uppercase font-semibold text-gray-800' >Live Chat</h1>
                    <h1 className=' text-lg flex-1 '>Chat with a member of our in-house team</h1>
                    <Button color='blue' className='uppercase mt-auto flex  justify-center gap-1'>Start chat <FaFacebookMessenger /> </Button>
                </div>
            </div>

            <ContractSection></ContractSection>

        </div>
    );
};

export default Contract;