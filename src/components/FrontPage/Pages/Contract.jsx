import React, { useContext, useEffect, useState } from 'react';
import { FaPaperPlane, FaPhoneFlip, FaSeedling } from "react-icons/fa6";
import { FaEnvelope, FaFacebookMessenger, FaMapMarkerAlt, FaRegCommentDots, FaTimes } from "react-icons/fa";
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
    Typography,
    Chip,
} from '@material-tailwind/react';
import Accordion from './AccordionSection';
import AccordionSection from './AccordionSection';
import CaseMessageFrom from '../../CustomBackendUploadAndPost/CaseMessageFrom';
import { useRef } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useChat from '../../UserCustomHook/useChat';

const Contract = () => {
    const [data, setData] = useState(null)
    const [chat, isLoading, refetch] = useChat()
    const { user } = useContext(AuthContext);
    const [size, setSize] = React.useState(null);
    const handleOpened = (value) => setSize(value);
    const message = useRef();
    const handlePostMessage = () => {
        const messageValue = message.current.value;
        const data = { chat: messageValue, email: user?.email }
        fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    useEffect(() => {
        if (!isLoading && chat) {
            const chatData = chat.map(item => item.chat);
            setData(chatData);
        }
    }, [chat])
    const [messages, setMessage] = useState(null);

    if (data) {
        setTimeout(() => {
            setMessage("Please,waiting Some Time !");
        }, 5000); 
    }
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
                    <CaseMessageFrom />

                </div>
                <div className='flex space-y-2 flex-col items-center justify-center w-full md:w-[300px] mx-auto p-5 rounded shadow-sm border border-yellow-900 '>
                    <img className=' h-12 w-12' src="https://cdn-icons-png.flaticon.com/128/4457/4457168.png" alt="" />
                    <h1 className='text-xl  uppercase font-semibold text-gray-800' >Live Chat</h1>
                    <h1 className=' text-lg flex-1 '>Chat with a member of our in-house team</h1>
                    <Button onClick={() => handleOpened("xs")} color='blue' className='uppercase mt-auto flex  justify-center gap-1'>Start chat <FaFacebookMessenger /> </Button>
                    <Dialog
                        open={
                            size === "xs"
                        }
                        size={size || "md"}
                        handler={handleOpened}
                    >
                        <div className=' flex justify-end'>
                            <IconButton onClick={() => handleOpened(null)} variant="gradient" color='white' className="rounded-full mr-3">
                                <FaTimes />
                            </IconButton>
                        </div>
                        <DialogBody>

                            <Typography className=' text-right text-blue-600'>Hello</Typography>
                            <Typography className=' text-right text-blue-600'>How can i help you?</Typography>
                            <Typography className='text-blue-600 text-left'>{data}</Typography>
                            <Typography className=' text-right text-blue-600'>{messages}</Typography>
                            <div className=" flex justify-start mr-5 mt-2">
                                <input className='border-white rounded p-1 bg-blue-gray-50' ref={message} placeholder="typing..." />
                                {
                                    user ? <FaRegCommentDots onClick={handlePostMessage} className="text-blue-600 mt-1  cursor-pointer w-6 h-6" /> :
                                        <Link to="/login">
                                            <Chip className='mt-1' value="Login" color='blue' />
                                        </Link>
                                }
                            </div>
                        </DialogBody>

                    </Dialog>
                </div>
            </div>

            <div className='flex flex-col md:flex-row  gap-12 px-16 py-12'>
                <div className='w-full md:w-1/2 '>
                    <AccordionSection />
                </div>
                <div className='w-full md:w-1/2 '>
                    <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.7471018198211!2d90.42534153979757!3d23.783427146331693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e8b1ec3971%3A0x4eeaac0820774865!2sMisal%20International!5e0!3m2!1sen!2sbd!4v1697215687910!5m2!1sen!2sbd"
                    ></iframe>
                </div>
            </div>

        </div>
    );
};

export default Contract;